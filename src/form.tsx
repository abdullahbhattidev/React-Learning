import { useRef, useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod"

const schema = z.object({
    name: z.string().min(3).startsWith("_"),
    age: z.number().min(18).max(40)
});
type formData = z.infer<typeof schema>


function Form(){

     const {register, handleSubmit, formState: {errors, isValid}} = useForm <formData> ({resolver: zodResolver(schema)})
     console.log(useForm())
    return(
        <form id="submit-form" action="submit" onSubmit={handleSubmit(e => console.log(e))}>
            <div className="inner-content">
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">NAME</label>
                    <input {...register("name")} id="name" className="form-control" type="text" />
                {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="age">AGE</label>
                    <input {...register("age", {valueAsNumber: true})}  id="age" className="form-control" type="number" />
                    {errors.age && <p>{errors.age.message}</p>}
                    
                </div>
                <button  className="btn btn-primary">Submit</button>
            </div>
            
        </form>
    )
}

export default Form

//--------------old code----------
// {/* <input {...register("name", {required: true, minLength: 5})} id="name" className="form-control" type="text" />
// {errors.name?.type === "required" &&<p className="text-danger"> the field is required</p>}
// {errors.name?.type === "minLength" &&<p className="text-danger">the text must be more than 5 characters</p>}

// <input {...register("age",{required: true, min: 18, max: 40})}  id="age" className="form-control" type="number" />
//                 {errors.age?.type === "required"  &&<p className="text-danger"> the field is required</p>}
//                 {errors.age?.type === "min"  &&<p className="text-danger"> enter the age equals to or above 18</p>}
//                 {errors.age?.type === "max"  &&<p className="text-danger"> enter the age equals to or below 40</p>} */}

// interface formData = {
//     name: string;
//     age: number;
// } 
// const name = useRef<HTMLInputElement>(null)
    // const age = useRef<HTMLInputElement>(null)
    // const person = {
    //     name: "",
    //     age: 0,
    // }
    // const [person, setperson] = useState({
    //     name: "",
    //     age: 0
    // })

      // (e)=> {
            // e.preventDefault();
            // if(name.current!== null)
            // person.name = name.current?.value;
            // if(age.current!== null)
            // person.age = parseInt(age.current?.value);
            // console.log(person)
        // }
        // <input value={person.name} onChange={(e) => setperson({...person, name: e.target.value})} id="name" className="form-control" type="text" />
        // <input value={person.age} onChange={(e) => setperson({...person, age: parseInt(e.target.value)})}  id="age" className="form-control" type="number" />
