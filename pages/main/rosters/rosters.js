import TEAMS from "../../../resource/data/rosters/rosterdata.js";

let playerNamesList = document.getElementsByClassName("playerName");
let awards = document.getElementById("awards");

let selection = ["valorant", "2022"];

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let game = params.game;

if (game) {
    selection[0] = game;
    $(document).ready(() => {
        $("#gameDrop").val(game);
    })
}

const LoadSelection = () => {
    let d = TEAMS[selection[1]][selection[0]];

    let l = 0;
    for(var i = 0; i < playerNamesList.length; i++){
        if(l < 5){
            playerNamesList.item(i).innerHTML = d.a.members[l];
        }
        else if(l==5) {
            playerNamesList.item(i).innerHTML = d.a.subs[0];
        }
        else if(l > 5 && l< 11){
            playerNamesList.item(i).innerHTML = d.b.members[l-6];
        }
        else{
            playerNamesList.item(i).innerHTML = d.b.subs[0];
        }
        l++;
    }

    awards.innerHTML = d.a.awards.map(award => award.title + ": " + award.desc);
}

LoadSelection();