import React from 'react'
import { Alert } from 'react-bootstrap';

const imgStyle = {
    backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '90vw',
          height: '60vh',
          opacity: '0.8',
          paddingright:'10vh'
  };

function AboutUs() {
  return (
    <div>
        <div className="container p-1 my-3 w-75 mt-5" >
        <Alert variant="info">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
             <p>
                By the way this application which you just used is developed by young new developers during thier
                company training period. So do encourage them and point out their mistakes!
            </p>
        <hr />
        <p className="mb-0">
        Best from Ashok,Madhu,Pradnya,Manasa.
        </p>
        </Alert>
        </div>
        <img style={imgStyle} src="https://media.istockphoto.com/photos/hearts-confetti-and-text-thank-you-expressing-gratitude-to-doctors-picture-id1248782364?k=20&m=1248782364&s=612x612&w=0&h=tvmAuwtAggq-opqWCGYSRPAXijkR1v4wvJHTlB-MZYg="></img>

      
    </div>
  )
}

export default AboutUs