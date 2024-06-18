'use client'
import { useState, useReducer, Reducer } from 'react'
import { Button } from './Button'

interface Metronome {
	audioContext: AudioContext
	notesInQueue: any[]
	currentBeatInBar: number
	beatsPerBar: number
	tempo: number
	lookahead: number
	scheduleAheadTime: number
	nextNoteTime: number
	isRunning: boolean
	intervalID?: ReturnType<typeof setInterval>
}

const initialMetroState: Metronome = {
	audioContext: new AudioContext(),
	notesInQueue: [],
	currentBeatInBar: 0,
	beatsPerBar: 4,
	tempo: 120,
	lookahead: 25,
	scheduleAheadTime: 0.1,
	nextNoteTime: 0.0,
	isRunning: false,
}

const metroReducer = (
	metronome: Metronome,
	newMetronome: Partial<Metronome>
) => ({ ...metronome, ...newMetronome })
// 	state: Metronome,
// 	action: {
// 		type: string
// 		field: string
// 		value: number
// 	}
// ): Metronome => {
// switch (action.type) {
// 	case 'SET_FIELD_VALUE': {
// 		return {
// 			...state,
// 			[action.field]: action.value,
// 		}
// 	}
// 	default:
// 		return state
// }

export const Metronome = () => {
	const [metronome, dispatch] = useReducer<
		Reducer<Metronome, Partial<Metronome>>
	>(metroReducer, initialMetroState)

	// Methods
	const nextNote = () => {
		const { tempo, nextNoteTime, currentBeatInBar, beatsPerBar } = metronome
		const secondsPerBeat = 60.0 / tempo
		dispatch({
			nextNoteTime: nextNoteTime + secondsPerBeat,
			currentBeatInBar: currentBeatInBar + 1 === beatsPerBar ? 0 : currentBeatInBar + 1,
		})
	}

	const scheduleNote = (beatNumber: number, time: number) => {}

	const scheduler = () => {}

	const start = () => {}

	const stop = () => {}

	const startStop = () => {}
	console.log(metronome)
	return (
		<div>
			{/* <Button
				onClick={() => {
					updateMetro
				}}
			>
				Submit
			</Button> */}
		</div>
	)
}
