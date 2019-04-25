import React, { Component } from 'react';
import Button from '../Button';
import validateInput from './validations';
import Modal from '../Modal';
import './signup.scss';


export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
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
    const { name, email, password } = this.state;
    if (errors.name || errors.email || errors.password || errors.confirmPassword) {
      this.setState(() => ({
        errors
      }));
    } else {
      const signupData = {
        name,
        email,
        password
      };

      this.props.userSignupRequest(signupData)
    }
  };
  renderModalHeader = () => (
    <div className="signup__modalTitle">Sign Up</div>
  );

  renderModalBody = () => (
    <form className="signup" id="signupForm" onSubmit={this.onSubmit}>
    <div>
          {this.state.errors.name
            && (
            <p id="signup-error" className="signup__red-text">
              { this.state.errors.name }
            </p>
            )}
      <input
        onChange={this.onChange}
        className="signup__form-input"
        type='name' placeholder='Name'
        value={this.state.name}
        name='name'
      />
      </div>
      <div>
          {this.state.errors.email
            && (
            <p id="signup-error" className="signup__red-text">
              { this.state.errors.email }
            </p>
            )}
      <input
        onChange={this.onChange}
        className="signup__form-input"
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
              { this.state.errors.password }
            </p>
            )}
      <input
        onChange={this.onChange}
        className="signup__form-input"
        type='password'
        placeholder='Password'
        value={this.state.password}
        name='password'
      />
      </div>
      <div>
          {this.state.errors.confirmPassword
            && (
            <p id="signup-error" className="signup__red-text">
              { this.state.errors.confirmPassword }
            </p>
            )}
      <input
        onChange={this.onChange}
        className="signup__form-input"
        type={'password'}
        placeholder={'Re-type Password'}
        name={'confirmPassword'}
        value={this.state.confirmPassword}
      />
      </div>
      <div className="">
        <Button name="Sign Up" classes="medium-btn" />
      </div>
    </form>
  );

  renderModalFooter = () => (
      <div className="signup__footer">
      <span className="signup__footer__footer-item1">Already a member?</span>
      <span className="signup__footer__footer-item2">Sign In</span>
      </div>
  );

  render() {
    return (
      <Modal
      modalClose={this.props.modalClose}
      modalHeader={this.renderModalHeader}
      modalBody={this.renderModalBody}
      modalFooter={this.renderModalFooter}
      name={this.props.name}
      />
    );
  }
}

export default Signup;
