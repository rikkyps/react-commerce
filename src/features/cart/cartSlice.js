import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload
            const isItemExist = state.items.findIndex(item => item.id === newItem.id)

            if (isItemExist !== -1) {
                state.items[isItemExist].quantity += 1
                state.items[isItemExist].totalPrice = state.items[isItemExist].quantity * state.items[isItemExist].price
            } else {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
        },

        filterByName: (state, action) => {
            const filter = action.payload
            state.items.filter((item) => item.title === filter);
        }
    }
})

export const { addItemToCart, filterByName } = cartSlice.actions

export default cartSlice

//Selector
export const selectCartItems = state => state.cart.items
//Total kuantitas
export const selectCartTotalItems = state => state.cart.items.reduce((total, item) => total + item.quantity, 0)
//Total items
export const selectCartTotalItems2 = state => state.cart.items.length