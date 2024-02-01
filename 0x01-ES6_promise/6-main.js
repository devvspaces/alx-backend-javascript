import handleProfileSignup from './6-final-user';

handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg").then((value) => {
  console.log(value);
});
