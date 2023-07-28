import MeetupDetail from "@/components/meetups/MeetupDetail";
 

function MeetupDetails () {
    return (
        <MeetupDetail
        title="First MeetUp"
        image="https://content.skyscnr.com/m/19c1f54952cdf28a/original/GettyImages-532519763.jpg?resize=800px:600px&quality=100"
        address="Agra"
        description="Taj Mahal"/>
    )
}

export async function getStaticPaths ( ) {
    return{
        fallback:false,
        paths:[
            {
                params:{
                    meetupid:'m1'
                },
            },
            {
                params:{
                    meetupid:'m2'
                }
            }    
        ]
    }
}

export  async function getStaticProps (context) {
    
    const meeetupid=context.params.meetupid;
    
    return {
        props:{
        mmetupData:{
            id:'meetupid',
            title:"First MeetUp",
        image:"https://content.skyscnr.com/m/19c1f54952cdf28a/original/GettyImages-532519763.jpg?resize=800px:600px&quality=100",
        address:"Agra",
        description:"Taj Mahal"
        }
    }
}

}

export default MeetupDetails