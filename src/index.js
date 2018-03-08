import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:5000/graphql'}),
  cache: new InMemoryCache()
});

ReactDOM.render(<ApolloProvider client={client}>
                  <Router>
                    <App />
                  </Router>
                </ApolloProvider>,
                document.getElementById('root')
              );
registerServiceWorker();
