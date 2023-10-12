interface ItemInterface {
  id: number;
  name: string;
  price: string;
  quantity?: number;
}
export interface CartItemInterface {
  id: number;
  name: string;
  price: string;
  quantity: number;
}
export default ItemInterface;
