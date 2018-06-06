var enviarTweet= function(event){
  event.preventDefault();
  //console.log(event);
  //obtener info del text area
  var textArea = document.getElementById('tweet-area')
  var tweetContainer = document.getElementById('tweets')
  console.log(textArea.value);


  var valTextArea = textArea.value;
  var tweet = document.createElement("p");
  var textTweet= document.createTextNode(valTextArea);
  tweet.appendChild(textTweet);
  tweetContainer.appendChild(tweet);
  textArea.value = "";

}
//para desabilitar el boton si no se recibe comentario o tweet
var checkTextArea = function(){
  var textArea = document.getElementById('tweet-area')
  if(textArea.value ===""){
    //desactivar btn
    event.target.disabled = true;
  }else {

  }
}

// evento del boton
var btnTweet = document.getElementById("btn-tweet");
console.log(btnTweet);
var formTweet = document.getElementById('formulario-tweet')
btnTweet.addEventListener("focus",checkTextArea)
btnTweet.addEventListener("click",enviarTweet)
