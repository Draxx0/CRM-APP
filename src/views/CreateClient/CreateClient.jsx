import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateClient = ({ fetchClients }) => {
  const [credentials, setCredentials] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCredentials = {
      firstName: credentials.customerFirstName,
      lastName: credentials.customerLastName,
      user: credentials.customerUser,
    };
    fetch("http://localhost:8000/api/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCredentials),
    }).then(() => {
      toast.success(
        "Le client a été créé avec succès, vous allez être redirigé"
      );
      fetchClients();
      setTimeout(() => {
        navigate("/clients");
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
      <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Créer un client</h1>
        <div className="column">
          <label htmlFor="">Votre identifiant utilisateur</label>
          <input
            type="text"
            name="customerUser"
            onChange={(e) => handleChange(e)}
            placeholder="Votre id"
            required
          />
        </div>

        <div className="column">
          <label htmlFor="">Le nom de votre client</label>
          <input
            type="text"
            name="customerLastName"
            onChange={(e) => handleChange(e)}
            placeholder="NOM"
            required
          />
        </div>

        <div className="column">
          <label htmlFor="">Le prénom de votre client</label>
          <input
            type="text"
            name="customerFirstName"
            onChange={(e) => handleChange(e)}
            placeholder="PRENOM"
            required
          />
        </div>

        {/* <div className="column">
          <label htmlFor="">
            Vous pouvez renseigner ici s'il y en as, l'id des factures que vous
            souhaitez direcement lui attribuer
          </label>
          <input
            type="text"
            name="customerInvoices"
            onChange={(e) => handleChange(e)}
            placeholder="ID FACTURE"
            required
          />
        </div> */}
        <input type="submit" value="Créer un client" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateClient;
