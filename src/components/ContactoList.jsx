import { useState } from 'react'
import ContactoCard from './ContactoCard'
import { CATEGORIAS } from '../data/mockContacts'
import { useContacts } from '../hooks/useContacts'

export default function ContactoList({ onEditar, onEliminar }) {
  const { contactos } = useContacts()
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('Todas')

  const termino = busqueda.trim().toLowerCase()
  const filtrados = contactos.filter((c) => {
    const coincideTexto = `${c.nombre} ${c.apellido} ${c.email}`.toLowerCase().includes(termino)
    const coincideCategoria = categoria === 'Todas' || c.categoria === categoria
    return coincideTexto && coincideCategoria
  })

  return (
    <section>
      <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col sm:flex-row gap-3 mb-6">
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre o correo..."
          className="flex-1 rounded-xl border border-gray-200 bg-slate-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
        />
        <div className="flex gap-2 flex-wrap">
          {['Todas', ...CATEGORIAS].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition ${
                categoria === cat ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtrados.length === 0 ? (
        <p className="text-center text-gray-500 py-12">No se encontraron contactos.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((c) => (
            <ContactoCard key={c.id} contacto={c} onEditar={onEditar} onEliminar={onEliminar} />
          ))}
        </div>
      )}
    </section>
  )
}
