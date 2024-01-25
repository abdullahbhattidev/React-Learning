import { useState } from "react"
import Productlist from "./productList"

function Select(){
     const [selected,setSelected]=useState("")
    return(
        <>
        <select onChange={(e)=> setSelected(e.target.value) } className="form-control">
            <option value=""></option>
            <option value="snacks">snacks</option>
            <option value="grocery">grocery</option>
        </select>
        <Productlist category={selected}/>
        </>
        
    )
}
export default Select