const interAct = () => {
  alert(event.target.innerHTML);
};

const arr = [1, 2, 3, 4, 5, 6];

for (const iterator of arr) {
  console.log(iterator);
}

const timesTen = arr.map(e=>e*10);

console.log(timesTen);
