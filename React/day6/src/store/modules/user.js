import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
import { getTokenKey, setTokenKey } from "@/utils";

const userStore = createSlice({
    name: 'user',
    initialState: {
        // token 持續化
        //getToken（）。加個括號調用！！
        token: getTokenKey() || 'qwe'
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
            //review token 持續化
            setTokenKey(action.payload.token)
        }
    }
})

const { setToken } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const response = await request.post('/authorizations', loginForm)
        dispatch(setToken(response.data))
    }
}


export { setToken, fetchLogin };
export default userReducer;