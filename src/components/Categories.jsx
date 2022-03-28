import { useContext } from "react";
import useFetch from "./useFetch"
import Category from './Category'
import { proContext } from '../context/ProductContext'

const Categories = () =>{
  const { data: categories, error, isLoading } = useFetch('https://fakestoreapi.com/products/categories');
  const {allProducts , handleActive , isActive , allPro} = useContext(proContext)

  return (
    <div className="category-container">
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>Loading Error...</h3>}
      {
        categories && 
          <div className="category-container">   
            {
              categories.map((category , index) => {
                return (
                  <Category 
                    category={category}
                    key={index}
                    handleActive={handleActive}
                    isActive={isActive}
                  />
                )
              })
            }
            <button 
              className="category" 
              onClick={allProducts}
              style={{backgroundColor : allPro ? 'lightblue' : '' }}
            >
              All Products
            </button>
          </div>
      }
    </div>
  )
}

export default Categories