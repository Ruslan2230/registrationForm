import React from "react";

const stepsNames = [{ id: 1, name: "Basic"}, { id: 2, name: "Contacts"}, { id: 3, name: "Avatar"}, { id: 4, name: "Finish"}];

class Steps extends React.Component {
  render() {
    const { currentStep } = this.props;

    return (
      <div>
        <div className="steps">
          {stepsNames.map((step, index) => (
            <div
              className={`step ${currentStep > index + 1 ? "is-completed" : ""} 
          ${currentStep === index + 1 ? "is-active" : ""}`}
            >
              <div className="step__marker">{step.id}</div>
              <div className="step__title mt-1">{step.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Steps;
