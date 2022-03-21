export const addCartProduct = (product) => ({
  type: "ADD",
  product: product,
});

export const delCartProduct = (product) => ({
  type: "DEL",
  id: product.id,
});
