import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateInvoice = ({ fetchInvoices, fetchClients }) => {
  const [credentials, setCredentials] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCredentials = {
      amount: credentials.amount,
      customer: credentials.customer,
      status: credentials.status,
    };
    fetch("http://localhost:8000/api/invoices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCredentials),
    }).then(() => {
      toast.success(
        "La facture a été créée avec succès, vous allez être redirigé"
      );
      fetchInvoices();
      fetchClients();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    console.log(credentials);
  };
  return (
    <div>
      <form className="add-form" action="" onSubmit={(e) => handleSubmit(e)}>
        <h1>Créer une facture</h1>
        <div className="column">
          <label htmlFor="">Votre NOM Prénom</label>
          <input
            type="text"
            name="customer"
            onChange={(e) => handleChange(e)}
            placeholder="NOM Prénom"
            required
          />
        </div>

        {/* <div className="column">
          <label htmlFor="">Date d'envoi</label>
          <input
            type="date"
            name="sendingAt"
            onChange={(e) => handleChange(e)}
            required
          />
        </div> */}

        <div className="column">
          <label htmlFor="">Statut</label>
          <select
            name="status"
            id=""
            onChange={(e) => handleChange(e)}
            required
          >
            <option value="Selectionner un status">
              Selectionner un status
            </option>

            <option value="send">send</option>

            <option value="paid">paid</option>

            <option value="cancel">cancel</option>
          </select>
        </div>

        <div className="column">
          <label htmlFor="">Montant</label>
          <input
            type="number"
            name="amount"
            onChange={(e) => handleChange(e)}
            placeholder="1000"
            required
          />
        </div>
        <input type="submit" value="Créer une facture" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateInvoice;
