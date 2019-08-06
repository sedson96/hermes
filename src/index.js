import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import App from './App'; 
import * as serviceWorker from './serviceWorker';
import {ApolloProvider} from "react-apollo"
require("dotenv").config();

const {API_KEY, API_HOST} = process.env


const restLink = new RestLink({
    uri: "https://apidojo-adidas-v1.p.rapidapi.com/",
    headers: 	{
                    "x-rapidapi-host": API_HOST,
                    "x-rapidapi-key": API_KEY
                }

})

const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache(),
})
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
