const stringLengthBetween = (str, min, max) => {
  const len = str.length;
  return min <= len && len <= max;
};

// First answer from https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
const isNumeric = (str) => {
  if (typeof str !== 'string') return false;
  return !Number.isNaN(str) && !Number.isNaN(parseFloat(str));
};

const isNonNegative = (str) => parseFloat(str) >= 0;

const serviceNameLength = (name) => {
  const minLength = 4;
  const maxLength = 30;

  return stringLengthBetween(name, minLength, maxLength);
};

const serviceNameUnique = (name, services) => !services.some((element) => element === name);

const isServiceDescriptionValid = (description) => {
  const minLength = 1;
  const maxLength = 250;

  return stringLengthBetween(description, minLength, maxLength);
};

export default ({
  name, description, price, imageUrlStatus,
}, servicesNames = []) => {
  const validation = {
    valid: true,
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  };

  if (!serviceNameLength(name)) {
    validation.valid = false;
    validation.name = 'Service names must have between 4 and 50 characters\n';
  }

  if (!serviceNameUnique(name, servicesNames)) {
    validation.valid = false;
    validation.name += 'Service names must be unique';
  }

  if (!isServiceDescriptionValid(description)) {
    validation.valid = false;
    validation.description = 'Service names must have between 1 and 250 characters';
  }

  if (!(isNumeric(price) && isNonNegative(price))) {
    validation.valid = false;
    validation.price = 'Prices must be nonnegative numbers';
  }

  if (!(imageUrlStatus === 'valid')) {
    validation.valid = false;
    validation.imageUrl = 'Image URLs must link to images';
  }

  return validation;
};
