document.addEventListener(DOM, function(event) {
    //the event occurred
    console.log(event);
    const obj1 = {
        prop1: 'Hello',
        prop2: 23,
        prop3: {
            prop4: 'hi'
        }
    };
    const obj2 = Object.assign({}, obj1);
    obj2.prop10 = 'ten';
    obj2.prop3.prop4 = 'hi all';
    console.log(obj1, obj2);
    console.log(Math.PI);
    const results = document.getElementById('results');
    console.log(results);
    results.innerText = 'Hello';

});
