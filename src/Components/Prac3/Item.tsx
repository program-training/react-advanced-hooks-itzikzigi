import { Button, Card, Typography } from "@mui/material";
import ItemInterface from "../../interfaces/itemInterface";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Dispatch } from "react";
import { ActionInterface } from "./CartReducer";
const Item = ({
  item,
  dispatch,
}: {
  item: ItemInterface;
  dispatch: Dispatch<ActionInterface>;
}) => {
  return (
    <Card>
      <Typography variant="h6">Name: {item.name}</Typography>
      <Typography>Price: {item.price}$</Typography>
      <Typography>ID: {item.id}</Typography>
      <Button onClick={() => dispatch({ type: "add", id: item.id })}>
        <AddShoppingCartIcon />
      </Button>
    </Card>
  );
};
export default Item;
