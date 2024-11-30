import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IFilter } from '../../interfaces'
import { FilterTypes } from '../../enums/categoryEnum'

export interface CategoriesState {
    value: number
}

const initialState: IFilter = { keyword: "", type: FilterTypes.SEARCH }

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (_, action: PayloadAction<IFilter>) => {
            return action.payload
        }
    },
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer