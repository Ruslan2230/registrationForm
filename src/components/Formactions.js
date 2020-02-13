import React from 'react';
// import ReactDOM from 'react-dom';



class FormActions extends React.Component{
    render() {
    const {previousFormPage, nextFormPage, currentStep, resetForm} = this.props;
    console.log(this);
   return(
     <div>
    {currentStep < 4 && (
    <div className="d-flex justify-content-center">
    <button
      type="submit"
      className="btn btn-light mr-4"
      onClick={previousFormPage}
      disabled={ currentStep === 1 }
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
    )}
   {currentStep === 4 && (
  <div className="d-flex justify-content-center"> 
    <button
      type="reset"
      className="btn btn-primary "
      onClick={resetForm}
    >
      Reset
    </button>
    </div> 
  )}
   
   </div>
   )
}
};

export default FormActions;