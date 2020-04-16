function count(obj) {
    var format = obj.value.length + "/" + "140";
    document.getElementById('count').innerHTML = format;


    
}

function validaTweet(obj) {
    var tweetSize = obj.value.length;
    var letterCounter = document.getElementById('count');
    var tweetInput = document.getElementById('tweet-area');

    
    if(tweetSize <= 100) {
        letterCounter.classList.add('shortTweet');
        letterCounter.classList.remove('mediumTweet');
        letterCounter.classList.remove('invalidTweet');
    }
    if(tweetSize > 100 && tweetSize <= 130) {
        letterCounter.classList.remove('shortTweet');
        letterCounter.classList.remove('invalidTweet');
        letterCounter.classList.add('mediumTweet');
    }
    if(tweetSize > 130 && tweetSize <= 140){
        letterCounter.classList.remove('mediumTweet');
        letterCounter.classList.remove('shortTweet');
        letterCounter.classList.add('invalidTweet');
    }

    if(tweetInput >= 140) {
        tweetInput.validationMessage('Tamanho do tweet excede o permitido (140 caracteres)');
        tweetInput.reportValidity();

    }else{

        tweetInput.setCustomValidity('');
    }
    
}


