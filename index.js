alert("I'm doing my assignmnet");
//1. Loop of triangle
for (let i = 1; i <= 5; i++) {
  console.log(i);
  let baseInput = prompt("Enter Base:");
  let heightInput = prompt("Enter Height:");
  let base = Number(baseInput);
  let height = Number(heightInput);
  let area = 0.5 * base * height;

  console.log(area);
}

// 2. Calculate percentage  using loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
  let obtInput = prompt("Enter Obtained Marks:");
  let totalInput = prompt("Enter Total Marks:");
  let obtMarks = Number(obtInput);
  let totalMarks = Number(totalInput);
  let percentage = (obtMarks / totalMarks) * 100;

  console.log(percentage);
}

// 3. Calculate your BMI
for (let i = 1; i <= 5; i++) {
  console.log(i);
  let weightInput = prompt("Enter Weight:");
  let heightMetersInput = prompt("Enter Height in Meters:");
  let weight = Number(weightInput);
  let heightMeters = Number(heightMetersInput);
  let bmi = weight / (heightMeters * heightMeters);

  console.log(bmi);
}
