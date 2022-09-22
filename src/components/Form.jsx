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

function Form() {
  const { addForm, form } = useAppContext();
  console.log(form);
  const formJson = [
    {
      id: "1",
      label: `
            If you have problem with pain/aches 
            stiffness,weakness or 
            functoinal problems describe this/thses below.(List the 
                symptoms in descending order with the most 
                troublesome first)
            `,
      type: "textarea",
      value: "",
      style: {
        display: "block",
        mx: "5%",
        my: "15px",
      },
    },
    {
      id: "2",
      label: "Hove you been diagonsed with this problem?",
      type: "radio",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mx: "5%",
        my: "15px",
      },
      options: [
        {
          id: "1",
          label: "Not Relevant",
          type: "radio",
          value: 1,
        },
        {
          id: "2",
          label: "Yes",
          type: "radio",
          value: 2,
        },
        {
          id: "3",
          label: "No",
          type: "radio",
          value: 3,
        },
      ],
    },
    {
      id: "3",
      label: "Did the problem start from a physical trauma?",
      type: "radio",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mx: "5%",
        my: "15px",
      },
      options: [
        {
          id: "1",
          label: "Not Relevant",
          type: "radio",
          value: 1,
        },
        {
          id: "2",
          label: "Yes",
          type: "radio",
          value: 2,
        },
        {
          id: "3",
          label: "No",
          type: "radio",
          value: 3,
        },
      ],
    },
    {
      id: "4",
      label: "Did the problem start from a mental trauma?",
      type: "radio",
      value: "",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mx: "5%",
        my: "15px",
      },
      options: [
        {
          id: "1",
          label: "Not Relevant",
          type: "radio",
          value: 1,
        },
        {
          id: "2",
          label: "Yes",
          type: "radio",
          value: 2,
        },
        {
          id: "3",
          label: "No",
          type: "radio",
          value: 3,
        },
      ],
    },
    {
      id: "5",
      label: "How often do you experience the problem?",
      type: "checkbox",
      value: "",
      style: {
        display: "block",
        mx: "5%",
        my: "15px",
      },
      options: [
        {
          id: "1",
          label: "Not Relevant",
          type: "checkbox",
          value: 1,
        },
        {
          id: "2",
          label: "Daily",
          type: "checkbox",
          value: 1,
        },
        {
          id: "3",
          label: "Several Times/week",
          type: "checkbox",
        },
        {
          id: "4",
          label: "a few times/Monts",
          type: "checkbox",
          value: 1,
        },
      ],
    },
    {
      id: "6",
      label: "How intense is the problem on an avarage 1-10 scale?",
      type: "radio",
      value: "",
      style: {
        display: "block",
        mx: "5%",
        my: "15px",
      },
      options: [
        {
          id: "1",
          label: "1",
          type: "radio",
          style: {
            display: "flex",
            flexDirection: "column-reverse",
          },
        },
        {
          id: "2",
          label: "2",
          type: "radio",
          style: { display: "flex", flexDirection: "column-reverse" },
        },
        {
          id: "3",
          label: "3",
          type: "radio",
          style: { display: "flex", flexDirection: "column-reverse" },
        },
        {
          id: "4",
          label: "4",
          type: "radio",
          style: { display: "flex", flexDirection: "column-reverse" },
        },
        {
          id: "5",
          label: "5",
          type: "radio",
          style: { display: "flex", flexDirection: "column-reverse" },
        },
        {
          id: "6",
          label: "6",
          type: "radio",
          style: { display: "flex", flexDirection: "column-reverse" },
        },
        {
          id: "7",
          label: "7",
          type: "radio",
          style: { display: "flex", flexDirection: "column-reverse" },
        },
        {
          id: "8",
          label: "8",
          type: "radio",
          style: { display: "flex", flexDirection: "column-reverse" },
        },
        {
          id: "9",
          label: "9",
          type: "radio",
          style: { display: "flex", flexDirection: "column-reverse" },
        },
        {
          id: "10",
          label: "10",
          type: "radio",
          style: { display: "flex", flexDirection: "column-reverse" },
        },
      ],
    },
  ];

  const navigate = useNavigate();

  const handleChange = () => {
    console.log("hi");
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
        {form.map((f, index) => (
          <div>
            {f.map((item) => (
              <Box key={item.id} sx={item.style}>
                <Typography
                  sx={
                    item.id === "1"
                      ? {
                          fontWeight: "400",
                          letterSpacing: "1",
                          fontSize: "18px",
                          color: item.id === "1" ? "GrayText" : "",
                          wordSpacing: 1,
                        }
                      : {}
                  }
                  variant="div"
                >
                  {item.label}
                </Typography>
                <Box>
                  {item.type === "textarea" && (
                    <TextareaAutosize
                      aria-label="empty textarea"
                      value={item.value}
                      style={{ width: 720, height: 50 }}
                      onChange={(e) => {
                        item.value = e.target.value;
                        console.log(item.value);
                      }}
                    />
                  )}
                  {(item.type === "radio" || item.type === "checkbox") && (
                    <RadioGroup
                      row={item.type === "checkbox" ? false : true}
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      {item.options.map((option) => (
                        <FormControlLabel
                          value={option.value}
                          control={
                            item.type === "radio" ? <Radio /> : <Checkbox />
                          }
                          label={option.label}
                          sx={option.style}
                        />
                      ))}
                    </RadioGroup>
                  )}
                </Box>
              </Box>
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
          <Button variant="contained" sx={{ mr: "4%" }}>
            Back
          </Button>
          <Button variant="contained" onClick={handleChange}>
            Next
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Form;
