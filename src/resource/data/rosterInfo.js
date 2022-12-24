const genPlayer = (username = "Secret", name = "Anonymous", role = "Player", imageUrl = "", social= "") => {
    return [username, name, role, imageUrl, social];
}

const RosterList = {
    2023: {
        "valorant": [
            genPlayer("Gandy", "Randy Sim", "Captain", "https://drive.google.com/uc?export=view&id=1ipK8J2iTi3bR8JjOOwqHk4nd2CPH709B", "https://www.youtube.com/gandydev"), 
            genPlayer("pho", "Calvin Pun", "Player", "https://drive.google.com/uc?export=view&id=1bONbUdjocC7cKyU2Iw_RO6dhmYhmi81m", "https://www.instagram.com/corrotic/"), 
            genPlayer("CRN", "Samuel Chen", "Player", "https://drive.google.com/uc?export=view&id=1VRFOOSppL24ST2nyfE-WCIq9FR_qjwPB", ""), 
            genPlayer(), 
            genPlayer()
        ],
        "league": [
            genPlayer("Golden Ninja103", "Andy Zheng", "Player", "https://drive.google.com/uc?export=view&id=1_T_Jnjn37l9l4TBgMDde9Hmo43ymij7e", "https://www.youtube.com/@goldenninja1038"), 
            genPlayer("2hands arthritis", "Kenneth Cao", "Player", "https://drive.google.com/uc?export=view&id=11e0_d-IgRLaMDFxc34K6mm1J5undNRW1", ""), 
            genPlayer("Kirby", "Brian Li", "Player", "", ""), 
            genPlayer(), 
            genPlayer()
        ]
    },
    2022: {
        "valorant": [
            genPlayer("Gandy", "Randy Sim", "Captain", "https://drive.google.com/uc?export=view&id=1ipK8J2iTi3bR8JjOOwqHk4nd2CPH709B", "https://www.youtube.com/gandydev"), 
            genPlayer(), 
            genPlayer(), 
            genPlayer(), 
            genPlayer()
        ],
        "league": [
            genPlayer(), 
            genPlayer(), 
            genPlayer(), 
            genPlayer(), 
            genPlayer()
        ]
    }
};

export default RosterList;