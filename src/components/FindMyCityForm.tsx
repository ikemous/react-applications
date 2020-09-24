import React from "react";
import { Form, Button } from "react-bootstrap";
import { updateWeatherSearch } from "../utils/actions"
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import "./findMyCityForm.css";

interface FindCityForm {
    searchCity: any
}

function FindMyCityForm({searchCity}: FindCityForm) {
    const search = useSelector((state: RootStateOrAny) => state.search);
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
                />
                <Button className="weatherSearchButton" onClick={searchCity}>Search</Button>
            </Form.Group>
        </Form>
    );
};

export default FindMyCityForm;