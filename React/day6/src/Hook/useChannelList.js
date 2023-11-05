import { request } from "@/utils";
import { useEffect, useState } from "react";

//review !!!!自定義Hook函數。 例如列表渲染等重複的工作，直接return 需要用到的變量，最後解構即可使用

const useChannelList = () => {
    const [channelList, setChannelList] = useState([]);
    useEffect(() => {
        //declear a function; then call it
        const getChannelList = async () => {
            const response = await request.get('/channels');
            setChannelList(response.data.channels)
        }
        getChannelList();
    }, [])

    return{
        channelList,
        setChannelList
    }
}

export { useChannelList };