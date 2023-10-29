import {configureStore} from '@reduxjs/toolkit'
import foodReducer from './modules/takeaway'

const store = configureStore({
    reducer: {
        foods: foodReducer,
    }
})

export default store;
