import { useState } from 'react';
import { BaseNode } from './baseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleInputChange = (e, name) => {
    if (name === 'outputName') {
      setCurrName(e.target.value);
    } else if (name === 'outputType') {
      setOutputType(e.target.value);
    }
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Output"
      inputHandles={[{ name: 'value' }]} // Input handle on the left
      inputs={[
        { label: 'Name', value: currName, name: 'outputName' },
        { label: 'Type', value: outputType, name: 'outputType' }
      ]}
      outputHandles={[]} // No output handles for OutputNode
      onInputChange={handleInputChange}
    />
  );
};
