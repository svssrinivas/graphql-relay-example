import React from 'react';
import {  QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import './App.css';
import environment from "../relay/environment";

function Root() {

  return (
    <QueryRenderer
      query={graphql`
        query RootUserQuery{ 
          user(login: "svssrinivas"){
            name
            login
          }
        }
      `}
      environment={environment}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return <div>{JSON.stringify(props)}</div>;
      }}
    />
  )
}

export default Root;
