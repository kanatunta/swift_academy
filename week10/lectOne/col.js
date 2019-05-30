const pc = document.getElementsByTagName('p');
for (const p of pc) {
   (p.style.background)="red";
    p.textContent += ' Hello';
}
const res = fetch('https://google.bg', {
    headers: new Headers({
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        Accept: 'application/json'
    }),
    method: 'GET',
    mode: 'no-cors'
});
res.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err.message);
});
