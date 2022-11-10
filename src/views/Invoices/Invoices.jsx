import { Link } from "react-router-dom";
import InvoicesList from "../../components/InvoicesList/InvoicesList";
import "./Invoices.scss";

const Invoices = ({ invoices, setInvoices, fetchInvoices }) => {
  return (
    <section className="invoices-page">
      <div className="row">
        <h1 className="page-title">Liste des factures</h1>
        <Link to="/create" className="invoices-create">Créer une facture</Link>
      </div>

      <div className="filter-container">
        <input type="text" placeholder="Rechercher ..." />
      </div>

      <InvoicesList invoices={invoices} setInvoices={setInvoices} fetchInvoices={fetchInvoices}/>
    </section>
  );
};

export default Invoices;
