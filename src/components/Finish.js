import React from 'react';



class Finish extends React.Component{
    render() {
    const {avatar, resetForm, firstname, lastname, email, mobile, country, city} = this.props;
    console.log(this);
   return(
       <div>

      <div className="container-fluid">

          <div className="row mb-4"> 
          <div className="col-4"> 
          <img className="img"  width="100%"
    height="150px" src={avatar}  alt={"avatar"} />
          </div>
          <div className="col-8 d-flex align-items-center"> 
          <h4>{`${firstname} ${lastname}`} </h4>
          </div>
          </div>

          <div className="row mb-4"> 
          <div className="col-12"> 
            <p> <strong>Email:</strong> {email}</p>
            <p> <strong>Mobile:</strong> {mobile}</p>
            <p> <strong>Location:</strong> {country}, {city}</p>
         </div>
    </div>

    <div className="d-flex justify-content-center"> 
    <button
      type="reset"
      className="btn btn-primary"
      onClick={resetForm}
    >
        Reset
    </button>
          </div>

</div>
</div>

)
}
};

export default Finish;