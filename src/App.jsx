import React from "react";
import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";
function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://marvelous-narwhal-c675ba.netlify.app/tonconnect-manifest.json"
      actionsConfiguration={{
        twaReturnUrl: "https://marvelous-narwhal-c675ba.netlify.app/",
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
