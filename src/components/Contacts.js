import React from 'react';


class Contacts extends React.Component{
    render() {
    const {values, onChange, getOptionsCountries, updateCities, errors} = this.props;
    console.log(this);
   return(
       <div>
    <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            ref={node => (this.email = node)}
            name="email"
            value={values.email}
            onChange={onChange}
          />
          {errors.email ? (
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                ) : null}
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Mobile"
            ref={node => (this.mobile = node)}
            name="mobile"
            value={values.mobile}
            onChange={onChange}
          />
          {errors.mobile ? (
                  <div className="invalid-feedback">
                    {errors.mobile}
                  </div>
                ) : null}
        </div>
        <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              className="form-control"
              id="country"
              name="country"
              value={values.country}
              onChange={onChange}
            >
              {getOptionsCountries}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="country">City</label>
            <select
              className="form-control"
              id="city"
              name="city"
              value={values.city}
              onChange={onChange}
            >
              {errors.city ? (
                  <div className="invalid-feedback">
                    {errors.city}
                  </div>
                ) : null}

              {updateCities}
            </select>
          </div>
</div>





   )
}
};

export default Contacts;