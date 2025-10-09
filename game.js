(() => {
  "use strict";

  const lbBody = document.getElementById("lbBody");
  const playerNameInput = document.getElementById("playerName");
  const playerAvatarSelect = document.getElementById("playerAvatar");

  const CONFIG = {
    blitzTime: 30,
    blitzCount: 5,
    points: 10,
    musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  };

  // --------------- BANK ---------------
const BANK = {
  mcq: [
    {q:"Capital of France?", opts:["Berlin","Paris","Rome","Madrid"], a:1},
    {q:"Fastest land animal?", opts:["Tiger","Cheetah","Horse","Leopard"], a:1},
    {q:"Largest planet in our Solar System?", opts:["Earth","Jupiter","Saturn","Mars"], a:1},
    {q:"H2O is commonly known as?", opts:["Salt","Water","Oxygen","Hydrogen"], a:1},
    {q:"Which is a mammal?", opts:["Shark","Dolphin","Turtle","Frog"], a:1},
    {q:"Who painted the Mona Lisa?", opts:["Van Gogh","Da Vinci","Picasso","Michelangelo"], a:1},
    {q:"What is 12 × 12?", opts:["124","144","132","156"], a:1},
    {q:"Which is the smallest prime number?", opts:["0","1","2","3"], a:2},
    {q:"Mount Everest is in which country?", opts:["Nepal","India","China","Bhutan"], a:0},
    {q:"Who wrote 'Romeo and Juliet'?", opts:["Shakespeare","Hemingway","Tolstoy","Dickens"], a:0},
    {q:"What gas do plants produce?", opts:["Oxygen","Carbon Dioxide","Nitrogen","Hydrogen"], a:0},
    {q:"Which element has the symbol 'O'?", opts:["Gold","Oxygen","Iron","Helium"], a:1},
    {q:"Largest ocean on Earth?", opts:["Atlantic","Indian","Pacific","Arctic"], a:2},
    {q:"Which country has the Great Wall?", opts:["Japan","China","India","Mongolia"], a:1},
    {q:"Who discovered gravity?", opts:["Newton","Einstein","Tesla","Galileo"], a:0},
    {q:"Which planet is known as Red Planet?", opts:["Mars","Venus","Jupiter","Saturn"], a:0},
    {q:"Speed of light is approx?", opts:["300,000 km/s","30,000 km/s","300 km/s","3,000 km/s"], a:0},
    {q:"Who is the father of computers?", opts:["Charles Babbage","Alan Turing","Edison","Tesla"], a:0},
    {q:"Square root of 64?", opts:["6","7","8","9"], a:2},
    {q:"Which language is used for web?", opts:["Python","JavaScript","C++","Java"], a:1}
  ],
  riddle: [
    {q:"The more you take, the more you leave behind. What am I?", opts:["Steps","Time","Air","Shadows"], a:0},
    {q:"I speak without a mouth. What am I?", opts:["Echo","Wind","Shadow","Thought"], a:0},
    {q:"What has keys but can't open locks?", opts:["Piano","Map","Door","Book"], a:0},
    {q:"What has a face and two hands but no arms?", opts:["Clock","Robot","Mirror","Book"], a:0},
    {q:"What gets wetter as it dries?", opts:["Towel","Water","Rain","Soap"], a:0},
    {q:"I’m tall when young, short when old. What am I?", opts:["Candle","Tree","Person","Shadow"], a:0},
    {q:"What can travel around the world while staying in a corner?", opts:["Stamp","Airplane","Clock","Shadow"], a:0},
    {q:"What comes once in a minute, twice in a moment?", opts:["Letter M","Hour","Second","Day"], a:0},
    {q:"What has one eye but cannot see?", opts:["Needle","Storm","Pot","Camera"], a:0},
    {q:"I have branches but no fruit. What am I?", opts:["Bank","Tree","River","Library"], a:0},
    {q:"The more of me there is, the less you see. What am I?", opts:["Fog","Darkness","Rain","Cloud"], a:1},
    {q:"What belongs to you but is used by others?", opts:["Name","Phone","Money","Clothes"], a:0},
    {q:"I’m always running but never move. What am I?", opts:["Clock","River","Car","Shadow"], a:1},
    {q:"What has many teeth but cannot bite?", opts:["Comb","Saw","Gear","Fork"], a:0},
    {q:"Forward I am heavy, backward I am not. What am I?", opts:["Ton","Stone","Car","Ball"], a:0},
    {q:"What has cities, but no houses?", opts:["Map","Globe","Book","Puzzle"], a:0},
    {q:"What is easy to lift but hard to throw?", opts:["Feather","Stone","Ball","Paper"], a:0},
    {q:"I’m full of holes but hold water. What am I?", opts:["Sponge","Net","Bucket","Bottle"], a:0},
    {q:"The more you take from me, the bigger I get. What am I?", opts:["Hole","Cave","Lake","Fire"], a:0},
    {q:"What has a neck but no head?", opts:["Bottle","Shirt","Guitar","River"], a:0}
  ],
  math: [
    {q:"15 × 3 = ?", opts:["45","40","35","50"], a:0},
    {q:"12 + 25 = ?", opts:["37","35","36","38"], a:0},
    {q:"50 ÷ 5 = ?", opts:["5","10","15","12"], a:1},
    {q:"7 × 8 = ?", opts:["54","56","58","60"], a:1},
    {q:"9² = ?", opts:["81","72","90","79"], a:0},
    {q:"√144 = ?", opts:["12","14","16","10"], a:0},
    {q:"25 × 4 = ?", opts:["100","90","110","120"], a:0},
    {q:"36 ÷ 6 = ?", opts:["5","6","7","8"], a:3},
    {q:"5³ = ?", opts:["125","115","150","130"], a:0},
    {q:"20 + 35 = ?", opts:["55","50","60","65"], a:0},
    {q:"100 − 45 = ?", opts:["55","65","50","60"], a:0},
    {q:"18 ÷ 2 = ?", opts:["8","9","10","12"], a:1},
    {q:"11 × 11 = ?", opts:["121","111","110","112"], a:0},
    {q:"30 − 12 = ?", opts:["18","20","19","22"], a:0},
    {q:"8 × 7 = ?", opts:["54","56","58","52"], a:1},
    {q:"√81 = ?", opts:["7","8","9","10"], a:2},
    {q:"14 + 28 = ?", opts:["42","40","41","43"], a:0},
    {q:"60 ÷ 12 = ?", opts:["4","5","6","3"], a:1},
    {q:"9 × 6 = ?", opts:["54","56","52","58"], a:0},
    {q:"7 + 15 = ?", opts:["21","22","23","20"], a:1}
  ],
  sports: [
    {q:"How many players in a soccer team?", opts:["9","10","11","12"], a:2},
    {q:"How many minutes in a standard basketball game?", opts:["40","48","36","50"], a:1},
    {q:"Which sport uses a shuttlecock?", opts:["Tennis","Badminton","Squash","Ping Pong"], a:1},
    {q:"Which country won the FIFA World Cup 2018?", opts:["Brazil","France","Germany","Argentina"], a:1},
    {q:"How many holes in a standard golf course?", opts:["9","12","18","24"], a:2},
    {q:"Which sport uses a puck?", opts:["Hockey","Football","Basketball","Cricket"], a:0},
    {q:"Olympics are held every?", opts:["2 years","4 years","6 years","5 years"], a:1},
    {q:"Which sport is called the 'king of sports'?", opts:["Cricket","Football","Tennis","Basketball"], a:1},
    {q:"How many players in a volleyball team?", opts:["5","6","7","8"], a:1},
    {q:"Which sport uses rings?", opts:["Gymnastics","Basketball","Volleyball","Football"], a:0},
    {q:"Who has won most F1 championships?", opts:["Hamilton","Schumacher","Vettel","Senna"], a:1},
    {q:"Which country hosts the Wimbledon?", opts:["USA","Australia","UK","France"], a:2},
    {q:"How many players in rugby?", opts:["11","13","15","12"], a:2},
    {q:"Which sport uses a bow and arrow?", opts:["Shooting","Archery","Fencing","Darts"], a:1},
    {q:"How long is a marathon?", opts:["42 km","40 km","45 km","50 km"], a:0},
    {q:"Which sport has touchdowns?", opts:["Football","Cricket","Hockey","Tennis"], a:0},
    {q:"Which sport uses a bat and ball?", opts:["Cricket","Football","Hockey","Basketball"], a:0},
    {q:"How many players in baseball?", opts:["7","9","11","10"], a:1},
    {q:"Which sport is played on ice?", opts:["Curling","Ice Hockey","Football","Basketball"], a:1},
    {q:"Which country hosted the 2016 Olympics?", opts:["Brazil","China","UK","Russia"], a:0}
  ],
  film: [
    {q:"Who directed the Malayalam film *Drishyam*?", opts:["Jeethu Joseph","Lal Jose","Anjali Menon","Sathyan Anthikad"], a:0},
    {q:"In which film did Mohanlal play Georgekutty?", opts:["Drishyam","Pulimurugan","Lucifer","Spadikam"], a:0},
    {q:"Which was the first Malayalam 3D movie?", opts:["My Dear Kuttichathan","Manichitrathazhu","CID Moosa","Narasimham"], a:0},
    {q:"Who played Iron Man in Marvel movies?", opts:["Chris Evans","Robert Downey Jr.","Chris Hemsworth","Mark Ruffalo"], a:1},
    {q:"Which movie features a talking donkey?", opts:["Shrek","Lion King","Madagascar","Toy Story"], a:0},
    {q:"Which director is famous for 'Inception'?", opts:["Nolan","Spielberg","Tarantino","Scorsese"], a:0},
    {q:"Who played Jack in 'Titanic'?", opts:["Leonardo DiCaprio","Brad Pitt","Tom Cruise","Johnny Depp"], a:0},
    {q:"Which movie won Best Picture 2020?", opts:["1917","Parasite","Joker","Ford v Ferrari"], a:1},
    {q:"Who voiced Woody in Toy Story?", opts:["Tom Hanks","Tim Allen","Brad Pitt","Chris Pratt"], a:0},
    {q:"Which film series features Hogwarts?", opts:["Harry Potter","Percy Jackson","Twilight","Lord of the Rings"], a:0},
    {q:"Director of 'Jurassic Park'?", opts:["Nolan","Spielberg","Tarantino","Cameron"], a:1},
    {q:"Which superhero is from Wakanda?", opts:["Iron Man","Black Panther","Spider-Man","Doctor Strange"], a:1},
    {q:"Who played Joker in 2019?", opts:["Joaquin Phoenix","Heath Ledger","Jack Nicholson","Jared Leto"], a:0},
    {q:"Movie about a lion cub named Simba?", opts:["Lion King","Madagascar","Tarzan","Zootopia"], a:0},
    {q:"Which film has the line 'May the Force be with you'?", opts:["Star Wars","Star Trek","Avatar","Matrix"], a:0},
    {q:"Director of 'Pulp Fiction'?", opts:["Tarantino","Spielberg","Nolan","Coppola"], a:0},
    {q:"Who played Deadpool?", opts:["Ryan Reynolds","Chris Evans","Robert Downey Jr.","Tom Hardy"], a:0},
    {q:"Which movie features Thanos?", opts:["Avengers","Justice League","Guardians of Galaxy","Batman"], a:0},
    {q:"Animated movie about toys coming to life?", opts:["Toy Story","Inside Out","Coco","Up"], a:0},
    {q:"Director of 'Avatar'?", opts:["James Cameron","Steven Spielberg","Peter Jackson","Ridley Scott"], a:0},
    {q:"Which movie has a character named Frodo?", opts:["Lord of the Rings","Harry Potter","Narnia","Hobbit"], a:0}
  ]
};


  // --------------- STATE ---------------
  let profile = {name:"Guest", avatar:"🙂"};
  let blitzQuestions = [];
  let blitzIndex = 0;
  let blitzTime = CONFIG.blitzTime;
  let score = 0;
  let timer = null;
  let bgm = null;
  let currentCategory = null;

  // --------------- PROFILE ---------------
  function loadProfile() {
    try {
      const saved = JSON.parse(localStorage.getItem("upa_profile"));
      if(saved) profile = saved;
    } catch(e){}
    // populate sidebar
    playerNameInput.value = profile.name;
    playerAvatarSelect.value = profile.avatar;
  }

  window.saveProfile = function() {
    const name = playerNameInput.value.trim() || "Guest";
    const avatar = playerAvatarSelect.value;
    profile = {name, avatar};
    localStorage.setItem("upa_profile", JSON.stringify(profile));
    renderLeaderboard();
  };

  // --------------- RULES ---------------
  window.showRules = function(cat) {
    currentCategory = cat;
    document.getElementById("mainContent").innerHTML = `
      <div class="gameCard">
        <h2>⚡ Blitz Mode Rules</h2>
        <ul style="text-align:left;max-width:500px;margin:auto;">
          <li>You have <b>${CONFIG.blitzTime} seconds total</b>.</li>
          <li>You must answer <b>${CONFIG.blitzCount} questions</b>.</li>
          <li>Each correct answer = <b>${CONFIG.points} points</b>.</li>
          <li>Fast, but careful — time keeps ticking!</li>
        </ul>
        <button class="menuBtn" onclick="startBlitz()">Start Blitz</button>
      </div>
    `;
  };

  // --------------- BLITZ ---------------
  window.startBlitz = function() {
    score = 0; blitzIndex = 0; blitzTime = CONFIG.blitzTime;
    blitzQuestions = [...BANK[currentCategory]].sort(()=>Math.random()-0.5).slice(0,CONFIG.blitzCount);
    renderBlitzQ();
    startTimer();
  };

  function renderBlitzQ() {
    if (blitzIndex >= blitzQuestions.length) return finishBlitz();
    const q = blitzQuestions[blitzIndex];
    document.getElementById("mainContent").innerHTML = `
      <div class="gameCard">
        <div class="row">
          <div>${profile.avatar} ${profile.name}</div>
          <div>⏱️ <span id="time">${blitzTime}</span>s</div>
        </div>
        <h3>${q.q}</h3>
        <div>${q.opts.map((o,i)=>`<button class="optBtn" onclick="answer(${i})">${o}</button>`).join("")}</div>
        <p>Score: <span id="uiScore">${score}</span></p>
      </div>
    `;
  }

  window.answer = function(i) {
    const q = blitzQuestions[blitzIndex];
    if(i===q.a) score+=CONFIG.points;
    blitzIndex++;
    if(blitzIndex >= blitzQuestions.length) finishBlitz();
    else renderBlitzQ();
  };

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(()=>{
      blitzTime--;
      const t = document.getElementById("time");
      if(t) t.innerText = blitzTime;
      if(blitzTime<=0) finishBlitz();
    },1000);
  }

  function finishBlitz() {
    clearInterval(timer);
    saveToLeaderboard(profile.name, score);
    document.getElementById("mainContent").innerHTML = `
      <div class="gameCard">
        <h2>🏁 Blitz Finished!</h2>
        <p>Your Score: ${score}</p>
        <a href="index.html" class="menuBtn">Back to Menu</a>
      </div>
    `;
  }

  function renderMenu() {
    document.getElementById("mainContent").innerHTML = `
      <h1>⚡ Mystery Puzzle Box</h1>
      <div class="gameCard" id="menuCard">
        <h2>Choose a Blitz Category</h2>
        <button class="menuBtn" onclick="showRules('mcq')">Blitz — MCQ</button>
        <button class="menuBtn" onclick="showRules('riddle')">Blitz — Riddle</button>
        <button class="menuBtn" onclick="showRules('math')">Blitz — Math</button>
        <button class="menuBtn" onclick="showRules('sports')">Blitz — Sports</button>
        <button class="menuBtn" onclick="showRules('film')">Blitz — Film</button>
      </div>
    `;
  }

  // --------------- LEADERBOARD ---------------
  function saveToLeaderboard(name, score) {
    const key="upa_leaderboard";
    const arr = JSON.parse(localStorage.getItem(key)||"[]");
    arr.push({name,score,date:Date.now()});
    arr.sort((a,b)=>b.score-a.score);
    localStorage.setItem(key, JSON.stringify(arr.slice(0,5)));
    renderLeaderboard();
  }

  function renderLeaderboard() {
    const arr = JSON.parse(localStorage.getItem("upa_leaderboard")||"[]");
    lbBody.innerHTML="";
    if(arr.length===0){
      lbBody.innerHTML="<tr><td colspan=4>No scores yet</td></tr>";
      return;
    }
    arr.forEach((e,i)=>{
      const tr=document.createElement("tr");
      tr.innerHTML=`<td>${i+1}</td><td>${e.name}</td><td>${e.score}</td><td>${new Date(e.date).toLocaleString()}</td>`;
      lbBody.appendChild(tr);
    });
  }

  // --------------- MUSIC ---------------
  function initMusic() {
    bgm = new Audio(CONFIG.musicUrl);
    bgm.loop=true;
    const chk = document.getElementById("toggleMusic");
    const pref = localStorage.getItem("upa_music")==="on";
    chk.checked = pref; 
    if(pref) bgm.play().catch(()=>{});
    chk.addEventListener("change",()=>{
      if(chk.checked){ bgm.play().catch(()=>{}); localStorage.setItem("upa_music","on"); }
      else { bgm.pause(); localStorage.setItem("upa_music","off"); }
    });
  }

  // --------------- INIT ---------------
  window.addEventListener("DOMContentLoaded", ()=>{
    loadProfile();
    renderLeaderboard();
    initMusic();
  });

})();
