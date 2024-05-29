import './FruitCounter.css'
import Button from "../Button/Button.jsx";

function FruitCounter( { fruit, setFruit } ) {
    return (
        <div className="fruit-counter__wrapper">
            <Button type="button" disabled={fruit === 0} clickHandler={() => setFruit(fruit - 1)} className="button button__minus" text="➖" />
            {fruit}
            <Button type="button" clickHandler={() => setFruit(fruit + 1)} className={fruit > 0 ? "button button__plus--active" : "button button__plus--default"} text="➕" />
        </div>
    );
}

export default FruitCounter;