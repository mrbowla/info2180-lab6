function searchDoc(){
    var word = document.getElementById("name").value;
    console.log(word);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("result").innerHTML =
      this.responseText;
    }
        
    };
    
     xmlhttp.open("GET", "request.php?q=" + word, true);
     xmlhttp.send();
}
function returnAll(){
     var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //Code to return the xml code from the php would go here along with formatting for heading and paragraph texts
    }
        
    };
    
     xmlhttp.open("GET", "request.php?q=&all=true", true);
     xmlhttp.send();

}
