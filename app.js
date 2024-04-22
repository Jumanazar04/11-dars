let subjects = [
    {
        id: 1,
        name: "Tarix",
        price: 500000,
        duration: 5,
        img: "tarix.jpeg",
        details: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit veritatis dolorum quia. Culpa, cupiditate eaque est perferendis optio, modi repellendus non inventore cum pariatur doloremque tempore quo minus quisquam cumque ducimus. Eius fugit explicabo excepturi nemo, delectus tempora quod adipisci vitae, totam alias repudiandae? Dolor praesentium eum delectus animi pariatur!"
    },
    {
        id: 6,
        name: "Biologiya",
        price: 900000,
        duration: 9,
        img: "biology.jpeg",
        details: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit veritatis dolorum quia. Culpa, cupiditate eaque est perferendis optio, modi repellendus non inventore cum pariatur doloremque tempore quo minus quisquam cumque ducimus. Eius fugit explicabo excepturi nemo, delectus tempora quod adipisci vitae, totam alias repudiandae? Dolor praesentium eum delectus animi pariatur!"
    },
    {
        id: 2,
        name: "Matematika",
        price: 600000,
        duration: 6,
        img: "math.png",
        details: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit veritatis dolorum quia. Culpa, cupiditate eaque est perferendis optio, modi repellendus non inventore cum pariatur doloremque tempore quo minus quisquam cumque ducimus. Eius fugit explicabo excepturi nemo, delectus tempora quod adipisci vitae, totam alias repudiandae? Dolor praesentium eum delectus animi pariatur!"
    },
    {
        id: 4,
        name: "English",
        price: 800000,
        duration: 8,
        img: "ingiliz-tili.jpeg",
        details: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit veritatis dolorum quia. Culpa, cupiditate eaque est perferendis optio, modi repellendus non inventore cum pariatur doloremque tempore quo minus quisquam cumque ducimus. Eius fugit explicabo excepturi nemo, delectus tempora quod adipisci vitae, totam alias repudiandae? Dolor praesentium eum delectus animi pariatur!"
    },
    {
        id: 5,
        name: "Fizika",
        price: 900000,
        duration: 9,
        img: "tarix.jpeg",
        details: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit veritatis dolorum quia. Culpa, cupiditate eaque est perferendis optio, modi repellendus non inventore cum pariatur doloremque tempore quo minus quisquam cumque ducimus. Eius fugit explicabo excepturi nemo, delectus tempora quod adipisci vitae, totam alias repudiandae? Dolor praesentium eum delectus animi pariatur!"
    },
    {
        id: 3,
        name: "Kimyo",
        price: 700000,
        duration: 7,
        img: "kimyo.jpeg",
        details: "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit veritatis dolorum quia. Culpa, cupiditate eaque est perferendis optio, modi repellendus non inventore cum pariatur doloremque tempore quo minus quisquam cumque ducimus. Eius fugit explicabo excepturi nemo, delectus tempora quod adipisci vitae, totam alias repudiandae? Dolor praesentium eum delectus animi pariatur!"
    }
]

const subjectsEl = document.querySelector(".subjects");
const fan = document.querySelector(".fan");
const muddat = document.querySelector(".muddat");
const price = document.querySelector(".price");
const sorting = document.querySelector(".sorting");


function renderSubjects(subject){
    const subjectEl = document.createElement("div");
    const h2El = document.createElement("h2")
    const h4El = document.createElement("h4")
    const h5El = document.createElement("h5");
    const imgEl = document.createElement("img");
    const btnEl = document.createElement("button");
    const title = document.createElement("div");

    imgEl.setAttribute('src', `./images/${subject.img}`);
    h2El.textContent = subject.name;
    h4El.textContent = `Narxi: ${subject.price} so'm`;
    h5El.textContent = `Muddati: ${subject.duration} oy`;
    btnEl.textContent = 'Batafsil';

    subjectEl.classList.add("subject")
    title.classList.add("title")
    btnEl.classList.add("btn")
    subjectEl.appendChild(imgEl);
   
    title.appendChild(h2El)
    title.appendChild(h4El)
    title.appendChild(h5El);
    subjectEl.appendChild(title);
    title.appendChild(btnEl);

    subjectsEl.appendChild(subjectEl)

}

function getSubjects(arr){
    subjectsEl.innerHTML = ''
    arr.forEach(el => {
        renderSubjects(el)
    });
}

getSubjects(subjects)

fan.addEventListener("change", (e)=>{
    console.log(e.target.value);
    let newArr = [];
    if (e.target.value == 'all') {
            getSubjects(subjects);
    }else{
        subjects.find((el)=>{
            if (e.target.value == el.name) {
                newArr.push(el)
                getSubjects(newArr)
            }
        }) 
    }
})

muddat.addEventListener("change", (e)=>{
    let newArr = []
    if (e.target.value == 'all') {
        getSubjects(subjects);
    }else {
        subjects.filter((el) =>{
            if (e.target.value == el.duration) {
                newArr.push(el);
                getSubjects(newArr)
            }
        })
    }
})

price.addEventListener("change", (e)=>{
    let newArr = []
    if (e.target.value == 'all') {
        getSubjects(subjects);
    }else {
        subjects.filter((el) =>{
            if (e.target.value == el.price) {
                newArr.push(el);
                getSubjects(newArr)
            }
        })
    }
})

sorting.addEventListener("change", (e)=>{
    if (e.target.value == 'all') {
        getSubjects(subjects)
    } else if(e.target.value == 'high'){
        let sorted = subjects.sort((el1, el2) =>{
            if (el2.price < el1.price) {
                return -1
            }
            if (el2.price > el1.price) {
                return 1
            }
            return 0
        })
        getSubjects(sorted)
    } else if(e.target.value == "low"){
        let sorted = subjects.sort((el1, el2) =>{
            if (el2.price > el1.price) {
                return -1
            }
            if (el2.price < el1.price) {
                return 1
            }
            return 0
        })
        getSubjects(sorted)
    }else if(e.target.value == "long"){
        let sorted = subjects.sort((el1, el2) =>{
            if (el2.duration < el1.duration) {
                return -1
            }
            if (el2.duration > el1.duration) {
                return 1
            }
            return 0
        })
        getSubjects(sorted)
    }else if(e.target.value == "short"){
        let sorted = subjects.sort((el1, el2) =>{
            if (el2.duration > el1.duration) {
                return -1
            }
            if (el2.duration < el1.duration) {
                return 1
            }
            return 0
        })
        getSubjects(sorted)
    }
})