function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  disabledAmount = false,
}) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-purple-300 drop-shadow">
        {label}
      </label>

      <input
        type="number"
        className="w-full p-2 mb-2 bg-black/40 border border-purple-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={amount}
        disabled={disabledAmount}
        onChange={(e) => onAmountChange(Number(e.target.value))}
      />

      <div className="relative">
        <select
          className="w-full p-2 pr-10 bg-black/40 border border-purple-500 text-white rounded appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option} className="bg-black text-white">
              {option.toUpperCase()}
            </option>
          ))}
        </select>

        {/* Dropdown icon */}
        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-purple-400">
          ▼
        </div>
      </div>

    </div>
  );
}

export default InputBox;
