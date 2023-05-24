import React, { Component } from "react";

import Base from "../components/Base";
const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)

const validation = ({ error, ...rest }) => {
    let checkValidation = false;

    Object.values(error).forEach(val => {
        if (val.length > 0) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    return checkValidation;
};
const change=()=>{
alert("Applied");
}

export default class SerchSer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            error: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    onFormSubmit = event => {
        event.preventDefault();

        if (validation(this.state)) {
            console.log(this.state)
        } else {
            console.log("Error occured");
        }
    };


    formObject = event => {

        event.preventDefault();

        const { name, value } = event.target;
        let error = { ...this.state.error };

        switch (name) {
            case "name":
                error.name = value.length < 5 ? "Name should be 5 characaters long" : "";
                break;
            case "email":
                error.email = regularExpression.test(value)
                    ? ""
                    : "Email is not valid";
                break;
            case "password":
                error.password =
                    value.length < 5 ? "Password should 5 characaters long" : "";
                break;
            default:
                break;
        }

        this.setState({
            error,
            [name]: value
        })
    };

    render() {

        const { error } = this.state;

        return (
          <Base>
          <div>
            <h2 className="App"> Apply for Services</h2>
          </div>
            <div className="container">
                <div className="card mt-5">
                    <form className="card-body" onSubmit={this.onFormSubmit}>
                       
                        <div className="form-group mb-3">
                            <label className="mb-2"><strong>Name</strong></label>
                            <input 
                               required
                               type="text" 
                               name="name"
                               onChange={this.formObject}
                               className={error.name.length > 0 ? "is-invalid form-control" : "form-control"}/>
                            
                                {error.name.length > 0 && (
                                <span className="invalid-feedback">{error.name}</span>
                                )}
                        </div>

                        <div className="form-group mb-3">
                            <label className="mb-2"><strong>Email</strong></label>
                            <input
                                required
                                type="email"
                                name="email"
                                className={error.email.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject}/>

                                {error.email.length > 0 && (
                                    <span className="invalid-feedback">{error.email}</span>
                                )}
                        </div>

                        <div className="form-group mb-3">
                            <label className="mb-2"><strong>Password</strong></label>
                            <input
                                required
                                type="password"
                                name="password"
                                className={error.password.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject}/>

                                {error.password.length > 0 && (
                                    <span className="invalid-feedback">{error.password}</span>
                                )}
                        </div>
                        <div class="custom-control custom-checkbox"
                        className="App">
    <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
    <label class="custom-control-label" for="defaultUnchecked">Blood Donation</label>
    <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
    <label class="custom-control-label" for="defaultUnchecked">Ambulance Provider</label>
    <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
    <label class="custom-control-label" for="defaultUnchecked">Mechanical Services</label>
</div>
                        <div className="form-group mb-3">
                            <label className="mb-2"><strong>Description and Certification</strong></label>
          

                                {/* onChange={this.formObject}
                                className={error.name.length > 0 ? "is-invalid form-control" : "form-control"}/>
                            
                                 {error.name.length > 0 && (
                                 <span className="invalid-feedback">{error.name}</span>
                                ) */}
                               
                                
                              
                        </div>
                        <div class="form-outline">
  <textarea class="form-control" id="textAreaExample3" rows="2"></textarea>
  <label class="form-label" for="textAreaExample3">Message</label>
</div>
                        <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01"/>
    {/* <label class="custom-file-label" for="inputGroupFile01">Upload Certification</label> */}
  </div>
</div>

                        <div className="d-grid mt-3">
                            <button type="submit" className="btn btn-block btn-primary" >Apply</button>
                        </div>
                    </form>
                </div>
            </div>
            </Base>
        );
    }
}