import PizzaNotFound from '../../../assets/pizzas/pizza-gif.gif'
import { Link } from 'react-router-dom'
import './style.css'
const SectionNotFound = () => {
    return(
        <section className="section-notFound">
            <div className="container-notFound">
                <h2>Ops... ocorreu um erro ao buscarmos essa página</h2>
            
                <img src={PizzaNotFound} alt="gif de pizza  saindo fumaça" title="gif de pizza" loading="lazy" />
                <h3>Erro 404 - Não encontrado</h3>
            
            <Link to='/'>Voltar para a tela de inicio</Link>
            </div>
            
        </section>
    )
}
export default SectionNotFound