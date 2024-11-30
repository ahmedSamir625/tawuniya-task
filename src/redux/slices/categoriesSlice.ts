import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICategoryItem } from '../../interfaces'

export interface CategoriesState {
    value: number
}

const initialState: ICategoryItem[] = []

export const counterSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (_, action: PayloadAction<ICategoryItem[]>) => {
            return action.payload
        }
    },
})

export const { setCategories } = counterSlice.actions

export default counterSlice.reducer