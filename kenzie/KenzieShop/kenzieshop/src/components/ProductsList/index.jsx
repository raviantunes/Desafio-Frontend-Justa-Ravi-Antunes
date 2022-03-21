import { useSelector } from "react-redux";
import { addCartProduct } from "../../store/modules/CartProducts/actions";
import { useDispatch } from "react-redux";
import "./styles.css";

const ProductsList = () => {
  const dispatch = useDispatch();

  const handleAdd = (product) => dispatch(addCartProduct(product));

  const products = useSelector((store) => store.products);

  return (
    <div className="clusterDiv">
      {products.map((product) => (
        <div key={product.id} className="cardDiv">
          <img
            src={product.img}
            alt="Imagem do produto"
            className="productImg"
          ></img>
          <h4 className="productName">{product.name}</h4>
          <p className="productValue">{product.value}</p>
          <button onClick={() => handleAdd(product)} className="addButton">
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
