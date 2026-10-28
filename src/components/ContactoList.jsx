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
      <div className="bg-white rounded-2xl shadow-xl shadow-rose-900/15 p-4 flex flex-col md:flex-row md:items-center gap-3 mb-8">
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre o correo..."
          className="flex-1 rounded-lg border border-stone-200 bg-white px-4 py-2.5 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
        />
        <div className="flex gap-1 p-1 rounded-lg bg-stone-100 overflow-x-auto">
          {['Todas', ...CATEGORIAS].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-4 py-1.5 rounded-md text-sm font-semibold whitespace-nowrap transition ${
                categoria === cat ? 'bg-rose-600 text-white shadow-sm' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtrados.length === 0 ? (
        <div className="text-center py-16 rounded-2xl border-2 border-dashed border-stone-300">
          <p className="font-semibold text-stone-700">No se encontraron contactos</p>
          <p className="text-sm text-stone-500 mt-1">Prueba con otra búsqueda o categoría.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((c) => (
            <ContactoCard key={c.id} contacto={c} onEditar={onEditar} onEliminar={onEliminar} />
          ))}
        </div>
      )}
    </section>
  )
}
