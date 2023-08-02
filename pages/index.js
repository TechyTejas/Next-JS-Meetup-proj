import React from 'react'
import MeetupList from '@/components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Head from 'next/head'

const dummy_details=[{
    id:"m2",
    title:"Second MeetUp",
    image:"https://c.myholidays.com/blog/blog/content/images/2020/11/Places-To-Visit-In-India.jpg",
    address:"Mumbai",
    descriptions:"Gate way of India"
},
{
    id:"m3",
    title:"Third MeetUp",
    image:"https://ihplb.b-cdn.net/wp-content/uploads/2017/07/Pratapgarh-Fort-Near-Mahabaleshwar.jpg",
    address:"Pratapgadh",
    descriptions:"Pune Maharashtra"
},
{
    id:"m4",
    title:"Fourth MeetUp",
    image:"https://upload.wikimedia.org/wikipedia/commons/3/33/Daulatabad_Fort_a_view.JPG",
    address:"Daulatabad",
    descriptions:"Shambhaji Nagar Maharashtra"
},
{
    id:"m5",
    title:"Fifth MeetUp",
    image:"https://in.musafir.com/uploads/Rajgad_fb135a8d0c.png",
    address:"Raigad",
    descriptions:"Pune Maharashtra"
}]
function Home(props) {
  return (
    <React.Fragment>
    <Head>
        <title>React Meetups</title>
        <meta
        name = "description"
        content = "Browse a huge list of highly active React meetups"/>
    </Head>
    <MeetupList meetups={props.meetups}/>
    </React.Fragment>
  )
}

export async function getStaticProps(){
        //fetching data
        const client= await MongoClient.connect('mongodb+srv://tejassadade645:tejas2001@cluster0.5ypnjt7.mongodb.net/meetups?retryWrites=true&w=majority')
        const db=client.db()
    
         const meetupsCollection=db.collection('meetups')
    
         const meetups=await meetupsCollection.find().toArray()
    
         client.close()
    return{
        props:{
            meetups: meetups.map(meetup=>({
                image:meetup.image,
                title:meetup.title,
                address:meetup.address,
                description:meetup.description,
                id:meetup._id.toString()
              }))
            },
            revalidate:1
    }
}
export default Home