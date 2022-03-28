import {favContext} from '../context/FavouritesContext'
import Product from './Product'
import { useContext , useEffect , useState} from "react";

const Favorites = () => {
  const {favorites} = useContext(favContext)
  const [favProducts , setFavProducts] = useState([])
  const [error , setError] = useState(false)
  const [Loading , setLoading] = useState(true)

  console.log(favorites)

  useEffect(()=> {
    const promises = favorites.map(id => {
      return fetch(`https://fakestoreapi.com/products/${id}`)
    })
    Promise.all(promises)
    .then(responses => {
      return Promise.all(responses.map(res=> res.json()))
    })
    .then(results => {
      console.log(results)
      setFavProducts(results)
      setLoading(false)
    })
    .catch(err => {
      setError(true)
      setLoading(false)
    })
  } , [favorites])


  return (
    <div className="fav-products"> 
      { favProducts && 
        favProducts.map(product => {
          return(
            <div className="fav-product">
              <Product product={product} />
            </div>
          )
        })
      }
    </div>

  )
}

export default Favorites

