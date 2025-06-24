import './style.css'
import CardPizza from '../../cardPizza'
import Pizza01 from '../../../assets/pizzas/pizza01.png'
import Pizza02 from '../../../assets/pizzas/pizza02.png'
import Pizza03 from '../../../assets/pizzas/pizza03.png'


const HighlightsSection = () => {
    return (
        <section className="highlights-section">

            <h3>Nossos Destaques</h3>

            <div className="cards">
    
                <CardPizza pizzaImage={Pizza01} pizzaName='Pizza de Palmito' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                <CardPizza pizzaImage={Pizza02} pizzaName='Pizza de Cogumelo Premium' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                <CardPizza pizzaImage={Pizza03} pizzaName='Pizza de Cogumelo' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                                                                      
                                                                                                                                   
            </div>
            
        </section>
    )
}

export default HighlightsSection