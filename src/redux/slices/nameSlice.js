import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'Olive',
}

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateName } = nameSlice.actions

export default nameSlice.reducer
