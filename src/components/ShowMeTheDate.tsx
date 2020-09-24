import React from "react";

interface DateProps {
    date: Date
};

class ShowMeTheDate extends React.Component<DateProps> {

    render(){
        return(
            <>
                {this.props.date?<p>{this.props.date.toDateString()} - {this.props.date.toLocaleTimeString()}</p>:<p>No Date Rendered</p>}
            </>
        );
    };
};

export default ShowMeTheDate;