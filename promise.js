const p = new Promise((resolve, reject) => {
    //kick of some   async wwork
    setTimeout(() => { 
        resolve(1);
        reject(new Error('message'));
    }, 5000);
});

p
    .then(result => console.log("Result", result))
    .catch(err =>console.log('Error', err.message ));