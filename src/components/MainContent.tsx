// MainContent.jsx
import { Mock_Ticket } from "../utils/constants";
import TicketCard from "./TicketCard";

const MainContent = () => {
    return (
        <main className="flex-1 p-6 bg-gray-100">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Tickets</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {Mock_Ticket.map((ticket) => (
                        <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default MainContent