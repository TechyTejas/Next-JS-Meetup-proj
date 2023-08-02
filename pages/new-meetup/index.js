import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import React from 'react'
import Head from 'next/head'

function NewMeetUpPage() {
  // async  function addMeetupHander (enteredMeetupData) {
  //   console.log(enteredMeetupData+ "in index js")
  //       const response = await fetch ('/api/new-meetup',{
  //         method: 'POST',
  //         body: JSON.stringify(enteredMeetupData),
  //         headers: {
  //           "Content-Type" : 'application/json'
  //         }
  //       });

  //       const data = await response.json();
  //       console.log(data);
  //   }

  async  function addMeetupHander(eneteredMeetupdata){
    // console.log(eneteredMeetupdata)

    const response=await fetch('/api/new-meetup',{
        method:"POST",
        body:JSON.stringify(eneteredMeetupdata),
        headers:{
        'Content-Type':'application/json'
  }

    })
    const data =await response.json()
     
  }
  return (
    <React.Fragment>
    <Head>
        <title>Add a new meetup</title>
        <meta
        name = "description"
        content = "Add your own meetups and create amazing network oppertunities"/>
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHander}/>   
    </React.Fragment> 
  )
}

export default NewMeetUpPage