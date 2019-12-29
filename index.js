console.log("Before");
getUser(  1, function(user){
    getRepository(user.gitHubUsername,function(repos){
            getCommits(repos[0], (commits) => {
            console.log(commits);
        });
    });
});

  
console.log("After");

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Featching a user from Database..");
            resolve( {id: id, gitHubUsername: "kishna2020"});
        }, 2000);
    });
};

function getRepository(user){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Featching data from repository...");
            resolve(['rep1','rep2','rep3']);
        }, 2000);
    });
    
}
function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("caalling github api");
            resolve(['commit']);
        },2000);
    });
} 