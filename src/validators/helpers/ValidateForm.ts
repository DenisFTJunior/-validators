import {
  ValidateFormInput,
  ValidateFormObject,
  ValidateFormSchema,
} from "../../schema/ValidateForm";
import { ErrorMsg } from "../../components/ErrorMsg";

const ValidateForm = ({ x, config }: ValidateFormInput): ValidateFormSchema => ({
  get: () => x,
  set: ({ f, value, refs }: ValidateFormObject) => {
    const {result, msg} = f(value, config)
    if (!result) ErrorMsg(refs, config, msg);
    return ValidateForm({x:x || result});
  },
});

export default ValidateForm
