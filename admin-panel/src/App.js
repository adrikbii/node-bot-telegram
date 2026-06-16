import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [faqs, setFaqs] = useState([]);
  const [informacion, setInformacion] = useState([]);
  const [contactos, setContactos] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [carreras, setCarreras] = useState([]);
  const [docentes, setDocentes] = useState([]);
  const [horariosDocentes, setHorariosDocentes] = useState([]);
  const [calendarios, setCalendarios] = useState([]);

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

  useEffect(() => {
    cargarFaqs();
    cargarInformacion();
    cargarContactos();
    cargarHorarios();
    cargarCarreras();
    cargarDocentes();
    cargarHorariosDocentes();
    cargarCalendarios();
  }, []);

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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Panel Administrativo ANNI</h1>

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
    </div>
  );
}

export default App;