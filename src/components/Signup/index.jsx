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
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { errors } = validateInput(this.state);
    const { name, email, password, confirmPassword } = this.state;
    if (errors.name || errors.email || errors.password || errors.confirmPassword) {
      this.setState(() => ({
        errors
      }));
    } else {
      this.props.onSubmit({
        name,
        email,
        password,
        confirmPassword,
      });
    }
  };
  renderModalHeader = () => (
    <div className="signup__modalTitle">Sign Up</div>
  );

  renderModalBody = () => (
    <form className="signup" id="signupForm" onSubmit={this.onSubmit}>
    <input className="signup__form-input" type='name' placeholder='Name' value={this.state.name}
             field='email' fieldError={this.state.errors.name}/>
      <input className="signup__form-input" type='email' placeholder='Email' value={this.state.email}
             field='email' fieldError={this.state.errors.email} onUpdate={this.updateState}/>
      <input className="signup__form-input" type='password' placeholder='Password' value={this.state.password}
             field='password' fieldError={this.state.errors.password}/>
      <input className="signup__form-input"
          type={'password'} placeholder={'Re-type Password'}
          field={'confirmPassword'} value={this.state.confirmPassword}
          fieldError={(this.state.errors.confirmPasswordError) ? this.state.errors.confirmPasswordError[0] : null}
          validateField={this.validateInput} />
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
      <Modal modalClose={this.props.modalClose} modalHeader={this.renderModalHeader} modalBody={this.renderModalBody} modalFooter={this.renderModalFooter} />
    );
  }
}

export default Signup;
