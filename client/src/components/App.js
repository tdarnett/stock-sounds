import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'; // so component can call actions
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';


const Dashboard = () => <h2>Dashboard</h2>;
const CreateStock = () => <h2>Stock New</h2>;

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
          <div>
              <BrowserRouter>
                  <div>
                      <Header />
                      <Route exact path="/" component={Landing} />
                      <Route exact path="/dashboard" component={Dashboard} />
                      <Route path="/dashboard/stocks/create" component={CreateStock} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
