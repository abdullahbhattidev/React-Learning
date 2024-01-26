import "./App.css";
import List from "./lists";
import Alerts from "./alert-component/alert";
import Buttons from "./button";
import { useEffect, useRef, useState } from "react";
import Like from "./likeButton";
import Message from "./message";
import produce from "immer";
import Cart from "./cart"
import Navbar from "./navbar";
import ExpandableText from "./expandable-text";
import Form from "./form";
import ExpenseTracker from "./expense-tracker";
import Productlist from "./productList";
import Select from "./select";
import axios from "axios";
function App() {

  const [users, setusers]= useState([])
  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {console.log(res)})
  })

return(
  <div>

  </div>
)

  //  const [SelectedCategory,setSelectedCategory]=useState("")
  // const handleSelectedcategory = (SC:string)=> {
  //   setSelectedCategory(SC)
  // }

  // return(
  //   <>
  //   <Select Selectedcategory={handleSelectedcategory}/>
  //   <Productlist category={SelectedCategory}/>
  //   </>
  // )
    
    


  // const refe =useRef<HTMLInputElement>(null)
  // const handleclickevent = ()=> {
  //   if(refe.current) refe.current.focus()
  // }
  // useEffect(handleclickevent)
  // return(
  //   <>
  //   <div ><input ref={refe} style={{margin: 20}} className="form-control" type="text" /></div>
  //   <button onClick={handleclickevent} className="btn btn-primary">submit</button>
  //   </>
    
  // )
  // return(

  //   <ExpenseTracker/>

  //   // <Form/>
  // )
  // return(
  //   <>
  //   <ExpandableText charMax={99}>hello world this is me learning react in typscript and i am following mosh hamadani's react course 
  //   hello world this is me learning react in typscript and i am following mosh hamadani's react course
  //   hello world this is me learning react in typscript and i am following mosh hamadani's react course
  //   hello world this is me learning react in typscript and i am following mosh hamadani's react course
  //   hello world this is me learning react in typscript and i am following mosh hamadani's react course
  //   hello world this is me learning react in typscript and i am following mosh hamadani's react course
  //   hello world this is me learning react in typscript and i am following mosh hamadani's react course
  //   hello world this is me learning react in typscript and i am following mosh hamadani's react course
  //   </ExpandableText>
  //   </>
    
  // )
  



  // const [products,  setproducts] = useState(["bulb", "wirng", "sockets"])

  // return(
  //   <>
  //       <Navbar itemsCount={products.length}/>
  //       <Cart clearitem={(item)=> setproducts(products.filter(products => products !== item ))} items={products}/>
        
  //   </>
        
  // )

// const[bug, setBug] = useState([
//       {id: 1, title:"bug1", fixed: false},
//       {id: 2, title:"bug2", fixed: true}
//     ])

// const handleClick= ()=> {
//   // setBug(bug.map(bugs=> (bugs.id===1? {...bugs, fixed: true} :bugs) ));
//   setBug(produce(draft => {
//    const bugg =  draft.find(bug => bug.id === 1);
//    console.log(bugg);
//     if(bugg) 
//     bugg.fixed = true;
//   }))
  
// }

//   return(
//     <>
//     <button onClick={handleClick}>click me</button>
//     {bug[0].fixed && <p>{bug[0].title}</p>}
//     </>
//   )


// return(
//       <>
//       <p>{bug[0].title}</p>
      
//       <button onClick={handleClick}>click me daddy</button>
//       </>    
//     )

//    const [drink, setDrink] = useState({
//     title: "american",
//     price: 6,
//     address: {
//       street: 2,
//       city: "attock"
//     }
//   })

// const handleClick = ()=> {
    
//       setDrink({...drink, address:{...drink.address, city:"islamabad"}})
//   }

//   console.log(drink)
//   return(
//     <>
//     <p> {drink.address.city} </p>
    
//     <button onClick={handleClick}>click me daddy</button>
//     </>    
//   )

  // const [array, setarray] = useState([" happy ", " sad "])
  // const handleClick = ()=> {
    
  //     setarray([...array, " excited"].filter(item=> 
  //       item!== " happy "
  //       ));
  // }
  // return(
  //   <>
  //   <p> {array} </p>
  //   <button onClick={handleClick}>click me daddy</button>
  //   </>    
  // )
  // New code
  // const [drink, setDrink] = useState({
  //   title: "american",
  //   price: 6
  // })

  // const handleClick = ()=> {
  //   setDrink({...drink, price : 8 })
  // }

  // return(
  //   <>
  //   {/* <p>{drink.price}</p> */}
  //   <button onClick={handleClick}>click me</button>
  //   </>
  // )



  // return(
    // <>
    // <Message/>
    // <Message/>
    // <Message/>
    // </>
  // )

  // let items = ["farncisco", "vegas", "pakistan"]
  // let handleonSelectitem = (item:string) => {
  //   // Construct the URL using template literals
  //   let url = `https://${item}.com/`;
  
  //   // Redirect to the constructed URL
  //   window.location.href = url;
  // };
  // const [ alertVisibility , setAlertVisivility]= useState(false);

//   const [isPerson, setIsPerson] = useState(null);
// const [isLoading, setIsLoading] = useState(false);

// const fetchData = async () => {
//   try {
//     setIsLoading(true);
//     const response = await fetch("https://randommer.io/api/Phone/Generate?CountryCode=US&Quantity=2");
//     const data = await response.json();
//     setIsPerson(data);
//     setIsLoading(false);
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//     setIsLoading(false);
//   }
// };

// const handleClick = () => {
//   fetchData();
// };

// return (
//   <>
//     <button onClick={handleClick}>Click to get name</button>
//     {isLoading ? (
//       <p>The screen is loading</p>
//     ) : isPerson ? (
//       <p>{isPerson}</p>
//     ) : (
//       <p>Click the button to fetch a name</p>
//     )}
//   </>
// );

     
    

      // {/* {alertVisibility && <Alerts onClose={()=> {setAlertVisivility(false)}}></Alerts> }
      // <Like/>
      // <Buttons buttonType="btn-primary" buttonName="primary" onpressed = {()=> {setAlertVisivility(true)}}
      // ></Buttons> */}

      // {/* <List items= {items} onSelectitem = {handleonSelectitem} /> */}
      // {/* // <List items={["item4", "item5", "item6"]} /> */}
  
}

export default App;
