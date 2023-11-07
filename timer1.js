const getArray = process.argv;

for (let i = 2; i < getArray.length; i++) {

  if (getArray[i] < 0 || isNaN(Number(getArray[i]))) {
    break;
  } else {
    const mseconds = getArray[i] * 1000;
    setTimeout(() => {
      process.stdout.write('.');
    }, mseconds);
  }
}