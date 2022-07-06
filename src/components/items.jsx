import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";

export const Items = ()=>{
    const {items} = useSelector((s)=>s)
    return (
        <div className="items" style={{"textAlign":'left',"padding":'10px','border':'1px solid grey'}}>
        <h5>Items</h5>
        {items?.map((el)=><div key={el.id}>{el.name}</div>)}
        
        </div>
    )
}