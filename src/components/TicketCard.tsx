const TicketCard = ({ ticket }) => {
  return (
    <div className="flex w-64 flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="text-base font-semibold text-gray-900">{ticket.title}</h3>

      <div className="space-y-1 text-sm text-gray-700">
        <p><span className="font-medium">Priority:</span> {ticket.priority}</p>
        <p><span className="font-medium">Status:</span> {ticket.status}</p>
        <p><span className="font-medium">Assigned to:</span> {ticket.agent}</p>
      </div>
    </div>
  );
};

export default TicketCard;