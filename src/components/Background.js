import React from 'react'

const imgStyle = {
    backgroundImage: `url("images/Background1.png")`,
    //  backgroundSize: 'auto',
    backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'
  };

function Background() {
  return (
    <div>
     
        <img style={imgStyle}></img>
    
    </div>
  )
}

export default Background