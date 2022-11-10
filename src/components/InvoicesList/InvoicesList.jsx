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
};

const sentStyle = {
  backgroundColor: "rgb(41, 93, 171)",
  textTransform: "uppercase",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  margin: "auto",
};

const cancelStyle = {
  backgroundColor: "rgb(201, 50, 23)",
  textTransform: "uppercase",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  margin: "auto",
};

const InvoicesList = ({ invoices, setInvoices, fetchInvoices }) => {
  const handleDelete = (index) => {
    const newInvoices = invoices.filter((invoice, i) => i !== index);
    toast.success("Facture supprimée avec succès");
    setInvoices(newInvoices);
  };

  const handleClick = (index) => {
    navigate(`/update/${index}`);
  };

  const navigate = useNavigate();
  return (
    <>
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-0lax">Numéro</th>
            <th className="tg-0lax">Client</th>
            <th className="tg-0lax">Date d'envoi</th>
            <th className="tg-0lax">Statut</th>
            <th className="tg-0lax">Montant</th>
            <th className="tg-0lax"></th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => {
            return (
              <tr key={invoice.id} className="tr-line">
                <td className="tg-0lax">{invoice.id}</td>
                <td className="tg-0lax">{invoice.customer}</td>
                <td className="tg-0lax">{invoice.sendingAt}</td>
                <td
                  className="tg-0lax"
                  style={
                    invoice.status === "paid"
                      ? paidStyle
                      : invoice.status === "sent"
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
                  <button onClick={() => handleClick(index)}>Modifier</button>
                  <button
                    className="invoices-delete"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ToastContainer />
    </>
  );
};

export default InvoicesList;
