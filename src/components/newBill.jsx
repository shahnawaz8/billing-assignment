import axios from "axios";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { billgen } from "../redux/Action";

export const NewBill = ()=>{
    const dispatch = useDispatch();
    const {singleItem,q,s} = useSelector((s)=>s);
    
    
    const handleGen =()=>{
        const datasingle = {
            name:singleItem.name,
            price:singleItem.price*(+q),
            q:q
        }
        console.log(datasingle);
        axios.post("https://my-json-server-masai.herokuapp.com/bills",datasingle)
        .then((res)=>{
            dispatch(billgen(res.data));
            alert("bill generated succesfully");
        })
    }
    return (
        <div className="newBill" style={{'border':'1px solid grey',"textAlign":'left',"padding":'10px'}}>
        <h5>New Bill <span style={{'float':'right'}} onClick={handleGen}>Generate Bill</span></h5>
        {s?<div>{singleItem.name} <span style={{'float':'right'}}>Rs {singleItem.price*(+q)!="NAN"?singleItem.price*(+q):""}</span></div>:""}

       {s?<dir className='total'>Amount: Rs. {singleItem.price*(+q)} <span>Total Items 1</span></dir>:""}

        </div>
    )
}