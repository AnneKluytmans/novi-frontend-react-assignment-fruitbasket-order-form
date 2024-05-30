import {useState} from "react";
import Button from './components/Button/Button.jsx'
import FruitCounter from "./components/FruitCounter/FruitCounter.jsx";
import InputField from "./components/InputField/InputField.jsx";
import './App.css'

function App() {
  const [bananas, setBananas] = useState(0);
  const [strawberries, setStrawberries] = useState(0);
  const [apples, setApples] = useState(0);
  const [kiwis, setKiwis] = useState(0);

  const [formState, setFormState] = useState({
      firstname: '',
      lastname: '',
      age: 0,
      zipcode: '',
      deliveryFrequency: 'week',
      deliveryTimeslot: 'daytime',
      comment: '',
      agreeTerms: false,
  })

  function handleFormChange(e) {
      const inputFieldName = e.target.name;
      const inputFieldValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

      setFormState({
          ...formState,
          [inputFieldName]: inputFieldValue,
      })
  }

  function resetFruits () {
      setBananas(0);
      setStrawberries(0);
      setApples(0);
      setKiwis(0);
  }

  function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
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
                <InputField id="firstname-field" name="firstname" label="Voornaam" type="text" value={formState.firstname}
                            changeHandler={handleFormChange}/>
            </section>
            <section>
                <InputField id="lastname-field" name="lastname" label="Achternaam" type="text" value={formState.lastname}
                            changeHandler={handleFormChange}/>
            </section>
            <section>
                <InputField id="age-field" name="age" label="Leeftijd" type="number" value={formState.age}
                            changeHandler={handleFormChange}/>
            </section>
            <section>
                <InputField id="zipcode-field" name="zipcode" label="Postcode" type="text" value={formState.zipcode}
                            changeHandler={handleFormChange}/>
            </section>
            <section>
                <label htmlFor="delivery-frequency-field">Bezorgfrequentie</label>
                <select
                    name="deliveryFrequency"
                    id="delivery-frequency-field"
                    value={formState.deliveryFrequency}
                    onChange={handleFormChange}
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
                    name="deliveryTimeslot"
                    id="timeslot-field-daytime"
                    checked={formState.deliveryTimeslot === 'daytime'}
                    onChange={handleFormChange}
                />
                <label htmlFor="timeslot-field-daytime">Overdag</label>
                <input
                    type="radio"
                    value="evening"
                    checked={formState.deliveryTimeslot === 'evening'}
                    onChange={handleFormChange}
                    name="deliveryTimeslot"
                    id="timeslot-field-evening"
                />
                <label htmlFor="timeslot-field-evening">'s Avonds</label>
            </section>
            <section>
                <label htmlFor="comment-field">Opmerking</label>
                <textarea
                    name="comment"
                    id="comment-field"
                    value={formState.comment}
                    onChange={handleFormChange}
                    rows={6}
                    cols={40}
                />
            </section>
            <section>
                <input
                    type="checkbox"
                    name="agreeTerms"
                    id="agree-terms-field"
                    value={formState.agreeTerms}
                    onChange={handleFormChange}
                />
                <label htmlFor="agree-terms-field">Ik ga akkoord met de voorwaarden</label>
            </section>

            <Button type="submit" className="button button__default" text="Verzenden"/>
        </form>
    </>
  )
}

export default App
