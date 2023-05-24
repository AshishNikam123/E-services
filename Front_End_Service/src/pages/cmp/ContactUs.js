
import { Button, Container, Form, FormGroup, Input, FormText, Label } from "reactstrap";
const ContactUs = () => {


    return (
        <div className="py-3 container-fluid  background1">
            <h1 className=" text-center">Contact Us</h1>
            <div className="row">
                <div className="col-md-6 container">

                    <Form>


                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Enter your email id"
                                type="email"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleText">
                                FeedBack
                            </Label>
                            <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                            />
                        </FormGroup>
                        <div className="text-center py-3">

                            <Button >
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>

            </div>
        </div >


    )

}
export default ContactUs;