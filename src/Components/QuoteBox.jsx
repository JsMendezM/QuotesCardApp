import { useState } from "react";
import Quotes from "../Quotes.json"

const QuoteBox = () => {

    const random = Math.floor(Math.random() * Quotes.length);
    const [index, setIndex ] = useState(random);

    const ChangeQuote = () => {
        const random = Math.floor(Math.random()*Quotes.length)
        setIndex(random)
    }
    
    const colors = ["#163153", "#FFCE35", "#C26401", "#FF4131", "#BE9009", "#FAFB08", "#F44B8E", "#24C1EE"]
    const randomColor = Math.floor(Math.random() * colors.length)
    const color = colors[randomColor]

    document.body.style = `background: ${color}`

    return(
        <div style={{color:color}}>
            <p><i className="fa-solid fa-quote-left"></i>{Quotes[index].quote}</p>
            <h6>{Quotes[index].author}</h6>
            <button onClick={ChangeQuote} style={{color:color}}><i class="fa-solid fa-angles-right"></i></button>
        </div>
    )
}

export default QuoteBox