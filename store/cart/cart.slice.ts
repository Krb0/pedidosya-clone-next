import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Item {
  id: number
  price: number
  name: string
}
interface CartSliceState {
  items: Item[]
}
const initialState: CartSliceState = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state: CartSliceState, action: PayloadAction<Item>) => {
      state.items = [...state.items, action.payload]
    },
    remove: (state: CartSliceState, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item: Item) => item.id !== action.payload
      )
    },
    clear: (state: CartSliceState) => {
      state.items = []
    },
  },
})

export const { add, remove, clear } = cartSlice.actions

export default cartSlice
