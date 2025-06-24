import './style.css'
import CardPizza from '../../cardPizza'
import Pizza01 from '../../../assets/pizzas/pizza01.png'
import Pizza02 from '../../../assets/pizzas/pizza02.png'
import Pizza03 from '../../../assets/pizzas/pizza03.png'
import Pizza04 from '../../../assets/pizzas/pizza04.png'
import Pizza05 from '../../../assets/pizzas/pizza05.png'
import Pizza06 from '../../../assets/pizzas/pizza06.png'

const MenuSection = () => {
    return (
        <section className="cardapio-section">

            <h2>Cardápio Completo</h2>

            <div className="menu-grid">

                <CardPizza pizzaImage={Pizza01} pizzaName='Pizza de Palmito' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                <CardPizza pizzaImage={Pizza02} pizzaName='Pizza de Cogumelo Premium' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                <CardPizza pizzaImage={Pizza03} pizzaName='Pizza de Cogumelo' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                <CardPizza pizzaImage={Pizza04} pizzaName='Pizza de Calabresa' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                <CardPizza pizzaImage={Pizza05} pizzaName='Pizza de Marguerita' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                <CardPizza pizzaImage={Pizza06} pizzaName='Pizza de Peperoni' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                <CardPizza pizzaImage={Pizza01} pizzaName='Pizza de Palmito' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                <CardPizza pizzaImage={Pizza02} pizzaName='Pizza de Cogumelo Premium' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                <CardPizza pizzaImage={Pizza03} pizzaName='Pizza de Cogumelo' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                <CardPizza pizzaImage={Pizza04} pizzaName='Pizza de Calabresa' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                <CardPizza pizzaImage={Pizza05} pizzaName='Pizza de Marguerita' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                <CardPizza pizzaImage={Pizza06} pizzaName='Pizza de Peperoni' pizzaIngredients= 'Tradicional com bastante sabor e crocância'/>                                                        
                          
            </div>
        </section>
    )
}

export default MenuSection