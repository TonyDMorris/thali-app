export const selectionNumberString = (min, max) => {
  if (min === max) {
    return `Select ${min} option${min > 1 ? 's' : ''}`;
  } else {
    `Select between ${min} and ${max} options`;
  }
};
