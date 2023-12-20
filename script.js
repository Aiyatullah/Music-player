// script.js

const audioPlayer = document.getElementById('audio-player');

const playButton = document.querySelector('.play-btn');

const prevButton = document.querySelector('.prev-btn');

const nextButton = document.querySelector('.next-btn');

const songSelector = document.getElementById('song-selector');

let currentSongIndex = 0;

// Array of song URLs
const songs = [
  'A-Man-Without-Love(PagalWorld).mp3',

  'Papa-Meri-Jan(PagalWorld).mp3',

  'old.mp3'
];

// Function to play or pause the audio
function playPause() {

  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.querySelector('.play-icon').style.display = 'none';
    playButton.querySelector('.pause-icon').style.display = 'block';
  }
   else {
    audioPlayer.pause();
    playButton.querySelector('.play-icon').style.display = 'block';
    playButton.querySelector('.pause-icon').style.display = 'none';
  }

}

// Function to play the previous song
function prevSong() {

  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateAudio();

}

// Function to play the next song
function nextSong() {

  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateAudio();

}

// Function to update the audio source
function updateAudio() {

  audioPlayer.src = songs[currentSongIndex];
  audioPlayer.play();
  playButton.querySelector('.play-icon').style.display = 'none';
  playButton.querySelector('.pause-icon').style.display = 'block';

}

// Event listener for song selection change
songSelector.addEventListener('change', function() {

  currentSongIndex = this.selectedIndex;
  updateAudio();

});

// Event listener for song end, play the next song
audioPlayer.addEventListener('ended', function() {

  nextSong();

});


//please look forward at aiyatullah linkedin profile

// also note you can add time play pause'
// if you want you can if you dont its upto you




//here is some gibberrish please cut it





// Lorem ipsum dolor sit ame
// t con
// sectetur, adipisicing elit. Magnam nostrum repudiandae illum quam excepturi offic
// ia ducimus, iure at? Deserunt har
// um cupiditate provident laborum pariatur iure eius eos eaque minima ipsa?

// Lorem ipsum do
// lor sit amet consectetur adipisicing elit. Aliquid iusto neque 
// nemo culpa voluptatem voluptas, nobis omnis architecto odit ex, non
//  totam delectus aspernatur libero officia exercitationem dolores accusantium
//  . Ullam quis doloremque hic itaque provident quaerat veniam, eius accusamus
//   ea temporibus eligendi sit debitis architecto incidunt! Eaque fugiat lauda
//   ntium fuga debitis, cupiditate laboriosam illum earum veniam, exercitation
//   em ut officia voluptatem, voluptatibus deleniti eum dicta nam! Tenetur quam, at eaque beata
//   e deserunt rem ipsa distinctio, veniam optio voluptas temporibus natus aspernatur asperiores, aliqui
//   d quidem sapiente sequi sed voluptates quasi ducimus deleniti dolores! Doloremque assumenda in cupid
//   itate, mollitia perspiciatis dignissimos quia doloribus fuga porro sed temporibus ad, voluptate maior
  
//   es velit accusamus neque explicabo laudantium sunt natus quidem dolore rem eum vel! Consequatur et ea
//   que sint assumenda laborum. Eum reiciendis error expedita quasi quas impedit iusto labore quaerat, lib
//   ero tenetur reprehenderit iste ab nisi in. Veniam explicabo optio nam nemo libero, placeat quo laborum, poss
//   imus est aliquam quam iure doloribus adipisci praesentium, iusto sapiente autem neque. Dolor, dolorem
//   que rerum deleniti cum quidem itaque ipsa commodi accusantium excepturi ex reiciendis temporibus m
//   agnam, nobis consequuntur dolores ab aliquid provident nisi modi! Quo, architecto? Nihil minus expedi
//   ta quos impedit cumque accusamus enim ab temporibus pariatur ipsum. Non, in corrupti corporis exped
//   ita quibusdam velit qui earum praesentium accusantium ducimus eius perferendis culpa sint, error ipsa dignissimos
//  aliquid commodi voluptates nam tenetur? Itaqu
//   e quos vero molestias harum eligendi quasi, est sit vel fugit explicabo natus rem repellat amet alias aut expe
// dita tempore esse ab. Cum sequi impedit 
// atque assumenda sapiente voluptate odi
//   t distinctio ipsum vitae ea alias autem possimus doloremque, officiis perspiciatis officia qu
// od /velit ratione, eum recusandae tempore. Esse nulla animi id corrupti exercitationem, quasi at vol
// uptatibus aspernatur eos perferendis maiores odio in dicta illo accusamus dolor debitis accusant
// ium voluptatum non nemo aliquid? Aspernatur accusamus, soluta eos hic non quaerat magnam illo eligendi du
// cimus voluptate at, optio dolor voluptatibus, unde autem quod eaque dolorum porro dolorem
// que esse maiores nam quam sunt. Incidunt animi amet harum nulla, debitis eum accusantium
//  eaque quo et dolor sunt delectus adipisci ea numquam. Adipisci distinctio accusantium earu
//  m sequi cum nisi iste soluta, incidunt amet delectus perspiciatis tempora ea iure architecto? Ita
//  que sint incidunt autem sed delectus reprehenderit perspiciatis sapiente quis enim, deleniti necess
//  itatibus velit libero explicabo nulla repellendus saepe dicta est, sequi, voluptatum consequuntur mi
//  nima asperiores nobis tenetur! Doloremque laborum
//  repellendus excepturi quod delectus libero debitis quibusdam facere et quae. Maxime, non!














//that is why look what i have code before then lorem ipsunm
//thank you