export default function Navbar({ onNuevo }) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-violet-600">📇 Mis Contactos</h1>
        <button
          onClick={onNuevo}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl shadow-sm transition focus:outline-none focus:ring-2 focus:ring-violet-400"
        >
          + Nuevo contacto
        </button>
      </div>
    </nav>
  )
}
