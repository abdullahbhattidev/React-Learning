import { useState } from "react"
import { useForm } from "react-hook-form"
import { object } from "zod"

interface formData{
    description: string,
    amount: number,
    category: string,
}

function ExpenseTracker(){
    const {register, handleSubmit, formState: {errors}, reset}=useForm<formData>()
    const[entry, setentry] = useState<formData[]>([])
    const totalAmount = entry.map(e => e.amount)
    const newTotal = totalAmount.map(Number)
    const total = newTotal.reduce((a,c)=> a+c,0)
    return(
        <>
        <form action="submit" onSubmit={handleSubmit((data) => {
            console.log(data)
            setentry(entry => [...entry,data])
            reset();
            })}>
            <div className="form-container">
                <div className="mb-3">
                    <label className="form-label" htmlFor="description">Description</label>
                    <input {...register("description", {minLength: 3, required:true})} className="form-control" id= "description" type="text" />
                    {(errors.description?.type ==="required" || errors.description?.type ==="minLength") && <p className="text-danger">this field is required and should be atleast 3 characters</p>}
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="amount">Amount</label>
                    <input  {...register("amount", {required:true})} className="form-control" id= "amount" type="number" />
                    {errors.amount?.type ==="required" && <p className="text-danger">this field is required</p>}
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="category">category</label>
                    <select  {...register("category", {required:true} )} className="form-control custom-select" id="category">
                        <option selected></option>
                        <option value="Groceries">Groceries</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>
                    {errors.category?.type ==="required" && <p className="text-danger">this field is required</p>}
                    
                </div>
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
        <div className="filter-select">
                    <select   className="form-control custom-select" id="category">
                                    <option selected>All Categories</option>
                                    <option value="Groceries">Groceries</option>
                                    <option value="Utilities">Utilities</option>
                                    <option value="Entertainment">Entertainment</option>
                    </select>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Category</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {entry.map((e, index)=> 
                            <tr key={index}>
                                <td>{e?.description}</td>
                                <td>${e?.amount}</td>
                                <td>{e?.category}</td>
                                <td> <button onClick={(row) => setentry(entry.filter(row => row !== e))} className="btn btn-danger">Delete</button></td>
                            </tr> )}
                        
                            <tr>
                                <td>Total</td>
                                <td>
                                ${total}
                                </td>
                                <td></td>
                                <td></td>

                            </tr>
                            
                            
                        </tbody>
                    </table>
        </div>
        

        </>
        
        
    )
}

export default ExpenseTracker