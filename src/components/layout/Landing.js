import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { PropTypes } from 'prop-types';
// import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Connect bazaar Pvt Limited</h1>
                <p className="lead">
                  {" "}
                  Create a student profile and see other profiles as well
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
// export default connect(mapStateToProps)(Landing);
