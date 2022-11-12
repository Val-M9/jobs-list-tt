export const formatSalary = (salary: string) => {
  const term = salary.replaceAll(/k/gi, ' 000');
  return term.replace(/-/g, '―');
};
