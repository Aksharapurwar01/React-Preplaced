import React, { useEffect, useRef, useState } from "react";
import "./stepper.css";

function StepperComponent({ checkoutSteps = {} }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2 || 0,
      marginRight: stepRef.current[checkoutSteps.length - 1].offsetWidth / 2 || 0
    });

    console.log(stepRef.current[checkoutSteps.length - 1].offsetWidth);
  }, [stepRef.current]);

  const handleNext = () => {
    setCurrentStep((prev) => {
      const nextStep = prev + 1;
      if (nextStep === checkoutSteps.length + 1) {
        setIsComplete(true);
      }
      return nextStep;
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (checkoutSteps.length - 1)) * 100;
  };

  const ActiveComponent = checkoutSteps[currentStep - 1]?.Component;

  return (
    <>
      <div className="stepper">
        {checkoutSteps.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span> ✔️</span>
                ) : (
                  index + 1
                )}
              </div>

              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
        <div
          className="progress-bar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      {ActiveComponent && <ActiveComponent />}

      {!isComplete && (
        <button onClick={handleNext}>
          {currentStep === checkoutSteps.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
}

export default StepperComponent;
