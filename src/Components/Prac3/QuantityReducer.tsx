type actionType = "+" | "-";
type quantityType = number;

export const initialState = 1;
export const quantityReducer = (quantity: quantityType, action: actionType) => {
  if (action === "+") return (quantity += 1);
  if (action === "-" && quantity > 1) return quantity - 1;

  return quantity;
};
