import React from 'react';
import {View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
const steps = [
  {id: 1, label: 'Address', icon: 'map-marker-alt'},
  {id: 2, label: 'Payments', icon: 'credit-card'},
  {id: 3, label: 'Summary', icon: 'receipt'},
];
const customStyles = {
  stepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  stepStrokeWidth: 1,
  currentStepStrokeWidth: 1,
  stepStrokeCurrentColor: '#FA4248',
  stepStrokeFinishedColor: '#FA4248',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#FA4248',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fff',
  stepIndicatorUnFinishedColor: '#fff',
  labelColor: '#bbb',
  currentStepLabelColor: '#000',
};

const ProgressBar = ({
  currentStep,
  setCurrentStep,
}: {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <StepIndicator
      currentPosition={currentStep - 1}
      labels={steps.map(step => step.label)}
      stepCount={3}
      onPress={(position: number) => setCurrentStep(position + 1)}
      renderStepIndicator={({position}) => (
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 15,
            backgroundColor: position < currentStep ? '#FA4248' : '#fff',
          }}
        />
      )}
      customStyles={customStyles}
    />
  );
};

export default ProgressBar;
