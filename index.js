
function startWatch(){
    var time=new Date()
    document.getElementById("time").innerHTML=time.toLocaleTimeString();

}

function calculateLove(){
    var p=Math.floor(Math.random()*100);
    var str;
   if(p>50){
  str="Your percentage is "+p+" You are best friends!!"
   }
   else{
        str="Your percentage is "+p+" You are just friends ;)"
   }
 $("#lol").text(str);
 
 
}