import {react, useState} from 'react';

const Counter = () => {
    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    };

    const rest=()=>{
        setCount(0);
    }


    return(<>
    <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Add</button>
    <button onClick={decrement}>Subtract</button>
    <button onClick={rest}>Reset</button>
    </div>
    
    </>)

};
export default Counter;