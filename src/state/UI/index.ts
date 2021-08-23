import { createSlice } from '@reduxjs/toolkit'

const initialState: UIState = {
  syncSheet: false,
  aboutModal: false,
  addModal: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setUI: (state, action) => {
      return { ...state, [action.payload.uiElement]: action.payload.value }
    },
  },
})

export const { setUI } = uiSlice.actions
export default uiSlice.reducer
