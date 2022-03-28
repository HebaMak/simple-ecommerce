import heart from '../assets/heart-regular.svg'
import heartSolid from '../assets/heart-solid.svg'
import { useContext } from 'react'
import { favContext } from '../context/FavouritesContext'


const Heart = ({id}) => {

  const {handleFavorite , isFav} = useContext(favContext)

  const inFav = isFav(id)

  return (
    <>
      <img  
          src={inFav ? heartSolid : heart} 
          alt={inFav ? 'heartSolid' : 'heart'} 
          className='heart' 
          onClick={()=>handleFavorite(id)}
          />
    </>
  )
}

export default Heart