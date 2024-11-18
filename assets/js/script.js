const menu_btn = document.querySelector(".navbar_hidden_icon");
const menu_hidden = document.querySelector(".navbar_hidden_click");
const body = document.querySelector("body");
const close = document.querySelector(".navbar_hidden_click_close");
const nav = document.querySelector("nav");
const lioperation = document.querySelector(".lioperation");
const liabout = document.querySelector(".liabout");
const operations = document.querySelector(".operations")
menu_btn.addEventListener("click", function () {
    body.classList.add("stop");
    menu_hidden.classList.add("open_menu");

    lioperation.addEventListener("click", function () {
        console.log("basdin");
        body.classList.remove("stop");
        menu_hidden.classList.remove("open_menu");
    })
    close.addEventListener("click", function () {
        body.classList.remove("stop");
        menu_hidden.classList.remove("open_menu");
    })
    liabout.addEventListener("click", function () {
        console.log("basdin");
        body.classList.remove("stop");
        menu_hidden.classList.remove("open_menu");
    })
})


async function getAll() {
    const response = await fetch("https://6724aabbc39fedae05b2470a.mockapi.io/adminpanel");
    const data = await response.json();
    console.log(data);
}

async function generateTable() {
    const response = await fetch("https://6724aabbc39fedae05b2470a.mockapi.io/adminpanel");
    const data = await response.json();

    data.forEach(element => {
        let newOperation = document.createElement("div")
        newOperation.classList.add("operation")
        newOperation.innerHTML = `
       <div class="operation_name"><h2>${element.name}</h2></div>
                        <div class="operation_price"><h2>${element.prize}</h2></div>
                        <div class="button_delete"><button class="delete_button">delete</button></div>
                    
      `
        operations.append(newOperation)

        const deletebtn = newOperation.querySelector(".delete_button");
        deletebtn.onclick = async () => {
            await deleteById(element.id);
            newOperation.innerHTML = ""
            generateTable();
        };
    });
}

generateTable();


async function deleteById(id) {
    const res = await fetch("https://6724aabbc39fedae05b2470a.mockapi.io/adminpanel/" + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}









class Hospital {
    constructor(ad) {
        this.ad = ad;
        this.doctors = []
        this.client = [];
        this.rooms = []
    }
    addDoctor(doctor) {
        this.doctors.push(doctor);
    }
}

class Doctor {
    constructor(fullname, salary, gender) {

        this.fullname = fullname;
        this.salary = salary;
        this.gender = gender;
    }
}

class Client {
    constructor(id, fullname, gender, condition) {
        this.id = id;
        this.fullname = fullname;
        this.gender = gender;
        this.condition = condition;
    }
}

class Room {
    constructor(id, age, roomName) {
        this.id = id;
        this.age = age;
        this.roomName = roomName;
        this.doctors = [];
        this.clients = [];
    }
}
const xestexana = new Hospital("teze xestexana");
const cavab = prompt("ne etmek isteyirsen  hekim elave etmek ucun 1 , musteri elave etmek ucun 2 , otaq elave etmek ucun 3")
if (cavab === "1") {
    addDoctor()

}
function addDoctor() {
    const ad = prompt("adini daxil et")
    const salary = prompt("maasi daxil et")
    const gender = prompt("cinsini daxil et")
    const hekim = new Doctor(ad, salary, gender)


    xestexana.addDoctor(hekim);
console.log(xestexana.doctors);

}


