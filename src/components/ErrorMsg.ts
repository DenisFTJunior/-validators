import { Config } from "../schema/config/Config";

export const ErrorMsg = (
  refs: HTMLElement,
  { warning }: Config,
  msg: string | undefined
) => {
  if(document.querySelector("#error-fast-validators-handler")) return {}
  const span = document.createElement("span");
  span.id = "error-fast-validators-handler"
  refs.style.borderColor =  warning?.color || "#ff726f" 
  span.innerText = msg ? msg : "";
  generateStyle(span, warning || {});
  refs.appendChild(span);
};

const generateStyle = (
  el: HTMLElement,
  warning: { size?: string; color?: string }
) => {
  el.style.color = warning.color || "#ff726f";
  el.style.display = "flex";
  el.style.textAlign = "center";
  el.style.margin = "0.5rem";
  el.style.fontSize = warning.size || "1rem";
};
