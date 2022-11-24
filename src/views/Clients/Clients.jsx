import { Link } from "react-router-dom";
import ClientsList from "../../components/ClientsList/ClientsList";

const Clients = ({clients, setClients, fetchClients, fetchInvoices}) => {
  return (
    <section className="invoices-page">
      <div className="row">
        <h1 className="page-title">Liste des clients</h1>
      </div>

      <div className="filter-container">
        <input type="text" placeholder="Rechercher ..." />
      </div>

      <Link to="/create-client" className="invoices-create">
        Ajouter un client
      </Link>

      <ClientsList
        clients={clients}
        setClients={setClients}
        fetchClients={fetchClients}
        fetchInvoices={fetchInvoices}
      />
    </section>
  );
};

export default Clients;
