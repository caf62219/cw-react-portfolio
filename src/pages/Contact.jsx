import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Contact() {
    return (
        <div>
          <Form.Label htmlFor="basic-url">Name</Form.Label>
            <InputGroup className="mb-3">
            <Form.Control
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
             />
            </InputGroup>

         <Form.Label htmlFor="basic-url">Email</Form.Label>
            <InputGroup className="mb-3">
            <Form.Control
                placeholder="Email Address"
                aria-label="Email-Address"
                aria-describedby="basic-addon2"
            />
            </InputGroup>

        <Form.Label htmlFor="basic-url">Message</Form.Label>
            <InputGroup className="mb-3">
            <Form.Control 
                aria-label="message"
                 placeholder="Message"
                 aria-describedby="basic-addon3"
                 />
            </InputGroup>
       <Button type="submit">Submit form</Button>
        </div>
    )
}
