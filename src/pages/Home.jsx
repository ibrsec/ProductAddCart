import { useState } from "react";
import ProductForm from "../components/ProductForm";

const Home = () => {
    const [productFormToggle,setProductFormToggle ] = useState(true);

    
  return (
    <div className="container my-4 ">
      <h1 className="text-primary text-center my-3">Add Products</h1>
      <div className="text-center my-3">
        <button className="btn btn-warning fs-4" onClick={()=> setProductFormToggle(!productFormToggle)}>Hide Product form</button>
      </div>
      {productFormToggle && <ProductForm />}
      
      
    </div>
  );
};

export default Home;
