import { useState } from "react"



function Sidebar({setNodes, setEdges}) { 

    const [nodeId, setNodeId] = useState("");
    const [nodeLabel, setNodeLabel] =useState("")

    const addNode = () => {
        const newNode= {
            id:nodeId,
            data:{label:nodeLabel},
            position:{x:Math.random()*400, y:Math.random()*400},
        }; 
        setNodes((nds)=>[...nds, newNode]);
        setNodeId("");
        setNodeLabel('')
        
    }
    return(
        <div className="sidebar">
            <h3>Add Node</h3>
            <input type="text" 
            placeholder="Node ID" 
            value={nodeId} 
            onChange ={(e) =>setNodeId(e.target.value)} />

            <input 
            type="text" 
            placeholder="Node label"
            value={nodeLabel}
            onChange={(e)=>setNodeLabel(e.target.value)} />
            <button onClick={addNode}>Add Node</button>

        
            
            
            
        </div>

    )
} 

export default Sidebar