import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import PrimaryRoutes from "./routes/PrimaryRoutes";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchInvoices();
    fetchClients();
  }, []);

  const fetchInvoices = () => {
    fetch("http://localhost:8000/api/invoices")
      .then((response) => response.json())
      .then((data) => setInvoices(data));
  };

  const fetchClients = () => {
    fetch("http://localhost:8000/api/customers")
      .then((response) => response.json())
      .then((data) => setClients(data));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <PrimaryRoutes
          invoices={invoices}
          setInvoices={setInvoices}
          fetchInvoices={fetchInvoices}
          clients={clients}
          setClients={setClients}
          fetchClients={fetchClients}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
