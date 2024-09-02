import { BaseNode } from "./baseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      label={
        <>
          <div>
            <span>LLM</span>
          </div>

          <div>
            <span>This is a LLM</span>
          </div>
        </>
      }
      inputHandles={[
        { name: "system", style: { top: `${100 / 3}%` } },
        { name: "prompt", style: { top: `${200 / 3}%` } },
      ]}
      inputs={[]} // No text inputs for LLMNode
      outputHandles={[{ name: "response" }]}
      onInputChange={() => {}}
    />
  );
};
