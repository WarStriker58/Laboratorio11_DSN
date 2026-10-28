import { useEffect, useState } from 'react'
import { ContactsContext } from './ContactsContext'
import { mockContacts } from '../data/mockContacts'

const STORAGE_KEY = 'crud-contactos'

const cargarIniciales = () => {
  try {
    const guardados = localStorage.getItem(STORAGE_KEY)
    return guardados ? JSON.parse(guardados) : mockContacts
  } catch {
    return mockContacts
  }
}

export function ContactsProvider({ children }) {
  const [contactos, setContactos] = useState(cargarIniciales)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(contactos))
    } catch {
      // localStorage lleno o no disponible
    }
  }, [contactos])

  const agregarContacto = (datos) =>
    setContactos((prev) => [{ ...datos, id: crypto.randomUUID() }, ...prev])

  const actualizarContacto = (id, datos) =>
    setContactos((prev) => prev.map((c) => (c.id === id ? { ...c, ...datos } : c)))

  const eliminarContacto = (id) =>
    setContactos((prev) => prev.filter((c) => c.id !== id))

  return (
    <ContactsContext.Provider value={{ contactos, agregarContacto, actualizarContacto, eliminarContacto }}>
      {children}
    </ContactsContext.Provider>
  )
}
