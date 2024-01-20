interface props {
    items: string [];
    clearitems: () => void;
}

function Cart({items, clearitems}:props) {
    return(
        <>
        <ul>
        {items.map(item => <li>{item}</li>)}
        </ul>
        <button onClick={clearitems}>clear all</button>
        </>
    )
        
}

export default Cart;