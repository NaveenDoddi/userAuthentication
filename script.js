let person = [
  {
    name:"Naveen Doddi",
    password:123,
    DOB: "26-10-2003",
    Gender:"male",
    City: "tirupati",
    email:"prasadnaveen847@gmail.com",
    username:"naveen26",
    
  },
  {
    name:"Virat Kohli",
    password: 18,
    DOB: "5-11-1988",
    Gender:"male",
    City: "Delhi",
    email:"virat18@gmail.com",
    username:"virat18",
  },
  
]
function run(){

  var username = document.getElementById("name").value
  var password = document.getElementById("pass").value
  console.log(username)

  sessionStorage.setItem('token', "home");
  const nextPageUrl = 'nextpage.html'

  person.forEach((i)=> i.username == username ? i.password == password ? sessionStorage.setItem("user",JSON.stringify(i)) + (window.location.href = nextPageUrl):"":"")
  if(person.some((i)=> i.username == username ? i.password == password :"")){

  }else{
    alert("in correct details")
  }
}

