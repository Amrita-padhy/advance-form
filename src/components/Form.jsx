import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { textAlign } from "@mui/system";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useAppContext } from "../context";
import FormInput from "./Input.jsx";
function Form() {
  const { addForm, form } = useAppContext();

  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/summary");
  };
  return (
    <div>
      <Container
        fixed
        maxWidth="md"
        sx={{ bgcolor: "#f0f8ff", height: "auto" }}
      >
        <Box sx={{ color: "steelblue", pt: "15px", textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "600", letterSpacing: ".5" }}
          >
            Pain and Functional Description
          </Typography>
        </Box>
        <Box sx={{ ml: "15%", textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "200",
              letterSpacing: ".5",
              fontSize: "18px",
              color: "GrayText",
              width: "600px",
            }}
          >
            The description of the current situation give your optimum trainer a
            picture of and clues to the underlying causes of your problems
          </Typography>
        </Box>

        {form.map((f) => (
          <div>
            {f.map((item) => (
              <FormInput item={item} />
            ))}
          </div>
        ))}

        <Divider textAlign="center">
          <IconButton aria-label="delete" color="primary">
            <AddCircleIcon onClick={addForm} />
          </IconButton>
        </Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "20px",
            mb: "20px",
          }}
        >
          <Button variant="contained" onClick={handleChange}>
            Next
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Form;
