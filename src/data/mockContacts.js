export const CATEGORIAS = ['Trabajo', 'Familia', 'Amigos']

const avatar = (seed) => `https://api.dicebear.com/9.x/avataaars/svg?seed=${seed}`

export const mockContacts = [
  { id: '1', nombre: 'Lucía', apellido: 'Ramírez', telefono: '987 654 321', email: 'lucia.ramirez@empresa.com', categoria: 'Trabajo', foto: avatar('Lucia') },
  { id: '2', nombre: 'Carlos', apellido: 'Mendoza', telefono: '912 345 678', email: 'carlos.mendoza@gmail.com', categoria: 'Amigos', foto: avatar('Carlos') },
  { id: '3', nombre: 'María', apellido: 'Torres', telefono: '945 112 233', email: 'maria.torres@familia.pe', categoria: 'Familia', foto: avatar('Maria') },
  { id: '4', nombre: 'Jorge', apellido: 'Salazar', telefono: '956 778 899', email: 'jorge.salazar@empresa.com', categoria: 'Trabajo', foto: avatar('Jorge') },
  { id: '5', nombre: 'Andrea', apellido: 'Quispe', telefono: '923 456 789', email: 'andrea.quispe@hotmail.com', categoria: 'Amigos', foto: avatar('Andrea') },
  { id: '6', nombre: 'Rosa', apellido: 'Huamán', telefono: '934 567 890', email: 'rosa.huaman@familia.pe', categoria: 'Familia', foto: avatar('Rosa') },
]
