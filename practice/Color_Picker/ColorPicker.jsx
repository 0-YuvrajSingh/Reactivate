import { useState } from 'react'

export const ColorPicker = () => {
    const [color, setColor] = useState("#ffffff")

    return(
        <div id="color-picker-container" style={{backgroundColor: color}}>
            <input id = "color-input" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
    )
}