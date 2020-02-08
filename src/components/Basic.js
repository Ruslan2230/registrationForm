import React from 'react';

class Basic extends React.Component{
    render() {

    const {values, errors, onChange} = this.props;

    // console.log(this);
   return(
       <div>
    <div className="form-group">
    <label>Firstname</label>
    <input
      type="text"
      className="form-control"
      placeholder="Enter Firstname"
      ref={node => (this.firstname = node)}
      name="firstname"
      value={values.firstname}
      onChange={onChange}
    />

    {errors.firstname ? (
                  <div className="invalid-feedback">
                    {errors.firstname}
                  </div>
                ) : null}
                
  </div>

  <div className="form-group">
    <label>Lastname</label>
    <input
      type="text"
      className="form-control"
      placeholder="Enter Lastname"
      ref={node => (this.lastname = node)}
      name="lastname"
      value={values.lastname}
      onChange={onChange}
    />
    {errors.lastname ? (
                      <div className="invalid-feedback">
                        {errors.lastname}
                      </div>
                    ) : null}
    
    </div>
  <div className="form-group">
    <label>Password</label>
    <input
      type="text"
      className="form-control"
      placeholder="Enter password"
      ref={node => (this.password = node)}
      name="password"
      value={values.password}
      onChange={onChange}
    />
    
    {errors.password ? (
                  <div className="invalid-feedback">
                    {errors.password}
                  </div>
                ) : null}

  </div>

  <div className="form-group">
    <label>Repeat password</label>
    <input
      type="text"
      className="form-control"
      placeholder="Enter repeat password"
      ref={node => (this.repeatPassword = node)}
      name="repeatPassword"
      value={values.repeatPassword}
      onChange={onChange}
    />

    {errors.repeatPassword ? (
                  <div className="invalid-feedback">
                    {errors.repeatPassword}
                  </div>
                ) : null}
                
  </div>

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