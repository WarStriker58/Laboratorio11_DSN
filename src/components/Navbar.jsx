import { useContacts } from '../hooks/useContacts'

export default function Navbar({ onNuevo }) {
  const { contactos } = useContacts()

  return (
    <header className="bg-gradient-to-br from-rose-700 via-orange-600 to-amber-500 text-white">
      <div className="max-w-6xl mx-auto px-4 pt-6 pb-24">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-rose-600 font-extrabold flex items-center justify-center">MC</div>
            <span className="text-lg font-bold tracking-tight">Mis Contactos</span>
          </div>
          <button
            onClick={onNuevo}
            className="bg-white hover:bg-amber-50 text-rose-700 shadow-md font-semibold px-4 py-2 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            + Nuevo contacto
          </button>
        </nav>
        <div className="mt-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Tu agenda</h1>
          <p className="mt-2 text-orange-100">
            {contactos.length} {contactos.length === 1 ? 'contacto guardado' : 'contactos guardados'}
          </p>
        </div>
      </div>
    </header>
  )
}
