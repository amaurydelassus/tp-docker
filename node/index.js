const express = require('express');
const admin = require('firebase-admin');
const returnData = require('./dockerfirebase-81854-firebase-adminsdk-dy5g4-f5df278a77.json');
const app = express();
const port = 8081
let donne = [];

app.get('/hello', (req, res) => {
  res.json(donne);
})

app.get('/test', (req, res) => {
  res.json(returnData);
})

admin.initializeApp({
  credential: admin.credential.cert(returnData)
});

const db = admin.firestore();

async function quickstartAddData(db) {
  // [START add_lovelace]
  // [START firestore_setup_dataset_pt1]
   snapshot = await db.collection('docker1').get();
   snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
   donne.push(doc.data()); // 4 space indentations
   console.log(doc)
});

}

quickstartAddData(db)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
