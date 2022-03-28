import { useParams } from 'react-router-dom';
import Product from './Product'
import useFetch from '../components/useFetch';


const ProductDetails = () => {

  const {id} = useParams()
  const numId = +id

  const { data: product ,  isLoading , error} = useFetch(`https://fakestoreapi.com/products/${numId}`);

  const {category , description , price , rating} = product
  return (
    
    <div className="details-Container">
      {error && <div>Something went wrong!</div>}
      {isLoading && <h1>Loading....</h1>}
      { product && ( 
      <>
        <Product product={product}/>
        <div className="details">
            <h2>{category}</h2>
            <p>{description}</p>
            <h4>Price: {price}$</h4>
            <h4>Sold: {rating.count} times</h4>
        </div> 
      </>
      )}
    </div>
  )
}

export default ProductDetails





