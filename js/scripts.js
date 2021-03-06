// biz logic
function Song(mood, vibe, drunk, score) {
  this.mood = mood;
  this.vibe = vibe;
  this.drunk = drunk;
  this.score = score;
}

var chill = [
  "Jason Mraz: I'm Yours",
  "Drake: Hotline Bling",
  "Fleetwood Mac: Landslide",
  "Celine Dion: My Heart Will Go On",
  "Backstreet Boys: I Want It That Way",
  "Bonnie Tyler: Total Eclipse Of The Heart",
  "Eurythmics: Sweet Dreams (Are Made Of This)",
  "Neil Diamond: Sweet Caroline",
  "Oasis: Wonderwall",
  "TLC: No Scrubs",
  "Nelly Furtado: I'm Like A Bird",
  "R.E.M.: Losing My Religion",
  "Sinead O'Connor: Nothing Compares 2 U",
  "Frank Sinatra: My Way",
];

var party = [
  "Dolly Parton: 9 to 5",
  "Carrie Underwood: Before He Cheats",
  "Fleetwood Mac: Go Your Own Way",
  "Aretha Franklin: Respect",
  "The B-52S: Love Shack",
  "Queen: Bohemian Rhapsody",
  "Alanis Morissette: You Oughta Know",
  "No Doubt: Just a Girl",
  "'N Sync: Bye, Bye, Bye",
  "Temptations: My Girl",
  "Madonna: Like A Prayer",
  "Destiny's Child: Say My Name",
  "Justin Timberlake: Can't Stop The Feeling!",
  "Britney Spears: Baby One More Time",
  "Spice Girls: Wannabe",
  "Village People: YMCA",
  "Sublime: Santeria",
  "The Cranberries: Zombie",
];

var lit = [
  "The Commodores: Brickhouse",
  "Young MC: Bust A Move",
  "Miley Cyrus: Party in the USA",
  "Ginuwine: Pony",
  "Christina Aguilera: Genie In A Bottle",
  "The Weeknd feat. Daft Punk: Starboy",
  "ABBA: Dancing Queen",
  "Lynyrd Skynyrd: Sweet Home Alabama",
  "Shania Twain: Man! I Feel Like A Woman",
  "Garth Brooks: Friends in Low Places",
  "Vanilla Ice: Ice Ice Baby",
  "Aqua: Barbie Girl",
];

var allSongs = [
  "The Commodores: Brickhouse",
  "Young MC: Bust A Move",
  "Miley Cyrus: Party in the USA",
  "TLC: No Scrubs",
  "Def Leppard: Pour Some Sugar On Me",
  "Ginuwine: Pony",
  "Christina Aguilera: Genie In A Bottle",
  "The Weeknd feat. Daft Punk: Starboy",
  "ABBA: Dancing Queen",
  "Lynyrd Skynyrd: Sweet Home Alabama",
  "Shania Twain: Man! I Feel Like A Woman",
  "Garth Brooks: Friends in Low Places",
  "Vanilla Ice: Ice Ice Baby",
  "Aqua: Barbie Girl",
  "Jason Mraz: I'm Yours",
  "Frank Sinatra: My Way",
  "Fleetwood Mac: Go Your Own Way",
  "Alanis Morissette: You Oughta Know",
  "No Doubt: Just a Girl",
  "'N Sync: Bye, Bye, Bye",
  "Nelly Furtado: I'm Like A Bird",
  "Madonna: Like A Prayer",
  "Destiny's Child: Say My Name",
  "Justin Timberlake: Can't Stop The Feeling!",
  "Britney Spears: Baby One More Time",
  "TLC: No Scrubs",
  "Spice Girls: Wannabe",
  "Village People: YMCA",
  "Sublime: Santeria",
  "Temptations: My Girl",
  "The Cranberries: Zombie",
  "Drake: Hotline Bling",
  "Dolly Parton: 9 to 5",
  "Carrie Underwood: Before He Cheats",
  "Fleetwood Mac: Landslide",
  "Celine Dion: My Heart Will Go On",
  "Aretha Franklin: Respect",
  "The B-52S: Love Shack",
  "Backstreet Boys: I Want It That Way",
  "Bonnie Tyler: Total Eclipse Of The Heart",
  "Eurythmics: Sweet Dreams (Are Made Of This)",
  "Neil Diamond: Sweet Caroline",
  "Queen: Bohemian Rhapsody",
  "Oasis: Wonderwall",
  "R.E.M.: Losing My Religion",
  "Sinead O'Connor: Nothing Compares 2 U",
]

var chillRandom = chill[Math.floor(Math.random()*chill.length)];
var partyRandom = party[Math.floor(Math.random()*party.length)];
var litRandom = lit[Math.floor(Math.random()*lit.length)];

Song.prototype.songRecommendation = function() {
  if (this.score < 5) {
    return (chillRandom);
  } else if (this.score >= 5 && this.score < 10) {
    return (partyRandom);
  } else if (this.score >= 10) {
    return (litRandom);
  } else {
    return("Try again! Answer the questions to see your song!");
  }
};

Song.prototype.textResponse = function(chillRandom, partyRandom, litRandom) {
  if (this.songRecommendation() === chillRandom) {
    return ("Looks like you're taking it easy tonight. How does this song sound?");
  } else if (this.songRecommendation() === partyRandom) {
    return ("Trying to party? Try this song.");
  } else if (this.songRecommendation() === litRandom) {
    return ("You are ready to get wild. Sing this.");
  } else {}
};

//ui logic
$(document).ready(function() {
//when answer questions button is clicked
  $("button#show-form").click(function() {
    $("#form-questions").fadeIn();
    $("#show-form").hide();
    $("#random").hide();
  });

  //when show me my song button is clicked
  $("button#show-song").click(function() {
    $("#song-results").show();
    $("#karaoke-gif").show();
    var moodSelection = parseInt($("select#mood").val());
    var vibeSelection = parseInt($("select#vibe").val());
    var drunkSelection = parseInt($("select#intox").val());

    var newScore = (moodSelection + vibeSelection + drunkSelection);
    var newSong = new Song(moodSelection, vibeSelection, drunkSelection, newScore);

    var result = newSong.songRecommendation(newScore);

    $("#song-results").text(result);
    $("#text-result").text(newSong.textResponse(chillRandom, partyRandom, litRandom));

    $("#try-again").fadeIn();
    $("#find-lyrics").fadeIn();
    $("#inspire-me").fadeIn();
    $("#form-questions").hide();
    $("#lyric-add-button").fadeIn();
    $("#show-form").hide();
    $("#random").hide();
    $("#intro").hide();

    var reset = function() {
    $("select#mood").val("");
    $("select#vibe").val("");
    $("select#intox").val("");
    }
  });

//when random song button is clicked
  $("button#random").click(function() {
    var allSongsRandom = allSongs[Math.floor(Math.random()*allSongs.length)]
    $("#song-results").text(allSongsRandom);

    $("#show-form").hide();
    $("#random").hide();
    $("#try-again").show();
    $("#find-lyrics").show();
    $("#inspire-me").show();
    $("#lyric-add-button").show();
    $("#intro").hide();
  });

//when inspire me button is clicked
  $("button#inspire-me").click(function() {
    $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?&q=singing&api_key=dc6zaTOxFJmzC",
      type: "GET",
    }).done(function(response) {
      var ranNum = (Math.floor(Math.random() * 25) + 1);
      var gifLink = (response.data[ranNum].images.original.url);
        $("#gif").html('<center><img src="'+gifLink+'"></center>');
      });

    $("#find-lyrics").fadeOut();
    $("#try-again").fadeOut();
    $("#try-again-three").fadeIn();
    $("#lyric-add-button").fadeOut();
    $("#new-song-section").fadeOut();
  });

//when second inspire me button is clicked
  $("button#inspire-me-two").click(function() {
    //gif api
    $.ajax({
      url: "http://api.giphy.com/v1/gifs/search?&q=karaoke&api_key=dc6zaTOxFJmzC",
      type: "GET",
    }).done(function(response) {
      var ranNum = (Math.floor(Math.random() * 25) + 1);
      var gifLink = (response.data[ranNum].images.original.url);
        $("#gif-two").html('<center><img src="'+gifLink+'"></center>');
      });
    });

//when find my lyrics button is clicked
  $("button#find-lyrics").click(function() {
    $("#lyric-search").fadeIn();
    $("#try-again").fadeOut();
    $("#inspire-me").fadeOut();
    $("#find-lyrics").fadeOut();
    $("#lyric-add-button").fadeOut();
    $("#new-song-section").fadeOut();
  });

//when lyrics form is submitted
  $("#lyric-search").submit(function(event) {
    event.preventDefault();

    var songSearch = $("input#song").val();
    var artistSearch = $("input#artist").val();

    var ajaxCall = function(apiData) {
    var apikey = 'ac2764373bf0a3d6a7fd0aa221e48c34';
    var result = $.ajax({
      type: "GET",
      data: apiData,
      data: {
          apikey: apikey,
          q_track: songSearch,
          q_artist: artistSearch,
          format:"jsonp",
          callback:"jsonp_callback"
      },
      url: "http://api.musixmatch.com/ws/1.1/matcher.lyrics.get",
      dataType: "jsonp",
      jsonpCallback: 'jsonp_callback',
      contentType: 'application/json',
      success: function(data) {
      },
    }).then(function(res) {
      $(".result").text(res.message.body.lyrics.lyrics_body);
    });
    $("#try-again-two").show();
    $("#inspire-me-two").show();
  };
    $(".result").text(ajaxCall());
  });

//when add song buttons are submitted
  $("#lyric-add").submit(function(event) {
    event.preventDefault();
      var playlists = [];
      var addArtist = $("input#add-artist").val();
      var addSong = $("input#add-song").val();
      var newSongFormat = addArtist.concat(": " + addSong + "<br>");
    newSongFormat.toString();
    playlists.push(newSongFormat);
    $("span#ns-input-span").append(playlists);
  });

// when make a playlist button is clicked
  $("button#lyric-add-button").click(function(){
    $("#new-song-section").fadeIn();
    // $("#buttons").hide();
  });

  $("form#lyric-add").submit(function(event) {
    event.preventDefault();
    var playlists = [];
    var addArtist = $("input#add-artist").val();
    var addSong = $("input#add-song").val();
    var newSongFormat = addArtist.concat(": " + addSong + "<br>");
    $("span#ns-input-span").append(playlists);
    $("#ns-input-well").show();
  });

// save playlist button
  $("button#save-playlist-button").click(function(){
    $("#new-song-section").fadeOut();
  });

// when try again buttons are submitted
  $("button#try-again").click(function() {
    location.reload();
  });

  $("button#try-again-two").click(function() {
    location.reload();
  });

  $("#header").click(function() {
    location.reload();
  });

  $("button#try-again-three").click(function() {
    location.reload();
  });
});
