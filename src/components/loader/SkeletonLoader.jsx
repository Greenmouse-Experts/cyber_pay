
import Skeleton from 'react-loading-skeleton'

const SkeletonLoader = () => {
  return (
     <div className='w-full'><Skeleton height={'5rem'} count={5} /></div>
  )
}

export default SkeletonLoader