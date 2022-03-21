import { useDispatch, useSelector } from "react-redux";
import { delCartProduct } from "../../store/modules/CartProducts/actions";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartProducts);

  const dispatch = useDispatch();

  const handleRemoveProduct = (product) => dispatch(delCartProduct(product));

  return (
    <div className="clusterDiv">
      {cartProducts.map((product) => (
        <div key={product.id}>
          <img
            src={product.img}
            alt="Imagem do produto"
            className="productImg"
          ></img>
          <h4 className="productName">{product.name}</h4>
          <p className="productValue">{product.value}</p>
          <button
            onClick={() => handleRemoveProduct(product)}
            className="removeButton"
          >
            Remover do carrinho
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
