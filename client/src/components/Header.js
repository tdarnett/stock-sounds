import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        // console.log(this.props.auth);
        switch (this.props.auth) {
        case null:
            return;
        case false:
            return <li><a href="/auth/google">Login With Google</a></li>;
        default:
            return <li><a href="api/logout">Logout</a></li>;
        }
    }
    render() {
        return (
          <nav>
              <div className="nav-wrapper">
              <div className="container">
                      <Link 
                        to={this.props.auth ? '/dashboard' : '/'} 
                        className="brand-logo">
                            Stock Sounds
                        </Link>
                      <ul className="right hide-on-med-and-down">
                          {this.renderContent()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
