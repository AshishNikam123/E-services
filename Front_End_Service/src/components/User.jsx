import React, { useEffect, useState } from "react";
import{Card,CardBody,CardSubtitle,CardText,Container,Button} from "reactstrap"
import axios from "axios";
import base_url from "../api/bootapi";


const User=({user,update})=>{

    const deleteCourse=(user_id)=>{
        axios.delete(`${base_url}/user/${user_id}`).then(
            (response)=>{
                  
                  console.log(response)
            },
            (error)=>{
                  console.log(error)
            }
        )
        }

    return(
        // <Card>
        //     <CardBody className="text-center">
        //       <CardSubtitle className="font-weight-bold">{user.user_firstName}</CardSubtitle>
        //       <CardText>{user.user_email}</CardText>
        //       <Container className="text-center">
        //           <Button color="danger" onClick={()=>{
        //             deleteCourse(user.user_id)
        //           }}>Delete</Button>{'  '}
        //           <Button color="warning ml-3">Update</Button>
        //       </Container>
        //     </CardBody>
        // </Card>


<Card>
            <CardBody className="text-center ">
            <CardSubtitle className="font-weight-bold">{user.user_id}</CardSubtitle>
                <CardSubtitle className="font-weight-bold">{user.user_firstName}</CardSubtitle>
                <CardSubtitle className="font-weight-bold">{user.user_lastName}</CardSubtitle>
                <CardSubtitle className="font-weight-bold">{user.user_email}</CardSubtitle>
                <CardSubtitle className="font-weight-bold">{user.user_mobno}</CardSubtitle>
                <CardText>{user.user_address}</CardText>
                <Container className="text-center">
                    <Button color="#e2e2e2"></Button>
                    <Button></Button>
                </Container>
            </CardBody>
            </Card>
    )

}

export default User;