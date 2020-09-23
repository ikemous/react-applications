import React from "react";

type PageState = string;
type DateState = {
    time: Date
};

class HomePage extends React.Component<{},DateState> {

    tick() {
        this.setState({
            time: new Date()
        });
    };

    componentWillMount() {
        this.tick();
    };

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    };

    render()
    {
        return(
            <p>Current Date and Time {this.state.time.toLocaleTimeString()}</p>
        );
    }
};

export default HomePage;