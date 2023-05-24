import { useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink as ReactLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap"



const Navbarc = () => {

    const [isOpen, setIsOpen] = useState(false)


    return (

        <>
            <div className="container-fluid p-0 ">

                <Navbar className="container-fluid"
                    color="dark"
                    dark
                    expand="lg"
                    fixed=""
                >
                    <NavbarBrand className="logos container" tag={ReactLink} to="/">
                       E-Services
                    </NavbarBrand>
                    <div className="container text-center col-md-4 mt-1 mb-1" size="50">
                                <form class="header-form-search" action="">
                                      <div className="col-12-12">
                                        <div>

                                <input 
                                    type="search" className="form-control" placeholder="Search  Service Type"
                                />
                                        </div>

                                      </div>
                                </form>
                            </div>
                                <Button onClick="submit" className="btn p-1 ms-2 mt-1">Search</Button>
                    <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                    <Collapse isOpen={isOpen} navbar className="container text-center">
                        <Nav
                            className="logos text-center"
                            navbar
                        >
                            <NavItem >
                                <NavLink tag={ReactLink} to="/login">
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={ReactLink} to="/signup">
                                    Signup
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown
                                inNavbar
                                nav
                            >
                                <DropdownToggle
                                    caret
                                    nav
                                 >
                                    More
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem tag={ReactLink} to="/SearchSer">
                                        Apply For Services
                                    </DropdownItem>
                                    <DropdownItem tag={ReactLink} to="/Admin">
                                        Contact Us
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem tag={ReactLink} to="/housekeeper">
                                        Links
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink tag={ReactLink} to="/About">
                                    About 
                                </NavLink>
                            </NavItem>

                        </Nav>
                         
                    </Collapse>

                </Navbar>
            </div>
        </>
    )

}

export default Navbarc;