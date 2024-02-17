export const validateLoginForm = ({ email, passWord }) => {
  const isMailValid = validateMail(email);
  const isPasswordValid = validatePassword(passWord);

  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = (email, userName, passWord) => {
  const isMailValid = validateMail(email);
  const isUserNameValid = validateUserName(userName);
  const isPasswordValid = validatePassword(passWord);
  return isMailValid && isPasswordValid && isUserNameValid;
};

export const validatePassword = (passWord) => {
  return passWord.length > 6 && passWord.length < 12;
};

export const validateMail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};
export const validateUserName = (username) => {
  return username.length > 2 && username.length < 13;
};
