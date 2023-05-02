// all regex
export const REGEX = {
  ALPHA_NUMERIC: /^[d]*[a-z][a-z\d]*$/i,
  SPECIAL_CHARACTERS: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  ALPHA_NUMERIC_SPECIAL_CHARACTER:
    /^[d]*[a-z][a-z\d\s`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/i,
  ALL_NUMERICS: /^[0-9]*$/,
  MIN_MAX_LENGTH: /^.{4,32}$/,
  FULL_NAME: /^[A-Za-z\s]*$/,
  SPACES: /\s/,
  NUMERICS: /\d/,
  UPPERCASE_LETTER: /[A-Z]/,
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  URLS: /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
  SEARCH:
    /^[d]*[a-zA-Z][a-zA-Z\d\s_]*$|^[a-zA-Z0-9]*@([\w-]+\.)+[\w-]{2,4}$|^[a-zA-Z0-9]*@$|^[a-zA-Z0-9]*@([\w-]+\.)$/,
};
