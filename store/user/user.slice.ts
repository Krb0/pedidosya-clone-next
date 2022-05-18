import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  address: string
}
const initialState: User = { address: '' }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAddress: (state: User, action: PayloadAction<string>) => {
      state.address = action.payload
    },
  },
})

export const { setAddress } = userSlice.actions

export default userSlice
