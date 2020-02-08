import React from 'react';
import countries from "../data/countries";
import cities from "../data/cities";
import Formactions from '../components/Formactions';
import Basic from '../components/Basic';
import Contacts from '../components/Contacts';
import Avatar from '../components/Avatar';
import Finish from '../components/Finish'
import Steps from '../components/Steps'

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
        country: "1",
        city: "Select city",
        gender: "male",
        agree: true,
        avatar: "",
      },
      currentStep: 1,
        // типы через string
        errors: {
          firstname: false,
          lastname: false,
          password: false,
          repeatPassword: false,
          email: false,
          mobile: false,
          country: false,
          city: false,
          avatar: false,
        }
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
    event.persist()
    this.setState (state => ({
     values: {
      ...state.values,
      [event.target.name]: event.target.value
    },
    errors: {
      ...state.errors,
      [event.target.name]: false
    }
}))
  };

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
            errors.email = "Invalid mobile";
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
  

  getOptionsCountries = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

 

  getUpdateCities = countryValue => {
    // const citiesArr = Object.values(cities);
    // const optionCities = [{ id: 0, name: "Select city" }];
    // const { country } = this.state;

    // citiesArr.forEach((item, index) => {
    //   if (+item.country === +country) {
    //     const cityItem = {
    //       id: index + 1,
    //       name: item.name,
    //     };
    //     optionCities.push(cityItem);
    //   } 
    // });
    return Object.keys(cities).reduce((acc, cityId) => {
        if (cities[cityId].country === Number(countryValue)) {
            acc.push({id: cityId, name: cities[cityId].name})
        }
        return acc
    },[]);
  };

  onChangeAvatar = event => {
    // console.log(event.target.files);
    const reader = new FileReader();
    reader.onload = event => {
      // console.log(event.target.result);
      this.setState({
        values:{
        avatar: event.target.result
        }
      });
    };

    reader.readAsDataURL(event.target.files[0]);
  };
  
previousFormPage = event => {
  event.preventDefault();

  if (this.state.currentStep > 1) {
    this.setState({
      currentStep: this.state.currentStep - 1,
    });
  }
}

  resetForm = () => {
    this.setState(this.initialState)
     };


  // {`${this.state.currentStep === 1 ? "is-active" : ""} `}
  render() {
    // console.log(this);
    const updateCities = this.getUpdateCities(values.country);
    return (
      <div className="form-container card" onReset={this.resetForm}>
        <div className="form card-body">
        <Steps
          currentStep = {this.state.currentStep}
        />
          {this.state.currentStep === 1 ? 
          <Basic
          onChange = {this.onChange}
          values={this.state.values}
          errors = {this.state.errors}
          /> : null}

         {this.state.currentStep === 2 ? 
          <Contacts
          values={this.state.values}
          onChange={this.onChange}
          getOptionsCountries={this.getOptionsCountries(countries)}
          updateCities={updateCities}
          errors = {this.state.errors}
          /> : null }
        
        {this.state.currentStep === 3 ? 
          <Avatar
          avatar = {this.state.values.avatar}
          onChangeAvatar={this.onChangeAvatar}
          /> : null}

        {this.state.currentStep === 4 ? 
          <Finish
          resetForm={this.resetForm}
          values={this.state.values}
          /> : null}

        {this.state.currentStep < 4 ? (
            <Formactions 
            previousFormPage = {this.previousFormPage}
            nextFormPage = {this.nextFormPage}
            />
          ) : null}

        {this.state.currentStep === 4 ? (
          <div className="d-flex justify-content-center"> 
            <button
              type="reset"
              className="btn btn-primary "
              onClick={this.resetForm}
            >
              Reset
            </button>
            </div> 
          ) : null}
     
    
      </div>
      </div>
    );
  }
  }
