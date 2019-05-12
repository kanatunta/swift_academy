const results = document.getElementById('results');

const run = async () => {
    const mainResults = await fetch('http://84.40.116.115:8888', {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': ['GET', 'POST'],
            'Content-Type': 'application/json'
        },
      
    });

    console.log(mainResults);
    results.innerHTML = mainResults;
};

run();
