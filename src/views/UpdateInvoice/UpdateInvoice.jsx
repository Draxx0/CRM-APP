import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const UpdateInvoice = (invoices, setInvoices) => {
  const navigate = useNavigate();
  const { index } = useParams();
  console.log(index);
  console.log(invoices);
  const currentInvoice = invoices.invoices[index];
  console.log(currentInvoice);

  const [credentials, setCredentials] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      "Facture modifiée avec succès, vous allez être redirigé vers la liste des factures"
    );
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <div>
      <h1>Modifier facture</h1>

      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="customer"
          onChange={(e) => handleChange(e)}
          value={currentInvoice.customer}
        />
        <input type="date" name="sendingAt" onChange={(e) => handleChange(e)} />
        <input type="text" name="status" onChange={(e) => handleChange(e)} />
        <input type="number" name="amount" onChange={(e) => handleChange(e)} />
        <input type="submit" value="Modifier la facture" />
      </form>

      <ToastContainer />
    </div>
  );
};

export default UpdateInvoice;
