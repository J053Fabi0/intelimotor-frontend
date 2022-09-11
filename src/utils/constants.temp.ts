const { freeze: f } = Object;

const constants = f({
  API: "https://intelimotor-backend.josefabio.com" as const,
} as const);

export default constants;
