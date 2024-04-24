import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";

const ProductCard = (props) => {
  const { id, name, avatar, price, amount } = props.product;

  const deleteProduct = async (id) => {
    const url =
      "https://6628864254afcabd07360692.mockapi.io/api/v1/products/" + id;
    try {
      const response = await axios.delete(url);
      if (response.status !== 200) {
        throw new Error("not 200 delete");
      } 
      props.getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handlePlus = async (id) => {
    const url =
      "https://6628864254afcabd07360692.mockapi.io/api/v1/products/" + id;
    const body = {
      ...props.product,
      amount: amount + 1,
    };
    try {
      const response = await axios.put(url, body);
      if (response.status !== 200) {
        throw new Error("not 200 put");
      } 
      props.getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleMinus = async (id) => {
    if (amount > 1) {
      const url =
        "https://6628864254afcabd07360692.mockapi.io/api/v1/products/" + id;
      const body = {
        ...props.product,
        amount: amount -1,
      };
      try {
        const response = await axios.put(url, body);
        if (response.status !== 200) {
          throw new Error("not 200 put");
        } 
        props.getProducts();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="kart d-flex align-items-center justify-content-start gap-1  col-12 col-sm-12 col-md-6 col-lg-3 col-xl-4 shadow">
      <img src={avatar} alt="" className="h-100 w-50 object-fit-contain" />
      <div className="content">
        <h5 className="text-capitalize">{name}</h5>
        <div className="text-warning fs-3">${price}</div>
        <div className="quantity border border-1 p-2 my-2 border-black text-center">
          <button className="btn btn-secondary" onClick={() => handleMinus(id)}>-</button>
          <span className="mx-3">{amount}</span>
          <button className="btn btn-secondary" onClick={() => handlePlus(id)}>
            +
          </button>
        </div>
        <div>
          <button
            className="btn btn-danger w-100 "
            onClick={() => deleteProduct(id)}
          >
            <FaTrashAlt /> Remove
          </button>
        </div>
        <p className="my-3">
          Product Total : ${Number(amount) * Number(price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
