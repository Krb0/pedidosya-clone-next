import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart/cart.slice'
import userSlice from './user/user.slice'

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
