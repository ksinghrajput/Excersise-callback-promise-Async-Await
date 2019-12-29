console.log("Before");
// getUser(  1, function(user){
//     getRepository(user.gitHubUsername,function(repos){
//             getCommits(repos[0], (commits) => {
//             console.log(commits);
//         });
//     });
// });

//used in promises
// getUser(1)
//     .then( user => getRepository(user.gitHubUsername))
//     .then( repos => getCommits(repos[0]))
//     .then(commits => console.log('commits',commits))
//     .catch(err => console.log('Error', err.message));

//async Await
    async function displayCommit(){
        try {
            const user = await getUser(1);
             const repos = await getRepository(user.gitHubUsername);
             const commits = await getCommits(repos[0]);
                console.log('Commit :->', commits);        
        } catch (e) {
                 console.log(e.message);
                  }
    }

    displayCommit();
    
  
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