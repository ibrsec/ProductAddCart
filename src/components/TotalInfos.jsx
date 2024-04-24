

const TotalInfos = ({products}) => {
    console.log(products);
    const subtotal = products?.map(product => product.price * product.amount).reduce((sum,current)=> sum + current);

    const tax = subtotal * 18 / 100;

    const shipping = subtotal < 5000 ? 25.99 : 0;
    const total = subtotal + shipping;
  return (
    <div className="infos text-center mx-5 w-75  shadow mx-auto p-3 mt-4">
        <div className="d-flex justify-content-between  border-bottom my-1">
          <span className="fw-bold fs-5">Subtotal: </span>
          <span className=" fs-6">${subtotal}</span>
        </div>
        <div className="d-flex justify-content-between border-bottom my-1">
          <span className="fw-bold fs-5">Tax(18%): </span>
          <span className=" fs-6">${tax}</span>
        </div>
        <div className="d-flex justify-content-between border-bottom my-1">
          <span className="fw-bold fs-5">Shipping - $5k free : </span>
          <span className=" fs-6">${shipping}</span>
        </div>
        <div className="d-flex justify-content-between border-bottom my-1">
          <span className="fw-bold fs-5">Total: </span>
          <span className=" fs-6">${total}</span>
        </div>
      </div>
  )
}

export default TotalInfos;