const addScore = (name, score, scoreBoard) => {
  const addToScoreboard = {
    name,
    score,
  };
  scoreBoard.push(addToScoreboard);
  return scoreBoard;
};

export default addScore;
