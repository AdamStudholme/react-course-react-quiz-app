function updateHighscore(newScore, data, dispatch) {
  fetch('http://localhost:8000/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      highscore: newScore,
    }),
  })
    .then(res => res.json())
    .then(data => {
      startData = data;
      dispatch({ type: 'dataReceived', payload: data });
    })
    .catch(err => dispatch({ type: 'dataFailed' }));
}
