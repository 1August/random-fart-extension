import {Switch} from "./UI/Switch/Switch"

import './App.css'
import {useState} from "react";
import {useAudio} from "./hooks/useAudio";

import audio1 from './assets/audio/prod_sounds_mp3_204844.mp3'
import audio2 from './assets/audio/prod_sounds_mp3_204849.mp3'
import audio3 from './assets/audio/prod_sounds_mp3_204918.mp3'
import audio4 from './assets/audio/prod_sounds_mp3_204959.mp3'
import audio5 from './assets/audio/prod_sounds_mp3_205008.mp3'

const App = () => {
    const [checked, setChecked] = useState(false)

    const [playing1, toggle1] = useAudio(audio1)
    const [playing2, toggle2] = useAudio(audio2)
    const [playing3, toggle3] = useAudio(audio3)
    const [playing4, toggle4] = useAudio(audio4)
    const [playing5, toggle5] = useAudio(audio5)

    const arr = [toggle1, toggle2, toggle3, toggle4, toggle5]

    const random = (n, arr = null) => {
        if (!arr) Math.floor(Math.random() * n)
        return arr[Math.floor(Math.random() * 5)]
    }

    const getRandomTime = () => {
        const hours = random(24)
        const minutes = random(60)
        const seconds = random(60)



        random(5, arr)()
    }

    return (
        <div className="App">
            <Switch
                isOn={checked}
                handleToggle={() => setChecked(!checked)}
                colorOne="#EF476F"
                colorTwo="#06D6A0"
            />
            <button onClick={getRandomTime}>Play</button>
        </div>
    )
}

export default App