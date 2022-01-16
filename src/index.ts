import { isEmailValid } from "./validators/pattern/index.js";

export const test = () => {
  const { result, msg } = isEmailValid("email@gmail.com", {});
  console.log("result", result);
  console.log("msg", msg);
};

test();
