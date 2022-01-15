import {
  ValidateInput,
  ValidateObject,
  ValidateSchema,
} from "../../schema/Validate";

const Validate = ({ x, config }: ValidateInput): ValidateSchema => ({
  get: () => x,
  set: ({ f, value, refs }: ValidateObject) => {
    const { result, msg } = f(value, config);
    return Validate({ x: [...x, { result, msg, refs }] });
  },
});

export default Validate;
