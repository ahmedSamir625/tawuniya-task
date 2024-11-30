import { Category, FilterTypes } from "./enums/categoryEnum"

export interface IProductItem {
    id: string
    name: string
    price: number
    category: Category
    isInWishlist?: boolean
}

export interface ICategoryItem {
    id: string
    name: string
}

export interface IFilter {
    keyword: string,
    type: FilterTypes
};

export interface IWishList {
    products: IProductItem[]
    isOpen: boolean
}