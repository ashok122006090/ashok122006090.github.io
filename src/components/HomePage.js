import React from 'react'
import { Alert } from 'react-bootstrap';

const imgStyle = {
    backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '90vw',
          height: '60vh',
          opacity: '0.8'
  };

function HomePage() {
  return (
    <div>
        <div className="container p-1 my-3 w-75 mt-5" >
        <Alert variant="success">
            <Alert.Heading>Welcome to Smart Covid Clinic , where convenience meets care.</Alert.Heading>
             <p>
            We re here to make healthcare better by making it easier for you to find, book and manage all your healthcare online. All in one place. Anytime.

   Smart Covid Clinic. lets you take control of your health, allowing you to 
            </p>
        <hr />
        <p className="mb-0">
        Please follow the Instructions
       <div>step1: register your details in Signup option</div> 
       <div> step2:next click on Book appointment and sign in</div>
       step3: after booking appointment,you can check appointment details
       
        
        </p>
        </Alert>
        </div>
        
       </div>
  )
}

export default HomePage;