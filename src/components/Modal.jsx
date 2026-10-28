export default function Modal({ abierto, titulo, onClose, children }) {
  if (!abierto) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-md w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">{titulo}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-violet-600 text-2xl leading-none" aria-label="Cerrar">&times;</button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
