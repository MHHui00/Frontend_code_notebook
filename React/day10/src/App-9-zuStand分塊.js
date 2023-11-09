import { create } from 'zustand'

//review zustand: 分塊寫法。 相當於redux的slice

//1. 把原本return裡的東西抽出來：
const createChannelListStore = (set)=>{
    return{
        channelList: [],
        fetchChannelList: async () => {
            const res = await fetch('http://geek.itheima.net/v1_0/channels')
            const jsonRes = await res.json()    //must
            // console.log(res);
            console.log(jsonRes);

            set({channelList: jsonRes.data.channels})
        }
    }
}

const zustandStore = create((...a) => { //這裡的...a 是一種格式要求
    return {
        ...createChannelListStore(...a) //2. 加（）運行塊，用展開運算符...展開return的東西。   這裡的...a 是一種格式要求
        //有多個store，則在這繼續加咯 
    }
})

function App() {
    //3. 切不切片在使用方法上沒區別
    const { channelList, fetchChannelList } = zustandStore()


    return <div>
        <button onClick={fetchChannelList}>fetchChannelList</button>
        <ul>
            {channelList.map(item=><li key={item.id}>{item.name}</li>)}
        </ul>
    </div>
}

export default App;