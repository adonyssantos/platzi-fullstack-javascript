const isOlder = (age) => {
  return new Promise((resolve, reject) => {
    if (typeof age === "number") {
      const LEGAL_AGE = 18;
      age >= LEGAL_AGE ? resolve("You're of age!") : resolve("You're a minor!");
    } else {
      // reject("You must enter a number as a value.")
      const error = new Error("You must enter a number as a value.");
      reject(error);
    }
  });
};

isOlder(17)
  .then((response) => console.log(response))
  .catch((error) => console.error(error)); // resolve: "You're of age!"

isOlder(19)
  .then((response) => console.log(response))
  .catch((error) => console.error(error)); // resolve: "You're a minor!"

isOlder("40")
  .then((response) => console.log(response))
  .catch((error) => console.error(error)); // reject: "You must enter a number as a value."

const sayHello = (name) => {
  return new Promise((resolve, reject) => {
    if (name) {
      resolve(`Hello ${name}`);
    } else {
      const error = new Error("You must add the name as a parameter.");
      reject(error);
    }
  });
};

sayHello("Adonys")
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

sayHello()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
