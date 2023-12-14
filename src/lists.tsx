import React, { useState } from "react";
interface props{
    items : string[];
    onSelectitem: (item:string)=> void;
}

function List({items, onSelectitem} : props) {
    const [selectedIndex, setSelectedIndex] = useState(-1); // Corrected state initialization

    return (
        <div>
            <ul className="list-group">
                {items.length === 0 && <p>no items found</p>}
                {items.map((item, index) => (
                    <li
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index); 
                            onSelectitem(item)
                        }} // Update state using setSelectedIndex
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
