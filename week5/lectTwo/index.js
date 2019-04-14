/* eslint-disable no-console */
const sleep = seconds => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

const run = async (i) => {
  console.log('before: '+i);
  await sleep(3);
  console.log('after: '+i);
};

for  (let index = 0; index < 10; index++) {
  run(index);
  console.log('clg after run: '+index);
}
