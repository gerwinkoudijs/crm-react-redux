import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import LoginWidget from '../components/LoginWidget/LoginWidget';

// Import Actions
import { loginRequest } from '../AuthActions';

// Import Selectors
import { getLogin } from '../AuthReducer';

class LoginPage extends Component {
  componentDidMount() {
    //..
  }

  handleLogin = (email, password) => {
    this.props.dispatch(loginRequest({ email, password }));
  };

  render() {
    return (
      <div>
        <LoginWidget login={this.handleLogin} />
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return { };
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

LoginPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(LoginPage);
