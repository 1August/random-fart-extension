import {Switch} from "./UI/Switch/Switch"

import './App.css'
import {useEffect} from "react";
import {useAudio} from "./hooks/useAudio";

import useState from 'react-usestateref'

import audio1 from './assets/audio/prod_sounds_mp3_204844.mp3'
import audio2 from './assets/audio/prod_sounds_mp3_204849.mp3'
import audio3 from './assets/audio/prod_sounds_mp3_204918.mp3'
import audio4 from './assets/audio/prod_sounds_mp3_204959.mp3'
import audio5 from './assets/audio/prod_sounds_mp3_205008.mp3'

import {myFunc} from './background/index'

const App = () => {
    // States
    const [checked, setChecked, refChecked] = useState(false)
    const [playing1, toggle1] = useAudio(audio1)
    const [playing2, toggle2] = useAudio(audio2)
    const [playing3, toggle3] = useAudio(audio3)
    const [playing4, toggle4] = useAudio(audio4)
    const [playing5, toggle5] = useAudio(audio5)
    const arr = [toggle1, toggle2, toggle3, toggle4, toggle5]

    // Functions
    const random = n => {
        const rand = Math.floor(Math.random() * n)
        // if (rand < 1000 * 60 * 1) return random()
        return rand
    }

    const handleSwitchToggle = () => {
        setChecked(!checked)
        // if (checked) playFart()
        // else setChecked(false)
    }

    useEffect(()=>{
        myFunc()
    }, [])

    useEffect(() => {
        if (!checked) return
        playFart()
    }, [checked])

    const playFart = () => {
        // console.log(checked)

        const delay = random(3000)
        const idx = random(5)

        setTimeout(() => {
            arr[idx]()
            if (refChecked.current){
                playFart()
            }
        }, delay)

        // const prom = new Promise((res, rej) => {
        //     setTimeout(() => {
        //         res(arr[idx])
        //     }, delay)
        // })
        //
        // prom.then(audio => audio()).then(() => {
        //     if (checked){
        //         playFart()
        //     }
        // })
    }

    return (
        <div className="App">
            <Switch
                checked={checked}
                setChecked={setChecked}
                handleSwitchToggle={handleSwitchToggle}
            />
            {/*<button onClick={() => setStop(true)}>Stop play</button>*/}
        </div>
    )
}

export default App