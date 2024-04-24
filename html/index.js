function validateForm()

 {
    let fname = document.forms["myForm"]["fname"].value;
    if (fname == "") 
    {
      alert("please enter name");
      return false;
    }

    let password = document.forms["myForm"]["password"].value;
    if (password == "") 
    {
      alert("please enter password");
      return false;
    }

    let email = document.forms["myForm"]["email"].value;
    if (email== "") 
    {
      alert("please enter email");
      return false;
    }

    let g1 = document.forms["myForm"]["g1"].value;
    if (g1== "") 
    {
      alert("please enter gender");
      return false;
    }

  
  }