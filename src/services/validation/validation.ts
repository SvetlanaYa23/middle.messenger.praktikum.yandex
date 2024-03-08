import {
  messagePattern,
  namePattern,
  passwordPattern,
  phonePattern,
  loginPattern,
  emailPattern,
} from './regex_patterns';

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

function getPatternByName(name: string): RegExp | null {
  switch (name) {
    case 'name':
      return namePattern;
    case 'login':
      return loginPattern;
    case 'email':
      return emailPattern;
    case 'password':
      return passwordPattern;
    case 'phone':
      return phonePattern;
    case 'message':
      return messagePattern;
    default:
      return null;
  }
}

export function handleBlur(event: FocusEvent): void {
  const input = event.target as HTMLInputElement;
  const pattern = getPatternByName(input.name);

  if (pattern && !validateField(input, pattern)) {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
}

export function handleSubmit(event: Event): void {
  event.preventDefault();

  const form = event.target as HTMLFormElement;

  let isValid = true;

  form.querySelectorAll('input').forEach(input => {
    const pattern = getPatternByName(input.name);

    if (pattern && !validateField(input, pattern)) {
      isValid = false;

      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  if (isValid) {
    collectFormData(form);
  }
}
