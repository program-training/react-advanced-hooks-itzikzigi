import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import useCount from "../../customHooks/useCount";

const ClickCounter = () => {
  const [countBlue, addOneBlue] = useCount();
  const [countGreen, addOneGreen] = useCount();
  return (
    <Box>
      <Typography variant="h6">blue counter {countBlue} </Typography>
      <Typography variant="h6">green counter {countGreen}</Typography>
      <ButtonGroup variant="contained">
        <Button onClick={() => addOneBlue()}>blue button</Button>
        <Button color="success" onClick={() => addOneGreen()}>
          green button
        </Button>
      </ButtonGroup>
    </Box>
  );
};
export default ClickCounter;
