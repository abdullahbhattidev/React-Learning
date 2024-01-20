interface props {
    items: string [];
    clearitem: (item: string) => void;
}

function Cart({items, clearitem}:props) {
    return(
        <>
        <ul>
        {items.map(item => <li style={{padding: 5}} key={item}>{item} <button onClick={() => clearitem(item)}>delete</button></li>)}
        </ul>
        </>
    )
        
}

export default Cart;