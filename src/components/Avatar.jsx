export default function Avatar({ foto, nombre = '', apellido = '', size = 'w-16 h-16 text-xl' }) {
  const iniciales = `${nombre[0] ?? ''}${apellido[0] ?? ''}`.toUpperCase() || '?'

  if (foto) {
    return <img src={foto} alt={`${nombre} ${apellido}`} className={`${size} shrink-0 rounded-2xl object-cover bg-stone-100`} />
  }

  return (
    <div className={`${size} shrink-0 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-600 text-white font-bold flex items-center justify-center`}>
      {iniciales}
    </div>
  )
}
