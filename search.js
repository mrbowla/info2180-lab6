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
