
function createDog() {
    var myDog = new Dog(document.getElementById("Name").value,document.getElementById("Breed").value,document.getElementById("Year").value,document.getElementById("Month").value,document.getElementById("Day").value);
    var el = document.getElementById('name');
    el.innerHTML = myDog.name;
    el = document.getElementById('breed');
    el.innerHTML = myDog.breed;  
    el = document.getElementById('birthday');
    el.innerHTML = myDog.birthdate;
    select = document.getElementById('Tricks');
    var selected = select.value;
    el = document.getElementById('tricks');
    if (selected == "sit")
    {
        el.innerHTML = myDog.sit();
    }
    else if (selected == "shake")
    {
        el.innerHTML = myDog.shake();
    }
    else if (selected == "fetch")
    {
        el.innerHTML = myDog.fetch();
    }
    else
    {
        el.innerHTML = myDog.down();
    }

    
}

listen = document.getElementById("Update");
listen.addEventListener("click", createDog,false);


function selectFunction()
{

    var select = document.getElementById('Tricks');
    var selected = select.value;
    el = document.getElementById('tricks');
    if (selected == "sit")
    {
        el.textContent = "sitting";
    }
    else if (selected == "shake")
    {
        el.textContent = "shaking";
    }
    else if (selected == "fetch")
    {
        el.textContent = "fetching";
    }
    else
    {
        el.textContent = "lying down";
    }
}

listen = document.getElementById("Tricks");
listen.addEventListener("click",selectFunction,false);




 
 
