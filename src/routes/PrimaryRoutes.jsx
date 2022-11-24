import { Route, Routes } from "react-router-dom";
import Clients from "../views/Clients/Clients";
import Invoices from "../views/Invoices/Invoices";
import Error from "../views/Error/Error";
import CreateInvoice from "../views/CreateInvoice/CreateInvoice";
import UpdateInvoice from "../views/UpdateInvoice/UpdateInvoice";
import CreateClient from "../views/CreateClient/CreateClient";
import UpdateClient from "../views/UpdateClient/UpdateClient";

const PrimaryRoutes = ({ invoices, fetchInvoices, setInvoices, clients, setClients, fetchClients }) => {
  return (
    <Routes>
      <Route path="/" element={ <Invoices invoices={invoices} setInvoices={setInvoices} fetchInvoices={fetchInvoices} fetchClients={fetchClients} />} />
      <Route path="/clients" element={<Clients clients={clients} setClients={setClients} fetchClients={fetchClients} fetchInvoices={fetchInvoices} />} />
      <Route path="/create-invoice" element={ <CreateInvoice fetchInvoices={fetchInvoices} fetchClients={fetchClients}/> } />
      <Route path="/create-client" element={ <CreateClient fetchClients={fetchClients}/> } />
      <Route path="/update-invoice/:_id" element={ <UpdateInvoice invoices={invoices} setInvoices={setInvoices} fetchInvoices={fetchInvoices}/> } />
      <Route path="/update-client/:_id" element={ <UpdateClient clients={clients} setClients={setClients} fetchClients={fetchClients}/> } />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default PrimaryRoutes;
