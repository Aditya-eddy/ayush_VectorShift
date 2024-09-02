import { useState, useEffect } from "react";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [inputHandles, setInputHandles] = useState([]);

  const handleInputChange = (e, name) => {
    if (name === "text") {
      const newText = e.target.value;
      setCurrText(newText);
      updateHandles(newText);
    }
  };

  const updateHandles = (text) => {
    const variablePattern = /{{\s*(\w+)\s*}}/g;
    const newHandles = [];
    let match;

    while ((match = variablePattern.exec(text)) !== null) {
      const variableName = match[1];
      if (!inputHandles.some((handle) => handle.name === variableName)) {
        newHandles.push({ name: variableName });
      }
    }

    setInputHandles(newHandles);
  };

  useEffect(() => {
    updateHandles(currText);
  }, []);

  return (
    <BaseNode
      id={id}
      data={data}
      label="Text"
      inputHandles={inputHandles} // Dynamic input handles based on text content
      inputs={[
        {
          label: "Text",
          value: currText,
          name: "text",
          style: {
            width: Math.max(200, currText.length * 8) + "px", // Dynamic width
            height: Math.max(30, currText.split("\n").length * 20) + "px", // Dynamic height
          },
        },
      ]}
      outputHandles={[{ name: "output" }]} // Output handle on the right
      onInputChange={handleInputChange}
    />
  );
};
