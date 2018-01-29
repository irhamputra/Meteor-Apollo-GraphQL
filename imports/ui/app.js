import React from "react";
import gql from "graphql-tag";
import {graphql} from "react-apollo";

const App = ({data}) => {
    return(
        <div>
            <h1>{data.hi} Welcome to React-Meteor-Apollo-GraphQL</h1>
        </div>
    )
};

const hiQuery = gql`
    {
      hi
    }
`;

export default graphql(
    hiQuery
)(App);