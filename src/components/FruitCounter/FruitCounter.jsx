import './FruitCounter.css'
import Button from "../Button/Button.jsx";

function FruitCounter( { label, fruit, setFruit } ) {
    return (
        <article className="fruit-counter">
            <h2>{label}</h2>
            <div className="fruit-counter__wrapper">
                <Button type="button" disabled={fruit === 0} clickHandler={() => setFruit(fruit - 1)} className="button button__minus" text="➖"/>
                {fruit}
                <Button type="button" clickHandler={() => setFruit(fruit + 1)} className={`button button__plus--${fruit > 0 ? "active" : "default"}`} text="➕"/>
            </div>
        </article>
    );
}

export default FruitCounter;