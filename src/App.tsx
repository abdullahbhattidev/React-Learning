import "./App.css";
import List from "./lists";
import Alerts from "./alert-component/alert";
import Buttons from "./button";
import { useState } from "react";
import Like from "./likeButton";
import Message from "./message";
function App() {

  const [array, setarray] = useState([" happy ", " sad "])
  const handleClick = ()=> {
    setarray([...array, " excited"])
    console.log(array)
    // setarray([...array.filter(item=> 
    //   item!== " happy "
    //   )])
  }
  return(
    <>
    <p> {array} </p>
    <button onClick={handleClick}>click me daddy</button>
    </>    
  )
  
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

     
    

      {/* {alertVisibility && <Alerts onClose={()=> {setAlertVisivility(false)}}></Alerts> }
      <Like/>
      <Buttons buttonType="btn-primary" buttonName="primary" onpressed = {()=> {setAlertVisivility(true)}}
      ></Buttons> */}

      {/* <List items= {items} onSelectitem = {handleonSelectitem} /> */}
      {/* // <List items={["item4", "item5", "item6"]} /> */}
  
}

export default App;
