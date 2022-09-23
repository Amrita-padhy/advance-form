import { Box } from "@mui/system";
import React from "react";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context";

function Summary() {
  const { form } = useAppContext();
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/form");
  };
  return (
    <>
      <Container
        fixed
        maxWidth="md"
        sx={{ bgcolor: "#f0f8ff", height: "100vh" }}
      >
        <Box sx={{ color: "steelblue", pt: "15px", textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "600", letterSpacing: ".5" }}
          >
            SUMMARY PAGE
          </Typography>
        </Box>
        <Box p={10}>
          {form.map((item) => (
            <div id={item.id}>
              {item.map((input) => (
                <Box id={input.id} sx={{ mb: 2 }}>
                  {input.id === "1" && (
                    <div>If you have problem with:{input.value}</div>
                  )}
                  {input.id === "2" && (
                    <div>
                      Have you been diagonsed with this problem?:{input.value}
                      {/* {input.options.find((i) => i.value === input.value).label} */}
                    </div>
                  )}
                  {input.id === "3" && (
                    <div>
                      Did the problem start from a physical trauma?:
                      {input.value}
                    </div>
                  )}
                  {input.id === "4" && (
                    <div>
                      Did the problem start from a mental trauma?:
                      {input.value}
                    </div>
                  )}
                  {input.id === "5" && (
                    <div>
                      How often do you experience the problem?:{input.value}
                    </div>
                  )}
                  {input.id === "6" && (
                    <div>
                      How intense is the problem on an avarage 1-10 scale?:
                      {input.value}
                    </div>
                  )}
                </Box>
              ))}
            </div>
          ))}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{ mr: "4%" }}
              onClick={handleChange}
            >
              Back
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Summary;
