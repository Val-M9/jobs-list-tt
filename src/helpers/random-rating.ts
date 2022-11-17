const getRandomRating = () => {
  let array = [];
  const randomRating = Math.floor(Math.random() * 5);
  for (let i = 0; i <= randomRating; i++) {
    array.push(i);
  }
  return array;
};

export { getRandomRating };
