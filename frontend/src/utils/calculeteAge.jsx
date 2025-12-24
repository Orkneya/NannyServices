export default function CalculateAge(birthday) {
  const birthDay = new Date(birthday);
  const tooday = new Date();

  let age = tooday.getFullYear() - birthDay.getFullYear();
  if (
    tooday.getMonth() < birthDay.getMonth() ||
    (tooday.getMonth() === birthDay.getMonth() &&
      tooday.getDate() < birthDay.getDate())
  ) {
    age--;
  }
  return age;
}
