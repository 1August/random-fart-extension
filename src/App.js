import {Switch} from "./UI/Switch/Switch";
import {useState} from "react";

import './App.css'

const App = () => {
  const [checked, setChecked] = useState(true);

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