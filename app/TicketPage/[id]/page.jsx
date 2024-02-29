import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch ticket");
  }
  return response.json();
};

const page = async ({ params }) => {
  const editMode = params.id === "new" ? false : true;
  let updatedTicket = {};
  if (editMode) {
    updatedTicket = await getTicketById(params.id);
    updatedTicket = updatedTicket.foundTicket;
  } else {
    updatedTicket = {
      _id: "new",
    };
  }
  return <TicketForm ticket={updatedTicket} />;
};

export default page;
