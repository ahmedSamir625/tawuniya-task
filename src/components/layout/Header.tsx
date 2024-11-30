import { BsHeart } from "react-icons/bs"
import CategoriesList from "../ui/CategoriesList"
import SearchInput from "../ui/SearchInput"
import { useDispatch } from "react-redux";
import { openWishList } from "../../redux/slices/wishList";

const Header = ({ layoutPaddings }: { layoutPaddings: string }) => {

    const dispatch = useDispatch();

    return (
        <>
            <header className={`${layoutPaddings} bg-yellow-400 min-h-12 py-2 flex flex-col gap-5 content-center items-center md:flex-row md:justify-between md:items-center `}>
                <h1 className="text-2xl font-bold">Tawuniya App</h1>
                <div className="flex gap-5">
                    <SearchInput />
                    <button onClick={() => dispatch(openWishList())} className="border-l border-l-yellow-500 pl-3 flex items-center gap-2 hover:text-gray-600">
                        <span>Wishlist</span>
                        <BsHeart size={24} />

                    </button>
                </div>
            </header>
            <CategoriesList additionalCLasses={layoutPaddings} />
        </>

    )
}

export default Header