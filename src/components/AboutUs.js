import React from 'react'
import { Alert } from 'react-bootstrap';

const imgStyle = {
    backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '50vw',
          height: '50vh',
          opacity: '0.8'
  };

function AboutUs() {
  return (
    <div>
        <div className="container p-1 my-3 w-75 mt-5" >
        <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
             <p>
                By the way this application which you just used is developed by young new developers during thier
                internship period. So do encourage them and point out their mistakes!
            </p>
        <hr />
        <p className="mb-0">
        Best from Ashok, Madhu , Pradnya,Manasa
        </p>
        </Alert>
        </div>
        <img style={imgStyle} src="images/aboutUs.png"></img>
    </div>
  )
}

export default AboutUs