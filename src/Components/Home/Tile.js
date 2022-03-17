const Tile = (res) => {
  const { image, title } = res

  return (
    <>
      <div className='m-2 p-2 text-center'>
        <h1 className='text-xs m-2'>{title}</h1>
        <img src={image} alt={image} />
      </div>
    </>
  )
}

export default Tile