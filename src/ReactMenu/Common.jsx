import React from "react";
import web from "../images/l.jpg";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6  pt-lg-0 order-2 order-lg-1 d-flex flex-column">

                                    <h1 >
                                        {props.name}
                                        <strong className="brand-name">  HeadStrong</strong></h1>
                                    <h2 className="my-3">We are the team of talented developers</h2>

                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn btn-get-started">{props.btname}</NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-2 order-lg-8 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="home" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;