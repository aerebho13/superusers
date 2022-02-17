//create the constructor ES2015 / class
class User{
    //these are the parameters
    constructor(email,password,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=password;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;

    }
}
//this is the parameter
function isValid(user){
    let valid=true;

    $("input").removeClass("alert-error");

     if(user.email.length==0){
         $("#txtEmail").addClass("alert-error");
        valid=false;
        console.log("missing email");
     }
     if(user.password.length==0){
         $("#txtPassword").addClass("alert-error");
         valid=false;
         console.log("Missing the password");
     }
     if(user.fname.length==0){
         $("#txtFirst").addClass("alert-error");
         valid=false;
         console.log("Missing first name");
     }
     if(user.fname.length==0){
        $("#txtLast").addClass("alert-error");
        valid=false;
        console.log("Missing last name");
     }
     if(user.age.length==0){
        $("#txtAge").addClass("alert-error");
        valid=false;
        console.log("Missing age");
     } 
     if(user.address.length==0){
        $("#txtAddress").addClass("alert-error");
        valid=false;
        console.log("Missing address");
     }
    
     return valid;
}

function registerUser(){
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let first = $("#txtFirst").val();
    let last = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phone = $("txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#txtColor");

    let user = new User(email,password,first,last,age,address,phone,payment,color);

    if(isValid(user)){
        saveUser(user);
    }
    clearForm();
};

function init(){
    console.log("Init Register");
    //hook events
    $("#btnRegister").click(registerUser);

}
window.onload=init;