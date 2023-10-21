import { useEffect, useState } from 'react'
function App() {
    const [num, setNum] = useState(0)
    // const [list, setList] = useState([1])
    //review useEffect 依賴項的不同情況
    //1.依賴項為空：初始渲染運行一次；有任何組件更新觸發運行（任何狀態變量的變化）
    // useEffect(() => {
    //     console.log('called 副作用函數 side effect function');
    // },)

    //2. 依賴項為空：只有初始渲染運行一次
    // useEffect(() => {
    //     console.log('called 副作用函數 side effect function');
    // },[])

    //3. 傳入其他依賴項： 初始一次 ； 依賴項發生變化觸發運行
    useEffect(() => {
        console.log('called 副作用函數 side effect function');
    },[num])



    return (
        <div>
            button
            <button onClick={() => setNum(num + 1)}>change num</button>
            {/* <button onClick={() => setList([...list, 1])}>change list</button> */}
        </div>
    )
}


export default App;