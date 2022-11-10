import { Route, Routes } from "react-router-dom";
import Clients from "../views/Clients/Clients";
import Invoices from "../views/Invoices/Invoices";
import Error from "../views/Error/Error";
import CreateInvoice from "../views/CreateInvoice/CreateInvoice";
import UpdateInvoice from "../views/UpdateInvoice/UpdateInvoice";

const PrimaryRoutes = ({ invoices, fetchInvoices, setInvoices }) => {
  return (
    <Routes>
      <Route path="/" element={ <Invoices invoices={invoices} setInvoices={setInvoices} fetchInvoices={fetchInvoices} />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/create" element={ <CreateInvoice invoices={invoices} setInvoices={setInvoices} /> } />
      <Route path="/update/:index" element={ <UpdateInvoice invoices={invoices} setInvoices={setInvoices} /> } />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default PrimaryRoutes;
