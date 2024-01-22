import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    data: [],
    error: false
}

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    return data.json()
})

const getAllProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    return await data.json()
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false
            state.error = true
        })
    },
    reducers: {
        filterProduct: (state, action) => {
            if (action.payload === '') {
                const products = getAllProducts()
                state.data = products
            } else {
                state.data = state.data.filter((product) => product.title.includes(action.payload))
            }
        }
    }
})

export const { filterProduct } = productSlice.actions
export default productSlice
export const allProducts = state => state.product