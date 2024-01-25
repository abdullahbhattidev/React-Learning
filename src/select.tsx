import { useState } from "react"
import Productlist from "./productList"

interface props {
    Selectedcategory: (e:string) => void
}

function Select({Selectedcategory}: props){
     const [selected,setSelected]=useState("")
     Selectedcategory(selected)
    return(
        <>
        <select onChange={(e)=> setSelected(e.target.value) } className="form-control">
            <option value=""></option>
            <option value="snacks">snacks</option>
            <option value="grocery">grocery</option>
        </select>
        </>
        
    )
}
export default Select