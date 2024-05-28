import {useState} from "react";
import './App.css'
import Button from './components/Button/Button.jsx'
import FruitCounter from "./components/FruitCounter/FruitCounter.jsx";

function App() {
  const [bananas, setBananas] = useState(0);
  const [strawberries, setStrawberries] = useState(0);
  const [apples, setApples] = useState(0);
  const [kiwis, setKiwis] = useState(0);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(0);
  const [zipcode, setZipcode] = useState('');
  const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
  const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
  const [comment, setComment] = useState('');
  const [agreeTerms, toggleAgreeTerms] = useState(false);

  function resetFruits () {
      setBananas(0);
      setStrawberries(0);
      setApples(0);
      setKiwis(0);
  }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
    Voornaam: ${firstname}, 
    Achternaam: ${lastname}, 
    Leeftijd: ${age}, 
    Postcode: ${zipcode}, 
    Bezorgfrequentie: ${deliveryFrequency},
    Opmerkingen: ${comment},
    Algemene voorwaarden: ${agreeTerms}
    `);
        console.log(`Fruitmand bestelling - bananen: ${bananas}, aardbeiden: ${strawberries}, appels: ${apples}, kiwi's: ${kiwis}`);
    }

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <section className="outer-content__container fruit-counter__section">
            <h3>Vul je fruitmand:</h3>
            <article className="fruit-counter">
                <h2>🍌 Bananen</h2>
                <FruitCounter fruit={bananas} setFruit={setBananas}/>
            </article>
            <article className="fruit-counter">
                <h2>🍓 Aardbeien</h2>
                <FruitCounter fruit={strawberries} setFruit={setStrawberries}/>
            </article>
            <article className="fruit-counter">
                <h2>🍏 Appels</h2>
                <FruitCounter fruit={apples} setFruit={setApples}/>
            </article>
            <article className="fruit-counter">
                <h2>🥝 Kiwi's</h2>
                <FruitCounter fruit={kiwis} setFruit={setKiwis}/>
            </article>
            <Button type="button" clickHandler={resetFruits} className="button button__default" text="Reset"/>
        </section>

        <form onSubmit={handleSubmit} className="outer-content__container">
            <section>
                <label htmlFor="firstname-field">Voornaam</label>
                <input
                    name="firstname"
                    id="firstname-field"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="lastname-field">Achternaam</label>
                <input
                    name="lastname"
                    id="lastname-field"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="age-field">Leeftijd</label>
                <input
                    name="age"
                    id="age-field"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="zipcode-field">Postcode</label>
                <input
                    name="zipcode"
                    id="zipcode-field"
                    type="text"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                />
            </section>
            <section>
                <label htmlFor="delivery-field">Bezorgfrequentie</label>
                <select
                    name="delivery"
                    id="delivery-field"
                    value={deliveryFrequency}
                    onChange={(e) => toggleDeliveryFrequency(e.target.value)}
                >
                    <option value="week">Iedere week</option>
                    <option value="two-week">Om de week</option>
                    <option value="month">Iedere maand</option>
                </select>
            </section>
            <section>
                <input
                    type="radio"
                    value="daytime"
                    name="timeslot"
                    id="timeslot-field-daytime"
                    checked={deliveryTimeslot === 'daytime'}
                    onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                />
                <label htmlFor="timeslot-field-daytime">Overdag</label>
                <input
                    type="radio"
                    value="evening"
                    checked={deliveryTimeslot === 'evening'}
                    onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                    name="timeslot"
                    id="timeslot-field-evening"
                />
                <label htmlFor="timeslot-field-evening">'s Avonds</label>
            </section>
            <section>
                <label htmlFor="comment-field">Opmerking</label>
                <textarea
                    name="comment"
                    id="comment-field"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={6}
                    cols={40}
                />
            </section>
            <section>
                <input
                    type="checkbox"
                    name="agree"
                    id="agree-field"
                    value={agreeTerms}
                    onChange={(e) => toggleAgreeTerms(e.target.checked)}
                />
                <label htmlFor="agree-field">Ik ga akkoord met de voorwaarden</label>
            </section>

            <Button type="submit" className="button button__default" text="Verzenden"/>
        </form>
    </>
  )
}

export default App
