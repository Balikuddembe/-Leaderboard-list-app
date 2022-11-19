const displayScores = (data) => {
  const userList = document.querySelector('#user-list');
  data.forEach((data) => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <div class="scores"><div>${data.user}</div><div>${data.score}</div></div>`;
    userList.appendChild(row);
  });
};

export default displayScores;