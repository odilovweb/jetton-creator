import React from "react";
import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";
function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://localhost:5173/tonconnect-manifest.json"
      actionsConfiguration={{
        twaReturnUrl: "https://localhost:5173/",
      }}
    >
      <div>
        <span></span>
        <TonConnectButton
          className="my-button-class "
          style={{ float: "right" }}
        />
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
