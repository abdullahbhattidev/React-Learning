import { useRef, useState } from "react";

function Form(){
    // const name = useRef<HTMLInputElement>(null)
    // const age = useRef<HTMLInputElement>(null)
    // const person = {
    //     name: "",
    //     age: 0,
    // }
    const [person, setperson] = useState({
        name: "",
        age: 0
    })

    return(
        <form id="submit-form" action="submit" onSubmit={(e)=> {
            e.preventDefault();
            // if(name.current!== null)
            // person.name = name.current?.value;
            // if(age.current!== null)
            // person.age = parseInt(age.current?.value);
            console.log(person)
        }}>
            <div className="inner-content">
            <div className="mb-3">
                <label className="form-label" htmlFor="name">NAME</label>
                <input value={person.name} onChange={(e) => setperson({...person, name: e.target.value})} id="name" className="form-control" type="text" />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="age">AGE</label>
                <input value={person.age} onChange={(e) => setperson({...person, age: parseInt(e.target.value)})}  id="age" className="form-control" type="number" />
            </div>
            <button className="btn btn-primary">Submit</button>
            </div>
            
        </form>
    )
}

export default Form