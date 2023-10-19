import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import {
  validarEmail,
  validarPassword,
  validarCamposLlenos,
} from "./validaciones";

const DatosUsuario = ({ updateStep }) => {
  const [email, setEmail] = useState({
    value: "",
    valid: null,
  });
  const [password, setPassword] = useState({ value: "", valid: null });
  const [isTextFieldFilled, setIsTextFieldFilled] = useState(false);
  const [isPasswordFilled, setPasswordFilled] = useState(false);

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (email.valid && password.valid) {
          console.log("Siguiente formulario");
          console.log(email, password);
          updateStep(1);
        } else {
          console.log("No hacer nada");
        }
      }}
    >
      <TextField
        sx={{ marginTop: "40px" }}
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false}
        helperText={
          email.valid === false && "Ingresa un correo electrónico válido."
        }
        value={email.value}
        onChange={(input) => {
          const email = input.target.value;
          const valido = validarEmail(email);
          setEmail({ value: email, valid: valido });
          // Valida si el textfield esta vacio
          let lleno = validarCamposLlenos(input.target.value);
          setIsTextFieldFilled(lleno);
        }}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid === false}
        helperText={
          password.valid === false &&
          "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20."
        }
        value={password.value}
        onChange={(input) => {
          const password = input.target.value;
          setPassword({ value: password, valid: validarPassword(password) });
          // Valida si el textfield esta vacio
          let lleno = validarCamposLlenos(input.target.value);
          setPasswordFilled(lleno);
        }}
      />
      <Button
        disabled={isTextFieldFilled && isPasswordFilled ? false : true}
        variant="contained"
        type="submit"
      >
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosUsuario;
