import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, label, inputHandles = [], inputs = [], outputHandles = [], onInputChange }) => {
  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      {inputHandles.map((inputHandle, index) => (
        <Handle
          key={`inputHandle-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${inputHandle.name}`}
          style={inputHandle.style}
        />
      ))}
      <div>
        {/* Render the label as JSX to allow for line breaks */}
        {typeof label === 'string' ? (
          <span>{label}</span>
        ) : (
          label
        )}
      </div>
      <div>
        {inputs.map((input, index) => (
          <label key={index} style={{ display: 'block', marginBottom: '5px' }}>
            {input.label}:
            <input
              type="text"
              value={input.value}
              onChange={(e) => onInputChange(e, input.name)}
              style={input.style || {}} // Apply dynamic style if provided
            />
          </label>
        ))}
      </div>
      {outputHandles.map((outputHandle, index) => (
        <Handle
          key={`outputHandle-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${outputHandle.name}`}
          style={outputHandle.style}
        />
      ))}
    </div>
  );
};
