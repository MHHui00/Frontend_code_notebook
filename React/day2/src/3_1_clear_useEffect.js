import { useEffect, useState } from 'react'
function App() {
    const [state, setState] = useState(true)
    const closeSon = ()=>{
        setState(false)
    }
    return (
        <div>
            {/* review 點擊時，卸載Son模塊 。 但卸載後，裡面的操作沒有結束（例如定時器）*/}
            {state&&<Son/>}
            <button onClick={closeSon}>change num</button>
        </div>
    )
}

function Son(){
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('using interval function');
        }, 1000);

        //review 關閉副作用函數裡的操作
        return ()=>{
            clearInterval(timer)
        }
    },[])
    return <p>son running</p>
}


export default App;