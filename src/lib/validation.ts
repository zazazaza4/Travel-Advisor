export const isValidEmail = (email: string): boolean => {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  const minLength: number = 8;
  return password.length >= minLength;
};

export const doPasswordsMatch = (
  password: string,
  confirmPassword: string,
): boolean => {
  return password === confirmPassword;
};
