import ProductsList from "../ui/ProductsList"
import WishList from "../ui/WishList"
import { SkeletonTheme } from 'react-loading-skeleton';


const Main = ({ layoutPaddings }: { layoutPaddings: string }) => {
    return (
        <SkeletonTheme baseColor="#ececec" highlightColor="#cfcfcf">
            <main className={`${layoutPaddings} mx-auto min-h-[calc(100svh-10rem)] flex-grow flex justify-center items-start max-w-[2000px]`}>
                <ProductsList />
                <WishList />
            </main>
        </SkeletonTheme>

    )
}

export default Main