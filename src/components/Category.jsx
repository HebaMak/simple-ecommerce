import { useContext } from "react"
import { proContext } from '../context/ProductContext'


const  Category = ({category , handleActive , isActive}) => {

  const {filter} = useContext(proContext)
  
  return (
    <div>
      <button 
        className={isActive === category ? 'category active' : 'category'}
        onClick={()=>{
          handleActive(category)
          filter(category)
        }}
        // style={{backgroundColor: isActive === category ? 'lightblue' : ''}}
      >
        {category}
      </button>
    </div>
  )
}

export default Category