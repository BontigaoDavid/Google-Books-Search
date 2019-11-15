import React, { Component } from "react";
import API from "../utils/API";

class Saved extends Component {
    state = {

    }

    componentDidMount() {
        API.getSavedBooks()
    }

    render() {
        return (<div>search</div>)
    }
}

export default Saved;