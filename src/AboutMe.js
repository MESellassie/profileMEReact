import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import Sidebar from "./Sidebar";
import Footer from "./Footer";


function AboutMe(props) {

    return (
        <div>
            <Navbar />
            <Container>
                <Jumbotron>
                    <Row>
                        <Sidebar />
                        <div className="col-sm-10 shadow" id="aboutMe">
                            <br />
                            <div className="contentContainer1">
                                <h1 className="display-4">About ME</h1>
                                <p id="tagline">DEDICATION | TO GET THE JOB DONE</p>
                                <hr className="my-4"></hr>
                                <img src="https://github.com/MESellassie/profileMEReact/blob/master/public/assets/MEvans-headshot-bw.jpg?raw=true" alt="my-biobw-img" className="bio-bw-image image-fluid" />
                                <img src="https://github.com/MESellassie/profileMEReact/blob/master/public/assets/MEvans-headshot.jpg?raw=true" alt="my-bio-img" className="bio-image image-fluid" />
                                <p className="lead">
                                    I am a burgeoning web developer with over five years web management experience
                                    with front-end Content Management Systems including WordPress and Kentico, Graphic Design
                                    capability with a bold artistic vision, and over six years of Marketing and Communications
                                    experience. I am currently pursuing certification for front-end and back-end web development
                                    through Georgia Tech's Coding Bootcamp to expand my full-stack understanding and to obtain
                                    the skills I'll need to pass this knowledge on to the next generation.
                </p>
                                <p className="lead">
                                    Education is the primary tool for social mobility in our country. Yet, those
                                    most in need of social mobility are often left on the fringes of quality educational
                                    attainment due in large part to outdated systems and a severe lack of exposure to
                                    life-transforming fields like coding. My long-term goal is to bring coding to students from
                                    underserved communities and provide them the bridge necessary to enter this promising field.
                </p>
                                <p className="lead">
                                    Currently, I work with the Southern Education Foundation as a Digital Marketing
                                    and Communications professional to design and promote academic projects that promote education
                                    equity in the South across multiple digital platforms.
                </p>
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

export default AboutMe;