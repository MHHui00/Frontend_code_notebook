//review 兄弟組件通過共同父組件傳遞信息
import {useState} from 'react'

function App() {
    const [temp, setTemp] = useState('')
    const getMsg = (msg)=> {
        setTemp(msg);
        console.log(msg);
    }
    return (
        <div>
            father
            <Son1 onSendFatherMsg={getMsg} />
            <Son2 msg={temp} />
        </div>
    )
}

function Son1({ onSendFatherMsg }) {
    const msg = '123'
    return (
        <div>
            i am son1
            <button onClick={()=>onSendFatherMsg(msg)}>send 123 to son2</button>
        </div> 
    )
}
function Son2({ msg }) {

    return (
        <div>
            <p>i am son2.{msg? msg:'i got nothing'}</p>
        </div>
    )
}
export default App;