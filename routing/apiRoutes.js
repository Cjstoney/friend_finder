var options = require("../app/data/friend");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        req.json(options);
    });

    app.post("/api/friends", function (req, res) {
        // console.log(req.body)
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            friendDifference: 1000
        };

        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            scores: b
        };

        var difference = function (a, b) {
            return Math.abs(a - b);
        };

        // console.log("Name: " + userName);
        // console.log("User score " + userScores);

        var sum = b.reduce((a, b) => a + b, 0);
        // console.log("Sum of users score " + sum);
        // console.log("Best match friend diff " + bestMatch.friendDifference);
        // console.log("++++++++++++===========================================");


        for (let index = 0; index < options.length; index++) {
            // console.log(options[index].name);
            // console.log(options[index])
            var friendsScore = options[index].scores;
            // console.log("line 45 " +friendsScore)
            var sumFriend = friendsScore.reduce(function (acc, val) {
                return acc + val;
            }, 0);

            // console.log("the diffence in scores is: " + difference(sum, sumFriend));
            totalDifference = difference(sum, sumFriend);

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = options[index].name;
                bestMatch.friendDifference = totalDifference;
            }
            // console.log(totalDifference + " Total Difference")
        }

        // console.log(bestMatch);
        options.push(userData);
        // console.log("New User added");
        console.log(userData);
        res.json(bestMatch);

    });
    
}