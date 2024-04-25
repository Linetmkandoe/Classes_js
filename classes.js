class Car {
    constructor(make,model,year,isAvailabe = true){
        this.make = make;
        this.model= model;
        this.year = year;
        this.isAvailabe = isAvailabe;
    }
    toggleAvailaibility(){
        this.isAvailable = !this.isAvailable;
    }
}
class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
       this.car = car;
       this.renterName = renterName;
       this.rentalStartDate = new Date(rentalStartDate);
       this.rentalEndDate = new Date(rentalEndDate);
    }
   
    calculateRentalDuration() {
       const oneDay = 24 * 60 * 60 * 1000;
       const diffDays = Math.round(Math.abs((this.rentalEndDate - this.rentalStartDate) / oneDay));
       return diffDays;
    }}
    const toyotaCamry = new Car('Toyota','Camry',2020)

    toyotaCamry.toggleAvailaibility();

    const rental =new Rental(toyotaCamry, 'John Doe', '2023-05-01', '2023-05-07');

    console.log(rental.calculateRentalDuration());

   
class Cars {
    constructor(make, model, year, vin, mileage) {
       this.make = make;
       this.model = model;
       this.year = year;
       this.vin = vin;
       this.mileage = mileage;
    }
   }
   
   
   class Rentals {
    constructor(car, startDate, endDate) {
       this.car = car;
       this.startDate = new Date(startDate);
       this.endDate = new Date(endDate);
    }
   
    calculateRentalDuration() {
       const durationInMilliseconds = this.endDate - this.startDate;
       const durationInDays = durationInMilliseconds / (1000 * 60 * 60 * 24);
       return Math.ceil(durationInDays); 
    }
   }
   
   
   const myCar = new Car('Toyota', 'Corolla', 2020, '1234567890ABC', 50000);
   
   
   const myRental = new Rental(myCar, '2024-04-25', '2024-05-01');
   
   
   const rentalDuration = myRental.calculateRentalDuration();
   
   console.log(`The rental duration is ${rentalDuration} days.`);

   class Question {
    constructor(text, options, correctAnswer) {
       this.text = text;
       this.options = options;
       this.correctAnswer = correctAnswer;
    }
   
    checkAnswer(userAnswer) {
       return userAnswer === this.correctAnswer;
    }
   }
   
   class Quiz {
    constructor() {
       this.questions = [];
       this.currentQuestionIndex = 0;
       this.score = 0;
    }
   
    addQuestion(question) {
       this.questions.push(question);
    }
   
    nextQuestion() {
       if (this.currentQuestionIndex < this.questions.length - 1) {
         this.currentQuestionIndex++;
       } else {
         console.log("You've reached the end of the quiz.");
       }
    }
   
    submitAnswer(userAnswer) {
       const currentQuestion = this.questions[this.currentQuestionIndex];
       if (currentQuestion.checkAnswer(userAnswer)) {
         this.score++;
         console.log("Correct!");
       } else {
         console.log("Incorrect.");
       }
       this.nextQuestion();
    }
   }
   
const question1 = new Question("What is the capital of France?", ["Paris", "London", "Berlin", "Madrid"], "Paris");
const question2 = new Question("What is the capital of Germany?", ["Paris", "London", "Berlin", "Madrid"], "Berlin");


const myQuiz = new Quiz();
myQuiz.addQuestion(question1);
myQuiz.addQuestion(question2);


myQuiz.submitAnswer("Paris"); 
myQuiz.submitAnswer("London"); 

myQuiz.nextQuestion();

myQuiz.submitAnswer("Berlin");  
console.log(`Your final score is: ${myQuiz.score}`);

    