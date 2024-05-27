import {useState} from "react";
import './App.css'

function App() {
  const [bananas, setBananas] = useState(0);
  const [strawberries, setStrawberries] = useState(0);
  const [apples, setApples] = useState(0);
  const [kiwis, setKiwis] = useState(0);

  function resetFruits () {
      setBananas(0);
      setStrawberries(0);
      setApples(0);
      setKiwis(0);
  }

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <section className="fruit-counter__container">
            <h2>Vul je fruitmand:</h2>
            <article className="fruit-counter">
                <h2>🍌 Bananen</h2>
                <span className="fruit-counter__wrapper">
                    <button type="button" disabled={bananas === 0} onClick={() => setBananas(bananas - 1)}
                            className="button button__minus">
                        ➖
                    </button>
                    {bananas}
                    <button type="button" onClick={() => setBananas(bananas + 1)} className="button button__plus">
                        ➕
                    </button>
                </span>
            </article>
            <article className="fruit-counter">
                <h2>🍓 Aardbeien</h2>
                <span className="fruit-counter__wrapper">
                    <button type="button" disabled={strawberries === 0}
                            onClick={() => setStrawberries(strawberries - 1)} className="button button__minus">
                        ➖
                    </button>
                    {strawberries}
                    <button type="button" onClick={() => setStrawberries(strawberries + 1)}
                            className="button button__plus">
                        ➕
                    </button>
                </span>
            </article>
            <article className="fruit-counter">
                <h2>🍏 Appels</h2>
                <span className="fruit-counter__wrapper">
                    <button type="button" disabled={apples === 0} onClick={() => setApples(apples - 1)}
                            className="button button__minus">
                        ➖
                    </button>
                    {apples}
                    <button type="button" onClick={() => setApples(apples + 1)} className="button button__plus">
                        ➕
                    </button>
                </span>
            </article>
            <article className="fruit-counter">
                <h2>🥝 Kiwi's</h2>
                <span className="fruit-counter__wrapper">
                    <button type="button" disabled={kiwis === 0} onClick={() => setKiwis(kiwis - 1)}
                            className="button button__minus">
                        ➖
                    </button>
                    {kiwis}
                    <button type="button" onClick={() => setKiwis(kiwis + 1)} className="button button__plus">
                        ➕
                    </button>
                </span>
            </article>
            <button type="button" onClick={() => resetFruits()} className="button button__reset">
                Reset
            </button>
        </section>
    </>
  )
}

export default App
