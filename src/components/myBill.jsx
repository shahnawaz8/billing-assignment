import axios from "axios";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";

export const MyBill = ()=>{
    const {singleItem,q,s,bill_gen} = useSelector((s)=>s);
    const dispatch = useDispatch()
    return (
        <>
        <div className="myBill" style={{'border':'1px solid grey',"textAlign":'left',"padding":'10px'}}>
        <h5>My Bill</h5>
        
        </div>
        
        
        </>
    )
}