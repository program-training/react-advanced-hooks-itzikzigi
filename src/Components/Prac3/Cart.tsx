import { Box, Button, List, ListItem, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import CartItem from "./CartItem";
import { Dispatch } from "react";
import { ActionInterface, stateType } from "./CartReducer";

const Cart = ({
  currentState,
  dispatch,
}: {
  currentState: stateType;
  dispatch: Dispatch<ActionInterface>;
}) => {
  return (
    <Box sx={{ border: "3px blue solid" }}>
      <Typography variant="h3">
        Cart <ShoppingCartIcon />
      </Typography>
      <Button onClick={() => dispatch({ type: "reset" })}>
        <RemoveShoppingCartIcon />
      </Button>
      <List>
        {currentState.items.map((item) => (
          <ListItem>
            <CartItem item={item} dispatch={dispatch} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Cart;
