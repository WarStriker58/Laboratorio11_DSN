import { useState } from 'react'
import Avatar from './Avatar'
import { CATEGORIAS } from '../data/mockContacts'

const VACIO = { nombre: '', apellido: '', telefono: '', email: '', categoria: CATEGORIAS[0], foto: '' }

const inputClass = 'w-full rounded-xl border border-gray-200 bg-slate-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400'

export default function ContactoForm({ inicial, onSubmit, onCancel }) {
  const [form, setForm] = useState({ ...VACIO, ...inicial })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Base64 para que la imagen persista en localStorage
  const handleFoto = (e) => {
    const archivo = e.target.files[0]
    if (!archivo) return
    const reader = new FileReader()
    reader.onload = () => setForm((prev) => ({ ...prev, foto: reader.result }))
    reader.readAsDataURL(archivo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col items-center gap-3">
        <Avatar foto={form.foto} nombre={form.nombre} apellido={form.apellido} size="w-24 h-24 text-3xl" />
        <div className="flex gap-3">
          <label className="cursor-pointer text-sm font-medium text-violet-600 hover:text-violet-700">
            Subir foto
            <input type="file" accept="image/*" onChange={handleFoto} className="hidden" />
          </label>
          {form.foto && (
            <button type="button" onClick={() => setForm({ ...form, foto: '' })} className="text-sm text-orange-500 hover:text-orange-600">
              Quitar
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required className={inputClass} />
        <input name="apellido" value={form.apellido} onChange={handleChange} placeholder="Apellido" required className={inputClass} />
      </div>
      <input name="telefono" type="tel" value={form.telefono} onChange={handleChange} placeholder="Teléfono" required className={inputClass} />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Correo" required className={inputClass} />
      <select name="categoria" value={form.categoria} onChange={handleChange} className={inputClass}>
        {CATEGORIAS.map((c) => <option key={c}>{c}</option>)}
      </select>

      <div className="flex justify-end gap-3 pt-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700">
          Cancelar
        </button>
        <button type="submit" className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-violet-400">
          Guardar
        </button>
      </div>
    </form>
  )
}
