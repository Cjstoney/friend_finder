var options = require("../app/data/friend");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        req.json(options);
    });

    app.post("/api/friends",function(req,res){
        var totalDifference = 0;
        var bestMatch = {
            name:"",
            friendDifference: 1000
        };

        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function(item){
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            score: b
        };

        console.log("Name: "+ userName);
        console.log("User score "+ userScores);

        var sum = b.recuce((a,b)=> a + b, 0);
        console.log("Sum of users score "+ sum);
        console.log("Best match friend diff "+bestMatch.friendDifference);
        console.log("++++++++++++===========================================");

        for (let index = 0; index < options.length; index++) {
                console.log(options[i].name);
                totalDifference = 0;
                console.log("Total Diff "+ totalDifference);
                console.log("Best match friend diff " + bestMatch.FriendDifference);

                var bfriendScore = options[i].scores.reduce((a,b)=> a + b, 0);
                console.log("totlal friend score " +bfriendScore);
                console.log("-----------------------------> " + totalDifference);

                if(totalDifference <= bestMatch.friendDifference){
                    bestMatch.name = options[i].name;
                    bestMatch.friendDifference = totalDifference;
                }
                console.log(totalDifference+ " Total Difference")
        }

        console.log(bestMatch);
        options.push(userData);
        console.log("New User added");
        console.log(userData);
        res.json(bestMatch);
    });
}