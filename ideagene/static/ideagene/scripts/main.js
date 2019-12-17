function generateIdea(){
    let randomEle = ideaList[Math.floor(Math.random() * ideaList.length)];
    document.getElementById('idea-text').innerText = randomEle;
}