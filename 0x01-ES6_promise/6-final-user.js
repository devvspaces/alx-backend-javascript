import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((value) => {
    const photo = value[0];
    const user = value[1];
    const photoStatus = photo.status;
    const userStatus = user.status;
    if (photoStatus === 'rejected') {
      photo.value = String(photo.reason);
      delete photo.reason;
    }
    if (userStatus === 'rejected') {
      user.value = `Error: ${user.reason.message}`;
      delete user.reason;
    }
    return [photo, user];
  });
}
