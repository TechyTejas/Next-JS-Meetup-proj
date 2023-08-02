import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails (props) {
    return (
        <MeetupDetail
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}/>
    )
}

export async function getStaticPaths ( ) {
    const client= await MongoClient.connect('mongodb+srv://tejassadade645:tejas2001@cluster0.5ypnjt7.mongodb.net/meetups?retryWrites=true&w=majority')
    const db=client.db()

     const meetupsCollection=db.collection('meetups')
     const meetups=await meetupsCollection.find({}, {_id: 1}).toArray();  // this mthod will only include the id but no other values

    //  client.close();
    
    return{
        fallback:false,
        paths : meetups.map((meetup) => ({ 
            params : { meetupid: meetup._id.toString() },
    })),
    };
}

export async function getStaticProps(context) {
    // Fetch the data for a single meetup
    const meetupid = context.params.meetupid; // Fix the typo here, change meetupid to meetupId

    const client= await MongoClient.connect('mongodb+srv://tejassadade645:tejas2001@cluster0.5ypnjt7.mongodb.net/meetups?retryWrites=true&w=majority')
    const db=client.db()

     const meetupsCollection=db.collection('meetups')  // this is fr accessing the collection
    
     const selectMeetup = await meetupsCollection.findOne({_id: new ObjectId(meetupid)});  // findOne finds one single dcc
     //ObjectId will covnert string into object id object
     
     client.close();
  
    return {
      props: {
        meetupData: {
            id : selectMeetup._id.toString(),
            title : selectMeetup.title,
            address : selectMeetup.address,
            image : selectMeetup.image,
            description : selectMeetup.description
        }
      },
    };
  }
  

export default MeetupDetails