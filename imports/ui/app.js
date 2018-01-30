import React from "react";
import gql from "graphql-tag";
import {graphql} from "react-apollo";

const App = ({data}) => {
    if(data.loading) return null;
    return (
        <div className="container">
            <h1>{data.hi}</h1>
            <h3>Welcome to Meteor-Apollo GraphQL</h3>
            <ul>
                {data.resolutions.map(resolution => (
                    <li key={resolution._id}>{resolution.name}</li>
                ))}
            </ul>
        </div>
    )
};

const hiQuery = gql`
    {
        hi
        resolutions {
            _id
            name
        }
    }
`;

export default graphql(
    hiQuery
)(App);