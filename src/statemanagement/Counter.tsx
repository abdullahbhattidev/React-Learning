import useCounter from './store'

const Counter = () => {
  const {counter, increment,decrement}=useCounter()
  return (
    <div>Counter ({counter})
    <button className='btn btn-primary mx-1' onClick={()=> increment()}>increment</button>
    <button className='btn btn-danger mx-1' onClick={()=> decrement()}>Reset</button>
    </div>
  )
}

export default Counter