function loadArticles () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('articlelist');
            if (request.status === 200) {
                var content = '<ul>';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `<li>
                    <a onclick="loadArticlescontent("+${articleData[i].title}+");" href="#">${articleData[i].heading}</a>
                    (${articleData[i].date.split('T')[0]})</li>`;
                }
                content += "</ul>";
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!');
            }
        }
    };
    
    request.open('GET', '/get-articles', true);
    request.send(null);
}
loadArticles();
function loadArticlescontent (title) {
    var articles = document.getElementById('content');
        // Check if the user is already logged in
       /* var articles = document.getElementById('content');
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var content = '<p>';
            if (request.status === 200) {
                
                var articleData = JSON.parse(this.responseText);
                
                    content += articleData.content;
        
                }
                content += "</p>";
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!');
            }
        }*/
        var name=title;
        articles.innerHTML=name;
    }
    
   
