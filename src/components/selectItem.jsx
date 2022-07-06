import { useSelector,useDispatch } from "react-redux";

export const SelectItme = ()=>{
    const {items} = useSelector((s)=>s)
    console.log('items',items);
    return (
        <>
        <div style={{width:'200px',textAlign:'left',border:'1px solid grey',height:'100px',padding:'10px',backgroundColor:'white',margin:'auto'}}>
            <h5>Select Iem</h5>
            <select name="" id="">
                <option value="">Book</option>
            </select>
            <input type="text"  placeholder="Quantity"/>
            <button className="button1">Add</button>
        </div>
        
        </>
    )
}