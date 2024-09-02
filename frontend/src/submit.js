import React from 'react';
import { useStore } from './store';

export const SubmitButton = () => {
    const { nodes, edges } = useStore(state => ({
        nodes: state.nodes,
        edges: state.edges
    }));

    const handleSubmit = async () => {
        const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {  // Update this line
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nodes, edges }),
        });

        const result = await response.json();

        alert(`Number of nodes: ${result.num_nodes}\nNumber of edges: ${result.num_edges}\nIs DAG: ${result.is_dag}`);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    );
};
