import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
import { getTokenKey, setTokenKey, removeItem } from "@/utils";


const userStore = createSlice({
    name: 'user',
    initialState: {
        // token 持續化
        //getToken（）。加個括號調用！！
        token: getTokenKey() || 'qwe',
        userInfo: {}
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
            //review token 持續化
            setTokenKey(action.payload.token);
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload;
        },
        clearUserInfo(state) {
            state.userInfo = {};
            state.token = '';
            removeItem();
        }
    }
})

const { setToken, setUserInfo, clearUserInfo } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const response = await request.post('/authorizations', loginForm)
        dispatch(setToken(response.data))
    }
}

const fetchUserInfo = () => {
    return async (dispatch) => {
        const response = await request.get('/user/profile')
        dispatch(setUserInfo(response.data))
    }
}


export { setToken, fetchLogin, fetchUserInfo, clearUserInfo };
export default userReducer;