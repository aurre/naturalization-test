
import React from 'react';
import './Question.css';
import questions from '../questions';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: questions,
            counter: 0,
        }
        this.flip = this.flip.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
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
        this.setState((state) => ({
            counter: state.counter + 1
        }));
    }

    render() {
        const listItems = this.state.questions[this.state.counter].answer.map((answer) =>
            <li key={answer.toString()}>{answer}</li>
        );
        return (
            <div className="container">
                <div className="card" onClick={this.flip}>
                    <div className="front">
                        <h3>Question</h3>
                        <h1>{this.state.questions[this.state.counter].question}</h1>
                    </div>
                    <div className="back">
                        <h3>Answer</h3>
                        <ul>{listItems}</ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Question;