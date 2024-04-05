import { useRef, useState } from 'react'
import newData from './hooks/useMutation'

const AddNewData = () => {
  const [endpoint, setendpoint] = useState<string>("Select the category")
  const ref = useRef<HTMLInputElement>(null)
  const addNewData = newData(endpoint);
  return (
    <>
        <form onSubmit={(event)=>
        {
            event.preventDefault();
            addNewData.mutate({
                userId: 1,
                id: 0,
                title: ref.current?.value,
                completed: false
            });
            
        }  
    }>
        <label className="ms-3" htmlFor="">add new todo/post</label>
        <input ref={ref} className='form-control ms-3' type="text" />
        <button className='btn btn-primary ms-3'>{addNewData.isLoading? "saving": "add"}</button>

        <select required className='custom-select ms-3' onChange={(e) => setendpoint(e.target.value) }>
            <option>Select the category</option>
            <option  value="todos">Todos</option>
            <option value="posts">Posts</option>
        </select>
    </form>
    {addNewData.error && <p className='ms-3'>{addNewData.error.message}</p>}
    </>
    
  )
}

export default AddNewData