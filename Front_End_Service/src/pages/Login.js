// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Form, Alert } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import Base from "../components/Base"
// import GoogleButton from "react-google-button";
// import { useUserAuth } from "../context/UserAuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   //const { logIn, googleSignIn } = useUserAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       //await logIn(email, password);
//       navigate("/home");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       //await googleSignIn();
//       navigate("/home");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <Base>
//     <div className="container-fluid">

// <div className="row mt-4">
//     <div className="col-md-4 offset-md-4">
//       <div className="card">
//       <div className="card-body px-5">

//       <div className="container text-center">
//     <img src="img/abc.png" className=" regimg" />

//                                 </div>
//         <h2 className="text-center my-3">User Login</h2>
//         {error && <Alert variant="danger">{error}</Alert>}
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Control
//               type="email"
//               placeholder="Email address"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>

//           <div className="d-grid gap-2">
//             <Button variant="primary" type="Submit">
//               Log In
//             </Button>
//           </div>
//         </Form>
//         <hr />
//         <div>
//           <GoogleButton
//             className="g-btn"
//             type="dark"
//             onClick={handleGoogleSignIn}
//           />
//         </div>
//         <Link to="/PhoneSignUp">
//           <div className="d-grid gap-2 mt-3">
//             <Button variant="success" type="Submit">
//               Sign in with Phone
//             </Button>
//           </div>
//         </Link>
//       </div>
//       <div className="p-4 box mt-3 text-center">
//         Don't have an account? <Link to="/signup">Sign up</Link>
//       </div>
//       </div>
//       </div>
//       </div>
//       </div>
//     </Base>
//   );
// };

// export default Login;


import React, { useState, useEffect } from 'react';
import '../context/Login.css';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { Form } from "react-bootstrap";
//import Logo from '../assets/img/Logo.png';
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

function LoginIn() {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [isError, setIsError] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isCheckTerms, setIsCheckTerms] = useState(false);
    const [inputElements, setInputElements] = useState({
        email: {
            validation: {
                required: true,
                isEmail: true,
            },
            valid: false,
            touched: false,
            invalidText: "Invalid Email",
        },
        password: {
            validation: {
                required: true,
                minLength: 1
            },
            valid: false,
            touched: false,
            invalidText: "Please enter password",
        },
    });
    const checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        if (rules.isEmail) {
            const pattern =
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    }
    useEffect(() => {
        let formIsValid = true;
        for (let inputIdentifier in inputElements) {
            formIsValid = inputElements[inputIdentifier].valid && formIsValid;
        }
        setIsFormValid(formIsValid)
    },[inputs])
    const { email, password } = inputs;
    async function handleChange  (e) {
        e.stopPropagation()
        setIsError(false)
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
        if (checkValidity(e.target.value, inputElements[e.target.name].validation)) {
             setInputElements({ ...inputElements, [e.target.name]: { ...inputElements[e.target.name], touched: true, valid: true } })
        }
        else {
             setInputElements({ ...inputElements, [e.target.name]: { ...inputElements[e.target.name], touched: true, valid: false } })
        }
        
    }
    const signIn = async (e) => {
        setIsError(false)
        e.preventDefault();
        const reqData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        };
        const url = process.env.REACT_APP_BASE_URL + "/user/loginuser";

        await fetch(url, reqData)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    localStorage.setItem('data1', JSON.stringify(data));
                    history('/')
                }
                else {
                    alert("Wrong ID/Password");
                    history('/')
                }
            }).catch((error) => {
                setIsError(true)
            })
    }
    return (
        <div className='login'>
            <Link to="/">
                {/* <HomeIcon className='login_homeIcon' /> */}
                {/* <img className='login_img' src={Logo} alt='logo' /> */}
            </Link>
            <div className='login_container'>
                <h1 style={{alignItems:"center", textAlign: "center"}}>
                    <span style={{marginRight:"4px"}}><FaUserAlt color={"#6474E5"}/></span>
                    User Sign-in</h1>
                <form>
                    {/* <h5>Email</h5>
                    <input type='text' name="email" value={email} onChange={handleChange} />
                    <h5>Password</h5>
                    <input type='password' name="password" value={password} onChange={handleChange} /><br /> */}
                    <Form.Group className="mb-" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={email}
                            onChange={(e) => handleChange(e)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        {(!inputElements.email.valid && inputElements.email.touched) && <div style={{ color: "red" }}> {inputElements.email.invalidText}</div>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" name="password" value={password}
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="By signing in you will agree all the terms & condition by Property Rental System" onChange={() => setIsCheckTerms(!isCheckTerms)} />
                    </Form.Group>
                    {isError &&
                        <Form.Text style={{ color: 'red' }}>
                            Incorrect Email and Password
                        </Form.Text>
                    }
                    <button disabled={!(isFormValid && isCheckTerms)} className={(isFormValid && isCheckTerms) ? 'innerbutton' : "inactivebtn"} type="submit" onClick={(e) => signIn(e)}>Sign In</button><br />

                </form><br />
                {/* <Link to="/forgetpass"><p style={{ textAlign: 'center' }}>Forget Password</p></Link> */}

                <Link to="/register" ><button className='innerbutton'> Create Account</button></Link>
                <Link to="/ownerlogin" ><button className='innerbutton mt-3'> Owner Login</button></Link>
                <Link to="/adminlogin" ><button className='innerbutton mt-3'> Admin Login</button></Link>
            </div>
        </div>

    )

}
export default LoginIn;
