import itemsArr from "./data";
import { CartItemInterface } from "../../interfaces/itemInterface";

export interface ActionInterface {
  type: "+" | "-" | "delete" | "add" | "reset";
  id?: number;
}
export type stateType = {
  items: CartItemInterface[];
};

export const reducer = (currentState: stateType, action: ActionInterface) => {
  const itemIndex = currentState.items.findIndex(
    (item) => item.id === action.id
  );

  if (action.type === "add" && itemIndex === -1) {
    const itemToAdd = itemsArr.find((item) => item.id === action.id);

    (itemToAdd as CartItemInterface).quantity = 1;
    currentState.items.push(itemToAdd as CartItemInterface);
  }

  if (action.type === "+") currentState.items[itemIndex].quantity++;

  if (action.type === "-")
    currentState.items[itemIndex].quantity > 1
      ? currentState.items[itemIndex].quantity--
      : (action.type = "delete");
  if (action.type === "delete") currentState.items.splice(itemIndex, 1);

  if (action.type === "reset")
    currentState.items.splice(0, currentState.items.length);

  return { ...currentState };
};
