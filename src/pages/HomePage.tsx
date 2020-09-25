import React from "react";
import ShowMeTheDate from "../components/ShowMeTheDate";
import { RootStateOrAny, connect } from "react-redux";
import { updateDate } from "../utils/actions";
import { Carousel, Container } from "react-bootstrap";

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
            <Container fluid>
                <ShowMeTheDate date={this.props.global.date} />
                <Carousel style={{maxHeight: "50vh"}}>
                    <Carousel.Item style={{height: "inherit"}}>
                        <img
                        style={{maxHeight: "50vh"}}
                            className="d-block w-100"
                            src="https://via.placeholder.com/200"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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