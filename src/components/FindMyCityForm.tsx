import React from "react";
import { Form, Button } from "react-bootstrap";
import { updateWeatherSearch } from "../utils/actions"
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import "./findMyCityForm.css";

interface FindCityForm {
    searchCity: any
}

function FindMyCityForm({ searchCity }: FindCityForm) {

    const { search, error } = useSelector((state: RootStateOrAny) => state.weatherState);
    const dispatch = useDispatch();

    return (
        <Form onSubmit={searchCity}>
            <Form.Group  className="searchForm">
                <Form.Label htmlFor="cityInput">Search Your City</Form.Label>
                <Form.Control 
                    className="text-center"
                    value={search}
                    onChange={(event) => dispatch(updateWeatherSearch(event.target.value)) } 
                    id="cityInput" 
                    type="text"
                    isInvalid={error}
                />
                <Form.Control.Feedback type="invalid">
                    City Wasn't Found Or Typed Incorrectly
                </Form.Control.Feedback>
                <Button className="weatherSearchButton" onClick={searchCity}>Search</Button>
            </Form.Group>
        </Form>
    );
};

export default FindMyCityForm;