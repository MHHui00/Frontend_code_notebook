import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const channelStore = createSlice({
    name: 'channel',
    initialState: {
        channelList: [],
    },
    reducers: {
        setChannelList(state, action) {
            state.channelList = action.payload;
        }
    }
})

const { setChannelList } = channelStore.actions

const fetchChannelList = () => {
    //review ！？ 為什麼這裡可以之間加形參就可以使用dispatch？ dispatch不是屬於redux庫裡的嗎，這裡似乎沒有直接引入redux
    return async (dispatch) => {
        const response = await axios.get('http://geek.itheima.net/v1_0/channels');
        dispatch(setChannelList(response.data.data.channels))
    }
}

export {fetchChannelList};

const channelReducer = channelStore.reducer;
export default channelReducer;