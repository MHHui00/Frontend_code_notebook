import {configureStore} from '@reduxjs/toolkit'
import reducer from './modules/counterStore'
import channelReducer from './modules/channel';

const store = configureStore({
    reducer: {
        //review 個人理解：state.MustBeSame：   MustBeSame相當於一個標記，找到標記對應的“reducer”， 回到這個“reducer”的模塊，返回他的initialState。 initialState是個類，所以需要解構獲取狀態的值。
        MustBeSame: reducer,
        qwe: channelReducer,
    }
})

export default store;