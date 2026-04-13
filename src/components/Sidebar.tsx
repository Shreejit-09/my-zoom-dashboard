// Sidebar.jsx
const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <ul className="space-y-4 font-medium text-lg">
        <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Calls</li>
        <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Tickets</li>
        <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Integrations</li>
      </ul>
    </aside>
  )
}

export default Sidebar