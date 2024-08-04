import { useTonConnectUI } from "@tonconnect/ui-react";

function TokenCreation() {
  const [tonConnectUI, setOptions] = useTonConnectUI();

  const onLanguageChange = (lang) => {
    setOptions({ language: lang });
  };

  return (
    <div>
      <button
        onClick={() =>
          tonConnectUI.sendTransaction({
            to: "UQBYakxYFJY7sl771wYZNiN2kW8BxptvBeRBMCl20yjVghdX", // Sizning adresingiz
            amount: 3, // 3 TON
            message: `Creating token: `,
          })
        }
      >
        Send transaction
      </button>

      <div>
        <label>Language</label>
        <select onChange={(e) => onLanguageChange(e.target.value)}>
          <option value="en">en</option>
          <option value="ru">ru</option>
        </select>
      </div>
    </div>
  );
}
export default TokenCreation;
