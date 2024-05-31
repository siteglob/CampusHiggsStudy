// Función para crear una tarjeta de materia
function crearTarjetaMateria(materia) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('materia');
  
    const titulo = document.createElement('h3');
    titulo.textContent = materia.nombre;
    tarjeta.appendChild(titulo);
  
    const descripcion = document.createElement('p');
    descripcion.textContent = materia.descripcion;
    tarjeta.appendChild(descripcion);
  
    const recursos = document.createElement('ul');
    materia.recursos.forEach(recurso => {
      const enlace = document.createElement('a');
      enlace.href = recurso.url;
      enlace.target = '_blank';
      enlace.textContent = recurso.nombre;
      const itemRecurso = document.createElement('li');
      itemRecurso.appendChild(enlace);
      recursos.appendChild(itemRecurso);
    });
    tarjeta.appendChild(recursos);
  
    const botonReservar = document.createElement('button');
    botonReservar.textContent = 'Reservar Clase';
    botonReservar.addEventListener('click', () => reservarClase(materia.id));
    tarjeta.appendChild(botonReservar);
  
    return tarjeta;
  }
  
  // Función para reservar una clase
  function reservarClase(idMateria) {
    // Implementar la lógica para reservar la clase (por ejemplo, redirigir a otra página o mostrar un formulario)
    console.log(`Reservando clase para la materia ${idMateria}`);
  }
  
  // Ejemplo de datos de materias (se pueden cargar desde una base de datos)
  const materias = [
    {
      id: 'matematicas',
      nombre: 'Matemáticas',
      descripcion: '¡Aprende matemáticas de forma divertida con nuestros tutores expertos!',
      recursos: [
        { nombre: 'Recurso 1', url: 'recursos/matematicas1.pdf' },
        { nombre: 'Recurso 2', url: 'recursos/matematicas2.pdf' },
        { nombre: 'Recurso 3', url: 'recursos/matematicas3.pdf' }
      ]
    },
    {
      id: 'ingles',
      nombre: 'Inglés',
      descripcion: 'El área de Inglés, una materia que debe importarnos cada día más, ven y resuelve tus dudas con nuestros tutores.',
      recursos: [
        { nombre: 'Recurso 1', url: 'recursos/ingles1.pdf' },
        { nombre: 'Recurso 2', url: 'recursos/ingles2.pdf' },
        { nombre: 'Recurso 3', url: 'recursos/ingles3.pdf' }
      ]
    },
    // Añadir más materias como sea necesario
  ];
  
  // Carga
  