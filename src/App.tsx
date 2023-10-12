import { Box, Button, Typography } from "@mui/material";
import "./App.css";
import ClickCounter from "./Components/Prac1/ClickCounter";
import MouseInCounter from "./Components/Prac1/MouseInCounter";
import LocalStorageForm from "./Components/Prac2/LocalStorageForm";
import Cart from "./Components/Prac3/Cart";
import Products from "./Components/Prac3/Products";
import { useReducer, useState } from "react";
import { reducer, stateType } from "./Components/Prac3/CartReducer";

function App() {
  const initialState: stateType = {
    items: [],
  };
  const [currentState, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState(true);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Button variant="contained" onClick={() => setPage(!page)}>
        click to go to {page ? "useReduce" : "custom hooks"}
      </Button>
      <Typography variant="h3">
        {!page ? "useReduce" : "custom hooks"}
      </Typography>
      {page && (
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <ClickCounter />
          <MouseInCounter />
          <LocalStorageForm />
        </Box>
      )}
      {!page && (
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Products dispatch={dispatch} />
          {currentState.items.length && (
            <Cart currentState={currentState} dispatch={dispatch} />
          )}
        </Box>
      )}
    </Box>
  );
}

export default App;
