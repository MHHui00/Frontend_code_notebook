import { create } from 'zustand'

//review zustand: 異步寫法

const zustandStore = create((set) => {
    return {
        channelList: [],
        fetchChannelList: async () => {
            const res = await fetch('http://geek.itheima.net/v1_0/channels')
            const jsonRes = await res.json()    //must
            // console.log(res);
            console.log(jsonRes);

            set({channelList: jsonRes.data.channels})
        }
    }
})

function App() {
    const { channelList, fetchChannelList } = zustandStore()


    return <div>
        <button onClick={fetchChannelList}>fetchChannelList</button>
        <ul>
            {channelList.map(item=><li key={item.id}>{item.name}</li>)}
        </ul>
    </div>
}

export default App;