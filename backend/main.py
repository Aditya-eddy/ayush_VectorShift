from fastapi import FastAPI, Form, Request
from pydantic import BaseModel
from typing import List, Dict
import networkx as nx

app = FastAPI()

class PipelineData(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline_data: PipelineData):
    nodes = pipeline_data.nodes
    edges = pipeline_data.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Create a directed graph using NetworkX
    G = nx.DiGraph()

    # Add nodes and edges to the graph
    for node in nodes:
        G.add_node(node['id'])

    for edge in edges:
        G.add_edge(edge['source'], edge['target'])

    # Check if the graph is a Directed Acyclic Graph (DAG)
    is_dag = nx.is_directed_acyclic_graph(G)

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }
