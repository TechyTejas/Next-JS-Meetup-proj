import React from 'react'
import MeetupList from '@/components/meetups/MeetupList'

const dummy_details=[{
    id:"m1",
    title:"First MeetUp",
    image:"https://content.skyscnr.com/m/19c1f54952cdf28a/original/GettyImages-532519763.jpg?resize=800px:600px&quality=100",
    address:"Agra",
    descriptions:"Taj Mahal"
},
{
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
    address:"Prtapgadh",
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
    <MeetupList meetups={props.meetups}/>
  )
}

// export async function getServerSideProps(context){
//     const req=context.req;
//     const res=context.res;
       
//     return{
//         props:{
//             meetups : dummy_details
//         }
//     }
// }
export async function getStaticProps(){
       
    return{
        props:{
            meetups : dummy_details},
            revalidate:1
    }
}
export default Home