import React from 'react';
import countries from "../data/countries";
import cities from "../data/cities";
import Button from '../components/Button';
import Basic from '../components/Basic';
import Contacts from '../components/Contacts';
import Avatar from '../components/Avatar';
import Finish from '../components/Finish'

// "Must be 5 characters or more"
// "Required"
// "Must be equal password"

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentStep: 1,
      firstname: "",
      lastname: "",
      password: "",
      repeatPassword: "",
      email: "",
      mobile: "",
      country: "",
      city: "Select city",
      gender: "male",
      agree: true,
      avatar: "",
        // типы через string
        errors: {
          firstname: false,
          lastname: false,
          repeatPassword: false,
          email: false,
          mobile: false
        }
    };
  }

  onSubmit = event => {
    event.preventDefault();
    // console.log("refs", this.username.value, this.password.value);

    const errors = {};
    if (this.state.firstname.length < 5) {
      errors.firstname = "Must be 5 characters or more";
    }

    if (this.state.lastname.length < 5) {
      errors.lastname = "Must be 5 characters or more";
    }

    if (this.state.password < 3) {
      errors.password = "Must be 3 characters or more";
    }

    if (this.state.password !== this.state.repeatPassword) {
      errors.repeatPassword = "Must be equal password";
    }

    // if (this.state.email === "") {
    //   errors.email = "Required";
    // }

    // if (this.state.mobile === "") {
    //   errors.mobile = "Invalid mobile";
    // }

    // if (this.state.city === "Select city") {
    //   errors.city = "Required";
    // }

    if (Object.keys(errors).length > 0) {
      // error
      this.setState({
        errors: errors
      });

    } else {
      this.setState({
        errors: {}
      });

      this.setState({
        currentStep: this.state.currentStep + 1
      });

      console.log("submit", this.state);
    }

    console.log("submit", this.state);
  };

  onPrevious = event => {
    event.preventDefault();
    this.setState({
      currentStep: this.state.currentStep - 1
    });
  };

  onChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  
  getOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  getOptionsItems2 = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  onChangeAvatar = event => {
    // console.log(event.target.files);
    const reader = new FileReader();
    reader.onload = event => {
      console.log(event.target.result);
      this.setState({
        avatar: event.target.result
      });
    };

    reader.readAsDataURL(event.target.files[0]);
  };
  
  // resetForm = event => {
  //   event.preventDefault();
  //   this.setState({
      
  //   });
  // }
  // {`${this.state.currentStep === 1 ? "is-active" : ""} `}
  render() {
    // console.log(this);
    return (
      <div className="form-container card" onReset={this.resetForm}>
        <div className="form card-body">
        <div className="steps">
                <div className="step is-completed"> 
                  <div className="step__marker"> 1 </div>
                  <div className="step__title mt-1"> Basic </div>
                </div>
                <div className="step is-active is-completed"> 
                  <div className="step__marker"> 2 </div>
                  <div className="step__title mt-1"> Contacts 
                </div>
                </div>
                <div className="step is-active is-completed"> 
                  <div className="step__marker"> 3 </div>
                  <div className="step__title mt-1"> Avatar </div>
                </div>
                <div className="step is-active is-completed"> 
                  <div className="step__marker"> 4 </div>
                  <div className="step__title mt-1"> Finish </div>
                </div>
                
          </div>
          {this.state.currentStep === 1 ? 
          <Basic
          onChange = {this.onChange}
          firstname = {this.state.firstname}
          lastname = {this.state.lastname}
          gender = {this.state.gender}
          password = {this.state.password}
          repeatPasswor = {this.state.repeatPassword}
          errors = {this.state.errors}
          /> : null}

         {this.state.currentStep === 2 ? 
          <Contacts
          email = {this.state.email}
          mobile = {this.state.mobile}
          country = {this.state.country}
          city = {this.state.city}
          onChange={this.onChange}
          getOptionsItems={this.getOptionsItems(countries)}
          getOptionsItems2={this.getOptionsItems2(cities)}
          errors = {this.state.errors}
          /> : null }
        
        {this.state.currentStep === 3 ? 
          <Avatar
          avatar = {this.state.avatar}
          onChangeAvatar={this.onChangeAvatar}
          /> : null}

        {this.state.currentStep === 4 ? 
          <Finish
          avatar = {this.state.avatar}
          resetForm={this.resetForm}
          firstname = {this.state.firstname}
          lastname = {this.state.lastname}
          email = {this.state.email}
          mobile = {this.state.mobile}
          country = {this.state.country}
          city = {this.state.city}
          /> : null}

         <Button 
        onPrevious={this.onPrevious}
        onSubmit={this.onSubmit}
        />
    
      </div>
      </div>
    );
  }
}
