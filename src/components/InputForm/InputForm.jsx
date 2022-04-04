import React, {  useState } from "react";
import { Box, TextField, Button } from "@mui/material";

function InputForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [male, setMale] = useState("");

  function SubmitButton() {
    // TODO clg,remove alert
    alert(`${name}, ${lastName}, ${fullName}, ${male}`)
  }

// TODO async func with axios to post data, make server. Server  must clg data

  return (
      <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField value={name} onChange={(event)=>{setName(event.target.value)}} label="First Name" variant="outlined" /> 
        <TextField value={lastName} onChange={(event)=>{setLastName(event.target.value)}} label="Last Name" variant="outlined" />
        <TextField value={fullName} onChange={(event)=>{setFullName(event.target.value)}} label="Full Name" variant="outlined" />
        <TextField value={male} onChange={(event)=>{setMale(event.target.value)}} label="Male" variant="outlined" />
      </Box>
      <Button variant="outlined" onClick={SubmitButton} type="submit">
        Submit
      </Button>
      </div>
  );
}

export default InputForm;
