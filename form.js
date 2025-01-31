function toggleDarkMode(){
    document.body.classList.toggle("dark-theme");
}
document.getElementById("signUpForm").addEventListener("submit", 
    function(event){
        event.preventDefault();

        const name= document.getElementById("myName");
        const email= document.getElementById("myEmail").value.trim();
        const age= document.getElementById("myAge").value.trim();
        const password= document.getElementById("myPassword").value.trim();


        if(!name){
            alert("Please enter your name");
            return;
        }

        if(!email ||/\S+S@\S+\.\S+/.test(email) ){
            alert("Please enter a valid email");
            return;
        }

        if(!age || isNaN(age) || age<=0){
            alert("Please enter a valid age (numeric and greter than 0).");
            return;
        }

        if(!password || password.length <6){
            alert("Password must be at least 6 characters long");
            return;
        }

        alert("Form successfully submitted!");
        this.submit();

    }

)