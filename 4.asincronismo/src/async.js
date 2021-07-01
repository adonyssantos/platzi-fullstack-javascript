const doSomethingsAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do something async!"), 3000)
      : reject(new Error("Error"));
  });
};

const doSomethings = async () => {
  const something = await doSomethingsAsync();
  console.log(something);
};

console.log("Before 1");
doSomethings();
console.log("After 1");

const anotherFunction = async () => {
  try {
    const something = await doSomethingsAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
};

console.log("Before 2");
anotherFunction();
console.log("After 2");
