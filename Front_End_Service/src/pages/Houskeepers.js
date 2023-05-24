import React, { useEffect, useState } from "react";
import{Card,CardBody,CardSubtitle,CardText,Container,Button} from "reactstrap"
import axios from "axios";


import base_url from "../api/bootapi";
import Base from "../components/Base";
import User from "../components/User";

const Housekeepers =()=>{

    useEffect(()=>{
        document.title="All HouseKeepers"
    },[])

    const getAllUsers=()=>{
        axios.get(`${base_url}/user`).then(
            (response)=>{
                console.log(response.data)
                setUsers(response.data)
            },
            (error)=>{
                console.log(error)
            }
        )
    }

    useEffect(()=>{
        getAllUsers();
    },[])

      const[users,setUsers]=useState([

      ])
      const updateUser=(user_id)=>{
        setUsers(users.filter((u)=>u.user_id != user_id))
      }

    return (
        <Base>
        { <Card>
            <CardBody className="text-center ">
            <CardSubtitle className="font-weight-bold">{users.user_id}</CardSubtitle>
                <CardSubtitle className="font-weight-bold">{users.user_firstName}</CardSubtitle>
                <CardSubtitle className="font-weight-bold">{users.user_lastName}</CardSubtitle>
                <CardSubtitle className="font-weight-bold">{users.user_email}</CardSubtitle>
                <CardSubtitle className="font-weight-bold">{users.user_mobno}</CardSubtitle>
                <CardText>{users.user_address}</CardText>
                <Container className="text-center">
                    <Button color="#e2e2e2"></Button>
                    <Button></Button>
                </Container>
            </CardBody>
            {

            users.length>0 ?users.map((users)=>(
                <User key={users.user_id} user={users} update={updateUser} />
            )):"No Users"
            }
    </Card> 
        
}
        </Base>
        )
    
    }

export default Housekeepers;