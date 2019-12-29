console.log("Before");
getUser(  1, function(user){
    getRepository(user.gitHubUsername,function(repos){
            getCommits(repos[0], (commits) => {
            console.log(commits);
        });
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
function getCommits(repo, callback) {
    setTimeout(() => {
        console.log("caalling github api");
        callback(['commit']);
    },2000);
}