/*
  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.

  Given an array of pairs representing the teams that have competed against each
  other and an array containing the results of each competition, write a
  function that returns the winner of the tournament. The input arrays are named
  competitions and results, respectively. The competitions array has elements in 
  in the form of [homeTeam, awayTeam], where each team is a string of at most 30 
  characters representing the name of the team. The results array contains 
  informations about the winner of the corresponding competition in the competiti-
  ons array. Speicifically, results[i] denotes the winner of competitions[i], where
  1 in the results array means that the home team in the corresponding competition 
  won and 0 means that the away team won.

  It's guaranteed that exactly one team will win the tournament and that each
  team will compete against all other teams exactly once. It's also guaranteed
  that the tournament will always have at least two teams.

  Challenges: Using two for loops as brute force.

  Solution: Using hash table once again, then parsing array. I'm sure code
  can be cleaned up a little but as far as time its linear.

  Time & Space: 0(n)
*/

function tournamentWinner(competitions, results) {

  let points = {};

  for (i = 0; i < results.length; i++) {
    let team = 0;
    if (results[i] == 1) {
      if ([competitions[i][team]] in points) {
        points[competitions[i][team]] += 3;
      } else {
        points[competitions[i][team]] = 3;
      }
    } else {
      if ([competitions[i][team + 1]] in points) {
        points[competitions[i][team + 1]] += 3;
      } else {
        points[competitions[i][team + 1]] = 3;
      }
    }
  }

  let scores = Object.values(points);
  let teams = Object.keys(points);
  let max = Math.max(...scores);
  let index = scores.indexOf(max);
  console.log("Winner: ", teams[index], " Points: ", max);
  return teams[index];
}

//Test Case
let competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

let results = [0, 0, 1];

tournamentWinner(competitions, results); //Expected results: Python 6 points
