import React from 'react';
import Field from "../Field";

class Basic extends React.Component{
    render() {
    const {values, errors, onChange} = this.props;
    return(
       <div>
         <Field
            id="firstname"
            labelText="Firstname"
            type="text"
            placeholder="Enter Firstname"
            name="firstname"
            value={values.firstname}
            onChange={onChange}
            error={errors.firstname}
          />

        <Field
            id="lastname"
            labelText="Lastname"
            type="text"
            placeholder="Enter Lastname"
            name="lastname"
            value={values.lastname}
            onChange={onChange}
            error={errors.lastname}
          />

        <Field
            id="password"
            labelText="Password"
            type="password"
            placeholder="Enter Password"
            name="password"
            value={values.password}
            onChange={onChange}
            error={errors.password}
          />

        <Field
            id="repeatPassword"
            labelText="Repeat password"
            type="password"
            placeholder="Enter repeat password"
            name="repeatPassword"
            value={values.repeatPassword}
            onChange={onChange}
            error={errors.repeatPassword}
          />

    <fieldset className="form-group">
    <div>Gender</div>
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        id="male"
        name="gender"
        value="male"
        checked={values.gender === "male"}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor="male">
        Male
      </label>
    </div>

    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        id="female"
        name="gender"
        value="female"
        checked={values.gender === "female"}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor="female">
        Female
      </label>
    </div>

  </fieldset>
</div>
)
}
};

export default Basic;