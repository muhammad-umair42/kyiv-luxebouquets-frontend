import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  navOpen: false,
  cartOpen: false,
}

export const interactionSlice = createSlice({
  name: "interaction",
  initialState,
  reducers: {
    setNavOpen: state => {
      state.navOpen = !state.navOpen
    },
    setCartOpen: state => {
      state.cartOpen = !state.cartOpen
    },
  },
})

export const { setCartOpen, setNavOpen } = interactionSlice.actions
export default interactionSlice.reducer
