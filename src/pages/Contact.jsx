//importing react and react-bootstrap
import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';

//contact function that renders the form and the contact information
export default function Contact() {

  //useState hook to set the state of the form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //function that validates the email address 
    const isEmailValid= (email) => {
        const regex =/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        return regex.test(email);
        };

        //function that handles the mouse over event
    const handleMouseOver = (event) => {
        switch (event.target.name)  {
            case 'name':
                setErrorName(name === '' ? 'Name is required' : '');
                break;
            case 'email':
                setErrorEmail(isEmailValid(email) ? '' : 'Email is invalid');
                break;
            case 'message':
                setErrorMessage(message === '' ? 'Message is required' : '');
                break;  
            default:
                break;
        }
    }
//  function that handles the submit event  
    const handleSubmit = (event) => {
        event.preventDefault();

        setErrorName(name === '' ? 'Name is required' : '');
        setErrorEmail(isEmailValid(email) ? '' : 'Email is invalid');
        setErrorMessage(message === '' ? 'Message is required' : '');

        if (name !== '' && isEmailValid(email) && message !== '') {
            alert('Form submitted');
        }
    }
//return statement that renders the form and the contact information
    return (
        <>
        <br></br>
        <h1 style= {{color: "#3E4851"}}>Contact Me</h1>
        <br></br>
        <br></br>
         <form onSubmit={handleSubmit}>
           <label>
             <input
               type="text"
               name="name"
               placeholder="Enter your name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               onBlur={handleMouseOver}
             />
             {errorName && <p>{errorName}</p>}
           </label>
           <br></br>
           <br></br>
           <label>
             <input
               type="text"
               name="email"
               placeholder="Enter your email address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               onBlur={handleMouseOver}
             />
             {errorEmail && <p>{errorEmail}</p>}
           </label>
           <br></br>
           <br></br>
           <label>
             <textarea
               name="message"
                placeholder="Enter your message"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               onBlur={handleMouseOver}
             />
             {errorMessage && <p>{errorMessage}</p>}
           </label>
           <br></br>
           <br></br>
           <input type="submit" value="Submit" />
         </form>
         <br></br>
         <h3 style= {{color: "#3E4851"}}>Phone Number: 858-414-2669</h3>
         <h3 style= {{color: "#3E4851"}}>Email Address: 1chelsea.fischer1@gmail.com </h3>
       </>
    )
}
