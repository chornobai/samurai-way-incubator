export const requiredField = (value: any) => {
  if (value) return undefined;

  return "field is required";
};

export const max30 = (value: any) => {
  if (value && value.lenght > 30) return "max lenght is > 30";

  return undefined;
};

export const maxlenghtCreator = (Maxlenght: any) => (value: any) => {
  if (value && value.Maxlenght > 30) return `max lenght is ${Maxlenght}> 30`;

  return undefined;
};
