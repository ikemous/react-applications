import React from "react";

interface DateProps {
    date: Date
};

class ShowMeTheDate extends React.Component<DateProps> {

    render(){
        return(
            <h2 className="text-center">
                {this.props.date?`${this.props.date.toDateString()} - ${this.props.date.toLocaleTimeString()}`:"No Date Rendered"}
            </h2>
        );
    };
};

export default ShowMeTheDate;