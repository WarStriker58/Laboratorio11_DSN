import { useState } from 'react'
import Avatar from './Avatar'
import { CATEGORIAS } from '../data/mockContacts'

const VACIO = { nombre: '', apellido: '', telefono: '', email: '', categoria: CATEGORIAS[0], foto: '' }

const inputClass = 'w-full rounded-lg border border-stone-200 bg-white px-4 py-2.5 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100'

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
          <label className="cursor-pointer text-sm font-semibold px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100">
            Subir foto
            <input type="file" accept="image/*" onChange={handleFoto} className="hidden" />
          </label>
          {form.foto && (
            <button type="button" onClick={() => setForm({ ...form, foto: '' })} className="text-sm font-semibold px-3 py-1.5 rounded-lg text-red-600 hover:bg-red-50">
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
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg border border-stone-200 hover:bg-stone-50 text-stone-700 font-semibold">
          Cancelar
        </button>
        <button type="submit" className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-rose-300">
          Guardar
        </button>
      </div>
    </form>
  )
}
