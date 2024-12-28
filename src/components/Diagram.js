


import { useState } from "react";

import ReactFlow, { addEdge, Background, Controls, MiniMap, ReactFlowProvider } from "react-flow-renderer";
import Sidebar from "./Sidebar";
const initialNodes = [
    {id:"1", type:"input", data:{label: 'Node 1'}, position:{x:250, y:0}},
    {id:"2",  data:{label: 'Node 2'}, position:{x:100, y:100}},
    {id:"3",  data:{label: 'Node 3'}, position:{x:400, y:100}},
    
];



const initialEdges = [
    {id:'el-2', source:"1", target:'2', animated:true},
    {id:'el-3', source:"1", target:'3'},

]

function Diagram() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] =useState(initialEdges)
     
    const onNodesChange = (changes) => setNodes((nds)=>nds.map((n)=>({...n, ...changes})));
    const onEdgesChange = (changes) => setEdges((eds) =>eds.map((e) =>({...e,...changes})));
    const onConnect = (params) => setEdges((eds)=>addEdge(params, eds))
    return(
        <ReactFlowProvider>
            <div className="diagram-wrapper">
                <Sidebar setNodes={setNodes} setEdges={setEdges}/>
                <ReactFlow 
                nodes={nodes}
                edges={edges} 
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect} 
                fitView>
                    <MiniMap/>
                    <Controls/>
                    <Background color="#aaa" gap={16}/>
                    
                </ReactFlow>

            </div>

        </ReactFlowProvider>

    )
} 

export default Diagram