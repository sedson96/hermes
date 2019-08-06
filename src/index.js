import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import App from './App'; 
import * as serviceWorker from './serviceWorker';
import {ApolloProvider} from "react-apollo"



const restLink = new RestLink({
    uri: "https://apidojo-adidas-v1.p.rapidapi.com/",
    headers: 	{
                    "x-rapidapi-host": "apidojo-adidas-v1.p.rapidapi.com",
                    "x-rapidapi-key": "b0a636e1f8msh8d5a00822758ae3p17b2cajsn3324020351be"
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
