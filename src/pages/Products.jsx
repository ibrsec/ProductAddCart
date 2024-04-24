import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import TotalInfos from "../components/TotalInfos";
const Products = () => {
  const [products, setProducts] = useState();

  const getProducts = async (id) => {
    const url = id ? "https://6628864254afcabd07360692.mockapi.io/api/v1/products/"+id :"https://6628864254afcabd07360692.mockapi.io/api/v1/products";
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error("not 200 get");
      } 
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
 
  return (
    <div className="container">
      <h1 className="text-primary text-center my-5">Cart</h1>
      <TotalInfos products={products}/>
      <div className="products row row-gap-3 mt-5">
 
        {
          products?.map(product=> <ProductCard key={product.id} product={product} getProducts={getProducts}/>)
        }
        
 
      </div>
    </div>
  );
};

export default Products;
