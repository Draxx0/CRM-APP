import { Link } from "react-router-dom";
import InvoicesList from "../../components/InvoicesList/InvoicesList";
import "./Invoices.scss";

const Invoices = ({ invoices, setInvoices, fetchInvoices, fetchClients }) => {
  return (
    <section className="invoices-page">
      <div className="row">
        <h1 className="page-title">Liste des factures</h1>
      </div>

      <div className="filter-container">
        <input type="text" placeholder="Rechercher ..." />
      </div>

      <Link to="/create-invoice" className="invoices-create">
        Créer une facture
      </Link>

      <InvoicesList
        invoices={invoices}
        setInvoices={setInvoices}
        fetchInvoices={fetchInvoices}
        fetchClients={fetchClients}
      />
    </section>
  );
};

export default Invoices;
