import { useTonConnectUI } from "@tonconnect/ui-react";

export const TokenCreation = () => {
  const [tonConnectUI, setOptions] = useTonConnectUI();

  return (
    <div>
      <button
        onClick={() =>
          tonConnectUI.sendTransaction({
            to: "UQBYakxYFJY7sl771wYZNiN2kW8BxptvBeRBMCl20yjVghdX", // Sizning adresingiz
            amount: 3, // 3 TON
            message: `Creating token:`,
          })
        }
      >
        Send transaction
      </button>
    </div>
  );
};
