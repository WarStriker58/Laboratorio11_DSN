import Avatar from './Avatar'

const COLOR_CATEGORIA = {
  Trabajo: 'bg-violet-100 text-violet-700',
  Familia: 'bg-amber-100 text-amber-800',
  Amigos: 'bg-lime-100 text-lime-800',
}

export default function ContactoCard({ contacto, onEditar, onEliminar }) {
  const { nombre, apellido, telefono, email, categoria, foto } = contacto

  return (
    <div className="bg-white rounded-2xl border border-orange-100 hover:border-rose-300 hover:-translate-y-0.5 hover:shadow-lg transition p-5 flex flex-col">
      <div className="flex items-start gap-4">
        <Avatar foto={foto} nombre={nombre} apellido={apellido} />
        <div className="min-w-0">
          <h3 className="text-base font-bold text-stone-900 truncate">{nombre} {apellido}</h3>
          <span className={`inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-md ${COLOR_CATEGORIA[categoria] ?? 'bg-stone-100 text-stone-700'}`}>
            {categoria}
          </span>
        </div>
      </div>

      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex gap-2">
          <dt className="w-16 shrink-0 text-stone-400">Teléfono</dt>
          <dd className="text-stone-700">{telefono}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-16 shrink-0 text-stone-400">Correo</dt>
          <dd className="text-stone-700 break-all">{email}</dd>
        </div>
      </dl>

      <div className="mt-5 pt-4 border-t border-stone-100 flex gap-2">
        <button onClick={() => onEditar(contacto)} className="flex-1 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition">
          Editar
        </button>
        <button onClick={() => onEliminar(contacto)} className="flex-1 py-2 rounded-lg border border-stone-200 hover:border-red-300 hover:bg-red-50 hover:text-red-600 text-stone-600 text-sm font-semibold transition">
          Eliminar
        </button>
      </div>
    </div>
  )
}
