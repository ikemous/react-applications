import React from "react";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"

function FourOhFour() {
    return (
        <>
            <Helmet>
                <title>Reactications - 404</title>
                <meta
                    name="description"
                    content="Page to notify user that the page is not found"
                />   
            </Helmet>
            <Container style={{height: "calc(100vh - 56px)", background: "#376dae"}} fluid>
                <Row className="d-flex justify-content-center align-items-center" style={{height: "inherit"}}>
                    <div className="text-center">
                        <h2>This Page Cannot Be Found</h2>
                        <h2>Please Go <Link to="/">Home</Link></h2>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default FourOhFour;