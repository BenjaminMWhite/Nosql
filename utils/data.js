const names = [
]

const descriptionsBodies = [

];

const possibleResponses = [

];

const users = [];


const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];


const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

const getRandomVideos = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(descriptionsBodies),
      advertiserFriendly: Math.random() < 0.5,
      responses: [...getVideoResponses(3)],
    });
  }
  return results;
};

const getVideoResponses = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleResponses);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      responseBody: getRandomArrItem(possibleResponses),
      username: getRandomName(),
    });
  }
  return results;
};


module.exports = { getRandomName, getRandomVideos, getRandomVideos };
