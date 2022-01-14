import { Form,Button } from "react-bootstrap"
const SignUp =()=>{
return(<>
<Form>
<Form.Group controlId="formBasicEmail">
    <Form.Label>First name</Form.Label>
    <Form.Control type="email" placeholder="" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Last name</Form.Label>
    <Form.Control type="email" placeholder="" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email </Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I agree to" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Start to chat
  </Button>
</Form></>)
}
export default SignUp