import antiexplosivo from "../../../assets/images/antiexplosivo.jpg";
import bombamonobloco from "../../../assets/images/bombamonobloco.jpg";
import camerainterna from "../../../assets/images/camerainterna.jpg";
import disjuntor from "../../../assets/images/disjuntor.jpg";
import interruptor from "../../../assets/images/interruptorrefinatto.webp";
import nemapremium from "../../../assets/images/w22nemapremium.jpg";

const products = [
  {
    id: "1",
    name: "Motor Elétrico à Prova de Explosão W22Xdb IE2 5.5 kW 2P 50Hz",
    value: "R$2300.00",
    img: antiexplosivo,
  },
  {
    id: "2",
    name: "W22 Bomba Monobloco JM IR3 Premium 60cv 60Hz",
    value: "R$1900.00",
    img: bombamonobloco,
  },
  {
    id: "3",
    name: "W22 NEMA Premium Efficiency 1 HP 4P 60Hz Com Pés",
    value: "R$1200.00",
    img: nemapremium,
  },
  {
    id: "4",
    name: "Disjuntor ACW101H-ETS40-3",
    value: "R$135.00",
    img: disjuntor,
  },
  {
    id: "5",
    name: "Câmera Interna Wi-fi WHOME",
    value: "R$240.00",
    img: camerainterna,
  },
  {
    id: "6",
    name: "Interruptor Refinatto LED Dourado",
    value: "R$70.00",
    img: interruptor,
  },
];

const productsReducer = (state = products, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
