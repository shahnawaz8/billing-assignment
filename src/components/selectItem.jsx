import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";

export const SelectItme = ()=>{
    const {items} = useSelector((s)=>s)
    const [id,setId] = useState("");
    const [quantity,setQuantity] = useState('');
    const handleAdd =()=>{
        console.log('items',id,quantity);
        

    }
    return (
        <>
        <div style={{width:'200px',textAlign:'left',border:'1px solid grey',height:'100px',padding:'10px',backgroundColor:'white',margin:'auto'}}>
            <h5>Select Iem</h5>
            <select onChange={(e)=>setId(e.target.value)}>
                {items?.map((el)=><option value={el.id}>{el.name} {el.price}</option>)}
            </select>
            <input type="number" onChange={(e)=>setQuantity(e.target.value)}  placeholder="Quantity"/>
            <button className="button1" onClick={handleAdd}>Add</button>
        </div>
        
        </>
    )
}