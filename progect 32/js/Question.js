class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Your Answer Here....");
    this.button = createButton('Submit');
    this.question = createElement("h3")
    this.options = createElement("h4")
    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.question.hide();
    this.options.hide();
    this.message.html("thanks for submiting")
    this.message.position(200,200)


  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(340, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("what is 1+1?")
    this.question.position(390,100)
    this.options.html("1:2")
    this.options.position(430,150)
    this.input1.position(250, 330);
    this.input2.position(450, 330);
    this.button.position(410, 390);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
       this.hide()
    })


  }
}
