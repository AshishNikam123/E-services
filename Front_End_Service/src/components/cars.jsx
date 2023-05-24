import { NavLink as ReactLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Cards = () => {

    return (

        <section id="service_sec" className="py-3 text-center sec_two">
       <h1 className="md-3">Some of our Services</h1>
        <div className="container-fluid py-0">
           <div className="row mt-3 md-3">
                <div className="col-md-4">
                    <div className="card text-center ">
                        <div className="card-body admin">
                            <Link to="/Blood">
                            <div>
                                <img src="https://th.bing.com/th/id/OIP.tlF_DrWwc6JPFBFj6pHLwAAAAA?pid=ImgDet&rs=1"
                                    className="service_icon" />
                            </div>
                            </Link>
                            <h3 className="card-title">Providing donor Details</h3>
                            <p>Life is precious so we are available.</p>
                        </div>
                       
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center ">
                        <div className="card-body admin">
                            <div>
                                <Link to="/Ambulance">
                            <div>
                                <img src="https://th.bing.com/th/id/R.035bed723e8e880db61f11bc0969af17?rik=gYd9j76xm3kCCg&riu=http%3a%2f%2fcliparts.co%2fcliparts%2fpT5%2f8xG%2fpT58xGoec.png&ehk=%2fkEADntGZC6gNdvg%2b1887X3AqWNKZ1Kx5WWCxLssvg4%3d&risl=&pid=ImgRaw&r=0"
                                    className="service_icon" />
                            </div>
                            </Link>
                            <h3 className="card-title">Providing Ambulance Details</h3>
                            <p>Time is less and we are best</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center ">
                        <div className="card-body admin">
                            <div>
                                <Link to="/Mechanical">
                            <div>
                                <img src="https://media.istockphoto.com/photos/industrial-worker-with-wrench-and-gears-conceptual-illustration-picture-id153003536?k=20&m=153003536&s=612x612&w=0&h=pnfJUjn9-73Zdz2jEe1FI0r-r9f-JxZwAY6F9GX4Sv4="
                                    className="service_icon" />
                            </div>
                            </Link>
                            <h3 className="card-title">Providing Mechanical Details</h3>
                            <p> We mech— WE MOVE THE WORLD. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </section>

    )

}

export default Cards;