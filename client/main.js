const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const babyNameBtn = document.querySelector("#babyNameButton")
const luckyNumberBtn = document.querySelector("#luckyNumberButton")
const currentTimeBtn = document.querySelector("#currentTimeButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    })
    .catch(error => {
        console.error("Error fetching compliment:", error);
    });
};

const getBabyName = () => {
    axios.get("http://localhost:4000/api/babyname/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}

const getLuckyNumber = () => {
    axios.get("http://localhost:4000/api/luckynumber/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}

const getCurrentTime = () => {
    axios.get("http://localhost:4000/api/currenttime/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
babyNameBtn.addEventListener('click', getBabyName)
luckyNumberBtn.addEventListener('click', getLuckyNumber)
currentTimeBtn.addEventListener('click', getCurrentTime)