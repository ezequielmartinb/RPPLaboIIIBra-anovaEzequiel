class Persona
{
    id = 0;
    nombre = undefined;
    apellido = "";
    edad = 0;

    constructor(id,nombre,apellido,edad)
    {                
        this.id = id;  
        this.nombre = nombre;
        this.apellido = apellido; 
        this.edad = edad;                         
    }
    toString() 
    {
        return this.id + " - " + this.nombre + " - " + this.apellido + " - " + this.edad;
    }            
}
class Futbolista extends Persona
{
    equipo = "";
    posicion = "";
    cantidadGoles = -1;
    constructor(id, nombre, apellido, edad, equipo, posicion, cantidadGoles) 
    {
        super(id,nombre,apellido,edad);
        
        this.equipo = equipo;
        this.posicion = posicion;
        this.cantidadGoles = cantidadGoles;
        
    } 
    toString() 
    {
        var retorno = super.toString() + " - " + this.equipo + " - " + this.posicion + " - " + this.cantidadGoles;
        return retorno;
    }                       
}
class Profesional extends Persona
{
    titulo = "";
    facultad = "";
    anioGraduacion = 1950;
    constructor(id, nombre, apellido, edad, titulo, facultad, anioGraduacion) 
    {
        super(id, nombre, apellido, edad);
        this.titulo = titulo;
        this.facultad = facultad;
        this.anioGraduacion = anioGraduacion;                
    } 
    toString() 
    {
        var retorno = super.toString() + " - " + this.titulo + " - " + this.facultad + " - " + this.anioGraduacion;
        return retorno;
    }                       
}
function CargarDatosTabla()
{
    var tabla = document.getElementById("datosTabla");    
    tabla.innerHTML=""; 
    
    switch(document.getElementById("filter").value)
    {
           
        case "futbolista":
        BorrarDatosTabla();
        listaFutbolistas.forEach((futbolista) => 
        {               
            var row = document.createElement('tr');  
            
            let titulo = 'N/A';
            let facultad = 'N/A';           
            let anioGraduacion = 'N/A';           

            let cantGoles = 'N/A';
            if (futbolista.cantidadGoles > -1)
            {
                cantGoles = futbolista.cantidadGoles;
            }
            row.addEventListener('click', function() 
            {
                ObtenerDatosFila(this);
            });
            row.innerHTML = `
                <td class="id">${futbolista.id}</td>
                <td class="nombre">${futbolista.nombre}</td>
                <td class="apellido">${futbolista.apellido}</td>
                <td class="edad">${futbolista.edad}</td>
                <td class="equipo">${futbolista.equipo}</td>
                <td class="posicion">${futbolista.posicion}</td>
                <td class="cantGoles">${cantGoles}</td>
                <td class="titulo">${titulo}</td>
                <td class="facultad">${facultad}</td>
                <td class="anioGraduacion">${anioGraduacion}</td>
            `;
            
            tabla.appendChild(row);
        });
        break;            
        case "profesional":
        BorrarDatosTabla();
        listaProfesionales.forEach((profesional) => 
        {               
            var row = document.createElement('tr');  
            
            let anioGraduacion = 'N/A';
            if (profesional.anioGraduacion > 1950) 
            {
                anioGraduacion = profesional.anioGraduacion;            
            }
            let equipo = 'N/A';
            let posicion = 'N/A';
            let cantGoles = 'N/A';
            

            row.innerHTML = `
                <td class="id">${profesional.id}</td>
                <td class="nombre">${profesional.nombre}</td>
                <td class="apellido">${profesional.apellido}</td>
                <td class="edad">${profesional.edad}</td>
                <td class="equipo">${equipo}</td>
                <td class="posicion">${posicion}</td>
                <td class="cantGoles">${cantGoles}</td>
                <td class="titulo">${profesional.titulo}</td>
                <td class="facultad">${profesional.facultad}</td>
                <td class="anioGraduacion">${anioGraduacion}</td>
            `;
            row.addEventListener('click', function() 
            {
                ObtenerDatosFila(this);
            });
            tabla.appendChild(row);
        });
        break;
        default:
        BorrarDatosTabla();
        listaPersonas.forEach((persona) => 
        {   
            var row = document.createElement('tr');  
            
            let equipo = 'N/A';
            if (persona.equipo != undefined) 
            {
                equipo = persona.equipo;
            }

            let posicion = 'N/A';
            if (persona.posicion != undefined) 
            {
                posicion = persona.posicion;            
            }

            let cantGoles = 'N/A';
            if (persona.cantidadGoles > -1) 
            {
                cantGoles = persona.cantidadGoles;
            }
            let titulo = 'N/A';
            if (persona.titulo != undefined) 
            {
                titulo = persona.titulo;
            }

            let facultad = 'N/A';
            if (persona.facultad != undefined) 
            {
                facultad = persona.facultad;            
            }

            let anioGraduacion = 'N/A';
            if (persona.anioGraduacion > 1950)
            {
                anioGraduacion = persona.anioGraduacion;
            }

            row.innerHTML = `
                <td class="id">${persona.id}</td>
                <td class="nombre">${persona.nombre}</td>
                <td class="apellido">${persona.apellido}</td>
                <td class="edad">${persona.edad}</td>
                <td class="equipo">${equipo}</td>
                <td class="posicion">${posicion}</td>
                <td class="cantGoles">${cantGoles}</td>
                <td class="titulo">${titulo}</td>
                <td class="facultad">${facultad}</td>
                <td class="anioGraduacion">${anioGraduacion}</td>
            `;
            row.addEventListener('click', function() 
            {
                ObtenerDatosFila(this);
            });
            tabla.appendChild(row);
        });
    }
}
function BorrarDatosTabla()   
{
    const tbody = document.getElementById('datosTabla');
    tbody.innerHTML = ''; 
}
function CambiarAtributos() 
{
    
    const tipo = document.getElementById('tipoPersona').value;
    const labelAtributo1 = document.getElementById('labelAtributo1');
    const labelAtributo2 = document.getElementById('labelAtributo2');
    const labelAtributo3 = document.getElementById('labelAtributo3');
    const extraAtributos = document.getElementById('extraAtributos');
    const labelAtributo4 = document.getElementById('labelAtributo4');
    const labelAtributo5 = document.getElementById('labelAtributo5');
    const labelAtributo6 = document.getElementById('labelAtributo6');   

    switch(tipo) {
        case "futbolista":
            labelAtributo1.textContent = 'Nombre:';
            labelAtributo2.textContent = 'Apellido:';
            labelAtributo3.textContent = 'Edad:';
            labelAtributo4.textContent = 'Equipo:';
            labelAtributo5.textContent = 'Posicion:';
            labelAtributo6.textContent = 'Cantidad de Goles:';
            extraAtributos.style.display = 'block'; 
            break;
        case "profesional":
            labelAtributo1.textContent = 'Nombre:';
            labelAtributo2.textContent = 'Apellido:';
            labelAtributo3.textContent = 'Edad:';
            labelAtributo4.textContent = 'Titulo:';
            labelAtributo5.textContent = 'Facultad:';
            labelAtributo6.textContent = 'Año de Graduacion:';
            extraAtributos.style.display = 'block'; 
            break;
        default:
            extraAtributos.style.display = 'none'; 
            break;
    }
}
function ObtenerDatosFila(fila) 
{
    var datos = [];
    var celdas = fila.querySelectorAll('td');
    document.getElementById("tipoPersona").disabled = true;  

    celdas.forEach(function(celda) 
    {
        datos.push(celda.textContent);
    });
    
    
    if(datos[6] != 'N/A')
    {
        futbolistaSeleccionado = new Futbolista(datos[0],datos[1],datos[2],datos[3],datos[4],datos[5], datos[6]);
        document.getElementById("id").value = futbolistaSeleccionado.id;
        document.getElementById("tipoPersona").value = "futbolista";
        document.getElementById("atributo1").value = futbolistaSeleccionado.nombre;
        document.getElementById("atributo2").value = futbolistaSeleccionado.apellido;
        document.getElementById("atributo3").value = futbolistaSeleccionado.edad;
        document.getElementById("atributo4").value = futbolistaSeleccionado.equipo;
        document.getElementById("atributo5").value = futbolistaSeleccionado.posicion;
        document.getElementById("atributo6").value = futbolistaSeleccionado.cantidadGoles;
        document.getElementById("formularioABM").style.display = 'block';
        document.createElement("button");        
        CambiarAtributos();
    }
    else
    {
        profesionalSeleccionado = new Profesional(datos[0],datos[1],datos[2],datos[3],datos[7],datos[8],datos[9]);
        document.getElementById("id").value = datos[0];
        document.getElementById("tipoPersona").value = "profesional";
        document.getElementById("atributo1").value = profesionalSeleccionado.nombre;
        document.getElementById("atributo2").value = profesionalSeleccionado.apellido;
        document.getElementById("atributo3").value = profesionalSeleccionado.edad;
        document.getElementById("atributo4").value = profesionalSeleccionado.titulo;
        document.getElementById("atributo5").value = profesionalSeleccionado.facultad;
        document.getElementById("atributo6").value = profesionalSeleccionado.anioGraduacion;
        document.getElementById('formularioABM').style.display = 'block';
        CambiarAtributos();
    }
    document.getElementById("agregarAbm").disabled = true;  
    document.getElementById("modificar").disabled = false;    
    document.getElementById("eliminar").disabled = false;   
}
function CalcularPromedioEdad() 
{
    const totalEdad = listaPersonas.reduce((sum, persona) => sum + persona.edad, 0);
    const promedio = totalEdad / listaPersonas.length;
    document.getElementById('promedio_edad').value = promedio.toFixed(2);
}    
function ObtenerId()
{
    id = 0;
    listaPersonas.forEach(persona => 
    {
        if(persona.id > id)
        {
            id = persona.id;
        }
    });

    return id + 1;
}
function CrearPersona()
{
    BorrarDatosTabla();         
    var id = document.getElementById("id").value; 
       
    if (id === null || id === "")
    {
        var nombre = document.getElementById("atributo1").value;
        var apellido = document.getElementById("atributo2").value;
        var edad = document.getElementById("atributo3").value;
        var tipoPersona = document.getElementById("tipoPersona").value;       
        var error = true;
        var existePersona = false;

        if(nombre != null && nombre != "" && apellido != null && apellido != "" && edad > 0)
        {
            switch(tipoPersona)
            {
                case "futbolista":
                    var equipo = document.getElementById("atributo4").value;
                    var posicion = document.getElementById("atributo5").value;
                    var cantidadGoles = document.getElementById("atributo6").value;
                    if(equipo != null && equipo != "" && posicion != null && posicion != "" && cantidadGoles > -1)
                    {
                        var id = ObtenerId();
                        listaFutbolistas.forEach((futbolista)=>
                        {
                            if(futbolista.nombre == nombre && futbolista.apellido == apellido && futbolista.edad == edad && futbolista.equipo == equipo && futbolista.posicion == posicion && futbolista.cantidadGoles == cantidadGoles)
                            {
                                existePersona = true;
                                alert("EL FUTBOLISTA INGRESADO YA EXISTE Y ESTÁ EN LA LISTA");

                            }
                        });
                        if(existePersona == false)
                        {
                            var nuevoFutbolista = new Futbolista(id, nombre, apellido, edad, equipo, posicion, cantidadGoles);
                            listaFutbolistas.push(nuevoFutbolista);
                            listaPersonas.push(nuevoFutbolista);
                            error = false;                 
                        }
                    }
                    break;

                case "profesional":
                    var titulo = document.getElementById("atributo4").value;
                    var facultad = document.getElementById("atributo5").value;
                    var anioGraduacion = document.getElementById("atributo6").value;
                    if(titulo != null && titulo != "" && facultad != null && facultad != "" && anioGraduacion > 1950)
                    {
                        var id = ObtenerId();
                        listaProfesionales.forEach((profesional)=>
                        {
                            if(profesional.nombre == nombre && profesional.apellido == apellido && profesional.edad == edad && profesional.titulo == titulo && profesional.facultad == facultad && profesional.anioGraduacion == anioGraduacion)
                            {
                                existePersona = true;
                                alert("EL PROFESIONAL INGRESADO YA EXISTE Y ESTÁ EN LA LISTA");
                            }
                        });
                        if(existePersona == false)
                        {
                            var nuevoProfesional = new Profesional(id, nombre, apellido, edad, titulo, facultad, anioGraduacion);
                            listaProfesionales.push(nuevoProfesional);
                            listaPersonas.push(nuevoProfesional);
                            error = false;                
                        }
                        
                    }
                    break;
            }
        }

        if(error)
        {
            alert("Datos erroneos");
        }
        else
        {
            alert("Datos han sido cargados correctamente");           
        }        
    }
    else
    {
        alert("Error. Vehiculo existente");
    }    
    CargarDatosTabla();
}
function ResetearAbm()
{
    document.getElementById("id").value="";
    document.getElementById("atributo1").value="";
    document.getElementById("atributo2").value="";
    document.getElementById("atributo3").value="";
    document.getElementById("atributo4").value="";
    document.getElementById("atributo5").value="";
    document.getElementById("atributo6").value="";
    if(document.getElementById("tipoPersona").disabled == true)
    {
        document.getElementById("tipoPersona").disabled = false;
    }
    if(document.getElementById("agregarAbm").disabled == true)
    {
        document.getElementById("agregarAbm").disabled = false;
    }
    document.getElementById("modificar").disabled = true;
    document.getElementById("eliminar").disabled = true;
}
function MostrarColumna(idColumna) 
{
    var column = document.getElementById(idColumna);
    var fila = document.querySelectorAll('#vehiculo-table-body td:nth-child(' + (column.cellIndex + 1) + ')');
    
    if (column.style.display === "none") 
    {
        column.style.display = "";
        fila.forEach(function(cell) 
        {
            cell.style.display = "";
        });
    } 
    else 
    {
        column.style.display = "none";
        fila.forEach(function(cell) 
        {
            cell.style.display = "none";
        });
    }
}
function ModificarPersona()
{
    let id = document.getElementById("id").value;
    var tipo = document.getElementById("tipoPersona").value;   
    listaPersonas.forEach(persona=>
    {
        if(persona.id == id)
        {
            switch(tipo)
            {
                case "futbolista":
                    var nuevoFutbolista = new Futbolista(persona.id, persona.nombre, persona.apellido, persona.edad, persona.equipo, persona.posicion, persona.cantidadGoles);
                    nuevoFutbolista.nombre = document.getElementById("atributo1").value;
                    nuevoFutbolista.apellido = document.getElementById("atributo2").value;
                    nuevoFutbolista.edad = document.getElementById("atributo3").value;
                    nuevoFutbolista.equipo = document.getElementById("atributo4").value;
                    nuevoFutbolista.posicion = document.getElementById("atributo5").value;
                    nuevoFutbolista.cantidadGoles = document.getElementById("atributo6").value;

                    persona.nombre = nuevoFutbolista.nombre;
                    persona.apellido = nuevoFutbolista.apellido;
                    persona.edad = nuevoFutbolista.edad;
                    persona.equipo = nuevoFutbolista.equipo;
                    persona.posicion = nuevoFutbolista.posicion;                        
                    persona.cantidadGoles = nuevoFutbolista.cantidadGoles;                        
                            
                    for(var i=0; i<listaFutbolistas.length; i++)
                    {
                        if(nuevoFutbolista.id == listaFutbolistas[i].id)
                        {
                            listaFutbolistas[i].nombre = nuevoFutbolista.nombre;
                            listaFutbolistas[i].apellido = nuevoFutbolista.apellido;
                            listaFutbolistas[i].edad = nuevoFutbolista.edad;
                            listaFutbolistas[i].equipo = nuevoFutbolista.equipo;
                            listaFutbolistas[i].posicion = nuevoFutbolista.posicion;
                            listaFutbolistas[i].cantidadGoles = nuevoFutbolista.cantidadGoles;                            
                            break;
                        }
                    }
                    break;
                case "profesional":
                    var nuevoProfesional = new Profesional(persona.id, persona.nombre, persona.apellido, persona.edad, persona.titulo, persona.facultad, persona.anioGraduacion);
                    nuevoProfesional.nombre = document.getElementById("atributo1").value;
                    nuevoProfesional.apellido = document.getElementById("atributo2").value;
                    nuevoProfesional.edad = document.getElementById("atributo3").value;
                    nuevoProfesional.titulo = document.getElementById("atributo4").value;
                    nuevoProfesional.facultad = document.getElementById("atributo5").value;
                    nuevoProfesional.anioGraduacion = document.getElementById("atributo6").value;
                    
                    persona.nombre = nuevoProfesional.nombre;
                    persona.apellido = nuevoProfesional.apellido;
                    persona.edad = nuevoProfesional.edad;
                    persona.titulo = nuevoProfesional.titulo;
                    persona.facultad = nuevoProfesional.facultad;
                    persona.anioGraduacion = nuevoProfesional.anioGraduacion;
                                
                    for(var i=0; i<listaProfesionales.length; i++)
                    {
                        if(nuevoProfesional.id == listaProfesionales[i].id)
                        {
                            listaProfesionales[i].nombre = nuevoProfesional.nombre;
                            listaProfesionales[i].apellido = nuevoProfesional.apellido;
                            listaProfesionales[i].edad = nuevoProfesional.edad;
                            listaProfesionales[i].titulo = nuevoProfesional.titulo;
                            listaProfesionales[i].facultad = nuevoProfesional.facultad;                        
                            listaProfesionales[i].anioGraduacion = nuevoProfesional.anioGraduacion;                        
                            break;
                        }
                    }
                    break;    
            }        
        }          
    });
    BorrarDatosTabla();
    CargarDatosTabla();
    
}
function EliminarPersona()
{
    let id = document.getElementById("id").value;
    var tipo = document.getElementById("tipoPersona").value;   
    listaPersonas.forEach(persona=>
    {
        if(persona.id == id)
        {
            switch(tipo)           
            {   
                case "futbolista":
                    var futbolistaAEliminar = new Futbolista(persona.id, persona.nombre, persona.apellido, persona.edad, persona.equipo, persona.posicion, persona.cantidadGoles);
                    listaPersonas = listaPersonas.filter((persona)=>!(persona.id == futbolistaAEliminar.id));               
                    listaFutbolistas = listaFutbolistas.filter((persona)=>!(persona.id == futbolistaAEliminar.id));                                        
                    break;
                case "profesional":
                    var profesionalAEliminar = new Profesional(persona.id, persona.nombre, persona.apellido, persona.edad, persona.titulo, persona.facultad, persona.anioGraduacion);
                    listaPersonas = listaPersonas.filter((persona)=>!(persona.id == profesionalAEliminar.id));               
                    listaProfesionales = listaProfesionales.filter((persona)=>!(persona.id == profesionalAEliminar.id));  
                    break;
            }     
        }
    });
    BorrarDatosTabla();
    CargarDatosTabla();
}
function OrdenarPorId()
{
    BorrarDatosTabla();
    listaPersonas.sort((a, b) => a.id - b.id);
    listaFutbolistas.sort((a, b) => a.id - b.id);
    listaProfesionales.sort((a, b) => a.id - b.id);
    CargarDatosTabla();        
}
function OrdenarPorNombre()
{    
    BorrarDatosTabla();
    listaPersonas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    listaFutbolistas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    listaProfesionales.sort((a, b) => a.nombre.localeCompare(b.nombre));
    CargarDatosTabla();
}
function OrdenarPorApellido()
{    
    BorrarDatosTabla();
    listaPersonas.sort((a, b) => a.apellido.localeCompare(b.apellido));
    listaFutbolistas.sort((a, b) => a.apellido.localeCompare(b.apellido));
    listaProfesionales.sort((a, b) => a.apellido.localeCompare(b.apellido));
    CargarDatosTabla();
}
function OrdenarPorEdad()
{
    BorrarDatosTabla();
    listaPersonas.sort((a, b) => a.edad - b.edad);
    listaFutbolistas.sort((a, b) => a.edad - b.edad);
    listaProfesionales.sort((a, b) => a.edad - b.edad);
    CargarDatosTabla();        
}
function OrdenarPorEquipo() 
{
    BorrarDatosTabla();
    listaPersonas.sort(CompararPorEquipo);
    listaFutbolistas.sort(CompararPorEquipo);
    CargarDatosTabla();
}
function CompararPorEquipo(a, b) 
{
    const equipoA = (a.equipo === "N/A" || a.equipo === undefined) ? '' : a.equipo;
    const equipoB = (b.equipo === "N/A" || b.equipo === undefined) ? '' : b.equipo;
    return equipoA.localeCompare(equipoB);
}
function OrdenarPorPosicion() 
{
    BorrarDatosTabla();
    listaPersonas.sort(CompararPorPosicion);
    listaFutbolistas.sort(CompararPorPosicion);
    CargarDatosTabla();
}
function CompararPorPosicion(a, b) 
{
    const posicionA = (a.posicion === "N/A" || a.posicion === undefined) ? '' : a.posicion;
    const posicionB = (b.posicion === "N/A" || b.posicion === undefined) ? '' : b.posicion;
    return posicionA.localeCompare(posicionB);
}
function OrdenarPorTitulo() 
{
    BorrarDatosTabla();
    listaPersonas.sort(CompararPorTitulo);
    listaFutbolistas.sort(CompararPorTitulo);
    CargarDatosTabla();
}
function CompararPorTitulo(a, b) 
{
    const tituloA = (a.titulo === "N/A" || a.titulo === undefined) ? '' : a.titulo;
    const tituloB = (b.titulo === "N/A" || b.titulo === undefined) ? '' : b.titulo;
    return tituloA.localeCompare(tituloB);
}
function OrdenarPorFacultad() 
{
    BorrarDatosTabla();
    listaPersonas.sort(CompararPorFacultad);
    listaFutbolistas.sort(CompararPorFacultad);
    CargarDatosTabla();
}
function CompararPorFacultad(a, b) 
{
    const facultadA = (a.facultad === "N/A" || a.facultad === undefined) ? '' : a.facultad;
    const facultadB = (b.facultad === "N/A" || b.facultad === undefined) ? '' : b.facultad;
    return facultadA.localeCompare(facultadB);
}
function OrdenarPorCantidadGoles()
{
    BorrarDatosTabla();
    listaPersonas.sort(CompararPorCantidadGoles);
    listaFutbolistas.sort(CompararPorCantidadGoles);
    CargarDatosTabla();
}
function CompararPorCantidadGoles(a, b)
{
    const cantidadGolesA = (a.cantidadGoles === "N/A" || a.cantidadGoles === undefined) ? -1 : a.cantidadGoles;
    const cantidadGolesB = (b.cantidadGoles === "N/A" || b.cantidadGoles === undefined) ? -1 : b.cantidadGoles;
    return cantidadGolesA - cantidadGolesB;
}
function OrdenarPorAnioGraduacion()
{
    BorrarDatosTabla();
    listaPersonas.sort(CompararPorAnioGraduacion);
    listaFutbolistas.sort(CompararPorAnioGraduacion);
    CargarDatosTabla();
}
function CompararPorAnioGraduacion(a, b)
{
    const anioGraduacionA = (a.anioGraduacion === "N/A" || a.anioGraduacion === undefined) ? -1 : a.anioGraduacion;
    const anioGraduacionB = (b.anioGraduacion === "N/A" || b.anioGraduacion === undefined) ? -1 : b.anioGraduacion;
    return anioGraduacionA - anioGraduacionB;
}
var jsonPersonas = '[{"id":1, "nombre":"Marcelo", "apellido":"Luque", "edad":45, "titulo":"Ingeniero", "facultad":"UTN", "anioGraduacion":2002},{"id":2, "nombre":"Ramiro", "apellido":"Escobar", "edad":35, "titulo":"Medico", "facultad":"UBA", "anioGraduacion":2012},{"id":3, "nombre":"Facundo", "apellido":"Cairo", "edad":30, "titulo":"Abogado", "facultad":"UCA", "anioGraduacion":2017},{"id":4, "nombre":"Fernando", "apellido":"Nieto", "edad":18, "equipo":"Independiente", "posicion":"Delantero", "cantidadGoles":7},{"id":5, "nombre":"Manuel", "apellido":"Loza", "edad":20, "equipo":"Racing", "posicion":"Volante", "cantidadGoles":2},{"id":6, "nombre":"Nicolas", "apellido":"Serrano", "edad":23, "equipo":"Boca", "posicion":"Arquero", "cantidadGoles":0}]'
let listaPersonas = [];
listaPersonas = JSON.parse(jsonPersonas);
let listaFutbolistas = [];
let listaProfesionales = [];
document.getElementById('agregar').addEventListener('click', function() 
{
    document.getElementById('formularioABM').style.display = 'block';
    document.getElementById('FormDatos').style.display = 'none';
});
document.getElementById('cancelar').addEventListener('click', function() 
{
    document.getElementById('formularioABM').style.display = 'none';
    document.getElementById('FormDatos').style.display = 'block';
});
listaPersonas.forEach(persona => 
{
    if(persona.cantidadGoles > -1)
    {
        var nuevoFutbolista = new Futbolista(persona.id, persona.nombre, persona.apellido, persona.edad, persona.equipo, persona.posicion, persona.cantidadGoles);
        listaFutbolistas.push(nuevoFutbolista);
    }
    if (persona.anioGraduacion > 1950)
    {
        var nuevoProfesional = new Profesional(persona.id, persona.nombre, persona.apellido, persona.edad, persona.titulo, persona.facultad, persona.anioGraduacion);
        listaProfesionales.push(nuevoProfesional);
    }
});