import {useContext} from 'react'
import { proContext } from '../context/ProductContext'
import Categories from '../components/Categories'
import Product from './Product'

const Products = () => {
  const {data: products , error , isLoading , selectedData }  = useContext(proContext)

  return (
    <>  
      <Categories/>
      <div className='products'>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>Loading Error...</h3>}
        {
          selectedData.length === 0  ?  products &&
            products.map(product => {
              return <Product product={product} key={product.id} />
          }) :
          selectedData && selectedData.map(product => {
            return <Product product={product} key={product.id} />
          })
        }
      </div>

    </>
    )
}

export default Products