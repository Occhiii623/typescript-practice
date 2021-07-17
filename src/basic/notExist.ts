export default function notExistSample() {
  let name = null;
  console.log('notExist sample 1:', typeof name, name);

  name = 'torahack';
  if (name) {
    console.log('notExist sample 2:', '吾輩は猫である。名前は' + name);
  } else {
    console.log('notExist sample 3:', '吾輩は猫である。名前はまだ' + name);
  }

  let age = undefined;
  console.log('notExist sample 1:', typeof age, age);

  age = 28;
  if (age) {
    console.log('notExist sample 2:', '僕の年齢は' + age + 'です');
  } else {
    console.log('notExist sample 3:', '僕の年齢は秘密です');
  }
}
