function FinishedScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points * 100) / maxPossiblePoints;
  let emoji;
  if (percentage === 100) emoji = '🎖️';
  if (percentage >= 75 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 75) emoji = '🙂';
  if (percentage >= 25 && percentage < 50) emoji = '🤨';
  if (percentage >= 0 && percentage < 25) emoji = '😔';
  if (percentage === 0) emoji = '🤦‍♂️';

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{' '}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">High Score: {highScore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'start' })}
      >
        Restart
      </button>
    </>
  );
}
export default FinishedScreen;
