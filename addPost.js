/* var textBox = document.querySelector("textarea");
var post = document.querySelector('#write');

function addPost(){ 
	var text = textBox.value;
    console.log(text);
    var spaceDiv = document.createElement("div");
    var spaceH2 = document.createElement("h2");
    var spaceText = document.createTextNode(text);
    spaceDiv.appendChild(spaceH2);
    spaceH2.appendChild(spaceText);
    spaceDiv.classList.add("post");
    post.appendChild(spaceDiv);
    var lineBreak = document.createElement("br");
    post.appendChild(lineBreak);
 }


 */

 /* 
1° - Variáveis necessárias: o div posts, o texto da textarea
2° - Criar um div com classe post; colocar este div no div de posts; 
criar um h2; colocar o h2 dentro deste div; 


 */



 function addPost() {


    var profilePic = document.createElement("img");
    profilePic.src = "./comfy.jpg"
    profilePic.classList.add("profile-pic");
    var postSpace = document.getElementById('post-space');
    var textArea = document.querySelector("textarea");
    var text = textArea.value;
    

    var postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postSpace.appendChild(postDiv);

    var textH2 = document.createElement("h2");
    var textNode = document.createTextNode(text);
    textH2.appendChild(textNode);
    postDiv.appendChild(profilePic);
    postDiv.appendChild(textH2);

    postDiv.appendChild(profilePic);
    var lineBreak = document.createElement("br");
    postSpace.appendChild(lineBreak);


 }