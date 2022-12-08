const genPlayer = (username = "Secret", name = "Anonymous", role = "Player", imageUrl = "", social= "") => {
    return [username, name, role, imageUrl, social];
}

const RosterList = {
    2023: {
        "valorant": [genPlayer("Gandy", "Randy Sim", "Captain", "", "https://www.youtube.com/gandydev"), genPlayer(), genPlayer(), genPlayer(), genPlayer()],
        "league": [genPlayer(), genPlayer(), genPlayer(), genPlayer(), genPlayer()]
    },
    2022: {
        "valorant": [genPlayer("Gandy", "Randy Sim", "Captain", "", "https://www.youtube.com/gandydev"), genPlayer(), genPlayer(), genPlayer(), genPlayer()],
        "league": [genPlayer(), genPlayer(), genPlayer(), genPlayer(), genPlayer()]
    }
};

export default RosterList;