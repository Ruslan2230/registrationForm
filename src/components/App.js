import React from 'react';
import FormActions from './FormActions';
import Basic from './FormSteps/Basic';
import Contacts from './FormSteps/Contacts';
import Avatar from './FormSteps/Avatar';
import Finish from './FormSteps/Finish';
import Steps from '../components/Steps';


// "Must be 5 characters or more"
// "Required"
// "Must be equal password"
export default class App extends React.Component {
  constructor() {
    super();

    this.initialState = {
      values: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        email: "",
        mobile: "",
        country: "",
        city: "",
        gender: "male",
        agree: true,
        avatar: "",
      },
      currentStep: 1,
        // типы через string
        errors: {}
    };
    this.state = {...this.initialState}
  }

  onChange = event => {
    // console.log(event.target.name, event.target.value);
    // this.setState({
    //   [event.target.name]: event.target.value
    // });
    // const { name, value } = event.target;
    // const { [name]: _, ...errors } = this.state.errors;
    // event.persist()
    this.updateValue({
      name: event.target.name,
      value: event.target.value
    })
  };

  updateValue = ({value, name}) => {
    this.setState (state => ({
      values: {
       ...state.values,
       [name]: value
     },
     errors: {
       ...state.errors,
       [name]: false
     }
 }))
  }

getErrorsByValues = () => {
  const errors = {};
    // console.log("refs", this.username.value, this.password.value);
    switch (this.state.currentStep) {
      case 1:
        if (this.state.values.firstname.length < 5) {
          errors.firstname = "Must be 5 characters or more";
        }
    
        if (this.state.values.lastname.length < 5) {
          errors.lastname = "Must be 5 characters or more";
        }
    
        if (this.state.values.password.length < 6) {
          errors.password = "Must be 6 characters or more";
        }
    
        if (this.state.values.password !== this.state.values.repeatPassword) {
          errors.repeatPassword = "Must be equal password";
        }
        break;
        case 2:
          if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(this.state.values.email)){
            errors.email = "Invalid email address";
          }
          if (!/^\d[\d()-]{4,14}\d$/.test(this.state.values.mobile)) {
            errors.mobile = "Invalid mobile";
          }
          if (this.state.values.country === "") {
            errors.country = "Required";
          }
          if (this.state.values.city === "") {
            errors.city = "Required";
          }
          break;
          case 3:
          if (this.state.values.avatar === "") {
              errors.avatar = "Required";
            }
            break;
            default:
          }
       return errors;
  };
  
  nextFormPage = event => {
  event.preventDefault();

  const errors = this.getErrorsByValues();

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors,
      });
    } else {
        this.setState(state => ({
        errors: {},
        currentStep: state.currentStep + 1,
      }));

      console.log("submit", this.state);
    }
      console.log("submit", this.state);
  };
  
  previousFormPage = event => {
  event.preventDefault();

    this.setState({
      currentStep: this.state.currentStep - 1,
    });
  
}

  resetForm = () => {
    this.setState(this.initialState)
     };


  // {`${this.state.currentStep === 1 ? "is-active" : ""} `}
  render() {
    // console.log(this);
    return (
      <div className="form-container card" onReset={this.resetForm}>
        <div className="form card-body">
        <Steps currentStep = {this.state.currentStep} />
          {this.state.currentStep === 1 && (
          <Basic
          onChange = {this.onChange}
          values={this.state.values}
          errors = {this.state.errors}
          /> 
          )}
         {this.state.currentStep === 2 && (
          <Contacts
          values={this.state.values}
          onChange={this.onChange}
          errors = {this.state.errors}
          />
          )}
        
        {this.state.currentStep === 3 && (
          <Avatar
          avatar = {this.state.values.avatar}
          errors = {this.state.errors}
          updateValue = {this.updateValue}
          />
          )}

        {this.state.currentStep === 4 && (
          <Finish resetForm={this.resetForm} values={this.state.values} />
        )}

          <FormActions 
          previousFormPage = {this.previousFormPage}
          nextFormPage = {this.nextFormPage}
          currentStep = {this.state.currentStep}
          resetForm = {this.resetForm}
          />
       </div>
      </div>
    );
  }
  }
