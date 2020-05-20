import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import Sidebar from "./Sidebar";
import Footer from "./Footer";


function Portfolio(props) {
    return (
        <div>
            <Navbar />
            <Container>
                <Jumbotron>
                    <Row>
                        <Sidebar />
                        <div className="contentContainer2 col-sm-10" id="portfolio">
                            <h1 className="display-4">Portfolio</h1>
                            <p id="tagline">VISION | TO SEE WHAT CAN BE</p>
                            <hr className="my-4"></hr>
                            <div className="card-deck">
                                <div className="card bg-dark text-white">
                                    <a href="https://mjp1986.github.io/projectone/" id="custom-card">
                                        <img className="card-img" src="https://github.com/MESellassie/profileMEReact/blob/master/profilemereact/public/assets/final-screen-capture.jpg?raw=true" alt="Farm 2 Tablet" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">Farm 2 Table</h5>
                                            <h6>A food and alcoholic beverage pairing app.</h6>
                                        </div>
                                    </a>
                                </div>

                                <div className="card bg-dark text-white">
                                    <a href="https://mesellassie.github.io/planner.github.io/" id="custom-card">
                                        <img className="card-img" src="https://github.com/MESellassie/profileMEReact/blob/master/profilemereact/public/assets/laptop-1805315_640.jpg?raw=true" alt="Laptop BandW" />
                                        <div className="card-img-overlay">
                                            <h5 class="card-title">Work Day Scheduler</h5>
                                            <h6>A work day planner for normal business hours.</h6>
                                        </div>
                                    </a>
                                </div>

                                <div className="card bg-dark text-white">
                                    <a href="https://mesellassie.github.io/weatherdashboard/" id="custom-card">
                                        <img class="card-img" src="https://github.com/MESellassie/profileMEReact/blob/master/profilemereact/public/assets/rain-791893_640.jpg?raw=true" alt="GA Gov Comparison" />
                                        <div className="card-img-overlay">
                                            <h5 class="card-title">Weather Dashboard</h5>
                                            <h6>An app that generates local weather conditions.</h6>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <br/>
                            <div className="card-deck">
                                <div className="card bg-dark text-white">
                                    <a href="https://thisistheway.herokuapp.com/" id="custom-card">
                                        <img className="card-img" src="https://github.com/MESellassie/profileMEReact/blob/master/profilemereact/public/assets/northernLights.jpg?raw=true" alt="Northern Lights" />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">MAJI</h5>
                                            <h6>A job search tool centered on tech jobs in Atlanta.</h6>
                                        </div>
                                    </a>
                                </div>

                                <div className="card bg-dark text-white">
                                    <a href="https://googlethatbooksearch.herokuapp.com/" id="custom-card">
                                        <img className="card-img" src="https://github.com/MESellassie/profileMEReact/blob/master/profilemereact/public/assets/boyReading.jpg?raw=true" alt="boyInLibrary" />
                                        <div className="card-img-overlay">
                                            <h5 class="card-title">Google Book Search</h5>
                                            <h6>A book search app using GoogleBook API.</h6>
                                        </div>
                                    </a>
                                </div>

                                <div className="card bg-dark text-white">
                                    <a href="https://marvelherodirectory.herokuapp.com/" id="custom-card">
                                        <img class="card-img" src="" alt="Marvel Homescreen" />
                                        <div className="card-img-overlay">
                                            <h5 class="card-title">Hero Employee Directory</h5>
                                            <h6>A fun take on an employee directory app.</h6>
                                        </div>
                                    </a>
                                </div>

                            </div>

                            {props.children}
                        </div>
                    </Row>
                </Jumbotron>
            </Container>
            <Footer/>

        </div>
    );
}

export default Portfolio;