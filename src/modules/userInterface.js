import Storage from './storage.js';

class UserInterface {
  static display() {
    const users = Storage.getUser();
    users.forEach((user) => UserInterface.addUser(user));
  }

  static addUser(user) {
    const userList = document.querySelector('#user-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.score}</td>
    `;
    userList.appendChild(row);
  }

  static clearFields() {
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }
}

export default UserInterface;