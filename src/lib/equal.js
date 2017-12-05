export default function isEqual(obj1 = {}, obj2 = {}) {
  let res = true;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) res = false;

  Object.keys(obj1).forEach((key) => {
    if (obj1[key] !== obj2[key]) res = false;
  });

  return res;
}