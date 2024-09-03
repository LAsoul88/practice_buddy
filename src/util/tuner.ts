import Wad from 'web-audio-daw'

const voice = new Wad({ source: 'mic' })
const tuner = new Wad.Poly({})
tuner.setVolume(0)
tuner.add(voice)

export class Tuner {
  audioContext: AudioContext
  constructor() {
    this.audioContext = new AudioContext()
  }
}