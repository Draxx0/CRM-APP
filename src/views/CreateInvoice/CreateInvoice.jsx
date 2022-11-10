import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateInvoice.scss";

const CreateInvoice = ({ invoices, setInvoices }) => {
  const [credentials, setCredentials] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCredentials = {
      id: invoices.length + 1,
      customer: credentials.customer,
      sendingAt: credentials.sendingAt,
      status: credentials.status,
      amount: credentials.amount,
    };
    setInvoices([...invoices, newCredentials]);
    toast.success(
      "Facture créée avec succès, vous allez être redirigé vers la liste des factures"
    );
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="customer" onChange={(e) => handleChange(e)} />
        <input type="date" name="sendingAt" onChange={(e) => handleChange(e)} />
        <input type="text" name="status" onChange={(e) => handleChange(e)} />
        <input type="number" name="amount" onChange={(e) => handleChange(e)} />
        <input type="submit" value="Créer une facture" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateInvoice;
