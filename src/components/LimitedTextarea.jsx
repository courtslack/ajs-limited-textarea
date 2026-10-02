import { useEffect, useState } from "react"

const LimitedTextarea  = ( {maxLength} ) => {
    // state stores the text the user types
    const [ text, setText ] = useState("")

    // counts the number of characters currently in text
    const textCount = text.length

    // for your textarea element:
    const textareaStyle = {
        width: '300px',
        height: '150px',
    }

    // for the paragraph element that displays the character count:
    const pStyle = {
        fontFamily: 'monospace',
        fontSize: '14px',
        textAlign: 'right',
        marginTop: '4px',
    }


    // EFFECT: handles the side effect of changing the browser tab title
    useEffect(() => {
        // template literal
        document.title = `Charcter count is: ${textCount}`
    }, [textCount])

    return (
       <div>
        <textarea 
             // textarea displays the value stored in text state
            value={ text }

            // textarea value goes into setText
            onChange={({ target }) => setText(target.value)}  
            
            // The { } means “use this JavaScript variable/object in my JSX.”
            style={textareaStyle}

            maxLength={200}
        />        

        {/* <p style={pStyle}> { textCount} / 200  </p> */}
        <p style={pStyle}>{textCount} / {maxLength}</p>
       </div>
        
    )
}

export default LimitedTextarea 