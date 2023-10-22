import { useState } from 'react'

//review capsulation，一般use開頭

function useToggle(){
    const [state, setState] = useState(true)
    const toggle = ()=>{setState(!state)}
    return{
        state,
        toggle
    }
}


function App() {
    // const [state, setState] = useState(true)
    // const toggle = ()=>{setState(!state)}

    //解構取得hook 的返回
    const {state, toggle} = useToggle();

    return (
        <div>
            {state&&<Son/>}
            <button onClick={toggle}>toggle div</button>
        </div>
    )
}

function Son(){
    return <div style={{with: '100px', height: "100px", backgroundColor: 'pink'}}></div>
}


//review hook必須在組件內部使用，且位於組件的頂層  useRef, useState, useEffect
//筆記中容易吧組件和模塊混淆使用，其實代表同一個東西
export default App;