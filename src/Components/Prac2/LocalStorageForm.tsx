import {
  Box,
  Button,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useRef } from "react";
import useLocalStorage, {
  LocalStorageActionType,
} from "../../customHooks/useLocalStorage";

const LocalStorageForm = () => {
  const keyRef = useRef<HTMLInputElement | null>(null);
  const valueRef = useRef<HTMLInputElement | null>(null);

  let action = "";
  const HandleClick = () => {
    const key = (keyRef.current as HTMLInputElement).value;
    const value = (valueRef.current as HTMLInputElement).value;
    useLocalStorage(key, value, action as LocalStorageActionType);
  };
  return (
    <Box
      minWidth={400}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack>
        <TextField inputRef={keyRef} label="key" />
        <TextField inputRef={valueRef} label="value" />
        <FormLabel>Action</FormLabel>
        <Select defaultValue="" onChange={(e) => (action = e.target.value)}>
          <MenuItem value="get">Get</MenuItem>
          <MenuItem value="set">Set</MenuItem>
          <MenuItem value="remove">Remove</MenuItem>
        </Select>
        <Button variant="contained" onClick={HandleClick}>
          send
        </Button>
      </Stack>
    </Box>
  );
};
export default LocalStorageForm;
