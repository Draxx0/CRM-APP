import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "../UpdateInvoice/UpdateInvoice.scss";

const UpdateClient = ({ clients, fetchClients }) => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const currentClient = clients.find((invoice) => invoice._id === _id);

  const [credentials, setCredentials] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedClient = {
      firstName: credentials.customerFirstName,
      lastName: credentials.customerLastName,
    };
    fetch(`http://localhost:8000/api/customers/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedClient),
    }).then(() => {
      fetchClients();
      toast.success(
        "Facture modifiée avec succès, vous allez être redirigé vers la liste des factures"
      );
      setTimeout(() => {
        navigate("/clients");
      }, 3000);
    });
  };

  return (
    <div>
      <form className="add-form" action="" onSubmit={(e) => handleSubmit(e)}>
        <h1>Modifier un client</h1>
        <div className="column">
          <label htmlFor="">Le prénom de votre client</label>
          <input
            type="text"
            name="customerFirstName"
            onChange={(e) => handleChange(e)}
            placeholder={currentClient.firstName}
            required
          />
        </div>

        <div className="column">
          <label htmlFor="">Le nom de votre client</label>
          <input
            type="text"
            name="customerLastName"
            onChange={(e) => handleChange(e)}
            placeholder={currentClient.lastName}
            required
          />
        </div>
        <input type="submit" value="Modifier le client" />
      </form>

      <ToastContainer />
    </div>
  );
};

export default UpdateClient;
