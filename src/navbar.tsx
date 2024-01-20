interface props{
    itemsCount : number;
}

function Navbar({itemsCount}: props){
    return(
        <p>cart items are: {itemsCount}</p>
    )
}
export default Navbar