import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function FormInput({ item }) {
  const [pain, setPain] = useState(item.value);

  return (
    <>
      <Box key={item.id} sx={item.style}>
        <Typography
          sx={
            item.id === "1" && {
              fontWeight: "400",
              letterSpacing: "1",
              fontSize: "18px",
              color: item.id === "1" ? "GrayText" : "",
              wordSpacing: 1,
            }
          }
          variant="div"
        >
          {item.label}
        </Typography>
        <Box>
          {item.type === "textarea" && ( // if text area
            <TextareaAutosize
              aria-label="empty textarea"
              value={pain}
              style={{ width: 720, height: 50 }}
              onChange={(e) => {
                setPain(e.target.value);
                item.value = pain;
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
                  control={item.type === "radio" ? <Radio /> : <Checkbox />}
                  label={option.label}
                  sx={option.style}
                  onChange={(e) => {
                    if (item.type === "radio") {
                      item.value = e.target.value;
                    } else if (item.type === "checkbox") {
                      if (e.target.checked) {
                        item.value.push(e.target.value);
                      } else {
                        item.value = item.value.filter((i) => i != option.id);
                      }
                    }
                  }}
                />
              ))}
            </RadioGroup>
          )}
        </Box>
      </Box>
    </>
  );
}
