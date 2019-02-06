const sortByProperties = (characterArr, importantProps) => {
  const importantPartOfArr = [];
  let filteredArr = [];
  let result = [];

  for (let i = 0; i <= importantProps.length; i += 1) {
    for (const prop in characterArr) {
      if (prop === importantProps[i]) {
        importantPartOfArr.push({
          key: prop,
          value: characterArr[prop],
        });
      }
    }
  }

  for (const prop in characterArr) {
    filteredArr.push({
      key: prop,
      value: characterArr[prop],
    });
  }

  filteredArr.sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
  });

  if (importantProps.length !== 0) {
    for (let i = 0; i < importantProps.length; i += 1) {
      filteredArr = filteredArr.filter(item => item.key !== importantPartOfArr[i].key);
    }
    for (const prop in importantPartOfArr) {
      result.push(importantPartOfArr[prop]);
    }
    for (const prop in filteredArr) {
      result.push(filteredArr[prop]);
    }
  } else {
    result = filteredArr;
  }

  return result;
};

export default sortByProperties;
