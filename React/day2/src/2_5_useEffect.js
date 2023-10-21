import {useEffect, useState} from 'react'

function App() {
    const url = 'http://geek.itheima.net/v1_0/channels'
    const [list, setList] = useState([])
    useEffect(()=>{
        //想要做的操作
        async function getList(){
            // const response = (await fetch(url)).json();
            //review JSON.stringify()：这是一个全局函数，用于将JavaScript对象转换为JSON格式的字符串。通常用于将JavaScript对象序列化为字符串，以便在网络传输或存储时使用。
            //review .json()：这是一个用于解析JSON的方法，将从服务器接收的JSON数据（字符串）转换为JavaScript对象。通常用于处理从服务器获取的JSON数据。
            //review fetch 瀏覽器自帶的請求，不需要導入第三方庫。相比axios低級
            const response = await fetch(url);
            const result = await response.json()
            console.log(result);
            setList(result.data.channels)
        }
        getList()
    },[])
    return (
        <div>
            <ul>
                {list.map((ele)=>{
                    return <li key={ele.id}>{ele.name}</li>
                })}
            </ul>
        </div>
    )
}


export default App;