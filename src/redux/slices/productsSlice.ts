import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProductItem } from '../../interfaces'



const initialState: IProductItem[] = []

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (_, action: PayloadAction<IProductItem[]>) => {
            return action.payload
        },

        markProductAsWished: (state, action: PayloadAction<{ id: string, isWished: boolean }>) => {
            return state.map((product: IProductItem) => {
                if (product.id === action.payload.id) {
                    return { ...product, isInWishlist: action.payload.isWished }
                }
                return product
            })
        }
    },
})

export const { setProducts, markProductAsWished } = productSlice.actions

export default productSlice.reducer