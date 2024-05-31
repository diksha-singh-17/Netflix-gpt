export const checkValidData = (email, password, name) => {
  const userName = /^[0-9A-Za-z]{3,12}$/.test(name);
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!userName) return "UserName is Invalid";
  if (!isEmailValid) return "Email is InValid";
  if (!isPasswordValid) return "Password is Invalid";

  return null;
};
