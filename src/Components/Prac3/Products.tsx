import { Box, List, ListItem, Typography } from "@mui/material";
import Item from "./Item";
import items from "./data";
import { Dispatch } from "react";
import { ActionInterface } from "./CartReducer";

const Products = ({ dispatch }: { dispatch: Dispatch<ActionInterface> }) => {
  return (
    <Box sx={{ border: "3px blue solid" }}>
      <Typography variant="h3">Products</Typography>
      <List>
        {items.map((item, i) => (
          <ListItem key={i}>
            <Item item={item} dispatch={dispatch} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Products;
