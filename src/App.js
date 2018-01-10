import React, { Component } from 'react';
import './App.css';

const numberOfSlides = 6;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activetab: 0,
            swiped: false
        };
        this._onTouchStart = this._onTouchStart.bind(this);
        this._onTouchMove = this._onTouchMove.bind(this);
        this._onTouchEnd = this._onTouchEnd.bind(this);
        this.showSlide = this.showSlide.bind(this);
        this._swipe = {};
    };

    componentDidMount() {
        this.showSlide(0);
    }

    showSlide(s) {
        console.log(s);
        if (s < 0) {
            this.setState({
                activetab: 0
            });
            document.getElementById(0).style.transform = "translateX(0)";
        } else if (s > (numberOfSlides-1)) {
            this.setState({
                activetab: numberOfSlides-1
            });
            document.getElementById(numberOfSlides-1).style.transform = "translateX(0)";
        } else {
            this.setState({activetab: s})
            document.getElementById(s).style.transform = "translateX(0)";
        }
    };

    _onTouchStart(e) {
        const touch = e.touches[0];
        this._swipe = {x: touch.clientX};
        this.setState({swiped: false});
    }

    _onTouchMove(e) {
        if (e.changedTouches && e.changedTouches.length) {
            this._swipe.swiping = true;
            console.log(this._swipe.x - e.changedTouches[0].clientX);
            document.getElementById(this.state.activetab).style.transform = "translateX(" + (e.changedTouches[0].clientX - this._swipe.x) + "px";
        }
    }

    _onTouchEnd(e) {
        const touch = e.changedTouches[0];
        if (this._swipe.swiping) {
            /*
            *  If the touch is from left to right (end touch is larger that start touch)
            *  */
            if (touch.clientX > this._swipe.x) {
                this.showSlide(this.state.activetab - 1)
            }
            /*
            *  If the touch is from right to left (end touch is smaller that start touch)
            *  */
            if ((touch.clientX < this._swipe.x)) {
                this.showSlide(this.state.activetab + 1)
            }
            this.setState({swiped: true});
        }
        this._swipe = {};
    }

    render() {
        return (
            <div onTouchStart={this._onTouchStart} onTouchMove={this._onTouchMove} onTouchEnd={this._onTouchEnd}>
                    <div className="slide-container">
                        {Array.apply(null, Array(numberOfSlides)).map((slide, index) => (
                            <div id={index} className={"fade-in " + (this.state.activetab === index ? 'show' : 'hidden')}>
                                <div className="slide-body">
                                    <h1>Slide {index+1}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="abs-center dots">
                        <ul>
                            {Array.apply(null, Array(numberOfSlides)).map((item, index) =>
                                <li key={index} onClick={() => this.showSlide(index)}>
                                    <div className={"circle " + (this.state.activetab === (index) ? 'circle-active' : 'circle-inactive')}/>
                                </li>
                            )}
                        </ul>
                    </div>
            </div>
        );
    }
}

export default App;
