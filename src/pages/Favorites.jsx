import { favContext } from "../context/FavouritesContext";
import Product from "./Product";
import { useContext, useEffect, useState } from "react";

const Favorites = () => {
  const { favorites } = useContext(favContext);
  const [favProducts, setFavProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promises = favorites.map((id) => {
      return fetch(`https://fakestoreapi.com/products/${id}`);
    });
    Promise.all(promises)
      .then((responses) => {
        return Promise.all(responses.map((res) => res.json()));
      })
      .then((results) => {
        setFavProducts(results);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [favorites]);

  return (
    <div className="fav-products">
      {loading && <h3> Loading...</h3>}
      {error && <h3> an error is occures...</h3>}
      {favProducts &&
        favProducts.map((product) => {
          return (
            <div className="fav-product">
              <Product product={product} />
            </div>
          );
        })}
    </div>
  );
};

export default Favorites;
