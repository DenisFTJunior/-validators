import {
  ValidateFormInput,
  ValidateFormObject,
  ValidateFormSchema,
} from "../../schema/ValidateForm.js";
import { ErrorMsg } from "../../components/ErrorMsg.js";

const ValidateForm = ({
  x,
  config,
}: ValidateFormInput): ValidateFormSchema => ({
  get: () => x,
  set: ({ f, value, refs }: ValidateFormObject) => {
    const { result, msg } = f(value, config);
    if (!result) ErrorMsg(refs, config ? config : {}, msg);
    if (refs.style.borderColor === (config?.warning?.color || "#ff726f")) {
      refs.style.borderColor = config?.style?.defaultBorderColor || "#c4c4c4";
      refs.style.color = config?.style?.defaultColor || "#c4c4c4";
    }

    return ValidateForm({ x: x || result });
  },
});

export default ValidateForm;
