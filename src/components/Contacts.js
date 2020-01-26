import React from 'react';


class Contacts extends React.Component{
    render() {
    const {email, mobile, country, city, onChange, getOptionsItems, getOptionsItems2, errors} = this.props;
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
            value={email}
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
            value={mobile}
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
              value={country}
              onChange={onChange}
            >
              {getOptionsItems}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="country">City</label>
            <select
              className="form-control"
              id="city"
              name="city"
              value={city}
              onChange={onChange}
            >
              {errors.city ? (
                  <div className="invalid-feedback">
                    {errors.city}
                  </div>
                ) : null}

              {getOptionsItems2}
            </select>
          </div>
</div>





   )
}
};

export default Contacts;