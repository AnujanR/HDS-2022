function soloRegister(){

    document.getElementsByClassName("solo-form")[0].style.display="block";
    
    document.getElementsByClassName("solo-form")[0].style.animation="fadeIn ease 1.5s";
    document.getElementById("overlay").style.display="block";
    document.getElementById("overlay").style.animation="fadeIn ease 1.5s";

}
function TeamRegister(){

    document.getElementsByClassName("team-form")[0].style.display="block";
    
    document.getElementsByClassName("team-form")[0].style.animation="fadeIn ease 1.5s";
    document.getElementById("overlay").style.display="block";
    document.getElementById("overlay").style.animation="fadeIn ease 1.5s";

}
function closeForm(){
    document.getElementsByClassName("solo-form")[0].style.display="none";
    document.getElementById("overlay").style.display="none";
}
function closeForm2(){
    document.getElementsByClassName("team-form")[0].style.display="none";
    document.getElementById("overlay").style.display="none";
}

 function submitform() {

    //  ===solo form==== 
     //get full name from user
     $fullname = document.getElementById("name").value;
     //get email address from user
     $email = document.getElementById("email").value;
     //get contact from user
     let $contact = document.getElementById("contact").value;
      //get nic from user
      let $nic = document.getElementById("nic").value;
      //get gender from user
      let $male=document.getElementById("male");
      let $female=document.getElementById("female");
    
   
      
    // =================================================================================================
    // ================================VALIDATION OF USER INPUT'S=======================================
    // =================================================================================================
        //upload data to google sheet
        function storeGoogleSheet(){
            const scriptURL = 'https://script.google.com/macros/s/AKfycbz14imER_JbJ9ck01ZClo0cQDqROUqrmcHbZzxFXQx2LQUBtP_KG0mU8o55UOefGTM34Q/exec'
            const form = document.forms['solo-form']
    
               fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
    
        }
    //function which validates user name input
    function userName($fullname){
        //check whether the name contains any number or the input field is empty
        if($fullname=="" || $fullname.match(/\d+/g)!=null){
            return false;
        } 
        else{
            return true;
        }
    }
    //function which validates user Email
    function userEmail($email){
        //check whether the email contains any non standard elements or the input field is empty
        if($email=="" || $email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)==null){
            return false;
        }
        else{
            return true;
            
        }
    }
    //function which validates users contact
    function userContact($contact){
        //check whether the contact has 10digits and doesn't include letters
        if($contact=="" || $contact.length!==10 || $contact.match(/[A-Za-z\s]/)!==null){
            return false;
        } 
        else{
            return true;
        }
    }
    
    //function which validates users nic
    function userNic($nic){
        //check whether the nic as 10digits and doesn't include letters
        if( $nic==""){
            return false;
        } 
        else{
            return true;
        }
    }
    
    // =================================================================================================
    // ================================DISPLAY POPUP FOR VALIDATION=====================================
    // =================================================================================================
    if (userName($fullname)==false){
        swal("INVALID USERNAME", "Please Enter a Valid Username", "error");
    }
    else if(userEmail($email)==false){
        swal("INVALID EMAIL", "Please Enter a Valid Email, like example@mail.com", "error");
    }
    else if(userContact($contact)==false){
        swal("INVALID CONTACT", "Please Enter a Valid Contact, like +9400000000", "error");
    }
    else if( userNic($nic)==false){
        swal("INVALID NIC", "Please Enter a Valid National Identity No", "error");
    }
    else{
        swal("Thanks For Registering!", "Check Your Email for More Details", "success");
        storeGoogleSheet();
        $(document).ready(function () {
            setTimeout(function () {
              location.reload(true);
            }, 4000);
          });
    }
}





function submitform2() {
    //  ===solo form==== 
     //get full name from user
     $fullname2 = document.getElementById("name2").value;
     //get email address from user
     $email2 = document.getElementById("email2").value;
     //get contact from user
     let $contact2 = document.getElementById("contact2").value;
      //get nic from user
      let $nic2 = document.getElementById("nic2").value;


           //get full name from user
     $fullname3 = document.getElementById("name3").value;
     //get email address from user
     $email3 = document.getElementById("email3").value;
     //get contact from user
     let $contact3 = document.getElementById("contact3").value;
      //get nic from user
      let $nic3 = document.getElementById("nic3").value;

   
//store in google sheet 2
      function storeGoogleSheet2(){
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzNrHiE6boRRmq8H-mTKy08ZTt45Ild-GnHzXPguwVaEEdTUO6Rij-x_Yr27FF2IL91Ow/exec'
        const form = document.forms['team-form']

           fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))

    }
      
    // =================================================================================================
    // ================================VALIDATION OF USER INPUT'S=======================================
    // =================================================================================================
    
    //function which validates user name input
    function userName2($fullname2){
        //check whether the name contains any number or the input field is empty
        if($fullname2=="" || $fullname2.match(/\d+/g)!=null){
            return false;
        } 
        else{
            return true;
        }
    }
    //function which validates user Email
    function userEmail2($email2){
        //check whether the email contains any non standard elements or the input field is empty
        if($email2=="" || $email2.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)==null){
            return false;
        }
        else{
            return true;
            
        }
    }
    //function which validates users contact
    function userContact2($contact2){
        //check whether the contact has 10digits and doesn't include letters
        if($contact2=="" || $contact2.length!==10 || $contact2.match(/[A-Za-z\s]/)!==null){
            return false;
        } 
        else{
            return true;
        }
    }
    
    //function which validates users nic
    function userNic2($nic2){
        //check whether the nic as 10digits and doesn't include letters
        if( $nic2==""){
            return false;
        } 
        else{
            return true;
        }
    }




    //=====================================================================


    //function which validates user name input
    function userName3($fullname3){
        //check whether the name contains any number or the input field is empty
        if($fullname3=="" || $fullname3.match(/\d+/g)!=null){
            return false;
        } 
        else{
            return true;
        }
    }
    //function which validates user Email
    function userEmail3($email3){
        //check whether the email contains any non standard elements or the input field is empty
        if($email3=="" || $email3.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)==null){
            return false;
        }
        else{
            return true;
            
        }
    }
    //function which validates users contact
    function userContact3($contact3){
        //check whether the contact has 10digits and doesn't include letters
        if($contact3=="" || $contact3.length!==10 || $contact3.match(/[A-Za-z\s]/)!==null){
            return false;
        } 
        else{
            return true;
        }
    }
    
    //function which validates users nic
    function userNic3($nic3){
        //check whether the nic as 10digits and doesn't include letters
        if( $nic3==""){
            return false;
        } 
        else{
            return true;
        }
    }

    // =================================================================================================
    // ================================DISPLAY POPUP FOR VALIDATION=====================================
    // =================================================================================================
    if (userName2($fullname2)==false){
        swal("INVALID USERNAME", "Please Enter a Valid Username for Teammate 1", "error");
    }
    else if(userEmail2($email2)==false){
        swal("INVALID EMAIL", "Please Enter a Valid Email, like example@mail.com for Teammate 1", "error");
    }
    else if(userContact2($contact2)==false){
        swal("INVALID CONTACT", "Please Enter a Valid Contact, like +9400000000 for Teammate 1", "error");
    }
    else if( userNic2($nic2)==false){
        swal("INVALID NIC", "Please Enter a Valid National Identity No for Teammate 1", "error");
    }



    //=======================================================

    else if (userName3($fullname3)==false){
        swal("INVALID USERNAME ", "Please Enter a Valid Username for Teammate 2", "error");
    }
    else if(userEmail3($email3)==false){
        swal("INVALID EMAIL", "Please Enter a Valid Email, like example@mail.com for Teammate 2", "error");
    }
    else if(userContact3($contact3)==false){
        swal("INVALID CONTACT", "Please Enter a Valid Contact, like +9400000000 for Teammate 2", "error");
    }
    else if( userNic3($nic3)==false){
        swal("INVALID NIC", "Please Enter a Valid National Identity No for Teammate 2", "error");
    }
    else{
        swal("Thanks For Registering!", "Check Your Email for More Details", "success");
        storeGoogleSheet2();
        $(document).ready(function () {
            setTimeout(function () {
              location.reload(true);
            }, 4000);
          });
    }
}