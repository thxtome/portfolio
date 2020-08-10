import validator from "validator";
let toastId;

const isEmail = (value) => {
  if (!validator.isEmail(value)) {
    return false;
  }
  return true;
};

const required = (value, type) => {
  if (validator.isEmpty(value)) {
    let lastChar = type.charCodeAt(type.length - 1);
    type += (lastChar - 0xac00) % 28 > 0 ? "을" : "를";

    return false;
  }
  return true;
};

const isMobilePhone = (value) => {
  if (!validator.isEmaiisMobilePhonel(value)) {
    return false;
  }
  return true;
};

export { isEmail, required, isMobilePhone };
