import React from "react";
import weatherImage from "../utils/images/weather.jpg";
import counterImage from "../utils/images/counter.jpg";
import timerImage from "../utils/images/timer.jpg";
import ShowMeTheDate from "../components/ShowMeTheDate";
import { RootStateOrAny, connect } from "react-redux";
import { updateDate } from "../utils/actions";
import { Carousel, Container } from "react-bootstrap";
import "./homePage.css";

interface HomePageState {
    date: Date,
    path: string
}

interface Props extends HomePageState {
    global: HomePageState,
    updateDate: any,
    dispatch: any
}

class HomePage extends React.Component<Props> {

    tick() {
        this.props.dispatch(updateDate());
    };

    componentWillMount() {        
        this.tick();
    };

    componentDidMount() {
        setInterval(() => this.tick(), 100);
    };

    render()  {
        return(
            <Container style={{background: "#376dae", height: "calc(100vh - 56px)"}} fluid>
                <ShowMeTheDate date={this.props.global.date} />
                <Carousel style={{height: "70vh"}}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slideImage"
                            src={weatherImage}
                            alt="Weather Application Preview"
                        />
                        <Carousel.Caption>
                        <h3>Weather Application</h3>
                        <p>Application To Search And View Current Weather</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slideImage"
                            src={counterImage}
                            alt="Counter Application Preview"
                        />
                        <Carousel.Caption>
                        <h3>Weather Application</h3>
                        <p>Application To Search And View Current Weather</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 slideImage"
                            src={timerImage}
                            alt="Weather Application Preview"
                        />
                        <Carousel.Caption>
                        <h3>Weather Application</h3>
                        <p>Application To Search And View Current Weather</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    }
};

const mapStateToProps = (state: RootStateOrAny) => {
    return state;
};

const mapDispatchToProps = (dispatch: any):any => {
    return {
        dispatch,
        updateDate
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);