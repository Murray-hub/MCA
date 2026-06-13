//Form Validation//
const userName = document.getElementById('username')
const userPassword = document.getElementById('password')
const toggleButton = document.getElementById('toggle_btn');
const loginButton = document.getElementById('loginBtn');
     //Toggle password//
toggleButton.addEventListener('click', ()=>{
    if(userPassword.type === 'password'){
        userPassword.type = 'text'
        toggleButton.textContent = 'Hide'
    }else{
        userPassword.type ='password'
        toggleButton.textContent ='Show'
    }
});

        loginButton.addEventListener('click', async (e) =>{
           e.preventDefault()
       const response = await fetch("https://sheetdb.io/api/v1/a99d4i5b6amum");
       const students = await response.json();
       const foundStudent = students.find(s => s.username === userName.value
        && s.password === userPassword.value);
       if(foundStudent){
        localStorage.setItem("currentStudentId",foundStudent.student_id);
        loginButton.textContent = "Success"
        setTimeout (() =>{
          window.location.href ="student.html";  
                  userName.value ="";
        },1000);
    }else{
       loginButton.textContent = " Invalid username or password!";
    }
        });
        userName.value ="";
        userPassword.value = "";