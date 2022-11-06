export default function search(users, value) {
  const regexp = new RegExp(value.toLowerCase());
  if (value) {
    return users.filter((user) => regexp.test(user.name.toLowerCase()));
  }
}
