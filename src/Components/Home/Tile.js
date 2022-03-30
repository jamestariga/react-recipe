const Tile = (res) => {
  const { image, title } = res

  return (
    <>
      <div className='flex flex-col px-8 min-h-[4rem] sm:min-h-[2rem] sm:px-2'>
        <div className='w-full px-8 md:px-4 sm:px-2'>
          <img className='w-auto h-full rounded-2xl' src={image} alt={image} />
        </div>
        <h3 className='text-black text-base text-center lg:text-sm sm:text-xxs my-4'>
          {title}
        </h3>
      </div>
    </>
  )
}

export default Tile
