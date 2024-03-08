import {
    messagePattern,
    namePattern,
    passwordPattern,
    phonePattern,
    loginPattern,
    emailPattern,
  } from './regex_patterns';
  
  export class Validator {
    validateMessage(message: string) {
      return messagePattern.test(message);
    }
  
    validateLogin(login: string) {
      return loginPattern.test(login);
    }
  
    validatePassword(password: string) {
      return passwordPattern.test(password);
    }
  
    validateEmail(email: string) {
      return emailPattern.test(email);
    }
  
    validateName(name: string) {
      return namePattern.test(name);
    }
  
    validatePhone(phone: string) {
      return phonePattern.test(phone);
    }
  }
  