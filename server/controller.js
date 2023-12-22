module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A smile is your personal welcome mat.", 
        "All the effort you are making will ultimately pay off.", "All your hard work will soon pay off.", "Believe in yourself and others will too."];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getBabyName: (req, res) => {
        const babyNames = ["Nora", "Kobe", "Jalen", "Addison", "Heaven", "Robin"];
        
        let randomIndex = Math.floor(Math.random() * babyNames.length);
        let randomBabyName = babyNames[randomIndex];

        res.status(200).send(randomBabyName);
    },
    getLuckyNumber: (req, res) => {
        const luckyNumbers = ["7", "11", "20", "6", "33", "1", "3", "13", "17"];
        
        let randomIndex = Math.floor(Math.random() * luckyNumbers.length);
        let randomLuckyNumber = luckyNumbers[randomIndex];

        res.status(200).send(`Your Lucky number is ${randomLuckyNumber}`);
    },

    getCurrentTime: (req, res) => {
        let currentTime = new Date().toLocaleTimeString()
        res.status(200).send(`The current time is ${currentTime}`)

        }
}