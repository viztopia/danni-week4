let Map_Id = document.getElementById('theMap');
let zoom_Out = document.getElementById('zoomOut');
let zoom_In = document.getElementById('zoomIn');
let close_Nav = document.getElementById('closeNav');
let open_Nav = document.getElementById('openNav');

zoom_Out.addEventListener("click", zoomOut);
zoom_In.addEventListener("click", zoomIn);
close_Nav.addEventListener("click", closeNav);
open_Nav.addEventListener("click", openNav);

function zoomIn() {
    let fileName = Map_Id.src.substring(Map_Id.src.length - 14);
    if (fileName == "assets/001.png") {
        Map_Id.src = "assets/002.png";
    } else {
        Map_Id.src = "assets/003.png";
    }
}

function zoomOut() {
    let fileName = Map_Id.src.substring(Map_Id.src.length - 14);
    if (fileName == "assets/003.png") {
        Map_Id.src = "assets/002.png";
    } else {
        Map_Id.src = "assets/001.png";
    }
}

function openNav() {
    document.getElementById("myNav").style.width = "30%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

let timestampData;

window.addEventListener('load', () => {
    fetch('http://api.open-notify.org/iss-now.json')
        .then(response => response.json())
        .then(data => {
            let latitudeData = data.iss_position.latitude;
            let latitudeISS = document.createElement('h3');
            latitudeISS.innerHTML = latitudeData;
            let container1 = document.getElementById('latitudeISS');
            container1.append(latitudeISS);

            let longitudeData = data.iss_position.longitude;
            let longitudeISS = document.createElement('h3');
            longitudeISS.innerHTML = longitudeData;
            let container2 = document.getElementById('longitudeISS');
            container2.append(longitudeISS);

            timestampData = data.timestamp;
            let timestampISS = document.createElement('h3');
            timestampISS.innerHTML = timestampData;
            let container3 = document.getElementById('timestampISS');
            container3.append(timestampISS);

            runDateCode();
        })
})

function runDateCode() {

    let date = new Date(timestampData * 1000);
    console.log(date);

    let weekday = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");

    let monthname = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

    let formattedDate = weekday[date.getDay()] + ' ' +
        monthname[date.getMonth()] + ' ' +
        date.getDate() + ', ' + date.getFullYear()
}