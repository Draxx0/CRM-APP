import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./UpdateInvoice.scss";

const UpdateInvoice = ({ invoices, fetchInvoices }) => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const currentInvoice = invoices.find((invoice) => invoice._id === _id);

  const [credentials, setCredentials] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedInvoice = {
      customer: credentials.customer,
      status: credentials.status,
      amount: credentials.amount,
    };
    fetch(`http://localhost:8000/api/invoices/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedInvoice),
    }).then(() => {
      fetchInvoices();
      toast.success(
        "Facture modifiée avec succès, vous allez être redirigé vers la liste des factures"
      );
      setTimeout(() => {
        navigate("/");
      }, 3000);
    });
  };

  return (
    <div>
      <form className="add-form" action="" onSubmit={(e) => handleSubmit(e)}>
        <h1>Modifier une facture</h1>
        <div className="column">
          <label htmlFor="">Votre NOM Prénom</label>
          <input
            type="text"
            name="customer"
            onChange={(e) => handleChange(e)}
            placeholder={currentInvoice.customer}
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
            <option value={currentInvoice.status}>
              {currentInvoice.status}
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
            placeholder={currentInvoice.amount}
            required
          />
        </div>
        <input type="submit" value="Modifier la facture" />
      </form>

      <ToastContainer />
    </div>
  );
};

export default UpdateInvoice;
