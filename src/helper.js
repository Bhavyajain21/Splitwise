export const getFinalArr = () => {
  let items = { ...localStorage };
  const finalArr = [];
  Object.keys(items).map((name) => {
    let arr = [];
    arr.push(name);
    let getLocalStorageValues = localStorage.getItem(name).split(",");
    for (let i = 0; i < getLocalStorageValues.length; i += 3) {
      let arr3 = [];
      arr3.push(getLocalStorageValues[i]);
      arr3.push(getLocalStorageValues[i + 1]);
      arr3.push(getLocalStorageValues[i + 2]);
      arr.push(arr3);
    }
    finalArr.push(arr);
  });
  return finalArr;
};
