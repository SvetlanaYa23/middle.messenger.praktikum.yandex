import {
  emailPattern,
  loginPattern,
  messagePattern,
  namePattern,
  passwordPattern,
  phonePattern
} from './regex_patterns';

type PatternObject = {
  pattern: RegExp;
  errorText: string;
};

export function validateField(input: HTMLInputElement, pattern: RegExp): boolean {
  return pattern.test(input.value);
}

export function collectFormData(form: HTMLFormElement): { [key: string]: string } {
  const formData = new FormData(form);
  const formProps: { [key: string]: string } = {};

  for (const [key, value] of formData.entries()) {
    formProps[key] = value as string;
  }

  console.log(formProps);
  return formProps;
}

function getPatternByName(name: string): PatternObject | null {
  let errorText = '';

  switch (name) {
    case 'name':
      errorText =
        'Введите верное имя (латиница или кириллица, первая буква заглавная, без пробелов и цифр, нет спецсимволов)';
      return { pattern: namePattern, errorText };
    case 'login':
      errorText =
        'Введите верный логин (от 3 до 20 символов, латиница, может содержать цифры, без пробелов, без спецсимволов)';
      return { pattern: loginPattern, errorText };
    case 'email':
      errorText =
        'Введите верный email (латиница, может включать цифры и спецсимволы, должна быть «@» и точка после неё)';
      return { pattern: emailPattern, errorText };
    case 'password':
      errorText =
        'Введите верный пароль (от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра)';
      return { pattern: passwordPattern, errorText };
    case 'phone':
      errorText =
        'Введите верный телефон (от 10 до 15 символов, состоит из цифр, может начинается с плюса)';
      return { pattern: phonePattern, errorText };
    case 'message':
      return { pattern: messagePattern, errorText: 'Сообщение не должно быть пустым' };
    default:
      return null;
  }
}

export function handleBlur(event: FocusEvent): void {
  const input = event.target as HTMLInputElement;
  const currentPattern = getPatternByName(input.name);

  if (currentPattern) {
    const { pattern, errorText } = currentPattern;
    const errorSpan = document.createElement('span');
    errorSpan.classList.add('error-text');
    errorSpan.textContent = errorText;

    const parentElement = input.parentElement;
    if (parentElement) {
      const existingErrorSpan = parentElement.querySelector('.error-text');

      if (!validateField(input, pattern)) {
        input.classList.add('error');
        if (!existingErrorSpan) {
          parentElement.appendChild(errorSpan);
        }
      } else {
        input.classList.remove('error');
        if (existingErrorSpan) {
          parentElement.removeChild(existingErrorSpan);
        }
      }
    }
  }
}

export function handleSubmit(event: Event): void {
  event.preventDefault();

  const form = event.target as HTMLFormElement;

  let isValid = true;

  form.querySelectorAll('input').forEach(input => {
    const currentPattern = getPatternByName(input.name);

    if (currentPattern) {
      const { pattern, errorText } = currentPattern;
      const errorSpan = document.createElement('span');
      errorSpan.classList.add('error-text');
      errorSpan.textContent = errorText;

      const parentElement = input.parentElement;
      if (parentElement) {
        const existingErrorSpan = parentElement.querySelector('.error-text');

        if (!validateField(input, pattern)) {
          isValid = false;
          input.classList.add('error');
          if (!existingErrorSpan) {
            parentElement.appendChild(errorSpan);
          }
        } else {
          input.classList.remove('error');
          if (existingErrorSpan) {
            parentElement.removeChild(existingErrorSpan);
          }
        }
      }
    }
  });

  if (isValid) {
    collectFormData(form);
  }
}
