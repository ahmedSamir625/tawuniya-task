import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { IFilter, IProductItem } from "../../interfaces";
import { setProducts } from "../../redux/slices/productsSlice";
import { FilterTypes } from "../../enums/categoryEnum";
import ProductSkeleton from "../skeletons/ProductSkeleton";
import EmptyState from "./EmptyState";

const ProductsList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: { products: IProductItem[] }) => state.products);
    const filter = useSelector((state: { filter: IFilter }) => state.filter);

    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3000/products');
            const data = await response.json();
            dispatch(setProducts(data));
            setIsLoading(false);
        } catch (error) {
            console.error('Fetch error:', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const filteredProducts = products.filter((product: IProductItem) => {
        if (filter.type === FilterTypes.SEARCH) {
            return product.name.toLowerCase().includes(filter.keyword.toLowerCase());
        }
        else if (filter.type === FilterTypes.CATEGORY && filter.keyword !== "") {
            return product.category === filter.keyword;
        }
        return products
    });

    const displayProducts = () => {
        return <>
            {
                filteredProducts.length
                    ? <div className="py-4 grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {
                            filteredProducts.map((product: IProductItem) => (
                                <ProductItem key={product.id} product={product} />
                            ))
                        }
                    </div>
                    : <EmptyState message="No products found" />
            }
        </>
    }

    return (
        <>
            {
                isLoading
                    ? <div className="py-4 grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        <ProductSkeleton count={12} />
                    </div>
                    : displayProducts()
            }
        </>
    );
};

export default ProductsList;