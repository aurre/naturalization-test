
import React from 'react';
import './FlipCard.css';
import questions from '../../mappingData/questions';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: this.shuffle(questions),
            counter: 0,
        }
        this.flip = this.flip.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.shuffle = this.shuffle.bind(this);
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    flip(event) {
        let element = event.currentTarget;
        if (element.className === "card") {
            if (element.style.transform === "rotateY(180deg)") {
                element.style.transform = "rotateY(0deg)";
                this.nextQuestion();
            }
            else {
                element.style.transform = "rotateY(180deg)";
            }
        }
    }
    nextQuestion() {
        const counter = this.state.counter < this.state.questions.length - 1 ? this.state.counter + 1 : 0;
        this.setState({ counter: counter });
    }

    // gotToPreviousQuestion() { }

    render() {
        const questionObj = this.state.questions[this.state.counter] || {};
        const question = questionObj.question;
        const answer = questionObj.answer.map((answer) =>
            <li key={answer.toString()}>{answer}</li>
        );
        return (
            <div className="container">
                <div className="card" onClick={this.flip}>
                    <div className="front">
                        <h3>Question {this.state.counter + 1}</h3>
                        <h1>{question}</h1>
                    </div>x
                    <div className="back">
                        <h3>Answer</h3>
                        <ul>{answer}</ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;