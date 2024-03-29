import React, { ReactNode, useState } from "react"

interface props {
    children: string;
    charMax?: number;
}
function ExpandableText({children, charMax =150}: props){
    const [istext, setistext]= useState(children.slice(0, charMax ));
    let buttonText = "show";
    istext.length !== children.length? buttonText= "show": buttonText= "less"
    return(
        <>
        <p> {istext}
        <button 
        onClick={()=> setistext(istext.length !== children.length? children : children.slice(0, charMax ) )}>
        {buttonText}
        </button> 
        </p>
        </>
        
    )

}

export default ExpandableText