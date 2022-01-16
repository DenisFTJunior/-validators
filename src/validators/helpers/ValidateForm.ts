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
    return ValidateForm({ x: x || result });
  },
});

export default ValidateForm;
