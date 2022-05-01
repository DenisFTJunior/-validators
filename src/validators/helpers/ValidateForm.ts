import {
  ValidateFormInput,
  ValidateFormObject,
  ValidateFormSchema,
} from "../../schema/ValidateForm";
import { ErrorMsg } from "../../components/ErrorMsg";
import { Config } from "../../schema/config/Config";

const ValidateForm = ({
  x,
  config,
}: ValidateFormInput): ValidateFormSchema => ({
  get: () => x,
  set: ({ f, value, refs }: ValidateFormObject) => {
    const { result, msg } = f(value, config);
    if (!result) ErrorMsg(refs, config ? config : {}, msg);
    if (result) clean(refs, config);
    return ValidateForm({ x: x || result });
  },
});

const clean = (refs: HTMLElement, config?: Config) => {
  const child = document.querySelector(".error-fast-validators-handler");
  if (child) refs.removeChild(child);
  if (
    refs?.style?.borderColor &&
    refs?.style?.borderColor === (config?.warning?.color || "#ff726f")
  ) {
    refs.style.borderColor = config?.style?.defaultBorderColor || "#c4c4c4";
    refs.style.color = config?.style?.defaultColor || "#c4c4c4";
  }
};

export default ValidateForm;
