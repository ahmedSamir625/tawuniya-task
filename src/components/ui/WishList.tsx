import { useDispatch, useSelector } from "react-redux";
import { IProductItem, IWishList } from "../../interfaces";
import { useEffect, useState } from "react";
import { closeWishList, setWishListProducts } from "../../redux/slices/wishList";
import ProductItem from "./ProductItem";
import { CgClose } from "react-icons/cg";
import ProductSkeleton from "../skeletons/ProductSkeleton";
import EmptyState from "./EmptyState";

const WishList = () => {

    const dispatch = useDispatch();
    const products = useSelector((state: { wishList: IWishList }) => state.wishList.products);
    const isOpen = useSelector((state: { wishList: IWishList }) => state.wishList.isOpen);
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        setIsLoading(true);
        try {
            setIsLoading(false);
            const response = await fetch('http://localhost:3000/wishlist');
            const data = await response.json();
            dispatch(setWishListProducts(data));
        } catch (error) {
            console.error('Fetch error:', error);
            setIsLoading(false);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {
                isOpen && <div className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center ">
                    <div className=" bg-slate-100 rounded-lg shadow-lg w-[90%] max-w-[800px] max-h-[calc(100svh-5rem)] p-8">
                        <header className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold">
                                Wish List
                            </h3>
                            <button onClick={() => dispatch(closeWishList())}><CgClose size={28} /></button>

                        </header>
                        {
                            products.length
                                ? <div className="flex flex-wrap justify-center gap-3 max-h-[calc(100svh-10rem)] pb-5 overflow-y-scroll" >
                                    {
                                        isLoading
                                            ? <ProductSkeleton count={3} />
                                            : products.map((product: IProductItem) => <ProductItem product={product} key={product.id} />)
                                    }
                                </div>
                                : <EmptyState message="No products in your wishlist" />
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default WishList