import { useState } from "react"
import { useSelector,useDispatch } from "react-redux";
import { fetchData, postdata } from "../redux/Action";

export const AddItem = ()=>{
    const [name,setName] = useState("");
    const [price,setPrice] = useState(Number);
    const dispatch = useDispatch();

    const handleADD = ()=>{
        const data = {
            name,
            price
        }
        console.log(data);
        dispatch(postdata(data))
        dispatch(fetchData());
        setName('');
        setPrice("");
    }
    return (
        <div style={{padding:'10px','textAlign':'left'}}>
            <h5>Add Items</h5>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
            <input type="number" value={price} onChange={(e)=>setPrice(e.target.valueAsNumber)} placeholder="Price"/>
            <button onClick={handleADD} className="button2">Add</button>

            
        
        </div>
    )
}