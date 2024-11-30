import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

interface ProductSkeletonProps {
    count: number
}

const ProductSkeleton: React.FC<ProductSkeletonProps> = ({ count }) => {
    return (
        Array(count).fill(0).map((_, index) => (
            <div key={index} className='bg-white shadow-sm w-52 p-3 pb-4 rounded-md ' >
                <Skeleton height={200} />
                <div className="mt-3 ">
                    <Skeleton width={150} />
                    <Skeleton width={100} />
                </div>
            </div>
        ))
    )
}

export default ProductSkeleton