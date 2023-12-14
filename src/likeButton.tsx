import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

function Like() {
    const[like, setlike] = useState(false)
    const [filledLike, setFilledLike] = useState(true)
     return(
        <>
        
            { filledLike && <CiHeart size={30} onClick={()=>{setlike(true); setFilledLike(false)}} />}
            
            {like && <FaHeart size={25} style={{fill: "red"}} onClick={()=> {setFilledLike(true); setlike(false)}}/>}
        </>
    
    )
}
export default Like