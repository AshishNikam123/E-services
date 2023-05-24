
import React,{useState,useEffect} from "react";
import Base from "../components/Base";
import { Container } from "react-bootstrap";

function DataList(){
const [category,setCategory]=useState([]);
useEffect(()=>{
const getcategory=async ()=>{
    const res=fetch('http://localhost:9090/admin/display');
    const getdata=await (await res).json();
    setCategory(getdata);
    console.log(getdata);
}
getcategory();
},[]);
    return(
              <Base>
       
                <React.Fragment>
        <Container>
      
       
        <div className="row">
        <div className="col-sm-8 text-success">
        <h5 className="p-3 fw-bold text-red">
        Blood Donors Available Near You...
        </h5>
        <table className="table table-bordered text-black">
            <thead>
            <tr>
             <th>Donor Name</th>
             <th>Blood Group</th>
             <th>Location </th>
             <th>Mobile Number</th>
            </tr>
            </thead>
            <tbody>
        {
            category.map((getcate)=>(
                <tr key={getcate.service_Info.servicename}>{getcate.userName}
                <td >{getcate.service_Info.servicename}</td>
                <td >{getcate.location}</td>
                <td >{getcate.mbNo}</td>
                </tr>
           

            )

            )
        }
        </tbody>
        </table>
        </div>
        </div>
       
        
        
        </Container>
        </React.Fragment>
    
        );
        </Base>
   

    )}
export default DataList;