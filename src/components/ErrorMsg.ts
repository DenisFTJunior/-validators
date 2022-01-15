export const ErrorMsg = (refs, config, msg) => {
  const span = document.createElement("span");
  span.innerHTML = msg
  generateStyle(span, config.warning);
  refs.appendChild(span);
};

const generateStyle = (
  el: HTMLElement,
  config: { size?: string; color?: string }
) => {
  el.style.color = config.color || "#ff726f";
  el.style.display = "flex";
  el.style.textAlign = "center";
  el.style.margin = "0.5rem";
  el.style.fontSize = config.size ||"1rem";
};
