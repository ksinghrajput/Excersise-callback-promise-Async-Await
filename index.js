console.log("Before");
getUser(1, function(user){
    console.log('User', user);
    //Get the repository
    getRepository(user,function(repo){
        console.log('Repo', repo);
    });
});
console.log("After");

function getUser(id, callback){
setTimeout(() => {
    console.log("Featching a user from Database..");
    callback( {id: id, gitHubUsername: "kishna2020"});
},2000);
}

function getRepository(user, callback){
    setTimeout(() => {
        console.log("Featching data from repository...");
        callback(['rep1','rep2','rep3']);
    }, 2000);
}