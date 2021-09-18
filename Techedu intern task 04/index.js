var isPlaying=false;
var isPlayed=false;
var songName=["Phir Bhi Aas Lagi Hai","Is Qadar","Tujhe Bhoolna Toh Chaaha","Oye Hoye Hoye","Birthday Pawri","Kutti Mohabbat"];
var movieName=["Universal Music India","Bhaag Johnny","Album Song","Album Song","Album Song","Album Song"];
var singerName=["Sagar Kalra","Darshan Raval, Tulsi Kumar","Jubin Nautiyal","Jassi Gill","Meet Bros, Amit Mishra","Jubin Nautiyal"];
var Duration=["03:16","03:46","04:35","02:52","04:04","03:48"];
var idIndex=["m1","m2","m3","m4","m5","m6"];
var playPause;
var id;
$(".play-song").click(function() {
    isPlayed=true;
    id=$(this).attr("id");
    play(id);
});
$(".play-pause").click(function() {
    if(!isPlaying){
        $(".play-pause").removeClass("fa-play").addClass("fa-pause");
        if(!isPlayed){
            id="m1";
            play("m1");
            isPlayed=true;
        }
        else{
            playPause.play();
            isPlaying=true;
        }
    }
    else{
        $(".play-pause").removeClass("fa-pause").addClass("fa-play");
        playPause.pause();
        isPlaying=false;
    }
});
$(".prev").click(function() {
    if(!isPlayed){
        id="m6";
        play(id);
        isPlayed=true;
    }
    else{
        if(id=="m1"){
            id="m6";
            play(id);
        }
        else{
            id=idIndex[idIndex.indexOf(id)-1]
            play(id);
        }
    }
});
$(".next").click(function() {
    if(!isPlayed){
        id="m1";
        play(id);
        isPlayed=true;
    }
    else{
        if(id=="m6"){
            id="m1";
            play(id);
        }
        else{
            id=idIndex[idIndex.indexOf(id)+1]
            play(id);
        }
    }
});
function play(id){
    var index=idIndex.indexOf(id);
    if(isPlaying){
        $(".play-pause").removeClass("fa-pause").addClass("fa-play");
        playPause.pause();
        isPlaying=false;
    }
    playPause=new Audio("Music/"+id+".mp3");
    playPause.play();
    isPlaying=true
    $(".play-pause").removeClass("fa-play").addClass("fa-pause");
    $(".songName").text("Song Name: "+songName[index]);
    $(".movieName").text("Movie Name: "+movieName[index]);
    $(".singerName").text("Singer Name: "+singerName[index]);
    $(".Duration").text("Duration: "+Duration[index]);
}