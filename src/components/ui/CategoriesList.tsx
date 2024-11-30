import { useDispatch, useSelector } from "react-redux";
import { ICategoryItem, IFilter } from "../../interfaces";
import { useEffect, useState } from "react";
import { setCategories } from "../../redux/slices/categoriesSlice";
import { setFilter } from "../../redux/slices/filterSlice";
import { FilterTypes } from "../../enums/categoryEnum";
import CategorySkeleton from "../skeletons/CategorySkeleton";


interface CategoriesListProps {
    additionalCLasses: string;
}

const CategoriesList: React.FC<CategoriesListProps> = ({ additionalCLasses }) => {

    const dispatch = useDispatch();
    const categories = useSelector((state: { categories: ICategoryItem[] }) => state.categories);
    const filter = useSelector((state: { filter: IFilter }) => state.filter);
    const [isLoading, setIsLoading] = useState(false)


    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('http://localhost:3000/categories');
            const data = await response.json();
            dispatch(setCategories(data));
            setIsLoading(false);
        } catch (error) {
            console.error('Fetch error:', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const displayCategories = () => {
        return <>
            {
                categories.length ? <div onClick={() => dispatch(setFilter({ keyword: "", type: FilterTypes.CATEGORY }))} className={`h-full min-w-fit w-full text-center cursor-pointer hover:bg-slate-100 content-center px-6 ${(filter.type === FilterTypes.CATEGORY ? filter.keyword : "") === '' ? 'bg-slate-200' : ''}`}>
                    {`All`}
                </div> : <></>
            }
            {
                categories.map((category: ICategoryItem) => (
                    <div onClick={() => dispatch(setFilter({ keyword: category.id, type: FilterTypes.CATEGORY }))} key={category.id} className={`h-full min-w-fit w-full text-center cursor-pointer hover:bg-slate-100 content-center px-6 ${(filter.type === FilterTypes.CATEGORY ? filter.keyword : "") === category.id ? 'bg-slate-200' : ''}`}>
                        {category.name}
                    </div>
                ))
            }
        </>
    }

    return (
        <div className={`${additionalCLasses} overflow-hidden  bg-white shadow-md`}>
            <div className="flex justify-around  h-10 overflow-x-scroll overflow-y-hidden no-scrollbar">
                {
                    isLoading
                        ? <CategorySkeleton count={10} />
                        : displayCategories()
                }
            </div>
        </div>
    )
}

export default CategoriesList