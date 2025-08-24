import { useState } from "react";
import InputBox from "./components/InputBox";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo";
import shapeImage from "./assets/shapeImage.jpg";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    const rate = currencyInfo[toCurrency];
    if (!rate) return;
    setConvertedAmount((amount * rate).toFixed(2));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black/10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${shapeImage})`,
        }}
      ></div>

      {/* Converter UI */}
      <div className="relative z-10 w-full max-w-md bg-black/70 backdrop-blur-md p-6 rounded-xl shadow-2xl text-white">
        <h1 className="text-3xl font-bold text-purple-400 text-center mb-6 drop-shadow-[0_0_10px_#8e2de2]">
          Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            onAmountChange={setAmount}
            onCurrencyChange={setFromCurrency}
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            disabledAmount={false}
          />

          <div className="text-center my-4">
            <button
              type="button"
              onClick={swap}
              className="text-xl px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded hover:opacity-90 shadow-md"
            >
              Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            onAmountChange={setConvertedAmount}
            onCurrencyChange={setToCurrency}
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            disabledAmount={true}
          />

          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded shadow-md hover:opacity-90"
            >
              Convert {fromCurrency.toUpperCase()} → {toCurrency.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
