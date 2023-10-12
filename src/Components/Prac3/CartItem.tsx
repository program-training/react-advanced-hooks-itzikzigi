import { Button, List, ListItem, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartItemInterface } from "../../interfaces/itemInterface";
import { Dispatch } from "react";
import { ActionInterface } from "./CartReducer";

const CartItem = ({
  item,
  dispatch,
}: {
  item: CartItemInterface;
  dispatch: Dispatch<ActionInterface>;
}) => {
  return (
    <List sx={{ border: "2px blue solid" }}>
      <ListItem>
        <Typography>{item.name}</Typography>
      </ListItem>
      <ListItem>
        <Typography>{item.price}$</Typography>
      </ListItem>
      <ListItem>
        <Button onClick={() => dispatch({ type: "+", id: item.id })}>+</Button>
        <Typography>{item.quantity}</Typography>
        <Button onClick={() => dispatch({ type: "-", id: item.id })}>-</Button>
      </ListItem>
      <ListItem>
        <Button onClick={() => dispatch({ type: "delete", id: item.id })}>
          <DeleteIcon />
        </Button>
      </ListItem>
    </List>
  );
};
export default CartItem;
