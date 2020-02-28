export default (num) => {
  const dividers = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) dividers.push(i);
  }
  return dividers;
};
