interface FrequencyMap {
  [key: string]: number
}
export const freqMap: FrequencyMap = {
  'C': 261.63,
  'C#/Db': 277.18,
  'D': 293.66,
  'D#/Eb': 311.13,
  'E': 329.63,
  'F': 349.23,
  'F#/Gb': 369.99,
  'G': 392.00,
  'G#/Ab': 415.30,
  'A': 440.00,
  'A#/Bb': 466.16,
  'B': 493.88,
}

export class Drone {
  audioContext: AudioContext
  oscillator: OscillatorNode
  envelope: GainNode
  frequency: number
  gain: number
  isRunning: boolean

  constructor(frequency = 440, gain = 0.3) {
    this.audioContext = new AudioContext()
    this.oscillator = new OscillatorNode(this.audioContext)
    this.envelope = new GainNode(this.audioContext)
    this.frequency = frequency
    this.gain = gain
    this.isRunning = false
  }

  activateOsc() {
    if (this.isRunning) return

    this.audioContext = new AudioContext()
    this.oscillator = new OscillatorNode(this.audioContext)
    this.envelope = new GainNode(this.audioContext)

    this.oscillator.type = 'sine'
    this.oscillator.frequency.value = this.frequency
    this.oscillator.connect(this.envelope)
    this.envelope.connect(this.audioContext.destination)

    this.oscillator.start()
    this.envelope.gain.value = this.gain
  }
  
  start() {
    this.activateOsc()
    
    this.isRunning = true
  }
  stop() {
    this.oscillator.stop()
    this.oscillator.disconnect()
    this.isRunning = false
  }
  startStop() {
    if (this.isRunning) this.stop()
    else this.start()
  }
}