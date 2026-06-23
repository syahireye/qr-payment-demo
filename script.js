function nextScreen(screenNumber){

    document
    .querySelectorAll(".screen")
    .forEach(screen=>{
        screen.classList.remove("active");
    });

    document
    .getElementById("screen"+screenNumber)
    .classList.add("active");
}

function verifyPin(){

    let pin =
    document.getElementById("pin").value;

    if(pin.length === 6){

        nextScreen(4);

    }else{

        alert(
            "Sila masukkan PIN 6 digit"
        );

    }

}