function phone_number(){
  var phone = document.getElementById("phone").value;
	var phone_error = document.getElementById("phone_error");
  switch(phone.length){
      case 10:
        if (phone.match(/^09\d{8}$/) ){
          phone_error.innerHTML = '';
        }
        else if (phone.substr(0,1)!='0'){
          phone_error.innerHTML = 'The first number must be 0';
        }
        else if (phone.substr(1,1)!='9'){
          phone_error.innerHTML = 'The second number must be 9';
        }
        else{
          phone_error.innerHTML = 'Phone number format is wrong.';
        }
        break;
      default:
        if (phone.length > 10){
          phone_error.innerHTML = 'The phone may not be greater than 10.';
        }
        else{
          phone_error.innerHTML = '';
        }
    }
}
