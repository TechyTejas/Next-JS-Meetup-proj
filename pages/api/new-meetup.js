import {MongoClient} from 'mongodb';

async function handler (req,res){
  
try{
  if(req.method == 'POST'){
    const data = req.body;
    console.log(req.body+"we are in req body")
  const client=await MongoClient.connect('mongodb+srv://tejassadade645:tejas2001@cluster0.5ypnjt7.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db();

  const meetupsCollection = db.collection('meetups')
  const result = await meetupsCollection.insertOne(data)
  console.log(result)
  client.close();   

  res.status(201).json({message : 'Meetup inserted!'});
  }}catch(error){
    console.log(error)
  }
}
export default handler;
