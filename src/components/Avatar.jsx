export default function Avatar({ foto, nombre = '', apellido = '', size = 'w-20 h-20 text-2xl' }) {
  const iniciales = `${nombre[0] ?? ''}${apellido[0] ?? ''}`.toUpperCase() || '?'

  if (foto) {
    return <img src={foto} alt={`${nombre} ${apellido}`} className={`${size} rounded-full object-cover bg-gray-100 ring-4 ring-violet-100`} />
  }

  return (
    <div className={`${size} rounded-full bg-violet-600 text-white font-bold flex items-center justify-center ring-4 ring-violet-100`}>
      {iniciales}
    </div>
  )
}
