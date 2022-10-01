import TEAMS from "../../../resource/data/rosters/rosterdata.js";

let ateam = document.getElementById("ateam");
let bteam = document.getElementById("bteam");
let awards = document.getElementById("awards");
let gameDrop = document.getElementById("gameDrop");
let yearDrop = document.getElementById("yearDrop");
let gameTitle = document.getElementById("gameTitle");

let selection = ["valorant", "2022"];

gameDrop.addEventListener('change', event => {
    selection[0] = event.target.value;
    LoadSelection();
});
yearDrop.addEventListener('change', event => {
    selection[1] = event.target.value;
    LoadSelection();
})

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

    gameTitle.innerHTML = selection[0][0].toUpperCase() + selection[0].slice(1);

    ateam.innerHTML = d.a.members.join('<div class="break"></div>') + '<div class="break"></div>Subs: ' + d.a.subs.join(", ");
    awards.innerHTML = d.a.awards.map(award => award.title + ": " + award.desc).join('<div class="break"></div>');
    if (d.b) {
        awards.innerHTML += '<div class="break"></div>' + d.b?.awards.map(award => award.title + ": " + award.desc).join('<div class="break"></div>');
        bteam.innerHTML = d.b.members.join('<div class="break"></div>') + '<div class="break"></div>Subs: ' + d.a.subs.join(", ");
    } else {
        bteam.innerHTML = "None";
    }

}

LoadSelection();