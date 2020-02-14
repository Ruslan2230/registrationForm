import React from 'react';
import Field from "../Field";
import countries from "../../data/countries";
import cities from "../../data/cities";


class Contacts extends React.Component{

  getOptions = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  normalizeCities = countryId => {
    return Object.keys(cities).reduce((acc, cityId) => {
        if (cities[cityId].country === Number(countryId)) {
            acc.push({id: cityId, name: cities[cityId].name})
        }
        return acc
    },[]);
  };
    render() {
    const {values, onChange, errors} = this.props;

   return(
       <div>
         <Field
            id="email"
            labelText="Email"
            type="text"
            placeholder="Enter Email"
            name="email"
            value={values.email}
            onChange={onChange}
            error={errors.email}
          />

          <Field
              id="mobile"
              labelText="Mobile"
              type="text"
              placeholder="Enter Mobile"
              name="mobile"
              value={values.mobile}
              onChange={onChange}
              error={errors.mobile}
            />
   
        <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              className="form-control"
              id="country"
              name="country"
              value={values.country}
              onChange={onChange}
            >
              <option value="">Select country</option>
              {this.getOptions(countries)}
            </select>
            {errors.country ? (
                      <div className="invalid-feedback">
                        {errors.country}
                      </div>
                    ) : null}
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
              <option value="">Select city</option>
              {this.getOptions(this.normalizeCities(values.country))}
          </select>
              {errors.city ? (
                      <div className="invalid-feedback">
                        {errors.city}
                      </div>
                    ) : null}
          </div>
</div>
)
}
};

export default Contacts;