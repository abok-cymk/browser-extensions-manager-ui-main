import Navbar from "./components/Navbar";
import ExtensionsList from "./components/ExtensionsList";
import { BrowserExtensionsProvider } from "./context/BrowserExtensionsContext";

const App = () => {
  return (
    <BrowserExtensionsProvider>
      <main>
        <Navbar />
        <ExtensionsList />
      </main>
    </BrowserExtensionsProvider>
  );
};

export default App;
