import axios from "axios";
import { useEffect, useState } from "react";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState("");

  const[productsCount,setProductsCount] = useState();
  const [isSuccess,setIsSuccess] = useState();
  const [isError,setIsError] = useState();

  const postProduct = async (body) => {
    const url = "https://6628864254afcabd07360692.mockapi.io/api/v1/products";
    try {
        setIsSuccess(false)
      const response = await axios.post(url, body);
      console.log(response);
      if (response.status !== 201) {
        setIsError(true);
        throw new Error("not 201 not");
    } 
    
    setIsSuccess(true);
    getProducts();
    } catch (error) {
        setIsError(true);
        console.log(error);
    }
  };

  const getProducts = async () => {
    const url = "https://6628864254afcabd07360692.mockapi.io/api/v1/products";
    try {
      const response = await axios.get(url);
      console.log(response);
      if (response.status !== 200) {
        throw new Error("not 200 not");
      } 
      setProductsCount(response.data.length);
    } catch (error) {
      console.log(error);
    }
  };
useEffect(()=>{
getProducts();
},[])
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: productName,
      avatar: productImage,
      price: Number(productPrice),
      dampingRate: 0.8,
      amount: Number(productQuantity),
    }; 
    postProduct(body);

    setProductName("");
    setProductPrice("");
    setProductQuantity("");
    setProductImage("");
  };
useEffect(()=>{
    setTimeout(()=>{
        setIsSuccess(false)
        setIsError(false);

    },3500)
},[isSuccess,isError])
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="d-flex flex-column mb-3">
        <label htmlFor="products-name" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          name=""
          id="products-name"
          className="form-control"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          required
        />
      </div>
      <div className="d-flex flex-column mb-3">
        <label htmlFor="products-price" className="form-label">
          Product Price
        </label>
        <input
          type="number"
          name=""
          id="products-price"
          className="form-control"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
          required
        />
      </div>
      <div className="d-flex flex-column mb-3">
        <label htmlFor="products-quantity" className="form-label">
          Product Quantitiy
        </label>
        <input
          type="number"
          name=""
          id="products-quantity"
          className="form-control"
          onChange={(e) => setProductQuantity(e.target.value)}
          value={productQuantity}
          required
        />
      </div>
      <div className=" d-flex flex-column   mb-3">
        <label htmlFor="products-image" className="form-label">
          Product Image
        </label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            https://example-image.com
          </span>
          <input
            type="url"
            name=""
            id="products-image"
            className="form-control "
            placeholder="Image"
            aria-describedby="basic-addon1"
            onChange={(e) => setProductImage(e.target.value)}
            value={productImage}
            required
          />
        </div>
      </div>
      <div className="text-center ">
        <button className="btn btn-success fs-5    w-25  " type="submit">
          Add to Cart
        </button>
      </div>
      <div className="text-center">
        <h6 className=" my-4 fs-3">Products : {productsCount}</h6>
        {isSuccess && <h6 className="text-success text-center display-3">Success!!</h6> } 
        {isError && <h6 className="text-success text-center display-3">Error!!</h6> } 
      </div>
    </form>
  );
};

export default ProductForm;
