export const formatSalary = (salary: string) => {
  const result = salary.replaceAll(/k/gi, ' 000');
  return result.replace(/-/g, '―');
};
