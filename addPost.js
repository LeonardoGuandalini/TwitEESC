
 /* 
1° - Variáveis necessárias: o div posts, o texto da textarea
2° - Criar um div com classe post; colocar este div no div de posts; 
criar um h2; colocar o h2 dentro deste div; 


 */

 /*
var id = 1;

 function addPost() {


    var profilePic = document.createElement("img");
    profilePic.src = "./comfy.jpg"
    profilePic.classList.add("profile-pic");

    var deleteButton = document.createElement("span");
    deleteButton.textContent = "Delete";
    var postSpace = document.getElementById('post-space');
    var textArea = document.querySelector("textarea");
    var text = textArea.value;
    
    var textDiv = document.createElement("div");
    textDiv.classList.add("post-text");
    var postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.setAttribute("id", id);
    id += 1;
    postSpace.appendChild(postDiv);
    postDiv.appendChild(textDiv);

    var textH2 = document.createElement("h2");
    var textNode = document.createTextNode(text);
    textH2.appendChild(textNode);
    postDiv.appendChild(profilePic);
    textDiv.appendChild(textH2);
    textDiv.appendChild(deleteButton);  
    deleteButton.onclick = removePost(id);
    postDiv.appendChild(profilePic);
    var lineBreak = document.createElement("br");
    postSpace.appendChild(lineBreak);


 }

 */

 var id = 0;
 var strId = String(id);
 
 class Post {
   constructor () {
      var objId = id;
      var profilePic = document.createElement("img");
      profilePic.src = "./comfy.jpg"
      profilePic.classList.add("profile-pic");
  
      var deleteButton = document.createElement("span");
      deleteButton.textContent = "Delete";

      var postSpace = document.getElementById('post-space');
      var textArea = document.querySelector("textarea");
      var text = textArea.value;
      
      var textDiv = document.createElement("div");
      textDiv.classList.add("post-text");
      var postDiv = document.createElement("div");
      postDiv.classList.add("post");
      postDiv.setAttribute("id", id);
      id += 1;
      postSpace.appendChild(postDiv);
      postDiv.appendChild(textDiv);
  
      var textH2 = document.createElement("h2");
      var textNode = document.createTextNode(text);
      textH2.appendChild(textNode);
      postDiv.appendChild(profilePic);
      textDiv.appendChild(textH2);
      textDiv.appendChild(deleteButton);
      postDiv.appendChild(profilePic);
      var lineBreak = document.createElement("br");
      postSpace.appendChild(lineBreak);

      deleteButton.addEventListener('dblclick', function() {
         window.setTimeout(function() {
            document.getElementById(objId).classList.add("invisible");

      

         }, 200);
         
   })

   }
   
   


      
  
   
  
 }