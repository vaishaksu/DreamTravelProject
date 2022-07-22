function contact_validation() {
    
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var mailId = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phnumber").value;
    var note = document.getElementById("comment").value;

    if(firstNameValidation(firstName))
    {
        if(lastNameValidation(lastName))
        {
            if(ValidateEmail(mailId))
            {
                if(allnumeric(phoneNumber)) 
                    {
                        return true;
                    }
            }  
        }
    }
    return false;

}


    function firstNameValidation(name)
    { 
        var letters1 = /^[A-Za-z]+$/;
        var letters2 = /^[a-zA-Z]+$/;
        if((letters1.test(name))||(letters1.test(name)))
        {
            return true;
        }
        else
        {
            alert("First name should have alphabet characters only");
            document.getElementById("fname").focus();
            return false;
        }
        
    }
    
    function lastNameValidation(name)
    { 
        var letters1 = /^[A-Za-z]+$/;
        var letters2 = /^[a-zA-Z]+$/;
        if((letters1.test(name))||(letters1.test(name)))
        {
            return true;
        }
        else
        {
            alert("Last name should have alphabet characters only");
            document.getElementById("lname").focus();
            return false;
        }
        
    }

    function ValidateEmail(mail)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mailformat.test(mail))
        {
            return true;
        }
        else
        {
            alert("You have entered an invalid email address!");
            document.getElementById("email").focus();
            return false;
        }
    }

    function allnumeric(phNum)
    { 
        var numbers = /^[0-9]+$/;
        if(numbers.test(phNum))
        {
            return true;
        }
        /*else if(phNum.length() < 11)
        {
            alert("Phone number should have atleast 10 digits");
            document.getElementById("phnumber").focus();
            return false;  
        }*/
        else
        {
            alert("Phone number should have numeric characters only");
            document.getElementById("phnumber").focus();
            return false;
        }
    }
    



    
