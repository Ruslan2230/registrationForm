import React from 'react';
import countries from "../../data/countries";
import cities from "../../data/cities";


class Finish extends React.Component{
    render() {
    const {values} = this.props;
    console.log(this);
   return(
       <div>

      <div className="container-fluid">

          <div className="row mb-4"> 
          <div className="col-4"> 
          <img className="img"  width="100%"
    height="150px" src={values.avatar}  alt="avatar" />
          </div>
          <div className="col-8 d-flex align-items-center"> 
          <h4>{`${values.firstname} ${values.lastname}`} </h4>
          </div>
          </div>

          <div className="row mb-4"> 
          <div className="col-12"> 
            <p> <strong>Email:</strong> {values.email}</p>
            <p> <strong>Mobile:</strong> {values.mobile}</p>
            <p> <strong>Location:</strong>  
            {
                  countries.find(
                    country => Number(country.id) === Number(values.country)
                  ).name
                },

          {cities[values.city].name}
              </p>
         </div>
    </div>

    {/* <div className="d-flex justify-content-center"> 
    <button
      type="reset"
      className="btn btn-primary"
      onClick={resetForm}
    >
        Reset
    </button>
          </div> */}

</div>
</div>

)
}
};

export default Finish;