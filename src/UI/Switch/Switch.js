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
                onClick={handleSwitchToggle}>
                Your label here
                {/* Change to {this.props.title} and you can set the label text in a higher level component */}
            </label>
        </div>
    )
}