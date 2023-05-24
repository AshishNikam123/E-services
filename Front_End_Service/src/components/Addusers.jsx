import axios from "axios";
import { useEffect, useState } from "react";
import base_url from "../api/bootapi";


const Addusers = ()=>{
    
         useEffect(()=>{
            document.title="Add Users"
         },[])

         const[user,setUser]=useState({});

         const handleForm=(e)=>{
            console.log(user);
            postDataserver(user)
            e.preventDefault();
         }

         const postDataserver =(data)=>{
            axios.post(`${base_url}/User`,data).then(
             (response)=>{
                console.log(response)
                console.log("success")
             },
             (error)=>{
                console.log(error)
                console.log("error")
             }

            )
         }

}
export default Addusers;


