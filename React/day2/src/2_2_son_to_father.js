
//review 子向父傳遞參數
import {useState} from 'react'
function Son({ onSendFatherMsg }) {
    const msg = 'msg from son'
    return (
        <div>
            i am son
            {/* review key: 在自組件調用父組件的函數 */}
            <button onClick={() => onSendFatherMsg(msg)}>click to send Msg</button>
        </div>
    )
}

function App() {
    //1. 
    // const getMsg = (msg) => console.log(msg);

    //2. 
    const [msgFromSon, setMsgFromSon] = useState('')
    const getMsg = (msg) => {
        console.log(msg)
        setMsgFromSon(msg)
    };
    return (
        <div>
            <p>i am father. i got:{msgFromSon? msgFromSon:'Nothing'}</p>

            {/* review  接收子組件的參數名一般 ‘on’開頭*/}
            <Son onSendFatherMsg={getMsg} />
        </div>
    )
}

export default App;