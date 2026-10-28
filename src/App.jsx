import { useState } from 'react'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import ContactoForm from './components/ContactoForm'
import ContactoList from './components/ContactoList'
import { useContacts } from './hooks/useContacts'

function App() {
  const { agregarContacto, actualizarContacto, eliminarContacto } = useContacts()
  const [formAbierto, setFormAbierto] = useState(false)
  const [editando, setEditando] = useState(null)
  const [aEliminar, setAEliminar] = useState(null)

  const abrirNuevo = () => {
    setEditando(null)
    setFormAbierto(true)
  }

  const abrirEdicion = (contacto) => {
    setEditando(contacto)
    setFormAbierto(true)
  }

  const cerrarForm = () => setFormAbierto(false)

  const guardar = (datos) => {
    if (editando) actualizarContacto(editando.id, datos)
    else agregarContacto(datos)
    cerrarForm()
  }

  const confirmarEliminar = () => {
    if (!aEliminar) return
    eliminarContacto(aEliminar.id)
    setAEliminar(null)
  }

  return (
    <div className="min-h-screen">
      <Navbar onNuevo={abrirNuevo} />
      <main className="max-w-6xl mx-auto px-4 -mt-16 pb-12">
        <ContactoList onEditar={abrirEdicion} onEliminar={setAEliminar} />
      </main>

      <Modal abierto={formAbierto} titulo={editando ? 'Editar contacto' : 'Nuevo contacto'} onClose={cerrarForm}>
        <ContactoForm key={editando?.id ?? 'nuevo'} inicial={editando} onSubmit={guardar} onCancel={cerrarForm} />
      </Modal>

      <Modal abierto={!!aEliminar} titulo="Eliminar contacto" onClose={() => setAEliminar(null)}>
        <p className="text-stone-600">
          ¿Seguro que deseas eliminar a <strong className="text-stone-900">{aEliminar?.nombre} {aEliminar?.apellido}</strong>? Esta acción no se puede deshacer.
        </p>
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={() => setAEliminar(null)} className="px-4 py-2 rounded-lg border border-stone-200 hover:bg-stone-50 text-stone-700 font-semibold">
            Cancelar
          </button>
          <button onClick={confirmarEliminar} className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold">
            Eliminar
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default App
