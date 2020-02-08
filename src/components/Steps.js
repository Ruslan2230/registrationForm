import React from 'react';

class Steps extends React.Component{
    render() {

    const { currentStep } = this.props;

    // console.log(this);
   return(
       <div>
    <div className="steps">
                <div 
   className={`step ${currentStep > 1 ? "is-completed" : ""} 
          ${currentStep === 1 ? "is-active" : ""}`}           
                > 
                  <div 
                  className="step__marker"> 1 </div>
                  <div className="step__title mt-1"> Basic </div>
                </div>
                <div 
    className={`step ${currentStep > 2 ? "is-completed" : ""} 
    ${currentStep === 2 ? "is-active" : ""}`}                   
                > 
                  <div className="step__marker"> 2 </div>
                  <div className="step__title mt-1"> Contacts 
                </div>
                </div>
                <div 
      className={`step ${currentStep > 3 ? "is-completed" : ""} 
      ${currentStep === 3 ? "is-active" : ""}`}                  
                > 
                  <div className="step__marker"> 3 </div>
                  <div className="step__title mt-1"> Avatar </div>
                </div>
                <div 
                 className={`step ${currentStep > 4 ? "is-completed" : ""} 
                 ${currentStep === 4 ? "is-active" : ""}`}            
                > 

                  <div className="step__marker"> 4 </div>
                  <div className="step__title mt-1"> Finish </div>
                </div>
                
          </div>




       </div>

   )
}
};

export default Steps;