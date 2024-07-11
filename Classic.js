///////// Lib Functions //////////////////////////////////////////////////////
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

 /////// Init Program ////////////////////////////////////////////////////////
//Import Data
var ChampionsList =[
    {
        "Name": "8-Bit",
        "Icon": "8-Bit.png",
        "Gender": "Bot",
        "Role": "Damage Dealer",
        "Rarity": "Super Rare",
        "ReleaseYear": "2019",
        "Family": "Arcade"
    },
    {
        "Name": "Amber",
        "Icon": "Amber.png",
        "Gender": "Female",
        "Role": "Controller",
        "Rarity": "Legendary",
        "ReleaseYear": "2020",
        "Family": "Mexican Entertainers"
    },
    {
        "Name": "Ash",
        "Icon": "Ash.png",
        "Gender": "Bot",
        "Role": "Tank",
        "Rarity": "Epic",
        "ReleaseYear": "2021",
        "Family": "Fantasy"
    },
    {
        "Name": "Barley",
        "Icon": "Barley.png",
        "Gender": "Bot",
        "Role": "Artillery",
        "Rarity": "Rare",
        "ReleaseYear": "2017",
        "Family": "Townsfolk"
    },
    {
        "Name": "Bea",
        "Icon": "Bea.png",
        "Gender": "Female",
        "Role": "Marksman",
        "Rarity": "Epic",
        "ReleaseYear": "2019",
        "Family": "Biology Team"
    },
    {
        "Name": "Belle",
        "Icon": "Belle.png",
        "Gender": "Female",
        "Role": "Marksman",
        "Rarity": "Epic",
        "ReleaseYear": "2021",
        "Family": "Goldarm Gang"
    },
    {
        "Name": "Bibi",
        "Icon": "Bibi.png",
        "Gender": "Female",
        "Role": "Tank",
        "Rarity": "Epic",
        "ReleaseYear": "2019",
        "Family": "Retropolis Gang"
    },
    {
        "Name": "Bo",
        "Icon": "Bo.png",
        "Gender": "Male",
        "Role": "Controller",
        "Rarity": "Epic",
        "ReleaseYear": "2017",
        "Family": "Shaman Tribe"
    },
    {
        "Name": "Bonnie",
        "Icon": "Bonnie.png",
        "Gender": "Female",
        "Role": "Marksman",
        "Rarity": "Epic",
        "ReleaseYear": "2022",
        "Family": "Stunt Show"
    },
    {
        "Name": "Brock",
        "Icon": "Brock.png",
        "Gender": "Male",
        "Role": "Marksman",
        "Rarity": "Rare",
        "ReleaseYear": "2017",
        "Family": "Arcade"
    },
    {
        "Name": "Bull",
        "Icon": "Bull.png",
        "Gender": "Male",
        "Role": "Tank",
        "Rarity": "Rare",
        "ReleaseYear": "2017",
        "Family": "Retropolis Gang"
    },
    {
        "Name": "Buster",
        "Icon": "Buster.png",
        "Gender": "Male",
        "Role": "Tank",
        "Rarity": "Mythic",
        "ReleaseYear": "2022",
        "Family": "Starr Theatre"
    },
    {
        "Name": "Buzz",
        "Icon": "Buzz.png",
        "Gender": "Male",
        "Role": "Assassin",
        "Rarity": "Mythic",
        "ReleaseYear": "2021",
        "Family": "Velocirapids"
    },
    {
        "Name": "Byron",
        "Icon": "Byron.png",
        "Gender": "Male",
        "Role": "Support",
        "Rarity": "Mythic",
        "ReleaseYear": "2020",
        "Family": "Townsfolk"
    },
    {
        "Name": "Carl",
        "Icon": "Carl.png",
        "Gender": "Male",
        "Role": "Damage Dealer",
        "Rarity": "Super Rare",
        "ReleaseYear": "2019",
        "Family": "Gem Miners"
    },
    {
        "Name": "Charlie",
        "Icon": "Charlie.png",
        "Gender": "Female",
        "Role": "Controller",
        "Rarity": "Mythic",
        "ReleaseYear": "2023",
        "Family": "Blzarre Circus"
    },
    {
        "Name": "EMZ",
        "Icon": "EMZ.png",
        "Gender": "Female",
        "Role": "Controller",
        "Rarity": "Epic",
        "ReleaseYear": "2019",
        "Family": "Undead"
    },
    {
        "Name": "Shelly",
        "Icon": "Shelly.png",
        "Gender": "Female",
        "Role": "Damage Dealer",
        "Rarity": "Starting Brawler",
        "ReleaseYear": "2017",
        "Family": "Wildest West"
    },
    {
        "Name": "Nita",
        "Icon": "Nita.png",
        "Gender": "Female",
        "Role": "Damage Dealer",
        "Rarity": "Rare",
        "ReleaseYear": "2017",
        "Family": "Shaman Tribe"
    },
    {
        "Name": "Colt",
        "Icon": "Colt.png",
        "Gender": "Male",
        "Role": "Damage Dealer",
        "Rarity": "Rare",
        "ReleaseYear": "2017",
        "Family": "Wildest West"
    },
    {
        "Name": "Jessie",
        "Icon": "Jessi.png",
        "Gender": "Female",
        "Role": "Controller",
        "Rarity": "Super Rare",
        "ReleaseYear": "2017",
        "Family": "Junker Family"
    },
    {
        "Name": "Dynamike",
        "Icon": "Dynamike.png",
        "Gender": "Male",
        "Role": "Artillery",
        "Rarity": "Super Rare",
        "ReleaseYear": "2017",
        "Family": "Gem Miners"
    },
    {
        "Name": "El Primo",
        "Icon": "Elprimo.png",
        "Gender": "Male",
        "Role": "Tank",
        "Rarity": "Rare",
        "ReleaseYear": "2017",
        "Family": "Mexican Entertainers"
    },
    {
        "Name": "Poco",
        "Icon": "Poco.png",
        "Gender": "Male",
        "Role": "Support",
        "Rarity": "Rare",
        "ReleaseYear": "2017",
        "Family": "Mexican Entertainers"
    },
    {
        "Name": "Rico",
        "Icon": "Rico.png",
        "Gender": "Bot",
        "Role": "Damage Dealer",
        "Rarity": "Super Rare",
        "ReleaseYear": "2017",
        "Family": "Arcade"
    },
    {
        "Name": "Piper",
        "Icon": "Piper.png",
        "Gender": "Female",
        "Role": "Marksman",
        "Rarity": "Epic",
        "ReleaseYear": "2017",
        "Family": "Townsfolk"
    },
    {
        "Name": "Mortis",
        "Icon": "Mortis.png",
        "Gender": "Male",
        "Role": "Assassin",
        "Rarity": "Mythic",
        "ReleaseYear": "2017",
        "Family": "Undead"
    },
    {
        "Name": "Spike",
        "Icon": "Spike.png",
        "Gender": "Plant",
        "Role": "Damage Dealer",
        "Rarity": "Legendary",
        "ReleaseYear": "2017",
        "Family": "Wildest West"
    },
    {
        "Name": "Crow",
        "Icon": "Crow.png",
        "Gender": "Male",
        "Role": "Assassin",
        "Rarity": "Legendary",
        "ReleaseYear": "2017",
        "Family": "Retropolis Gang"
    },
    {
        "Name": "Pam",
        "Icon": "Pam.png",
        "Gender": "Female",
        "Role": "Support",
        "Rarity": "Epic",
        "ReleaseYear": "2017",
        "Family": "Junker Family"
    },
    {
        "Name": "Tara",
        "Icon": "Tara.png",
        "Gender": "Female",
        "Role": "Damage Dealer",
        "Rarity": "Mythic",
        "ReleaseYear": "2017",
        "Family": "Mystic Wanderers"
    },
    {
        "Name": "Darryl",
        "Icon": "Darryl.png",
        "Gender": "Bot",
        "Role": "Tank",
        "Rarity": "Super Rare",
        "ReleaseYear": "2017",
        "Family": "Pirate"
    },
    {
        "Name": "Penny",
        "Icon": "Penny.png",
        "Gender": "Female",
        "Role": "Artillery",
        "Rarity": "Super Rare",
        "ReleaseYear": "2018",
        "Family": "Pirate"
    },
    {
        "Name": "Frank",
        "Icon": "Frank.png",
        "Gender": "Male",
        "Role": "Tank",
        "Rarity": "Epic",
        "ReleaseYear": "2018",
        "Family": "Undead"
    },
    {
        "Name": "Leon",
        "Icon": "Leon.png",
        "Gender": "Male",
        "Role": "Assassin",
        "Rarity": "Legendary",
        "ReleaseYear": "2018",
        "Family": "Shaman Tribe"
    },
    {
        "Name": "Gene",
        "Icon": "Gene.png",
        "Gender": "Male",
        "Role": "Controller",
        "Rarity": "Mythic",
        "ReleaseYear": "2019",
        "Family": "Mystic Wanderers"
    },
    {
        "Name": "Carl",
        "Icon": "Carl.png",
        "Gender": "Bot",
        "Role": "Damage Dealer",
        "Rarity": "Super Rare",
        "ReleaseYear": "2019",
        "Family": "Gem Miners"
    },
    {
        "Name": "Rosa",
        "Icon": "Rosa.png",
        "Gender": "Female",
        "Role": "Tank",
        "Rarity": "Rare",
        "ReleaseYear": "2019",
        "Family": "Biology Team"
    },
    {
        "Name": "Tick",
        "Icon": "Tick.png",
        "Gender": "Bot",
        "Role": "Artillery",
        "Rarity": "Super Rare",
        "ReleaseYear": "2019",
        "Family": "Pirate"
    },
    {
        "Name": "Sandy",
        "Icon": "Sandy.png",
        "Gender": "Male",
        "Role": "Controller",
        "Rarity": "Legendary",
        "ReleaseYear": "2019",
        "Family": "Mystic Wanderers"
    },
    {
        "Name": "Max",
        "Icon": "Max.png",
        "Gender": "Male",
        "Role": "Support",
        "Rarity": "Mythic",
        "ReleaseYear": "2019",
        "Family": "Superhero"
    },
    {
        "Name": "Mr. P",
        "Icon": "Mr.P.png",
        "Gender": "Male",
        "Role": "Controller",
        "Rarity": "Mythic",
        "ReleaseYear": "2020",
        "Family": "Snowtel"
    },
    {
        "Name": "Jacky",
        "Icon": "Jacky.png",
        "Gender": "Female",
        "Role": "Tank",
        "Rarity": "Super Rare",
        "ReleaseYear": "2020",
        "Family": "Gem Miners"
    },
    {
        "Name": "Sprout",
        "Icon": "Sprout.png",
        "Gender": "Plant",
        "Role": "Artillery",
        "Rarity": "Mythic",
        "ReleaseYear": "2020",
        "Family": "Biology Team"
    },
    {
        "Name": "Gale",
        "Icon": "Gale.png",
        "Gender": "Male",
        "Role": "Controller",
        "Rarity": "Epic",
        "ReleaseYear": "2020",
        "Family": "Snowtel"
    },
    {
        "Name": "Nani",
        "Icon": "Nani.png",
        "Gender": "Bot",
        "Role": "Marksman",
        "Rarity": "Epic",
        "ReleaseYear": "2020",
        "Family": "Junker Family"
    },
    {
        "Name": "Surge",
        "Icon": "Surge.png",
        "Gender": "Bot",
        "Role": "Damage Dealer",
        "Rarity": "Legendary",
        "ReleaseYear": "2020",
        "Family": "Superhero"
    },
    {
        "Name": "Colette",
        "Icon": "Colette.png",
        "Gender": "Female",
        "Role": "Damage Dealer",
        "Rarity": "Epic",
        "ReleaseYear": "2020",
        "Family": "Gift Shop"
    },
    {
        "Name": "Lou",
        "Icon": "Lou.png",
        "Gender": "Bot",
        "Role": "Controller",
        "Rarity": "Mythic",
        "ReleaseYear": "2020",
        "Family": "Snowtel"
    },
    {
        "Name": "Edgar",
        "Icon": "Edgar.png",
        "Gender": "Male",
        "Role": "Assassin",
        "Rarity": "Epic",
        "ReleaseYear": "2020",
        "Family": "Gift Shop"
    },
    {
        "Name": "Colonel Ruffs",
        "Icon": "ColonelRuff.png",
        "Gender": "Male",
        "Role": "Support",
        "Rarity": "Mythic",
        "ReleaseYear": "2021",
        "Family": "Starr Force"
    },
    {
        "Name": "Stu",
        "Icon": "Stu.png",
        "Gender": "Bot",
        "Role": "Assassin",
        "Rarity": "Epic",
        "ReleaseYear": "2021",
        "Family": "Stunt Show"
    },
    {
        "Name": "Squeak",
        "Icon": "Squeak.png",
        "Gender": "Male",
        "Role": "Controller",
        "Rarity": "Mythic",
        "ReleaseYear": "2021",
        "Family": "Starr Force"
    },
    {
        "Name": "Griff",
        "Icon": "Griff.png",
        "Gender": "Male",
        "Role": "Controller",
        "Rarity": "Epic",
        "ReleaseYear": "2021",
        "Family": "Gift Shop"
    },
    {
        "Name": "Meg",
        "Icon": "Meg.png",
        "Gender": "Female",
        "Role": "Tank",
        "Rarity": "Legendary",
        "ReleaseYear": "2021",
        "Family": "Superhero"
    },
    {
        "Name": "Lola",
        "Icon": "Lola.png",
        "Gender": "Female",
        "Role": "Damage Dealer",
        "Rarity": "Epic",
        "ReleaseYear": "2021",
        "Family": "Brawlywood"
    },
    {
        "Name": "Grom",
        "Icon": "Grom.png",
        "Gender": "Male",
        "Role": "Artillery",
        "Rarity": "Epic",
        "ReleaseYear": "2021",
        "Family": "Fantasy"
    },
    {
        "Name": "Fang",
        "Icon": "Fang.png",
        "Gender": "Male",
        "Role": "Assassin",
        "Rarity": "Mythic",
        "ReleaseYear": "2022",
        "Family": "Starr Theatre"
    },
    {
        "Name": "Eve",
        "Icon": "Eve.png",
        "Gender": "Female",
        "Role": "Damage Dealer",
        "Rarity": "Mythic",
        "ReleaseYear": "2022",
        "Family": "Starr Force"
    },
    {
        "Name": "Janet",
        "Icon": "Janet.png",
        "Gender": "Female",
        "Role": "Marksman",
        "Rarity": "Mythic",
        "ReleaseYear": "2022",
        "Family": "Stunt Show"
    },
    {
        "Name": "Otis",
        "Icon": "Otis.png",
        "Gender": "Bot",
        "Role": "Controller",
        "Rarity": "Mythic",
        "ReleaseYear": "2022",
        "Family": "Deep Sea"
    },
    {
        "Name": "Sam",
        "Icon": "Sam.png",
        "Gender": "Male",
        "Role": "Assassin",
        "Rarity": "Epic",
        "ReleaseYear": "2022",
        "Family": "Goldarm Gang"
    },
    {
        "Name": "Gus",
        "Icon": "Gus.png",
        "Gender": "Male",
        "Role": "Support",
        "Rarity": "Super Rare",
        "ReleaseYear": "2022",
        "Family": "Ghost Station"
    },
    {
        "Name": "Gray",
        "Icon": "Gray.png",
        "Gender": "Male",
        "Role": "Support",
        "Rarity": "Mythic",
        "ReleaseYear": "2022",
        "Family": "Brawlywood"
    },
    {
        "Name": "Chester",
        "Icon": "Chester.png",
        "Gender": "Male",
        "Role": "Damage Dealer",
        "Rarity": "Legendary",
        "ReleaseYear": "2022",
        "Family": "Candyland"
    },
    {
        "Name": "R-T",
        "Icon": "R-T.png",
        "Gender": "Bot",
        "Role": "Damage Dealer",
        "Rarity": "Mythic",
        "ReleaseYear": "2023",
        "Family": "Starr Park Hub"
    },
    {
        "Name": "Willow",
        "Icon": "Willow.png",
        "Gender": "Female",
        "Role": "Controller",
        "Rarity": "Mythic",
        "ReleaseYear": "2023",
        "Family": "Swamp of love"
    },
    {
        "Name": "Maisie",
        "Icon": "Maisie.png",
        "Gender": "Female",
        "Role": "Marksman",
        "Rarity": "Epic",
        "ReleaseYear": "2023",
        "Family": "Starr Theatre"
    },
    {
        "Name": "Hank",
        "Icon": "Hank.png",
        "Gender": "Male",
        "Role": "Tank",
        "Rarity": "Epic",
        "ReleaseYear": "2023",
        "Family": "Deep Sea"
    },
    {
        "Name": "Cordelius",
        "Icon": "Cordelius.png",
        "Gender": "Male",
        "Role": "Assassin",
        "Rarity": "Legendary",
        "ReleaseYear": "2023",
        "Family": "Enchanted Woods"
    },
    {
        "Name": "Pearl",
        "Icon": "Pearl.png",
        "Gender": "Bot",
        "Role": "Damage Dealer",
        "Rarity": "Epic",
        "ReleaseYear": "2023",
        "Family": "Goldarm Gang"
    },
    {
        "Name": "Mico",
        "Icon": "Mico.png",
        "Gender": "Male",
        "Role": "Assassin",
        "Rarity": "Mythic",
        "ReleaseYear": "2023",
        "Family": "Brawlywood"
    },
    {
        "Name": "Kit",
        "Icon": "Kit.png",
        "Gender": "Male",
        "Role": "Support",
        "Rarity": "Legendary",
        "ReleaseYear": "2023",
        "Family": "Starr Toon Studios"
    }
]
//Div Refs
var ChampionsListDiv = document.getElementById("ChampionsList");
var WinnerDiv = document.getElementById("WinnerChempion");
var AttribDiv = document.getElementById("AttribList");
//Global Varibles
var GameIsFinishedOrChecking = false;
var AnimationDuration = 300;
var TryCount = 0;
//Get Winner
var WinnerChempionID = Math.floor(Math.random() * Object.keys(ChampionsList).length);

///////// Render ChempionList and Add OnClick Event //////////////////////////
for(var ID = 0; ID < Object.keys(ChampionsList).length; ID++){
    ChampionsListDiv.innerHTML += 
    `<div id="Chempion${ID}">
    <img alt="${ChampionsList[ID].Name}" src="Assets/Champions/${ChampionsList[ID].Icon}">
    </div>`;

    setTimeout(AddEventClick, 100, ID);
}
function AddEventClick(ID){
    document.querySelector(`#Chempion${ID}`).addEventListener('click', CheckIfChempionIsWinnerChempion);
    document.querySelector(`#Chempion${ID}`).myParam = ID;
}

///////// Check Chempion /////////////////////////////////////////////////////
async function CheckIfChempionIsWinnerChempion(ElementPointer){
    var ID = ElementPointer.currentTarget.myParam;
    var CurrentChempion = document.getElementById(`Chempion${ID}`);

    if(CurrentChempion.className == "UsedChempion" || GameIsFinishedOrChecking) return 0;
    GameIsFinishedOrChecking = true
    TryCount++;
    
    CompareAttribs(ID);
    await delay(AnimationDuration * 5);

    if(WinnerChempionID == ID)
    {
        WinnerDiv.style.display = "grid";
        WinnerDiv.innerHTML = 
        `<div><img alt="${ChampionsList[ID].Name}" src="Assets/Champions/${ChampionsList[ID].Icon}"></br>
        Congrats, You guessed at ${TryCount} time. That was ${ChampionsList[ID].Name} 💖</br>
        <button onclick="document.location = 'index.html'">Play Again</button></div>`;
        return 0;
    }
    else
    {
        GameIsFinishedOrChecking = false;
        CurrentChempion.className = "UsedChempion";
        return 0;
    }
}
async function CompareAttribs(ID){
    //Add Chempion to Attrib List
    var Row = AttribDiv.getElementsByTagName('tbody')[0].insertRow(0);

    //Fill Chempions Info Data
    var Icon = Row.insertCell(0);
    var Gender = Row.insertCell(1)
    var Role = Row.insertCell(2);
    var Rarity = Row.insertCell(3);
    var Release = Row.insertCell(4);
    var Family = Row.insertCell(5);
    Icon.innerHTML = `<img alt="${ChampionsList[ID].Name}" class="TableIcon" src="Assets/Champions/${ChampionsList[ID].Icon}">`;
    Gender.innerHTML = ChampionsList[ID].Gender
    Role.innerHTML = ChampionsList[ID].Role
    Rarity.innerHTML = ChampionsList[ID].Rarity
    Release.innerHTML = ChampionsList[ID].ReleaseYear
    Family.innerHTML = ChampionsList[ID].Family

    //Set Colors and Clasess for Compared Values
    await delay(AnimationDuration);
    if(ChampionsList[ID].Gender == ChampionsList[WinnerChempionID].Gender) Gender.className = "Correct";
    else  Gender.className = "InCorrect";
    await delay(AnimationDuration);
    if(ChampionsList[ID].Role == ChampionsList[WinnerChempionID].Role) Role.className = "Correct";
    else  Role.className = "InCorrect";
    await delay(AnimationDuration);
    if(ChampionsList[ID].Rarity == ChampionsList[WinnerChempionID].Rarity) Rarity.className = "Correct";
    else  Rarity.className = "InCorrect";
    await delay(AnimationDuration);
    if(ChampionsList[ID].ReleaseYear == ChampionsList[WinnerChempionID].ReleaseYear) Release.className = "Correct";
    else  Release.className = "InCorrect";
    await delay(AnimationDuration);
    if(ChampionsList[ID].Family == ChampionsList[WinnerChempionID].Family) Family.className = "Correct";
    else  Family.className = "InCorrect";
}
