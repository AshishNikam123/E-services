import React ,{useState,useEffect} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import Base from "../components/Base";

function Ambulance(){
    const[userList,setUserList]=useState([]);
    const columns=[
        {dataField:'userName',text:'Provider Name'},
        {dataField:'service_Info.servicename',text:'Ambulance Type',sort:true},
        {dataField:'location',text:'Location',sort:true,filter:textFilter()},
        {dataField:'mbNo',text:'Contact'},

    ]
    const pagination=paginationFactory({
        page:1,
        sizePerPage:5,
        lastPageText:'>>',
        firstPageText:'<<',
        nextPageText:'>',
        prePageText:'<',
        showTotal:true,
        alwaysShowAllBtns:true,
        onPageChange: function(page,sizePerPage){
            console.log('page',page);
            console.log('sizePerPage',sizePerPage);
        },
        onSizePerPageChange:function(page,sizePerPage){
            console.log('page',page);
            console.log('sizePerPage',sizePerPage);
        }
    });
    useEffect(()=>{
        fetch('http://localhost:9090/admin/display')
        .then(response=>response.json())
        .then(result=>setUserList(result))
        .catch(error=>console.log(error));
    },[])
    return <div > 
        <Base>
        <div><h1> Ambulance Provider Near You...</h1>
        </div>
   <BootstrapTable 
   bootstrap4 
   keyField="service_Info.servicename" 
   columns={columns} 
   data={userList}
   pagination={pagination}
   filter={filterFactory()}
   />
        {/* <table>
          <tr>
             <th>Donor Name</th>
             <th>Blood Group</th>
             <th>Location </th>
             <th>Mobile Number</th>
            </tr>
     { 
        userList && userList.length>0?
        userList.map(usr=>
            <tr key={usr.service_Info.servicename}>{usr.userName}
                <td >{usr.service_Info.servicename}</td>
                <td >{usr.location}</td>
                <td >{usr.mbNo}</td>

            </tr>
        ) 
        :'loading'
     }
        </table> */}
      
         </Base>
        
       </div>
     
}
export default Ambulance;
