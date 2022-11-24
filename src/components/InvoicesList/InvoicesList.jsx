import "./InvoicesList.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const paidStyle = {
  backgroundColor: "rgb(19, 150, 63)",
  textTransform: "uppercase",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  color: "white",
};

const sentStyle = {
  backgroundColor: "rgb(41, 93, 171)",
  textTransform: "uppercase",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  color: "white",
};

const cancelStyle = {
  backgroundColor: "rgb(201, 50, 23)",
  textTransform: "uppercase",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  margin: "auto",
  color: "white",
};

const InvoicesList = ({ invoices, fetchInvoices, fetchClients }) => {
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:8000/api/invoices/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Facture supprimée avec succès");
        fetchInvoices();
        fetchClients();
      });
  };

  const handleClick = (id) => {
    navigate(`/update-invoice/${id}`);
  };

  const navigate = useNavigate();
  return (
    <>
      {invoices.length === 0 ? (
        "Il n'y a pas de factures"
      ) : (
        <table className="tg">
          <thead>
            <tr>
              <th className="tg-0lax">Id de la facture</th>
              <th className="tg-0lax">Client</th>
              <th className="tg-0lax">Date d'envoi</th>
              <th className="tg-0lax">Statut</th>
              <th className="tg-0lax">Montant</th>
              <th className="tg-0lax">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => {
              return (
                <tr key={invoice._id} className="tr-line">
                  <td className="tg-0lax">{invoice._id}</td>
                  <td className="tg-0lax">{invoice.customer}</td>
                  <td className="tg-0lax">{invoice.createdAt}</td>
                  <td
                    className="tg-0lax"
                    style={
                      invoice.status === "paid"
                        ? paidStyle
                        : invoice.status === "send"
                        ? sentStyle
                        : invoice.status === "cancel"
                        ? cancelStyle
                        : null
                    }
                  >
                    {invoice.status}
                  </td>
                  <td className="tg-0lax">{invoice.amount}€</td>

                  <td className="row td-button">
                    <button onClick={() => handleClick(invoice._id)}>Modifier</button>
                    <button
                      className="invoices-delete"
                      onClick={() => handleDelete(invoice._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <ToastContainer />
    </>
  );
};

export default InvoicesList;
