import { useState, useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchData, fetchSingleData } from "../redux/Action";

export const SelectItme = ()=>{
    const {items,newBill} = useSelector((s)=>s)
    const dispatch = useDispatch();
    const [id,setId] = useState("");
    const [toggle,setToggle] = useState(false);
    const [quantity,setQuantity] = useState('');
    useEffect(()=>{
        dispatch(fetchData())
    },[toggle])
    const handleAdd =()=>{
        if(quantity>0){
            console.log('items',id,quantity);
            dispatch(fetchSingleData(id,quantity));
        }
        else{
            return alert("Quantity cannot be less than 1")
        }

console.log("new bill",newBill);
    }
    return (
        <>
        <div style={{width:'200px',textAlign:'left',border:'1px solid grey',height:'100px',padding:'10px',backgroundColor:'white',margin:'auto'}}>
            <h5>Select Iem</h5>
            <select onClick={()=>setToggle(true)} onChange={(e)=>setId(e.target.value)}>
                {items?.map((el)=><option value={el.id}>{el.name} {el.price}</option>)}
            </select>
            <input type="number" onChange={(e)=>setQuantity(e.target.value)}  placeholder="Quantity"/>
            <button className="button1" onClick={handleAdd}>Add</button>
        </div>
        
        </>
    )
}