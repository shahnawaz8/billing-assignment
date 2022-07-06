import { SelectItme } from "./selectItem"
import './main.css'
import { NewBill } from "./newBill"
import { Items } from "./items"
import { MyBill } from "./myBill"
import { Sales } from "./sales"
import { AddItem } from "./addItems"
export const Main = ()=>{
    return (
        <>
        <div>
            <SelectItme/>
        </div>
        <div className="container">
                <div className="main">
                    <NewBill/>
                    <Items/>
                    <MyBill/>
                    <Sales/>
                </div>
                <div className="additems">
                    <AddItem/>
                </div>

        </div>

        
        
        </>
    )
}