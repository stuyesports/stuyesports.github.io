import LEADERSHIP from "../../../resource/data/leadership/leadershipData.js";

let leadershipList = document.getElementsByClassName("Leadership");


const LoadSelection = () => {
    let x = LEADERSHIP["2022 leadership"];
    createCard(leadershipList, 0, x.president, "President", "../../../resource/imgs/person.png");
    for(let i = 0; i < x.copresident.length; i++){
        createCard(leadershipList, 0, x.copresident[i], "Co-President", "../../../resource/imgs/person.png");
    }
    for(let i = 0; i < x.DoIA.length; i++){
        createCard(leadershipList, 0, x.DoIA[i], "Director of Internal Affairs", "../../../resource/imgs/person.png");
    }
    for(let i = 0; i < x.DoO.length; i++){
        createCard(leadershipList, 0, x.DoO[i], "Director of Outreach", "../../../resource/imgs/person.png");
    }
    for(let i = 0; i < x.HoIT.length; i++){
        createCard(leadershipList, 0, x.HoIT[i], "Head of IT", "../../../resource/imgs/person.png");
    }
    for(let i = 0; i < x.HoM.length; i++){
        createCard(leadershipList, 0, x.HoM[i], "head of Media", "../../../resource/imgs/person.png");
    }
    
    
    
}

const createCard = (div, i,  name, role, imgurl) => {
    var card = document.createElement("div");
    card.setAttribute("class", "leadershipCard");
    var image = document.createElement("img");
    image.src = imgurl;
    image.setAttribute("class", "leadershipImg");
    card.appendChild(image);
    var leadershipInfo = document.createElement("div");
    leadershipInfo.setAttribute("class", "leadershipInfoCount");
    card.appendChild(leadershipInfo);
    var nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "name");
    var roleDiv = document.createElement("div");
    roleDiv.setAttribute("class", "role");
    nameDiv.innerHTML = name;
    roleDiv.innerHTML = role;
    leadershipInfo.appendChild(nameDiv);
    leadershipInfo.appendChild(roleDiv);
    div.item(i).appendChild(card);
}

LoadSelection();