//needs a way for both webpages to have different questions - we need to solve the questionbank resetting problem

//creates variables that will contain the quiz questions, and will be saved in the local storage of the user

let firstQuizStorage = localStorage.getItem("firstQuizStorage");
let secondQuizStorage = localStorage.getItem("secondQuizStorage");

var questionBank; 
var pageForm = document.forms[0];
//main problem is that everytime the webpage resets this part gets repeated so the array splices are rendered useless cus this part just defines the questionBank as full again, so this needs to be run only once
questionBank = [
  //True or False 
  '<label>In the original Tetris, there are 7 different types of blocks.</label><br><select id="tetris" name="tetris"><option value=""></option><option value="true">True</option><option value="false">False</option></select><br><br>',
  '<label>In Valorant, as of patch v4.08, there are 6 agents that originate from   countries in Asia</label><br><select id="valorant" name="valorant"><option value=""></option><option value="true">True</option><option value="false">False</option></select><br><br>',
  '<label>In the original Pokemon series, Pikachu’s tail has a black tip.</label><br><select id="poke_t" name="poke_t"><option value=""></option><option value="true">True</option><option value="false">False</option></select><br><br>',
  '<label>Dr. Ivo Robotnik is the main antagonist in the Sonic The Hedgehog games.</label><br><select id="sonic" name="sonic"><option value=""></option><option value="true">True</option><option value="false">False</option></select><br><br>',
  '<label>Hit game Among Us has won 7 different awards in 2021, one of which was Favorite Video Game in Nickelodeon Kids’ Choice Awards.</label><br><select id="au_award" name="au_award"><option value=""></option><option value="true">True</option><option value="false">False</option></select><br><br>',
  
  //Multiple Choice
  '<label>Which was the second “Super Smash Bros” installment?</label><br><select id="ssb_inst" name="ssb_inst"><option value=""></option><option value="ultimate">Super Smash Bros. Ultimate</option><option value="brawl">Super Smash Bros. Brawl</option><option value="melee">Super Smash Bros. Melee</option><option value="wii">Super Smash Bros. Wii U</option></select><br><br>',
  '<label>Which of these famous rappers joined FaZe Clan, a renowned esports and entertainment organization this March of 2022?</label><br><select id="faze" name="faze"><option value=""></option><option value="snoopDogg">Snoop Dogg</option><option value="eminem">Eminem</option><option value="juiceWRLD">Juice WRLD</option><option value="travisScott">Travis Scott</option></select><br><br>',
  '<label>When did the first Pokemon game get released?</label><br><select id="poke_1st" name="poke_1st"><option value=""></option><option value="1995">October 18, 1995</option><option value="1996"> February 27, 1996</option><option value="2022">November 21, 2002</option><option value="1999">November 21, 1999</option></select><br><br>',
  '<label>How many Korok Seeds are there in The Legend of Zelda: Breath of The Wild?</label><br><select id="loz_seed" name="loz_seed"><option value=""></option><option value="700">700</option><option value="800">800</option><option value="900">900</option><option value="1000">1000</option></select><br><br>',
  '<label>How long is the current world record for speedrunning Super Mario 64?</label><br><select id="SM64" name="SM64"><option value=""></option><option value="12">12 min. 34 sec.</option><option value="6">6 min. 27 sec.</option><option value="2">2 min. 07 sec.</option><option value="7">7 min. 10 sec.</option></select><br><br>',
  
  //Short Answer
  '<label>Who is Mario’s arch-rival counterpart?</label><br><input type="text" id="mario_rival" name="mario_rival"></input><br><br>',
  '<label>Who is the protagonist in “The Legend Of Zelda”?</label><br><input type="text" id="loz_char" name="loz_char"></input><br><br>',
  '<label>In the game “Candy Crush Saga,” what is the name of the special candy that, when switched with a regular candy, clears all candies of that color from the board?</label><br><input type="text" id="ccs" name="ccs"></input><br><br>',
  '<label>Who is the main protagonist of the Halo series?</label><br><input type="text" id="halo" name="halo"></input><br><br>',
  '<label>What franchise has Fortnite collaborated with the latest as of May of 2022?</label><br><input type="text" id="fortnite" name="fortnite"></input><br><br>',
  
  //Sus 'Em Out
  '<label>Pikachu, Mewtwo, Greninja, Samurott</label><br><select id="ssb_p" name="SSBp"><option value=""></option><option value="pikachu">Pikachu</option><option value="mewtwo">Mewtwo</option><option value="greninja">Greninja</option><option value="samurott">Samurott</option></select><br><br>',
  '<label>PUBG, Valorant, Apex Legends, Warzone</label><br><select id="broyale" name="broyale"><option value=""></option><option value="pubg">PUBG</option><option value="valorant">Valorant</option><option value="apexLegends">Apex Legends</option><option value="warzone">Warzone</option></select><br><br>',
  '<label>Jinx, Jayce, Jax, Heimerdinger</label><br><select id="arcane" name="arcane"><option value=""></option><option value="jinx">Jinx</option><option value="jayce">Jayce</option><option value="jax">Jax</option><option value="heirmerdinger">Heirmerdinger</option></select><br><br>',
  '<label>Electro, Dendro, Pyro, Anemo</label><br><select id="genshin_ele" name="genshin_ele"><option value=""></option><option value="electro">Electro</option><option value="dendro">Dendro</option><option value="pyro">Pyro</option><option value="anemo">Anemo</option></select><br><br>',
  '<label>Slug, Lightning, Bat, Jump</label><br><select id="coc" name="coc"><option value=""></option><option value="slug">Slug</option><option value="lightning">Lightning</option><option value="bat">Bat</option><option value="jump">Jump</option></select><br><br>',
  
  //Who's the Crewmate?
  '<label>Minecraft Music Disc Composers - Lena Raine, Samuel Åberg</label><br><select id="mc_disc" name="mc_disc"><option value=""></option><option value="toruItawani">Toru Itawani</option><option value="laraCroft">Lara Croft</option><option value="masahiroSakurai">Masahiro Sakurai</option><option value="c418">C418</option></select><br><br>',
  '<label>Stardew Valley Characters - Mr. Qi, Wizard, Professor Snail, Dwarf</label><br><select id="sdv" name="sdv"><option value=""></option><option value="crinkles">Crinkles</option><option value="bonnie">Bonnie</option><option value="sam">Sam</option><option value="yuri">Yuri</option></select><br><br>',
  '<label>Mario Enemies - Goomba, Bowser, Piranha Plant</label><br><select id="mario_enemy" name="mario_enemy"><option value=""></option><option value="podoboo">Podoboo</option><option value="toad">Toad</option><option value="peach">Peach</option><option value="yoshi">Yoshi</option></select><br><br>',
  '<label>Highest Rank in Online Games  - Predator, Challenger, Radiant</label><br><select id="rank1" name="rank1"><option value=""></option><option value="dragonmaster">Dragonmaster</option><option value="divine">Divine</option><option value="highElder">High Elder</option><option value="immortal">Immortal</option></select><br><br>',
  '<label>Minecraft Wood Types - Oak, Birch, Warped, Acacia</label><br><select id="mc_wood" name="mc_wood"><option value=""></option><option value="pine">Pine</option><option value="mangrove">Mangrove</option><option value="myrtle">Myrtle</option><option value="fir">Fir</option></select><br><br>',
  
  //Listen!
  '<input type="button" id="overwatch" value="Click This To Play The Sound" onclick="playSound(id)"/><br><label>Name The Game: </label><br><input type="text"></input><br><label>Name The Character: </label><br><input type="text"></input><br><br>',
  '<input type="button" id="genshin" value="Click This To Play The Sound" onclick="playSound(id)"/><br><label>Name The Game: </label><br><input type="text"></input><br><label>Name The Character: </label><br><input type="text"></input><br><br>',
  '<input type="button" id="amongus"value="Click This To Play The Sound" onclick="playSound(id)"/><br><label>Name The Game: </label><br><input type="text"></input><br><label>Name The Action Used: </label><br><input type="text"></input><br><br>',
  '<input type="button" id="undertale" value="Click This To Play The Sound" onclick="playSound(id)"/><br><label>Name The Game: </label><br><input type="text"></input><br><label>Name The Theme Name: </label><br><input type="text"></input><br><br>',
  '<input type="button" id="pokemon" value="Click This To Play The Sound" onclick="playSound(id)"/><br><label>Name The Game: </label><br><input type="text"></input><br><label>Name The Theme Name: </label><br><input type="text"></input><br><br>',
  
  //Number Estimation
  '<label>How many concurrent viewers did the most watched Among Us stream on Twitch have?</label><br><input type="number" min="5000" step="5000" id="au_twitch" name="au_twitch></input><br><br>',
  '<label>In 2022, how many daily active users does Roblox have?</label><br><input type="number" min="100000" step="100000" id="roblox" name="roblox"></input><br><br>',
  '<label>How big was the prize pool in the esports tournament with the biggest prize pool in history?</label><br><input type="number" min="1000000" step="1" id="prizepool" name="prizepool"></input><br><br>',
  '<label>How many pieces of clothing are there in Splatoon 2?</label><br><input type="number" min="5" step="5" id="splatoon" name="splatoon"></input><br><br>',
  '<label>How many units has the Grand Theft Auto franchise sold as of 2022?</label><br><input type="number" min="10000000" step="10000000" id="gta" name="gta"></input><br><br>',
];

localStorage.setItem("questionBank", questionBank);
console.log(questionBank);
//main thing we need is so that the array splices stick to the local storage

function quizQuestions1(qnum, start) {
//adds question to quiz form and removes question from question bank until there are 15 questions
    
  if (firstQuizStorage) {
    //if the first quiz's storage already has a value, it sets the value of the 1st quiz form as those questions
    firstQuiz.innerHTML = firstQuizStorage;
  }
  else {
    for(var j=1;j<=qnum;j++) {
      var i = Math.floor(Math.random()*questionBank.length);
      firstQuiz.innerHTML += start - 1 + j + ". " + questionBank[i];
      questionBank.splice(i, 1);
    }
    
    firstQuiz.innerHTML += "<input type='reset' value='Reset Answers'><br><br>";
    //sets the value of the first quiz storage as the first quiz's questions
    localStorage.setItem("firstQuizStorage", firstQuiz.innerHTML);
  }

  //updates the question bank to include the removed questions
  localStorage.setItem("questionBank", questionBank);
  questionBank = localStorage.getItem("questionBank");
}

function quizQuestions2(qnum, start) {
  if (secondQuizStorage) {
    //if the second quiz's storage already has a value, it sets the value of the 2nd quiz form as those questions
    secondQuiz.innerHTML = secondQuizStorage;
  }
  else {
    for(var j=1;j<=qnum;j++) {
      var i = Math.floor(Math.random()*questionBank.length);
      secondQuiz.innerHTML += start - 1 + j + ". " + questionBank[i];
      questionBank.splice(i, 1);
    }
    secondQuiz.innerHTML += "<input type='reset' value='Reset Answers'><br><br>";
    secondQuiz.innerHTML += "<input type='submit' value='Submit'><br><br>";
    //sets the value of the second quiz storage as the second quiz's questions
    localStorage.setItem("secondQuizStorage", secondQuiz.innerHTML);
  }

  //updates the question bank to include the removed questions
  localStorage.setItem("questionBank", questionBank);
  questionBank = localStorage.getItem("questionBank");
};

//lets button inputs play sound
function playSound(x) {
  var music;

  //sets a specific audio for each listening question to the variable "music"
  switch(x) {
    case "overwatch":
      music = new Audio("../audio/overwatch.mp3");
      break;
    case "genshin":
      music = new Audio("../audio/genshin.mp3");
      break;
    case "amongus":
      music = new Audio("../audio/amongus.mp3");
      break;
    case "undertale":
      music = new Audio("../audio/undertale.mp3");
      break;
    case "pokemon":
      music = new Audio("../audio/pokemon.mp3");
      break;
  }
  
  music.play();
};

function hoverin(){
  finish.style.background='#f2f2f2';
};
function hoverout(){
  finish.style.background='#d1d1d1';
};

//confirms submission when submit is clicked. Changes attributes of 'finish' button.
pageForm.addEventListener("submit", function(event) {
  //prevents submission
  event.preventDefault();

  //Uses user confirmation as condition. 
	if (confirm('Proceed to submit?')) {
    //changes adds 
    pageForm.addEventListener("mouseover",hoverin);
    pageForm.addEventListener("mouseout",hoverout);
    finish.href = "ranks.html";
		saveFormData();
		pageForm.submit();
	}
});

function saveFormData() {

  formData = {
    //sign-up data
  	uname:uname.value,
  	sec:sec.value,
  
    //True or False 
    tetris:tetris.value,
    valorant:valorant.value,
    poke_t:poke_t.value,
    sonic:sonic.value,
    au_award:au_award.value,
    
     //Multiple Choice
     ssb_inst:ssb_inst.value,
     faze:faze.value,
     poke_1st:poke_1st.value,
     loz_seed:loz_seed.value,
     SM64:SM64.value,
  
     //Short Answer
     mario_rival:mario_rival.value,
     loz_char:loz_char.value,
     ccs:ccs.value,
     halo:halo.value,
     fortnite:fortnite.value,
  
     //Sum 'Em Out
     ssb_p:ssb_p.value,
     broyale:broyale.value,
     arcane:arcane.value,
     genshin_ele:genshin_ele.value,
    coc:coc.value,
  
     //Who's the Crewmate?
     mc_disc:mc_disc.value,
     sdv:sdv.value,
     mario_enemy:mario_enemy.value,
    rank1:rank1.value,
     mc_wood:mc_wood.value,
  
     //Listen!
     overwatch:overwatch.value,
     genshin:genshin.value,
     amongus:amongus.value,
     undertale:undertale.value,
     pokemon:pokemon.value,
     
     //Number Estimation
     au_twitch:au_twitch.value,
     roblox:roblox.value,
     prizepool:prizepool.value,
     splatoon:splatoon.value,
     gta:gta.value
  }

  let formDataString = JSON.stringify(formData);
	localStorage.setItem("formDataObj", formDataString);
}

//adds a row to ranking table with all data
function ranking(){
  
};
	

//restarts the questions everytime the quiz is reset by removing the value of the local storage for the quiz questions
function restart() {
  localStorage.removeItem("firstQuizStorage");
  localStorage.removeItem("secondQuizStorage");
}