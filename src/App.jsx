import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./Data.jsx"

export default function App() {
    const cardElements = cardData.map(card => <Card
        key={card.id}
        card={card}
        />)
return (
 <div>
     <Navbar /> 
     <Hero />
     <section className="cards-list">
      {cardElements}
     </section>
     
</div>
)
}



