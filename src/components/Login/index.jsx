import React, { Component } from 'react';
import Button from '../Button';
import validateInput from './validations';
import Modal from '../Modal';
import { ModalContext } from '../../App';
import './login.scss';


export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value, errors: {} });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { errors } = validateInput(this.state);
    const { email, password } = this.state;
    if (errors.email || errors.password) {
      this.setState(() => ({
        errors
      }));
    } else {
      const loginData = {
        email,
        password
      };

      this.props.userLoginRequest(loginData)
    }
  };

  renderModalHeader = () => (
    <div className="login__modalTitle">Sign In</div>
  );

  renderModalBody = () => (
    <form className="login" id="loginForm" onSubmit={this.onSubmit}>
      <div>
        {this.state.errors.email
          && (
            <p id="signup-error" className="signup__red-text">
              {this.state.errors.email}
            </p>
          )}
        <input
          onChange={this.onChange}
          className="login__form-input"
          type='email'
          placeholder='Email'
          value={this.state.email}
          name='email'
        />
      </div>
      <div>
        {this.state.errors.password
          && (
            <p id="signup-error" className="signup__red-text">
              {this.state.errors.password}
            </p>
          )}
        <input
          onChange={this.onChange}
          className="login__form-input"
          type='password'
          placeholder='Password'
          value={this.state.password}
          name='password'
        />
      </div>
      <div className="login__remember">
        <input
        type="checkbox"
        id="remember"
        checked={true} />
        <label htmlFor="remember">Remember</label>
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
      <ModalContext.Consumer>
        {({ showModal, toggleModal, modalName}) => {
          return (
            (modalName === 'Login') && (
            <Modal
              showModal={showModal}
              modalHeader={this.renderModalHeader}
              modalBody={this.renderModalBody}
              modalFooter={this.renderModalFooter}
              closeModalCallback={toggleModal}
            />)
          )
        }
      }
      </ModalContext.Consumer>
    );
  }
}

export default Login;
