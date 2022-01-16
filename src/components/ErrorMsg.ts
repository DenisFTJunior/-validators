import { Config } from "../schema/config/Config.js";

export const ErrorMsg = (
  refs: HTMLElement,
  { warning }: Config,
  msg: string | undefined
) => {
  const span = document.createElement("span");
  span.innerHTML = msg ? msg : "";
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
