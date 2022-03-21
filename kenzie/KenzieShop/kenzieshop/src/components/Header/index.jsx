import "./styles.css";
import logo from "../../assets/images/imgiconeEletronVolt.ico";
import cartIcon from "../../assets/images/carrinho-de-compras.png";
import { useHistory, useLocation } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  let location = useLocation();

  return (
    <div className="headerDiv">
      <img src={logo} alt="Logo" className="logo"></img>
      <div className="buttonDiv">
        {location.pathname === "/" ? (
          <>
            <button
              className="cartButton"
              onClick={() => history.push("/cart")}
            >
              <img src={cartIcon} alt="cart" className="icon"></img>
              <span>Carrinho</span>
            </button>
          </>
        ) : (
          <>
            <button className="cartButton" onClick={() => history.goBack()}>
              Voltar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
