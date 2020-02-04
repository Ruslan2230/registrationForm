import React from 'react';
// import ReactDOM from 'react-dom';



class Button extends React.Component{
    render() {
    const {previousFormPage, nextFormPage} = this.props;
    console.log(this);
   return(
 
    <div className="d-flex justify-content-center">
    <button
      type="submit"
      className="btn btn-light mr-4"
      onClick={previousFormPage}
    >
      Previous
    </button>
    <button
      type="submit"
      className="btn btn-secondary"
      onClick={nextFormPage}
    >
      Next
    </button>
    </div>
   
 
   )
}
};

export default Button;