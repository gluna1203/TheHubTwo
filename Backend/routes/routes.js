const e = require('express');
const { MongoClient, ObjectId }= require('mongodb')

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'myData';
const db = client.db(dbName);
const collection = db.collection('Jokes');

exports.index = async (req, res) => {
    await client.connect();
    const findResult = await collection.find({}).toArray();
    console.log('Results found: ', findResult);
    client.close();
    res.render('index', {
        title: 'Joke List',
        joke: findResult
    })
};

exports.create = (req, res) =>{
    res.render('create', {
        title: 'Add Joke'
    });
};

exports.createJoke = async (req, res) => {
    await client.connect();
    let joke = {
        category: req.body.category,
        jokeString: req.body.jokeString,
        jokeAnswer: req.body.jokeAnswer,
        image: req.body.image
    };
    const insertResult = await collection.insertOne(joke);
    client.close();
    res.redirect('/');
};

exports.edit = async (req, res) => {
    await client.connect();
    const filteredDocs = await collection.find(ObjectId(req.params.id)).toArray();
    client.close();
    res.render('edit', {
        title: 'Edit Joke',
        joke: filteredDocs[0]
    });
};

exports.editJoke = async (req, res) => {
    await client.connect();
    const updateResult = await collection.updateOne(
        {_id: ObjectId(req.params.id)},
        {$set: {
            category: req.body.category,
            jokeString: req.body.jokeString,
            jokeAnswer: req.body.jokeAnswer,
            image: req.body.image
        }}
    );
    client.close();
    res.redirect('/');
};

exports.delete = async (req, res) => {
    await client.connect();
    const deleteResult = await collection.deleteOne({
        _id: ObjectId(req.params.id)
    });
    client.close();
    res.redirect('/')
};

exports.details = async (req, res) => {
    await client.connect();
    const filteredDocs = await collection.findOne({
        _id: ObjectId(req.params.id)
    });
    client.close();
    res.render('details', {
        title: `${filteredDocs.category}'s Details`,
        joke: filteredDocs
    });
};

const shuffleArr = myArr => {
    let a, b;
    for (let i = 0; i < myArr.length - 1; i++){
        rand = Math.floor(Math.random() * myArr.length);
        a = myArr[i];
        b = myArr[rand];
        myArr[i] = b;
        myArr[rand] = a;
    }
    return myArr;
};

exports.api = async (req, res) => {
    var tempArray = [];
    const limit = () => {
        if (req.query.number === undefined){
            return 5;
        } else {
            return req.query.number;
        }
    }
    await client.connect();
    const jsonArray = await collection.find({category: req.query.category}).toArray();
    shuffleArr(jsonArray);
        for (var i = 0; i < limit(); i++) {
            if(jsonArray[i].category = req.query.category){
                tempArray.push(jsonArray[i])
            }
        }
        res.json(tempArray);
        tempArray = [];
    client.close();
};