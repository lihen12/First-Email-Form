function capture(){
  //traverse the DOM to access the form field
  //userInfo is the form name, name is the name of the input, value of the keyword
  //text input name
  var userName = document.userInfo.name.value;
  
  //name logic
  console.log("Welcome, " + name + "!");
  
  //sex input gender
  var gender = document.userInfo.gender.value;
  console.log(gender);
  //email input 
  var email = document.userInfo.email.value;
  console.log(email);
  //stops form submit
  event.preventDefault();
  console.log("form submitted");
}