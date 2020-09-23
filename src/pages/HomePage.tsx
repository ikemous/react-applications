import React from "react";
import ShowMeTheDate from "../components/ShowMeTheDate";
import { useSelector, useDispatch, RootStateOrAny, connect } from "react-redux";
import { updateDate, updatePath } from "../utils/actions";

type PageState = string;
type DateState = {
    time: Date
};


class HomePage extends React.Component<{},DateState> {

    render()  {
        return(
            <>
                <ShowMeTheDate {...this.props} />
            </>
        );
    }
};

const mapStateToProps = (state: RootStateOrAny) => {
    return state;
};

const mapDispatchToProps = (dispatch: any) => {
    return updateDate;
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);