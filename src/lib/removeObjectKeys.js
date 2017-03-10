export default function removeObjectKeys (obj = {}, keys = []) {
  let newObj = Object.assign({}, obj);

  keys.forEach(key => delete newObj[key]);

  return newObj;
}
