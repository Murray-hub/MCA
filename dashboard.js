 //Displaying student info on their dashboard//
        window.onload = async function(){
            const targetId = localStorage.getItem("currentStudentId");
            const response = await fetch(`https://sheetdb.io/api/v1/a99d4i5b6amum/search?student_id=${targetId}`);
            const data = await response.json();
            const Student = data[0];
            if(Student){
              document.getElementById('studentName').innerHTML = Student.name;
              document.getElementById('student_id').innerHTML = Student.student_id;
              document.getElementById('Major').innerHTML = Student.major
              document.getElementById('studentGpa').innerHTML = Student.gpa;
              document.getElementById('attendance').innerHTML = Student.attendance;
            }
        };