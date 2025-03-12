const cars = [
    {
      make: "Toyota",
      model: "Camry",
      year: 2022,
      color: "White",
      price: 28000
    },
    {
      make: "Honda",
      model: "Civic",
      year: 2023,
      color: "Blue",
      price: 25000
    },
    {
      make: "Ford",
      model: "Mustang",
      year: 2021,
      color: "Red",
      price: 45000
    },
    {
      make: "Chevrolet",
      model: "Malibu",
      year: 2020,
      color: "Black",
      price: 23000
    },
    {
      make: "Tesla",
      model: "Model 3",
      year: 2024,
      color: "Silver",
      price: 42000
    },
    {
      make: "BMW",
      model: "X5",
      year: 2023,
      color: "Gray",
      price: 60000
    },
    {
      make: "Mercedes-Benz",
      model: "C-Class",
      year: 2022,
      color: "White",
      price: 55000
    },
    {
      make: "Audi",
      model: "A4",
      year: 2023,
      color: "Blue",
      price: 48000
    },
    {
      make: "Nissan",
      model: "Altima",
      year: 2021,
      color: "Black",
      price: 27000
    },
    {
      make: "Hyundai",
      model: "Elantra",
      year: 2022,
      color: "Red",
      price: 22000
    }
  ];
  
// Filter Method
const cheapCars = cars.filter((car) => {
    return car.price < 30000;
})
console.log(cheapCars);

const newCars = cars.filter((car) => {
    return car.year >= 2023;
})
console.log(newCars);

// Map Method
const carNames = cars.map((car) => {
    return `${car.make} ${car.model}`;
})
console.log(carNames);

const carInfos = cars.map((car) => {
    return `${car.make} ${car.model} - ${car.year}: $${car.price}`;
})
console.log(carInfos);

// Find Method - finds a single object in an array
const teslaCar = cars.find((car) => {
    return car.make === "Tesla";
})
console.log(teslaCar);

const firstRedCar = cars.find((car) => {
    return car.color === "Red";
})
console.log(firstRedCar);

const firstExpensiveCar = cars.find((car) => {
    return car.price > 40000;
})
console.log(firstExpensiveCar);

// forEach Method
cars.forEach((car) => {
    console.log(`${car.make} ${car.model} (${car.year}) - $${car.price}`);
})

cars.forEach((car) => {
    let oldPrice = car.price;
    car.price = car.price * 1.1;
    console.log(`${car.make} ${car.model} - $${oldPrice} -> $${car.price}`);
}) // can modify with forEach Method


// Some Method - returns true if at least one element in the array meets the condition
const hasExpensiveCar = cars.some((car) => {
    return car.price > 50000;
})
console.log(hasExpensiveCar);

const hasGreenCar = cars.some((car) => {
    return car.color === "Green";
})
console.log(hasGreenCar);

// Every Method - returns true if all elements in the array meet the condition
const allWithinFiveYears = cars.every((car) => {
    return car.year >= 2020;
})
console.log(allWithinFiveYears);

const allWhiteCars = cars.every((car) => {
    car.color === "White";
})
console.log(allWhiteCars);

// Reduce Method - returns a single value from the array
// currentTotal is the previous total before calculating the current total, and car is the current element
const totalGarageValue = cars.reduce((currentTotal, car) => {
    return car.price + currentTotal;
}, 0) // 0 is the initial value
console.log(totalGarageValue);

const averageCarPrice = cars.reduce((currentTotal, car) => {
    return car.price + currentTotal / cars.length;
}, 0)
console.log(averageCarPrice);

// Includes Method - returns true if the array includes the specified element
// Takes a single element as an argument to look for an exact match
const carsModelList = cars.map((car) => {
    return car.make;
})
console.log(carsModelList);

const hasBMW = carsModelList.includes("BMW");
console.log(hasBMW);