import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './LoginWidget.css';

export class LoginWidget extends Component {
  login = () => {
    const emailRef = this.refs.email;
    const passwordRef = this.refs.password;
    if (emailRef.value && passwordRef.value) {
      this.props.login(emailRef.value, passwordRef.value);
      emailRef.value = passwordRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="login" /></h2>
          <input placeholder={this.props.intl.messages.email} className={styles['form-field']} ref="email" value="{this.props.email}" />
          <input placeholder={this.props.intl.messages.password} className={styles['form-field']} ref="password" />
          <a className={styles['login-submit-button']} href="#" onClick={this.login}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

LoginWidget.propTypes = {
  login: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(LoginWidget);
