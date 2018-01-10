# A swipeable carousel made with ReactJS

_bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)_

## Menu
* [About](#about)
* [Description](#description)
* [Function](#function)
* [Usage](#usage)
* [Demo](#demo)
* [Credits](#credits)

## About

This is just a simple implementation of a swipeable carousel for mobile browsers using ReactJS.

## Description

I am using [Touch Events](https://reactjs.org/docs/events.html#touch-events). The whole project
is based on [this post](http://www.hartzis.me/test-touch-events-react/) by [hartzis](https://github.com/hartzis).

## Function

### Swiping

Just swipe left and right to change slides.

The whole idea is to mock the sliding. Each slide (div) is following the movement of your finger (cursor / touch event). Once the touch is finished,
the current slide disappears, and the next slide appears. The sequence (previous-next) is defined according to the touch movement direction. Right-to-left indicates transfer to the next slide, left-to-right indicated transfer to the previous slide. You can adjust that to what you are used to.

So, when the touch starts (onTouchStart), the location of the pointer (finger/cursor) is logged.

As the pointer (finger/cursor) moves (onTouchMove), the position of the slide follows, with translateX by the difference from the first touch to the current location of the pointer.

When the touch ends (onTouchEnd), that is once the finger (pointer/cursor) is released, the next/previous slide appears and the current disappears.

The new slide is faded in to make the transition seem smoother, but you can change that.

### Dots

At the bottom of the screen, the dots indicate the current slide. You can also transition from slide to slide by clicking on a dot.

### Slide Generation

In this example, I am generating and array as large as the number of slides I have set in the beginning. You can change that and add your own slides, or map your own array of divs or elements in the slide div. Just make sure your slides have ids respective to their slide number / index, and this same index is kept in the dots array/list as well!

## Usage

Just copy and paste or get inspired.

## Demo

You can view a live demo [here](https://mandarini.github.io/swipe-carousel/).
Make sure to open it with a mobile device, or inspect it with responsive mode on with Chrome Dev tools or another interface that emulates swipe events.

## Credits

* Thanks to [hartzis](https://github.com/hartzis) for the inspiration and code.
