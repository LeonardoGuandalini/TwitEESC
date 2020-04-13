var textBox = document.querySelector("textarea");
var post = document.querySelector('#write');

function addPost(){ 
	var text = textBox.value;
    console.log(text);
    var space = document.createElement("h2");
    var spaceText = document.createTextNode(text);
    space.appendChild(spaceText);
    space.classList.add("post");
    post.appendChild(space);
    var lineBreak = document.createElement("br");
    post.appendChild(lineBreak);
 }


 