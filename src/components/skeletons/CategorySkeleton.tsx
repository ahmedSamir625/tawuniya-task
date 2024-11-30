import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

interface CategorySkeleton {
    count: number
}

const CategorySkeleton: React.FC<CategorySkeleton> = ({ count }) => {
    return (
        Array(count).fill(0).map((_, index) => (
            <div key={index} className='mr-4     content-center'>
                <Skeleton height={20} width={100} />
            </div>
        ))
    )
}

export default CategorySkeleton