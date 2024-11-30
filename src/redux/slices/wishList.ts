import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProductItem, IWishList } from '../../interfaces'

const initialState: IWishList = {
    products: [],
    isOpen: false
}

export const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        openWishList: (state) => {
            return { ...state, isOpen: true }
        },

        closeWishList: (state) => {
            return { ...state, isOpen: false }
        },

        setWishListProducts: (state, action: PayloadAction<IProductItem[]>) => {
            return { ...state, products: action.payload }
        },

        addToWishList: (state, action: PayloadAction<IProductItem>) => {
            return { ...state, products: [...state.products, { ...action.payload, isInWishlist: true }] }
        },
        
        removeFromWishList: (state, action: PayloadAction<string>) => {
            return { ...state, products: state.products.filter((product: IProductItem) => product.id !== action.payload) }
        },

    },
})

export const { addToWishList, removeFromWishList, setWishListProducts, openWishList, closeWishList } = wishListSlice.actions

export default wishListSlice.reducer