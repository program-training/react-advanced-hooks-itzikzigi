import { Box, Typography } from "@mui/material";
import useCount from "../../customHooks/useCount";

const MouseInCounter = () => {
  const [count, addOne]: [number, () => void] = useCount();
  return (
    <Box
      onMouseEnter={() => addOne()}
      bgcolor={"aqua"}
      minWidth={350}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Typography variant="h5">mouse in counter: {count}</Typography>
    </Box>
  );
};
export default MouseInCounter;
