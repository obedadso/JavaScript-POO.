// Clase abstracta TareaEmpleado
class TareaEmpleado {
  constructor(nombre, especialidad) {
    if (this.constructor === TareaEmpleado) {
      throw new Error("No se puede instanciar una clase abstracta.");
    }
    this._nombre = nombre;  // Atributo protegido (simulando encapsulamiento)
    this._especialidad = especialidad;
  }

  // Método abstracto
  realizarTarea() {
    throw new Error("Método abstracto no implementado.");
  }

  // Método común para todas las subclases (abstracción)
  mostrarInformacion() {
    return `Empleado: ${this._nombre}, Especialidad: ${this._especialidad}`;
  }
}

// Clase Ingeniero que hereda de TareaEmpleado
class Ingeniero extends TareaEmpleado {
  constructor(nombre, especialidad, proyecto) {
    super(nombre, especialidad);
    this._proyecto = proyecto;  // Atributo protegido
  }

  // Implementación específica para Ingeniero (polimorfismo)
  realizarTarea() {
    return `Trabajando en el proyecto: ${this._proyecto}`;
  }
}

// Clase Doctor que hereda de TareaEmpleado
class Doctor extends TareaEmpleado {
  constructor(nombre, especialidad, pacientes) {
    super(nombre, especialidad);
    this._pacientes = pacientes;  // Atributo protegido
  }

  // Implementación específica para Doctor (polimorfismo)
  realizarTarea() {
    return `Le realizo la operacion a ${this._pacientes} pacientes en este dia.`;
  }
}

// Uso de las clases
const ingeniero = new Ingeniero("Mayra Alvarez", "Ingeniería Industrial", "Mejora de la eficiencia en la linea de produccion de una fabrica de alimentos.");
const doctor = new Doctor("Edgardo Bonett", "Cirujano", 3);

// Selecciona el div donde se mostrará la información
const outputDiv = document.getElementById('output');

// Mostrar información en la página
outputDiv.innerHTML = `
  <p>${ingeniero.mostrarInformacion()}</p>
  <p>${ingeniero.realizarTarea()}</p>
  <p>${doctor.mostrarInformacion()}</p>
  <p>${doctor.realizarTarea()}</p>
`;
