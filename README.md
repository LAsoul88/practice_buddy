## Metronome

For developing a working metronome in JS, I relied heavily on [this article](https://grantjam.es/creating-a-simple-metronome-using-javascript-and-the-web-audio-api/) by Grant James. He goes in depth into the issues associated with timing in JavaScript and how to utilize the `Web Audio API` to keep accurate time and `setInterval()` to periodically check for user-initiated changes in tempo. 

Additionally, I've integrated the `Metronome` class from his [repo](https://github.com/grantjames/metronome). To begin, I copied his code into this project to get a bare bones metronome working. The original project is written in JavaScript, so I have added typings to the `Metronome` class for use in TypeScript.