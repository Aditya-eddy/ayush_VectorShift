import { useState } from 'react';
import { BaseNode } from './baseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleInputChange = (e, name) => {
    if (name === 'inputName') {
      setCurrName(e.target.value);
    } else if (name === 'inputType') {
      setInputType(e.target.value);
    }
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Input"
      inputHandles={[]} // No input handles for InputNode
      inputs={[
        { label: 'Name', value: currName, name: 'inputName' },
        { label: 'Type', value: inputType, name: 'inputType' }
      ]}
      outputHandles={[{ name: 'value' }]} // Output handle on the right
      onInputChange={handleInputChange}
    />
  );
};
