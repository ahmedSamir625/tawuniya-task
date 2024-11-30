import { BsHeart, BsHeartFill } from "react-icons/bs"
import { IProductItem } from "../../interfaces"
import { useDispatch } from "react-redux";
import { markProductAsWished } from "../../redux/slices/productsSlice";
import { addToWishList, removeFromWishList } from "../../redux/slices/wishList";


interface ProductProps {
  product: IProductItem
}

const ProductItem: React.FC<ProductProps> = ({ product }) => {

  const dispatch = useDispatch();

  const handleAddToWishListClick = () => {
    if (product.isInWishlist) {
      dispatch(markProductAsWished({ id: product.id, isWished: false }))
      dispatch(removeFromWishList(product.id))

    }
    else {
      dispatch(markProductAsWished({ id: product.id, isWished: true }))
      dispatch(addToWishList(product))
    }
  }

  return (
    <div className='bg-white shadow-sm w-52 p-3 pb-4 rounded-md ' >

      <img className="w-full rounded-md bg-slate-100 p-2" src="/src/assets/react.svg" alt="product" />

      <div className="mt-3 relative">
        <h2 className="text-md">{product.name}</h2>
        <h4 className="text-xs font-extralight text-gray-400">EGP <span className="font-bold text-xl text-black" >{Number(product.price).toFixed(2)}</span></h4>
        <button onClick={handleAddToWishListClick} className="bg-white px-2 py-1 rounded-md absolute -top-7 right-2 shadow-md w-10 h-10 flex justify-center items-center hover:shadow-lg transform transition-transform duration-200 hover:scale-110">
          {
            product.isInWishlist ? <BsHeartFill size={24} className="text-red-500" /> : <BsHeart size={24} />
          }
        </button>
      </div>
    </div>
  )
}

export default ProductItem