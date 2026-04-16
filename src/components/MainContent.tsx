import { useMemo, useState } from "react";
import { Mock_Ticket } from "../utils/constants";
import TicketCard from "./TicketCard";
import { BsFilter } from "react-icons/bs";

const STATUS_OPTIONS = ["all", "in progress", "closed", "open"];
const PRIORITY_OPTIONS = ["all", "high", "medium", "low", "very high"];

const MainContent = () => {
  const [filterType, setFilterType] = useState("all");
  const [selectedOption, setSelectedOption] = useState("all");

  const filteredTickets = useMemo(() => {
    if (filterType === "all" || selectedOption === "all") {
      return Mock_Ticket;
    }

    return Mock_Ticket.filter((ticket) => {
      if (filterType === "status") {
        return ticket.status.toLowerCase() === selectedOption;
      }

      if (filterType === "priority") {
        return ticket.priority.toLowerCase() === selectedOption;
      }

      return true;
    });
  }, [filterType, selectedOption]);

  const currentOptions =
    filterType === "status" ? STATUS_OPTIONS : PRIORITY_OPTIONS;

  return (
    <main className="flex-1 bg-gray-100 p-6">
      <div className="rounded-lg bg-white p-6 shadow">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Tickets</h2>

          <div className="flex items-center gap-2 rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-800">
            <BsFilter size={20} />
            <span>Filter By</span>
            <select
              className="bg-gray-900"
              value={filterType}
              onChange={(e) => {
                setFilterType(e.target.value);
                setSelectedOption("all");
              }}
            >
              <option value="all">All</option>
              <option value="status">Status</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>

        {(filterType === "status" || filterType === "priority") && (
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium">
              Filter by {filterType}
            </label>
            <select
              className="rounded-lg bg-gray-700 px-2 py-1 text-white"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {currentOptions.map((option) => (
                <option key={option} value={option}>
                  {option[0].toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;