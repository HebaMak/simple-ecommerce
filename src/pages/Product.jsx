import { Link } from 'react-router-dom'
import Heart from '../components/Heart'

const Product = ({product}) => {

  const {image , id , title , rating} = product

  return (
    <>
      {product && (
        <div value={title} key={id} className='product'>
          <Link to={`/product/${id}`} >
            <img src={image} alt={title} className='product-image'/>
            <h3 className='product-description'>{title}</h3>
          </Link>
          <div className='rating'>
            <h4>Rate: {rating.rate}</h4>
            <Heart id={id}/>
          </div>
        </div>
        )
      }
    </>
    )
}

export default Product