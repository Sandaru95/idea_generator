function randomizeTheTheme(){
    let randomTheme = themeList[Math.floor(Math.random() * themeList.length)];
    
    /* References for html elements */
    let theBody = document.getElementsByTagName('body')[0];
    let anchorList = document.getElementsByClassName('nav-link');
    /* Setting Body Color */
    theBody.style.backgroundColor = randomTheme.backgroundColor;
    theBody.style.color = randomTheme.textColor;
    /* Setting Anchor colors */
    for(let i = 0; i < anchorList.length; i++){
        anchorList[i].style.color = randomTheme.textColor;
    }
}

function generateIdea(){
    let randomEle = ideaList[Math.floor(Math.random() * ideaList.length)];
    document.getElementById('idea-text').innerText = randomEle;

    /* Theme change */
    randomizeTheTheme();
}