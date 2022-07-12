import {Switch} from "./UI/Switch/Switch"

import './App.css'
import {useState} from "react";

const App = () => {
    const [checked, setChecked] = useState(false)

    return (
        <div className="App">
            <Switch
                isOn={checked}
                handleToggle={() => setChecked(!checked)}
                colorOne="#EF476F"
                colorTwo="#06D6A0"
            />
        </div>
    )
}

export default App