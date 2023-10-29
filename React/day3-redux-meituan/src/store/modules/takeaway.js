import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        foodsList: [],
        activeIndex: 0,
        cartList: [],
    },
    reducers: {
        setFoodsList(state, action) {
            state.foodsList = action.payload;
        },
        //2
        setActiveIndex(state, action) {
            state.activeIndex = action.payload;
        },
        //3
        setCartList(state, action) {
            //review 2.2 數組的find方法，返回第一個符合條件的元素。若購物車中若有存在的物品。則數量+1，否則push整個payload到購物車
            const found = state.cartList.find(item => item.id === action.payload.id);
            if (found) {
                found.count++;
            } else {
                state.cartList.push(action.payload)
            }
        },
        //4
        increaseCartItem(state, action) {
            // console.log(action.payload.id);
            const item = state.cartList.find(item => item.id === action.payload.id)
            item.count++;

        },
        decreaseCartItem(state, action) {
            const item = state.cartList.find(item => item.id === action.payload.id)
            if (item.count === 1) {
                const index = state.cartList.indexOf(item)
                state.cartList.splice(index, 1);
                return
            } else {
                item.count--;
            }
        },
        clearCart(state) {
            state.cartList = [];
        }
    },
})

const { setFoodsList, setActiveIndex, setCartList, increaseCartItem, decreaseCartItem, clearCart } = foodsStore.actions;

const fetchFoodsList = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3004/takeaway');
        dispatch(setFoodsList(response.data));
    }
}

export { fetchFoodsList, setActiveIndex, setCartList, increaseCartItem, decreaseCartItem, clearCart };

const foodReducer = foodsStore.reducer;
export default foodReducer;
