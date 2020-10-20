import React, { useState } from "react";
import "./NButtons.css";

function NButtons(props) {    
    const { nbuttons } = props;
    return (
        <div className={`NButtons ${NButtons.isCompleted ? "complete" : ""}`}>
            <div>
                <button> + </button>
                <input type="text" id="number" value="0" size="10" />
                <button> - </button>
            </div>
        <form>
            <input type="text"
                placeholder="NButtons"/>
        </form>
        </div>
    );
}

export default NButtons;