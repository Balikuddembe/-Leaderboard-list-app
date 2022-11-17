import './style.css';
import UserInterface from './modules/userInterface.js';
import User from './modules/user.js';
import Storage from './modules/storage.js';

document.addEventListener('DOMContentLoaded', UserInterface.display);
const form = document.querySelector('#user-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  const user = new User(name, score);
  UserInterface.addUser(user);
  Storage.addUser(user);
  UserInterface.clearFields();
});