import { Link } from 'react-router-dom'

const Tile = (prop) => {
  const { image, title, id } = prop

  return (
    <>
      <div className='flex flex-col px-8 sm:px-2'>
        <Link to={'/recipe/' + id}>
          <div className='w-full px-8 md:px-4 sm:px-2 overflow-hidden'>
            <img
              className='w-auto h-full rounded-2xl duration-300 hover:scale-[1.1]'
              src={image}
              alt={image}
            />
          </div>
          <h3 className='text-zinc-600 font-extrabold text-base text-center min-h-[4rem] sm:min-h-[2rem] sm:text-sam my-4'>
            {title}
          </h3>
        </Link>
      </div>
    </>
  )
}

export default Tile
