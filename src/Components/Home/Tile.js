const Tile = (res) => {
  const { image, title } = res

  return (
    <>
      <div className='flex flex-col my-4'>
        <div className='w-auto h-full px-8 md:px-4'>
          <h3 className='text-base lg:text-sm sm:text-xxs mb-2'>{title}</h3>
          <img className='w-auto h-auto rounded-2xl' src={image} alt={image} />
        </div>
      </div>
    </>
  )
}

export default Tile