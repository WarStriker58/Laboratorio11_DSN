export default function Modal({ abierto, titulo, onClose, children }) {
  if (!abierto) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
          <h2 className="text-lg font-bold text-stone-900">{titulo}</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-lg text-stone-400 hover:bg-stone-100 hover:text-stone-700 text-2xl leading-none" aria-label="Cerrar">&times;</button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
