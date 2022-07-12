import './Switch.css'
import {useState} from "react";

export const Switch = (props) => {
    const {
        checked,
        setChecked,
        handleSwitchToggle
    } = props

    return (
        <div className="switch">
                <span>
                  <input
                      type="checkbox"
                      id="toggleInput"
                      checked={checked}
                      onChange={handleSwitchToggle}
                  />
                  <button
                      className="slider"
                      type="button"
                      onClick={handleSwitchToggle}>
                  </button>
                </span>
            <label
                htmlFor="toggleInput"
                onClick={handleSwitchToggle}
            >
                Switch on/off
            </label>
        </div>
    )
}