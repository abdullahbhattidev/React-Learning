import { useEffect, useRef, useState } from "react"

interface props
{
    category: string
}

function Productlist({category}: props) {
    const [products, setproducts]= useState<string[]>([])
    
    useEffect(()=> {
        if(category === "snacks") setproducts(["cookies","chips", "juices"])
        else if(category === "grocery")  setproducts(["milk","oil", "coco powder"])
        
        return setproducts(["no product to show"]) 
        
    },[category])
    
    return(
        <div>
          {products.map(i => <p>{i}</p>)}  
        </div>
    )
}
export default Productlist