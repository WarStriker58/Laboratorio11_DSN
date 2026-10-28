import Avatar from './Avatar'

export default function ContactoCard({ contacto, onEditar, onEliminar }) {
  const { nombre, apellido, telefono, email, categoria, foto } = contacto

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center">
      <Avatar foto={foto} nombre={nombre} apellido={apellido} />
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{nombre} {apellido}</h3>
      <span className="mt-1 text-xs font-semibold px-3 py-1 rounded-full bg-amber-500 text-white">{categoria}</span>
      <p className="mt-3 text-sm text-gray-600">📞 {telefono}</p>
      <p className="text-sm text-gray-600 break-all">✉️ {email}</p>
      <div className="mt-5 flex gap-2 w-full">
        <button onClick={() => onEditar(contacto)} className="flex-1 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium">
          Editar
        </button>
        <button onClick={() => onEliminar(contacto)} className="flex-1 py-2 rounded-xl bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 text-sm font-medium transition">
          Eliminar
        </button>
      </div>
    </div>
  )
}
