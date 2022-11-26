import { createContext, useState } from "react";
import useFetch from "../components/useFetch";

export const proContext = createContext();

const ProductContext = (props) => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("https://fakestoreapi.com/products");
  const [selectedData, setSelectedData] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [allPro, setAllPro] = useState(true);

  const handleActive = (category) => {
    if (isActive !== category) {
      setIsActive(category);
      setAllPro(false);
    }
  };

  const filter = (category) => {
    const elements = products.filter(
      (product) => product.category === category
    );
    setSelectedData(elements);
  };

  const allProducts = () => {
    setSelectedData(products);
    setAllPro(true);
    setIsActive(true);
    if (!allPro) {
      setAllPro(true);
    }
  };

  const value = {
    selectedData,
    data: products,
    handleActive,
    allProducts,
    isLoading,
    isActive,
    allPro,
    filter,
    error,
  };

  return (
    <proContext.Provider value={value}>{props.children}</proContext.Provider>
  );
};

export default ProductContext;
