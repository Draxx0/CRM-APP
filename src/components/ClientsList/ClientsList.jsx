import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./ClientsList.scss";

const ClientsList = ({ clients, fetchClients, fetchInvoices }) => {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    // await fetch(`http://localhost:8000/api/invoices/customers/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => response.json())
    //   .then(() => {
    //     toast.success("Toutes les factures de ce client ont été supprimées");
    //     fetchInvoices();
    //   });

    // Je n'ai pas réussi à supprimer les factures du client en même temps que celui-ci, j'ai une erreur 404 sur
    // le fetch qui vas jusqu'aux invoices de mon client, pourtant en copiant le lien que n'arrive pas
    // à atteindre le navigateur, j'arrive bien jusqu'au lien qui me renvoie mon json.

    await fetch(`http://localhost:8000/api/customers/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Client supprimé avec succès");
        fetchClients();
      });
  };

  const handleClick = (id) => {
    navigate(`/update-client/${id}`);
  };
  return (
    <>
      {clients.length === 0 ? (
        "Il n'y a pas de clients"
      ) : (
        <table className="tg">
          <thead>
            <tr>
              <th className="tg-0lax">Numéro</th>
              <th className="tg-0lax">Nom</th>
              <th className="tg-0lax">Prénom</th>
              <th className="tg-0lax">Factures</th>
              <th className="tg-0lax">Utilisateurs</th>
              <th className="tg-0lax">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => {
              return (
                <tr key={client._id} className="tr-line">
                  <td className="tg-0lax">{client._id}</td>
                  <td className="tg-0lax">{client.firstName}</td>
                  <td className="tg-0lax">{client.lastName}</td>

                  <td className="tg-0lax">
                    <ul className="client-invoice-list">
                      {client.invoices.map((invoice) => {
                        return (
                          <li className="tg-0lax" key={invoice._id}>
                            {invoice._id}
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                  <td className="tg-0lax">{client.user}</td>

                  <td className="row td-button">
                    <button onClick={() => handleClick(client._id)}>
                      Modifier
                    </button>
                    <button
                      className="invoices-delete"
                      onClick={() => handleDelete(client._id)}
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

export default ClientsList;
