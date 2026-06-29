import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [informacion, setInformacion] = useState([]);
  const [contactos, setContactos] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [carreras, setCarreras] = useState([]);
  const [docentes, setDocentes] = useState([]);
  const [horariosDocentes, setHorariosDocentes] = useState([]);
  const [calendarios, setCalendarios] = useState([]);
  const [anuncios, setAnuncios] = useState([]);

  const [usuarioCedula, setUsuarioCedula] = useState("");
  const [usuarioNombre, setUsuarioNombre] = useState("");
  const [usuarioPassword, setUsuarioPassword] = useState("");
  const [usuarioRol, setUsuarioRol] = useState("");
  const [usuarioCarreraId, setUsuarioCarreraId] = useState("");
  const [usuarioEditandoId, setUsuarioEditandoId] = useState(null);

  const [materiaNombre, setMateriaNombre] = useState("");
const [materiaCarreraId, setMateriaCarreraId] = useState("");
const [materiaCicloId, setMateriaCicloId] = useState("");
const [materiaEditandoId, setMateriaEditandoId] = useState(null);

const [ciclos, setCiclos] = useState([]);

  const [pregunta, setPregunta] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [categoria, setCategoria] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  const [infoTitulo, setInfoTitulo] = useState("");
  const [infoContenido, setInfoContenido] = useState("");
  const [infoEditandoId, setInfoEditandoId] = useState(null);

  const [contactoDepartamento, setContactoDepartamento] = useState("");
  const [contactoResponsable, setContactoResponsable] = useState("");
  const [contactoTelefono, setContactoTelefono] = useState("");
  const [contactoCorreo, setContactoCorreo] = useState("");
  const [contactoHorario, setContactoHorario] = useState("");
  const [contactoEditandoId, setContactoEditandoId] = useState(null);

  const [horarioCarreraId, setHorarioCarreraId] = useState("");
  const [horarioTitulo, setHorarioTitulo] = useState("");
  const [horarioUrl, setHorarioUrl] = useState("");
  const [horarioEditandoId, setHorarioEditandoId] = useState(null);

  const [docenteId, setDocenteId] = useState("");
  const [horarioDocenteTitulo, setHorarioDocenteTitulo] = useState("");
  const [horarioDocenteUrl, setHorarioDocenteUrl] = useState("");
  const [horarioDocenteEditandoId, setHorarioDocenteEditandoId] = useState(null);

  const [calendarioTitulo, setCalendarioTitulo] = useState("");
  const [calendarioUrl, setCalendarioUrl] = useState("");
  const [calendarioEditandoId, setCalendarioEditandoId] = useState(null);

  const [anuncioTitulo, setAnuncioTitulo] = useState("");
  const [anuncioContenido, setAnuncioContenido] = useState("");
  const [anuncioEditandoId, setAnuncioEditandoId] = useState(null);

  const [seccionActiva, setSeccionActiva] = useState("inicio");

  useEffect(() => {
    cargarUsuarios();
    cargarMaterias();
cargarCiclos();
    cargarFaqs();
    cargarInformacion();
    cargarContactos();
    cargarHorarios();
    cargarCarreras();
    cargarDocentes();
    cargarHorariosDocentes();
    cargarCalendarios();
    cargarAnuncios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3001/api/usuarios");
      setUsuarios(respuesta.data);
    } catch (error) {
      console.error(error);
    }
  };

  const cargarMaterias = async () => {
  try {
    const respuesta = await axios.get("http://localhost:3001/api/mallas/materias");
    setMaterias(respuesta.data);
  } catch (error) {
    console.error(error);
  }
};

const cargarCiclos = async () => {
  try {
    const respuesta = await axios.get("http://localhost:3001/api/ciclos");
    setCiclos(respuesta.data);
  } catch (error) {
    console.error(error);
  }
};

  const cargarFaqs = async () => {
    try {
      const respuestaApi = await axios.get("http://localhost:3001/api/faq");
      setFaqs(respuestaApi.data);
    } catch (error) {
      console.error(error);
    }
  };

  const cargarInformacion = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3001/api/informacion");
      setInformacion(respuesta.data);
    } catch (error) {
      console.error(error);
    }
  };

  const cargarContactos = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3001/api/contactos");
      setContactos(respuesta.data);
    } catch (error) {
      console.error(error);
    }
  };

  const cargarHorarios = async () => {
    try {
      const respuesta = await axios.get(
        "http://localhost:3001/api/horarios"
      );

      setHorarios(respuesta.data);

    } catch (error) {
      console.error(error);
    }
  };

  const cargarCarreras = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3001/api/carreras");
      setCarreras(respuesta.data);
    } catch (error) {
      console.error(error);
    }
  };

  const cargarDocentes = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3001/api/docentes");
      setDocentes(respuesta.data);
    } catch (error) {
      console.error(error);
    }
  };

  const cargarHorariosDocentes = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3001/api/horarios-docentes");
      setHorariosDocentes(respuesta.data);
    } catch (error) {
      console.error(error);
    }
  };

  const cargarCalendarios = async () => {
    try {
      const respuesta = await axios.get("http://localhost:3001/api/calendario");
      setCalendarios(respuesta.data);
    } catch (error) {
      console.error(error);
    }
  };

  const cargarAnuncios = async () => {
    try {

      const respuesta = await axios.get(
        "http://localhost:3001/api/anuncios"
      );

      setAnuncios(respuesta.data);

    } catch (error) {
      console.error(error);
    }
  };

  const guardarUsuario = async (e) => {
    e.preventDefault();

    const datos = {
      cedula: usuarioCedula,
      nombre: usuarioNombre,
      password: usuarioPassword,
      rol: usuarioRol,
      carrera_id: usuarioCarreraId,
      estado: "ACTIVO",
    };

    try {
      if (usuarioEditandoId) {
        await axios.put(`http://localhost:3001/api/usuarios/${usuarioEditandoId}`, datos);
      } else {
        await axios.post("http://localhost:3001/api/usuarios", datos);
      }

      setUsuarioCedula("");
      setUsuarioNombre("");
      setUsuarioPassword("");
      setUsuarioRol("");
      setUsuarioCarreraId("");
      setUsuarioEditandoId(null);

      cargarUsuarios();
    } catch (error) {
      console.error(error);
      alert("Error al guardar usuario");
    }
  };

  const guardarMateria = async (e) => {
  e.preventDefault();

  const datos = {
    nombre: materiaNombre,
    carrera_id: materiaCarreraId,
    ciclo_id: materiaCicloId,
    estado: "ACTIVO",
  };

  try {
    if (materiaEditandoId) {
      await axios.put(`http://localhost:3001/api/mallas/materias/${materiaEditandoId}`, datos);
    } else {
      await axios.post("http://localhost:3001/api/mallas/materias", datos);
    }

    setMateriaNombre("");
    setMateriaCarreraId("");
    setMateriaCicloId("");
    setMateriaEditandoId(null);

    cargarMaterias();
  } catch (error) {
    console.error(error);
    alert("Error al guardar materia");
  }
};

  const guardarFaq = async (e) => {
    e.preventDefault();
    try {
      if (editandoId) {
        await axios.put(`http://localhost:3001/api/faq/${editandoId}`, {
          pregunta,
          respuesta,
          categoria,
          estado: "ACTIVO",
        });
      } else {
        await axios.post("http://localhost:3001/api/faq", {
          pregunta,
          respuesta,
          categoria,
        });
      }

      setPregunta("");
      setRespuesta("");
      setCategoria("");
      setEditandoId(null);

      cargarFaqs();
    } catch (error) {
      console.error(error);
      alert("Error al guardar la FAQ");
    }
  };

  const guardarInformacion = async (e) => {
    e.preventDefault();

    try {
      if (infoEditandoId) {
        await axios.put(`http://localhost:3001/api/informacion/${infoEditandoId}`, {
          titulo: infoTitulo,
          contenido: infoContenido,
          estado: "ACTIVO",
        });
      } else {
        await axios.post("http://localhost:3001/api/informacion", {
          titulo: infoTitulo,
          contenido: infoContenido,
        });
      }

      setInfoTitulo("");
      setInfoContenido("");
      setInfoEditandoId(null);

      cargarInformacion();
    } catch (error) {
      console.error(error);
      alert("Error al guardar información institucional");
    }
  };

  const guardarContacto = async (e) => {
    e.preventDefault();

    try {
      const datos = {
        departamento: contactoDepartamento,
        responsable: contactoResponsable,
        telefono: contactoTelefono,
        correo: contactoCorreo,
        horario_atencion: contactoHorario,
        estado: "ACTIVO",
      };

      if (contactoEditandoId) {
        await axios.put(`http://localhost:3001/api/contactos/${contactoEditandoId}`, datos);
      } else {
        await axios.post("http://localhost:3001/api/contactos", datos);
      }

      setContactoDepartamento("");
      setContactoResponsable("");
      setContactoTelefono("");
      setContactoCorreo("");
      setContactoHorario("");
      setContactoEditandoId(null);

      cargarContactos();
    } catch (error) {
      console.error(error);
      alert("Error al guardar contacto");
    }
  };

  const guardarHorario = async (e) => {
    e.preventDefault();

    try {

      const datos = {
        carrera_id: horarioCarreraId,
        titulo: horarioTitulo,
        url_imagen: horarioUrl,
        estado: "ACTIVO",
      };

      if (horarioEditandoId) {

        await axios.put(
          `http://localhost:3001/api/horarios/${horarioEditandoId}`,
          datos
        );

      } else {

        await axios.post(
          "http://localhost:3001/api/horarios",
          datos
        );

      }

      setHorarioCarreraId("");
      setHorarioTitulo("");
      setHorarioUrl("");
      setHorarioEditandoId(null);

      cargarHorarios();

    } catch (error) {
      console.error(error);
      alert("Error al guardar horario");
    }
  };

  const guardarHorarioDocente = async (e) => {
    e.preventDefault();

    const datos = {
      usuario_id: docenteId,
      titulo: horarioDocenteTitulo,
      url_imagen: horarioDocenteUrl,
      estado: "ACTIVO",
    };

    try {
      if (horarioDocenteEditandoId) {
        await axios.put(
          `http://localhost:3001/api/horarios-docentes/${horarioDocenteEditandoId}`,
          datos
        );
      } else {
        await axios.post("http://localhost:3001/api/horarios-docentes", datos);
      }

      setDocenteId("");
      setHorarioDocenteTitulo("");
      setHorarioDocenteUrl("");
      setHorarioDocenteEditandoId(null);

      cargarHorariosDocentes();
    } catch (error) {
      console.error(error);
      alert("Error al guardar horario docente");
    }
  };

  const guardarCalendario = async (e) => {
    e.preventDefault();

    const datos = {
      titulo: calendarioTitulo,
      url_archivo: calendarioUrl,
      estado: "ACTIVO",
    };

    try {
      if (calendarioEditandoId) {
        await axios.put(
          `http://localhost:3001/api/calendario/${calendarioEditandoId}`,
          datos
        );
      } else {
        await axios.post("http://localhost:3001/api/calendario", datos);
      }

      setCalendarioTitulo("");
      setCalendarioUrl("");
      setCalendarioEditandoId(null);

      cargarCalendarios();
    } catch (error) {
      console.error(error);
      alert("Error al guardar calendario");
    }
  };

  const guardarAnuncio = async (e) => {
    e.preventDefault();

    const datos = {
      titulo: anuncioTitulo,
      contenido: anuncioContenido,
      estado: "ACTIVO"
    };

    try {

      if (anuncioEditandoId) {

        await axios.put(
          `http://localhost:3001/api/anuncios/${anuncioEditandoId}`,
          datos
        );

      } else {

        await axios.post(
          "http://localhost:3001/api/anuncios",
          datos
        );

      }

      setAnuncioTitulo("");
      setAnuncioContenido("");
      setAnuncioEditandoId(null);

      cargarAnuncios();

    } catch (error) {
      console.error(error);
      alert("Error al guardar anuncio");
    }
  };

  const eliminarUsuario = async (id) => {
    const confirmar = window.confirm("¿Desea eliminar este usuario?");
    if (!confirmar) return;

    try {
      await axios.delete(`http://localhost:3001/api/usuarios/${id}`);
      cargarUsuarios();
    } catch (error) {
      console.error(error);
      alert("Error al eliminar usuario");
    }
  };

  const eliminarMateria = async (id) => {
  const confirmar = window.confirm("¿Desea eliminar esta materia?");
  if (!confirmar) return;

  try {
    await axios.delete(`http://localhost:3001/api/mallas/materias/${id}`);
    cargarMaterias();
  } catch (error) {
    console.error(error);
    alert("Error al eliminar materia");
  }
};

  const eliminarFaq = async (id) => {

    const confirmar = window.confirm(
      "¿Desea eliminar esta FAQ?"
    );

    if (!confirmar) return;

    try {

      await axios.delete(
        `http://localhost:3001/api/faq/${id}`
      );

      cargarFaqs();

    } catch (error) {

      console.error(error);

      alert("Error al eliminar FAQ");

    }

  };

  const eliminarInformacion = async (id) => {
    const confirmar = window.confirm("¿Desea eliminar esta información?");

    if (!confirmar) return;

    try {
      await axios.delete(`http://localhost:3001/api/informacion/${id}`);
      cargarInformacion();
    } catch (error) {
      console.error(error);
      alert("Error al eliminar información institucional");
    }
  };

  const eliminarContacto = async (id) => {
    const confirmar = window.confirm("¿Desea eliminar este contacto?");
    if (!confirmar) return;

    try {
      await axios.delete(`http://localhost:3001/api/contactos/${id}`);
      cargarContactos();
    } catch (error) {
      console.error(error);
      alert("Error al eliminar contacto");
    }
  };

  const eliminarHorario = async (id) => {

    const confirmar = window.confirm(
      "¿Desea eliminar este horario?"
    );

    if (!confirmar) return;

    try {

      await axios.delete(
        `http://localhost:3001/api/horarios/${id}`
      );

      cargarHorarios();

    } catch (error) {
      console.error(error);
      alert("Error al eliminar horario");
    }

  };

  const eliminarHorarioDocente = async (id) => {
    const confirmar = window.confirm("¿Desea eliminar este horario docente?");
    if (!confirmar) return;

    try {
      await axios.delete(`http://localhost:3001/api/horarios-docentes/${id}`);
      cargarHorariosDocentes();
    } catch (error) {
      console.error(error);
      alert("Error al eliminar horario docente");
    }
  };

  const eliminarCalendario = async (id) => {
    const confirmar = window.confirm("¿Desea eliminar este calendario?");
    if (!confirmar) return;

    try {
      await axios.delete(`http://localhost:3001/api/calendario/${id}`);
      cargarCalendarios();
    } catch (error) {
      console.error(error);
      alert("Error al eliminar calendario");
    }
  };

  const eliminarAnuncio = async (id) => {

    const confirmar = window.confirm(
      "¿Desea eliminar este anuncio?"
    );

    if (!confirmar) return;

    try {

      await axios.delete(
        `http://localhost:3001/api/anuncios/${id}`
      );

      cargarAnuncios();

    } catch (error) {
      console.error(error);
      alert("Error al eliminar anuncio");
    }

  };

  const editarUsuario = (usuario) => {
    setUsuarioEditandoId(usuario.id);
    setUsuarioCedula(usuario.cedula);
    setUsuarioNombre(usuario.nombre);
    setUsuarioPassword(usuario.password);
    setUsuarioRol(usuario.rol);
    setUsuarioCarreraId(usuario.carrera_id || "");
  };

  const editarMateria = (materia) => {
  setMateriaEditandoId(materia.id);
  setMateriaNombre(materia.nombre);
  setMateriaCarreraId(materia.carrera_id);
  setMateriaCicloId(materia.ciclo_id);
};

  const editarFaq = (faq) => {
    setEditandoId(faq.id);
    setPregunta(faq.pregunta);
    setRespuesta(faq.respuesta);
    setCategoria(faq.categoria);
  };

  const editarInformacion = (item) => {
    setInfoEditandoId(item.id);
    setInfoTitulo(item.titulo);
    setInfoContenido(item.contenido);
  };

  const editarContacto = (contacto) => {
    setContactoEditandoId(contacto.id);
    setContactoDepartamento(contacto.departamento);
    setContactoResponsable(contacto.responsable);
    setContactoTelefono(contacto.telefono);
    setContactoCorreo(contacto.correo);
    setContactoHorario(contacto.horario_atencion);
  };

  const editarHorario = (horario) => {
    setHorarioEditandoId(horario.id);
    setHorarioCarreraId(horario.carrera_id);
    setHorarioTitulo(horario.titulo);
    setHorarioUrl(horario.url_imagen);

  };

  const editarHorarioDocente = (horario) => {
    setHorarioDocenteEditandoId(horario.id);
    setDocenteId(horario.usuario_id);
    setHorarioDocenteTitulo(horario.titulo);
    setHorarioDocenteUrl(horario.url_imagen);
  };

  const editarCalendario = (calendario) => {
    setCalendarioEditandoId(calendario.id);
    setCalendarioTitulo(calendario.titulo);
    setCalendarioUrl(calendario.url_archivo);
  };

  const editarAnuncio = (anuncio) => {

    setAnuncioEditandoId(anuncio.id);
    setAnuncioTitulo(anuncio.titulo);
    setAnuncioContenido(anuncio.contenido);

  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      <aside style={{
        width: "240px",
        background: "#1f2937",
        color: "white",
        padding: "20px"
      }}>
        <h2>ANNI Admin</h2>

        <button onClick={() => setSeccionActiva("inicio")}>🏠 Inicio</button><br /><br />
        <button onClick={() => setSeccionActiva("usuarios")}>👥 Usuarios</button><br /><br />
        <button onClick={() => setSeccionActiva("mallas")}>📚 Mallas</button><br /><br />
        <button onClick={() => setSeccionActiva("faq")}>❓ FAQ</button><br /><br />
        <button onClick={() => setSeccionActiva("informacion")}>🏫 Información</button><br /><br />
        <button onClick={() => setSeccionActiva("contactos")}>📞 Contactos</button><br /><br />
        <button onClick={() => setSeccionActiva("horarios")}>📅 Horarios</button><br /><br />
        <button onClick={() => setSeccionActiva("horariosDocentes")}>👨‍🏫 Horarios Docentes</button><br /><br />
        <button onClick={() => setSeccionActiva("calendario")}>🗓 Calendario</button><br /><br />
        <button onClick={() => setSeccionActiva("anuncios")}>📢 Anuncios</button>
      </aside>

      <main style={{ flex: 1, padding: "20px" }}>
        <h1>Panel Administrativo ANNI</h1>

        {seccionActiva === "inicio" && (
          <div>
            <h2>Bienvenido al Panel Administrativo</h2>
            <p>Seleccione una opción del menú lateral para gestionar la información de ANNI.</p>
          </div>
        )}

        {seccionActiva === "usuarios" && (
          <>
            <h2>{usuarioEditandoId ? "Editar Usuario" : "Nuevo Usuario"}</h2>

            <form onSubmit={guardarUsuario}>
              <input
                type="text"
                placeholder="Cédula"
                value={usuarioCedula}
                onChange={(e) => setUsuarioCedula(e.target.value)}
                required
              />

              <br /><br />

              <input
                type="text"
                placeholder="Nombre"
                value={usuarioNombre}
                onChange={(e) => setUsuarioNombre(e.target.value)}
                required
              />

              <br /><br />

              <input
                type="text"
                placeholder="Contraseña"
                value={usuarioPassword}
                onChange={(e) => setUsuarioPassword(e.target.value)}
                required
              />

              <br /><br />

              <select
                value={usuarioRol}
                onChange={(e) => setUsuarioRol(e.target.value)}
                required
              >
                <option value="">Seleccione un rol</option>
                <option value="ADMIN">ADMIN</option>
                <option value="DOCENTE">DOCENTE</option>
                <option value="ESTUDIANTE">ESTUDIANTE</option>
              </select>

              <br /><br />

              <select
                value={usuarioCarreraId}
                onChange={(e) => setUsuarioCarreraId(e.target.value)}
              >
                <option value="">Sin carrera asignada</option>

                {carreras.map((carrera) => (
                  <option key={carrera.id} value={carrera.id}>
                    {carrera.nombre}
                  </option>
                ))}
              </select>

              <br /><br />

              <button type="submit">
                {usuarioEditandoId ? "Actualizar Usuario" : "Guardar Usuario"}
              </button>
            </form>

            <hr />

            <h2>Usuarios</h2>

            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cédula</th>
                  <th>Nombre</th>
                  <th>Rol</th>
                  <th>Carrera</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.cedula}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.rol}</td>
                    <td>{usuario.carrera || "Sin carrera"}</td>
                    <td>{usuario.estado}</td>
                    <td>
                      <button onClick={() => editarUsuario(usuario)}>
                        ✏️ Editar
                      </button>

                      <button onClick={() => eliminarUsuario(usuario.id)}>
                        🗑 Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {seccionActiva === "mallas" && (
  <>
    <h2>{materiaEditandoId ? "Editar Materia" : "Nueva Materia"}</h2>

    <form onSubmit={guardarMateria}>
      <input
        type="text"
        placeholder="Nombre de la materia"
        value={materiaNombre}
        onChange={(e) => setMateriaNombre(e.target.value)}
        required
      />

      <br /><br />

      <select
        value={materiaCarreraId}
        onChange={(e) => setMateriaCarreraId(e.target.value)}
        required
      >
        <option value="">Seleccione carrera</option>
        {carreras.map((carrera) => (
          <option key={carrera.id} value={carrera.id}>
            {carrera.nombre}
          </option>
        ))}
      </select>

      <br /><br />

      <select
        value={materiaCicloId}
        onChange={(e) => setMateriaCicloId(e.target.value)}
        required
      >
        <option value="">Seleccione ciclo</option>
        {ciclos.map((ciclo) => (
          <option key={ciclo.id} value={ciclo.id}>
            {ciclo.nombre}
          </option>
        ))}
      </select>

      <br /><br />

      <button type="submit">
        {materiaEditandoId ? "Actualizar Materia" : "Guardar Materia"}
      </button>
    </form>

    <hr />

    <h2>Materias de la Malla Curricular</h2>

    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Carrera</th>
          <th>Ciclo</th>
          <th>Materia</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {materias.map((materia) => (
          <tr key={materia.id}>
            <td>{materia.id}</td>
            <td>{materia.carrera}</td>
            <td>{materia.ciclo}</td>
            <td>{materia.nombre}</td>
            <td>{materia.estado}</td>
            <td>
              <button onClick={() => editarMateria(materia)}>
                ✏️ Editar
              </button>

              <button onClick={() => eliminarMateria(materia.id)}>
                🗑 Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
)}

        {seccionActiva === "faq" && (
          <>
            <h2>{editandoId ? "Editar Pregunta Frecuente" : "Nueva Pregunta Frecuente"}</h2>

            <form onSubmit={guardarFaq}>
              <div>
                <label>Pregunta:</label>
                <br />
                <input
                  type="text"
                  value={pregunta}
                  onChange={(e) => setPregunta(e.target.value)}
                  required
                  style={{ width: "400px", padding: "8px" }}
                />
              </div>

              <br />

              <div>
                <label>Respuesta:</label>
                <br />
                <textarea
                  value={respuesta}
                  onChange={(e) => setRespuesta(e.target.value)}
                  required
                  style={{ width: "400px", height: "80px", padding: "8px" }}
                />
              </div>

              <br />

              <div>
                <label>Categoría:</label>
                <br />
                <input
                  type="text"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  required
                  style={{ width: "400px", padding: "8px" }}
                />
              </div>

              <br />

              <button type="submit">
                {editandoId ? "Actualizar FAQ" : "Guardar FAQ"}
              </button>
            </form>

            <hr />

            <h2>Preguntas Frecuentes</h2>

            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Pregunta</th>
                  <th>Categoría</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {faqs.map((faq) => (
                  <tr key={faq.id}>
                    <td>{faq.id}</td>
                    <td>{faq.pregunta}</td>
                    <td>{faq.categoria}</td>
                    <td>{faq.estado}</td>

                    <td>
                      <button onClick={() => editarFaq(faq)}>
                        ✏️ Editar
                      </button>

                      <button onClick={() => eliminarFaq(faq.id)}>
                        🗑 Eliminar
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
          </>
        )}

        {seccionActiva === "informacion" && (
          <>
            <h2>{infoEditandoId ? "Editar Información" : "Nueva Información"}</h2>

            <form onSubmit={guardarInformacion}>
              <div>
                <label>Título:</label>
                <br />
                <input
                  type="text"
                  value={infoTitulo}
                  onChange={(e) => setInfoTitulo(e.target.value)}
                  required
                  style={{ width: "400px", padding: "8px" }}
                />
              </div>

              <br />

              <div>
                <label>Contenido:</label>
                <br />
                <textarea
                  value={infoContenido}
                  onChange={(e) => setInfoContenido(e.target.value)}
                  required
                  style={{ width: "400px", height: "80px", padding: "8px" }}
                />
              </div>

              <br />

              <button type="submit">
                {infoEditandoId ? "Actualizar Información" : "Guardar Información"}
              </button>
            </form>

            <hr />

            <h2>Información Institucional</h2>

            <table border="1" cellPadding="10">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Título</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>

                {informacion.map((item) => (

                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.titulo}</td>
                    <td>{item.estado}</td>
                    <td>
                      <button onClick={() => editarInformacion(item)}>
                        ✏️ Editar
                      </button>

                      <button onClick={() => eliminarInformacion(item.id)}>
                        🗑 Eliminar
                      </button>
                    </td>
                  </tr>

                ))}

              </tbody>

            </table>

            <hr />
          </>
        )}
        {seccionActiva === "contactos" && (
          <>
            <h2>{contactoEditandoId ? "Editar Contacto" : "Nuevo Contacto"}</h2>

            <form onSubmit={guardarContacto}>
              <input
                type="text"
                placeholder="Departamento"
                value={contactoDepartamento}
                onChange={(e) => setContactoDepartamento(e.target.value)}
                required
              />
              <br /><br />

              <input
                type="text"
                placeholder="Responsable"
                value={contactoResponsable}
                onChange={(e) => setContactoResponsable(e.target.value)}
              />
              <br /><br />

              <input
                type="text"
                placeholder="Teléfono"
                value={contactoTelefono}
                onChange={(e) => setContactoTelefono(e.target.value)}
              />
              <br /><br />

              <input
                type="email"
                placeholder="Correo"
                value={contactoCorreo}
                onChange={(e) => setContactoCorreo(e.target.value)}
              />
              <br /><br />

              <input
                type="text"
                placeholder="Horario de atención"
                value={contactoHorario}
                onChange={(e) => setContactoHorario(e.target.value)}
              />
              <br /><br />

              <button type="submit">
                {contactoEditandoId ? "Actualizar Contacto" : "Guardar Contacto"}
              </button>
            </form>

            <hr />

            <h2>Contactos</h2>

            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Departamento</th>
                  <th>Responsable</th>
                  <th>Teléfono</th>
                  <th>Correo</th>
                  <th>Horario</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {contactos.map((contacto) => (
                  <tr key={contacto.id}>
                    <td>{contacto.id}</td>
                    <td>{contacto.departamento}</td>
                    <td>{contacto.responsable}</td>
                    <td>{contacto.telefono}</td>
                    <td>{contacto.correo}</td>
                    <td>{contacto.horario_atencion}</td>
                    <td>{contacto.estado}</td>
                    <td>
                      <button onClick={() => editarContacto(contacto)}>
                        ✏️ Editar
                      </button>

                      <button onClick={() => eliminarContacto(contacto.id)}>
                        🗑 Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
          </>
        )}

        {seccionActiva === "horarios" && (
          <>
            <h2>{horarioEditandoId ? "Editar Horario" : "Nuevo Horario"}</h2>

            <form onSubmit={guardarHorario}>
              <select
                value={horarioCarreraId}
                onChange={(e) => setHorarioCarreraId(e.target.value)}
                required
              >
                <option value="">Seleccione una carrera</option>

                {carreras.map((carrera) => (
                  <option key={carrera.id} value={carrera.id}>
                    {carrera.nombre}
                  </option>
                ))}
              </select>
              <br /><br />

              <input
                type="text"
                placeholder="Título del horario"
                value={horarioTitulo}
                onChange={(e) => setHorarioTitulo(e.target.value)}
                required
              />
              <br /><br />

              <input
                type="text"
                placeholder="URL de la imagen"
                value={horarioUrl}
                onChange={(e) => setHorarioUrl(e.target.value)}
                required
              />
              <br /><br />

              <button type="submit">
                {horarioEditandoId ? "Actualizar Horario" : "Guardar Horario"}
              </button>
            </form>

            <hr />

            <h2>Horarios</h2>

            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Carrera</th>
                  <th>Título</th>
                  <th>URL Imagen</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {horarios.map((horario) => (
                  <tr key={horario.id}>
                    <td>{horario.id}</td>
                    <td>{horario.carrera}</td>
                    <td>{horario.titulo}</td>
                    <td>
                      <a href={horario.url_imagen} target="_blank" rel="noreferrer">
                        Ver imagen
                      </a>
                    </td>
                    <td>{horario.estado}</td>
                    <td>
                      <button onClick={() => editarHorario(horario)}>
                        ✏️ Editar
                      </button>

                      <button onClick={() => eliminarHorario(horario.id)}>
                        🗑 Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
          </>
        )}

        {seccionActiva === "horariosDocentes" && (
          <>
            <h2>{horarioDocenteEditandoId ? "Editar Horario Docente" : "Nuevo Horario Docente"}</h2>

            <form onSubmit={guardarHorarioDocente}>
              <select
                value={docenteId}
                onChange={(e) => setDocenteId(e.target.value)}
                required
              >
                <option value="">Seleccione un docente</option>

                {docentes.map((docente) => (
                  <option key={docente.id} value={docente.id}>
                    {docente.nombre}
                  </option>
                ))}
              </select>

              <br /><br />

              <input
                type="text"
                placeholder="Título del horario docente"
                value={horarioDocenteTitulo}
                onChange={(e) => setHorarioDocenteTitulo(e.target.value)}
                required
              />

              <br /><br />

              <input
                type="text"
                placeholder="URL de imagen"
                value={horarioDocenteUrl}
                onChange={(e) => setHorarioDocenteUrl(e.target.value)}
                required
              />

              <br /><br />

              <button type="submit">
                {horarioDocenteEditandoId ? "Actualizar Horario Docente" : "Guardar Horario Docente"}
              </button>
            </form>

            <hr />

            <h2>Horarios Docentes</h2>

            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Docente</th>
                  <th>Título</th>
                  <th>URL Imagen</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {horariosDocentes.map((horario) => (
                  <tr key={horario.id}>
                    <td>{horario.id}</td>
                    <td>{horario.docente}</td>
                    <td>{horario.titulo}</td>
                    <td>
                      <a href={horario.url_imagen} target="_blank" rel="noreferrer">
                        Ver imagen
                      </a>
                    </td>
                    <td>{horario.estado}</td>
                    <td>
                      <button onClick={() => editarHorarioDocente(horario)}>
                        ✏️ Editar
                      </button>

                      <button onClick={() => eliminarHorarioDocente(horario.id)}>
                        🗑 Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
          </>
        )}

        {seccionActiva === "calendario" && (
          <>
            <h2>{calendarioEditandoId ? "Editar Calendario Académico" : "Nuevo Calendario Académico"}</h2>

            <form onSubmit={guardarCalendario}>
              <input
                type="text"
                placeholder="Título del calendario"
                value={calendarioTitulo}
                onChange={(e) => setCalendarioTitulo(e.target.value)}
                required
              />

              <br /><br />

              <input
                type="text"
                placeholder="URL del archivo o imagen"
                value={calendarioUrl}
                onChange={(e) => setCalendarioUrl(e.target.value)}
                required
              />

              <br /><br />

              <button type="submit">
                {calendarioEditandoId ? "Actualizar Calendario" : "Guardar Calendario"}
              </button>
            </form>

            <hr />

            <h2>Calendario Académico</h2>

            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Título</th>
                  <th>Archivo</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {calendarios.map((calendario) => (
                  <tr key={calendario.id}>
                    <td>{calendario.id}</td>
                    <td>{calendario.titulo}</td>
                    <td>
                      <a href={calendario.url_archivo} target="_blank" rel="noreferrer">
                        Ver archivo
                      </a>
                    </td>
                    <td>{calendario.estado}</td>
                    <td>
                      <button onClick={() => editarCalendario(calendario)}>
                        ✏️ Editar
                      </button>

                      <button onClick={() => eliminarCalendario(calendario.id)}>
                        🗑 Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <hr />
          </>
        )}

        {seccionActiva === "anuncios" && (
          <>
            <h2>
              {anuncioEditandoId
                ? "Editar Anuncio"
                : "Nuevo Anuncio"}
            </h2>

            <form onSubmit={guardarAnuncio}>

              <input
                type="text"
                placeholder="Título"
                value={anuncioTitulo}
                onChange={(e) =>
                  setAnuncioTitulo(e.target.value)
                }
                required
              />

              <br /><br />

              <textarea
                placeholder="Contenido"
                value={anuncioContenido}
                onChange={(e) =>
                  setAnuncioContenido(e.target.value)
                }
                required
              />

              <br /><br />

              <button type="submit">
                {anuncioEditandoId
                  ? "Actualizar Anuncio"
                  : "Guardar Anuncio"}
              </button>

            </form>

            <hr />

            <h2>Anuncios</h2>

            <table border="1" cellPadding="10">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Título</th>
                  <th>Contenido</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>

                {anuncios.map((anuncio) => (

                  <tr key={anuncio.id}>

                    <td>{anuncio.id}</td>
                    <td>{anuncio.titulo}</td>
                    <td>{anuncio.contenido}</td>
                    <td>{anuncio.estado}</td>

                    <td>

                      <button
                        onClick={() =>
                          editarAnuncio(anuncio)
                        }
                      >
                        ✏️ Editar
                      </button>

                      <button
                        onClick={() =>
                          eliminarAnuncio(anuncio.id)
                        }
                      >
                        🗑 Eliminar
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>
            <hr />
          </>
        )}
      </main>
    </div>
  );
}

export default App;