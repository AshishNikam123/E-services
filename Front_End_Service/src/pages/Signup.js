import Base from "../components/Base";
import { Button, Container, Form, FormGroup, Input,FormText ,Label} from "reactstrap";
import base_url from "../api/bootapi";
import React, { useEffect, useState } from "react";

import axios from "axios"

const Signup = () => {
    const [country, setCountry]= useState([]);
    const [countryid, setCountryid]=useState('');
    const [st, setSt]= useState([]);
    const [stateid, setStateid]= useState('');
    const [city, setCity]= useState([]);
     useEffect(() => {
         document.title = "Add Users"
     }, [])

     const [user, setUser] = useState({});

    const handleForm = (e) => {
        console.log(user);
        postDataserver(user)
        e.preventDefault();
    }

    const postDataserver = (data) => {
        axios.post(`${base_url}/users`, data).then(
            (response) => {
                console.log(response)
                console.log("success")
            },
            (error) => {
                console.log(error)
                console.log("error")
            }

        )
    }
    useEffect( ()=>{
        const getcountry= async()=>{
            const rescountry= await fetch("http://localhost/devopsdeveloper/country/");
            const rescon= await rescountry.json();
            setCountry(await rescon);
        }
        getcountry();
    },[]);

    const handlecountry=(event)=>{
        const getcountryid= event.target.value;
        setCountryid(getcountryid);
    }

    useEffect( ()=>{
    const getstate= async()=>{
        const resstate= await fetch(`http://localhost/devopsdeveloper/state/getstate/${countryid}`);
        const resst= await resstate.json();
        setSt(await resst);
    }
   getstate();
    },[countryid]);

    const handlestate=(event)=>{
       const getstateid= event.target.value;
       setStateid(getstateid);
   }

useEffect( ()=>{
   const getcity= async()=>{   
       const rescity= await fetch(`http://localhost/devopsdeveloper/city/getcity/${stateid}`);
       const rcity= await rescity.json();
       setCity(await rcity);
   }
getcity();
},[stateid]);

    return (

        <Base>
            <div className="container-fluid">

                <div className="row mt-4">
                    <div className="col-md-4 offset-md-4">
                        <div className="card">


                            <div className="card-body px-5">

                                <div className="container text-center">
                                    <img src="img/abc.png" className=" regimg" />

                                </div>

                                <h3 className="text-center my-3">Sign up here!!</h3>
                                <Form onSubmit={handleForm}>

                                    <div className="form-group">
                                        <label for="user_name">First Name</label> 
                                        <Input name="user_name" type="text"
                                            className="form-control" id="user_name" aria-describedby="emailHelp"
                                            placeholder="Enter here" onChange={(e) => {
                                                setUser({ ...user, user_firstName: e.target.value })
                                            }} />
                                    </div>
                                    <div className="form-group">
                                        <label for="user_lastName">Last Name</label> <Input name="user_lastName" type="text"
                                            className="form-control" id="lname" aria-describedby="emailHelp"
                                            placeholder="Enter here" onChange={(e) => {
                                                setUser({ ...user, user_lastName: e.target.value })
                                            }} />
                                    </div>

                                    <div className="form-group">
                                        <label for="email">User Email</label> <Input name="user_email" type="email"
                                            className="form-control" id="email" aria-describedby="emailHelp"
                                            placeholder="Enter here" onChange={(e) => {
                                                setUser({ ...user, user_email: e.target.value })
                                            }} />
                                    </div>

                                    <div className="form-group">
                                        <label for="password">User password</label> <Input name="user_password"
                                            type="password" className="form-control" id="password"
                                            aria-describedby="emailHelp" placeholder="Enter here" onChange={(e) => {
                                                setUser({ ...user, user_password: e.target.value })
                                            }} />
                                    </div>

                                    <div className="form-group">
                                        <label for="phone">User phone</label> <Input name="user_phone" type="number"
                                            className="form-control" id="phone" aria-describedby="emailHelp"
                                            placeholder="Enter here" onChange={(e) => {
                                                setUser({ ...user, user_mobno: e.target.value })
                                            }} />
                                    </div>
                                     </Form>
                                     <form className="row g-3">

               <div className="form-group">
                <label  className="form-label">Country </label>
                <select name="country" className="form-control p-2"  onChange={(e)=>handlecountry(e)} >
                  <option value="">--Select Country--</option>
                  {
                 country.map( (getcon, index)=>(
                  <option key={index} value={getcon.country_id}>{getcon.country_name } </option>
                 ))
                  }
                </select>
              </div>

              <div className="form-group">
                <label  className="form-label">State</label>
                <select className="form-select" name="state"  onChange={(e)=>handlestate(e)}>
                  <option value="">--Select State--</option>
                  {
                    st.map( (getst, index)=>(
                     <option key={index} value={getst.state_id}>{getst.state_name } </option>
                    )) 
                  }                  
                </select>
              </div>

              <div className="form-group">
                <label  className="form-label">City</label>
                <select className="form-select" name="city">
                  <option value="">--Select City--</option>
                  {
                      city.map( (gcity, index)=>(
                      <option key={index} value={gcity.city_id}> { gcity.city_name} </option>
                      ))
                  }                 
                </select>
              </div>
              
              {/* <div className="col-md-3">                
                <button type="button" className="btn btn-primary mt-4">Submit</button>
              </div>
             */}
            </form>
        
          </div>
                                  

                                    <div className="container text-center">

                                        <Button type="submit" className="btn btn-primary mt-4">Register</Button>
                                        <Button className="btn btn-primary mt-4">Reset</Button>

                                    </div>
                                    </div>
                          
                            </div>
                        </div>
                    </div>
         
        </Base>
    )
}
export default Signup;