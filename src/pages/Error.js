import React from 'react';
// import foto from '../img/error.png';


class Error extends React.Component{

    render(){


return(

<div className="error">

    <img src={process.env.PUBLIC_URL + '/img/error.png'} alt="error"/>

    
    <h1>Oops, looks like the page is lost.</h1>
    <p>You don't know what you do.</p>
    <h3>Contact your brain and organiza your ideas!</h3>

</div>
);

    }
}


export default Error;