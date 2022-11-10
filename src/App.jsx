import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import PrimaryRoutes from "./routes/PrimaryRoutes";

function App() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = () => {
    fetch("./data/invoices.json")
      .then((response) => response.json())
      .then((data) => setInvoices(data));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <PrimaryRoutes
          invoices={invoices}
          setInvoices={setInvoices}
          fetchInvoices={fetchInvoices}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
