let reviews: number[] = [5, 5, 4.5, 1, 3];

let total = 0;

for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
  total += reviews[i];
}

let average = total / reviews.length;
console.log(`Review average=${average}`);
