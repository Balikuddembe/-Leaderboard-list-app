const displayScores = (data) => {
  const userList = document.querySelector('#user-list');
  data.forEach((data) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${data.user}</td><td>${data.score}</td>`;
    userList.appendChild(row);
  });
};

export default displayScores;