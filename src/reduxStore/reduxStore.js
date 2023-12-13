import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./auth"
import expenseSlice from "./expense"

const reduxStore=configureStore({
    reducer:{
        auth:authSlice.reducer,
        exp:expenseSlice.reducer,
    }
})
export default reduxStore