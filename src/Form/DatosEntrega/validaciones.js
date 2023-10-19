export const validarInput = (input) => {
  return input.length > 3 ? true : false;
};

export function validarCamposLlenos(textField) {
  if (textField != "") return true;
}
