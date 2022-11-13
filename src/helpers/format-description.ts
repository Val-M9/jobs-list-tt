export const formatDescription = (fullDescription: string) => {
  const descriptionArray = fullDescription.split('\n').filter((elem) => {
    return elem !== '  ' && elem !== '';
  });
  const resultObj = {
    description: descriptionArray[0].trim(),
    responsibilities: descriptionArray[2].trim(),
    benefits: descriptionArray[4]
      .trim()
      .split('.')
      .filter((elem) => elem !== ''),
  };
  return resultObj;
};
