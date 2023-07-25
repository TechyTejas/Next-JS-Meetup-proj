import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import React from 'react'

function NewMeetUpPage() {
    function addMeetupHander (enteredMeetupData) {
        console.log(enteredMeetupData)
    }
  return (
    <NewMeetupForm onAddMeetup={addMeetupHander}/>    
  )
}

export default NewMeetUpPage