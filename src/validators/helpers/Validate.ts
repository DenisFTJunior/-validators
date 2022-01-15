import {
  ValidateInput,
  ValidateObject,
  ValidateSchema,
} from "../../schema/Validate";
import { ErrorMsg } from "../../components/ErrorMsg";

const Validate = ({ x, config }: ValidateInput): ValidateSchema => ({
  get: () => x,
  set: ({ f, value, refs }: ValidateObject) => {
    const {result, msg} = f(value, config)
    if (!result) ErrorMsg(refs, config, msg);
    return Validate({x:x || result});
  },
});

export default Validate
