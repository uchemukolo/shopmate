import React, { Component } from 'react';
import Button from '../Button';
import validateInput from './validations';
import Modal from '../Modal';
import './login.scss';


export class Login extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { errors } = validateInput(this.state);
    const { email, password } = this.state;
    if (errors.email || errors.password) {
      this.setState(() => ({
        errors
      }));
    } else {
      this.props.onSubmit({
        email,
        password
      });
    }
  };

  renderModalHeader = () => (
    <div className="login__modalTitle">Sign In</div>
  );

  renderModalBody = () => (
    <form className="login" id="loginForm" onSubmit={this.onSubmit}>
      <input className="login__form-input" type='email' placeholder='Email' value={this.state.email}
              field='email' fieldError={this.state.errors.email} onUpdate={this.updateState}/>
      <input className="login__form-input" type='password' placeholder='Password' value={this.state.password}
              field='password' fieldError={this.state.errors.password}/>
      <div className="login__remember">
        <input type="checkbox" id="remember" checked={true}/><label htmlFor="remember">Remember</label>
      </div>
      <div className="login__signin-btn">
        <Button name="Sign In" classes="medium-btn" />
      </div>
    </form>
  );

  renderModalFooter = () => (
      <div className="login__footer">
      <span className="login__footer__footer-item">Forgot password</span>
      <span className="login__footer__footer-item">Have an account</span>
      </div>
  );

  render() {
    return (
      <Modal modalClose={this.props.modalClose} modalHeader={this.renderModalHeader} modalBody={this.renderModalBody} modalFooter={this.renderModalFooter} />
    );
  }
}

export default Login;
