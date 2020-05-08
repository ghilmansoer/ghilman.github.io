function saveData(event){
    event.preventDefault()

    var name = document.getElementById("valueName")
    var birthplace = document.getElementById("valueBirthplace")
    var birthdate = document.getElementById("valueBirthdate")
    var hobbies = document.getElementById("valueHobby")
    var ages = document.getElementById("valueAge")
    var headerName = document.getElementById("headername")

    var valName = document.getElementById("name").value
    var valBirthdate = document.getElementById("birthdate").value
    console.log(typeof valBirthdate)
    var parsedbirthdate = new Date(valBirthdate) 
    console.log(typeof parsedbirthdate)
    var age = calculateAge(parsedbirthdate.getFullYear())
    console.log(age)
    var valBirthplace = document.getElementById("birthplace").value

    var hobby1 = document.getElementById("hobby1")
    var hobby2 = document.getElementById("hobby2")
    var hobby3 = document.getElementById("hobby3")

    name.innerHTML = valName
    headerName.innerHTML = valName.toUpperCase()
    birthplace.innerHTML = valBirthplace
    birthdate.innerHTML = valBirthdate
    ages.innerHTML = age
    hobbies.innerHTML = ""
    if(hobby1.checked == true) {
        hobbies.innerHTML += hobby1.value + " " 
    }
    if(hobby2.checked == true) {
        hobbies.innerHTML += hobby2.value + " "
    }
    if(hobby3.checked == true) {
        hobbies.innerHTML += hobby3.value
    }


    alert("Data Saved")
}

function calculateAge(year) {
    return 2020 - year
}