export default function anySample() {
  let name: any = 'Torahack';
  console.log('any sample 1:', typeof name, name);

  name = 43;
  console.log('any sample 2:', typeof name, name);
}
