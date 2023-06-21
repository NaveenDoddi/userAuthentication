if(sessionStorage.getItem("token") == "home"){
    window.location.pathName = "nextpage.html"
   
}else{
    window.location.pathName = "index.html"
    console.log("thank u")
}

function load(){
    
    var userdata = JSON.parse(sessionStorage.getItem("user"))
    document.getElementById("welcome").innerText ="Welcome "+userdata.name+" !"
    document.getElementById("name").innerText = userdata.name
    document.getElementById("Gender").innerText = userdata.Gender
    document.getElementById("DOB").innerText = userdata.DOB
    document.getElementById("City").innerText = userdata.City
    document.getElementById("email").innerText = userdata.email
    document.getElementById("username").innerText = userdata.username
}


