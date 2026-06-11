import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [faqs, setFaqs] = useState([]);
  const [informacion, setInformacion] = useState([]);
  const [contactos, setContactos] = useState([]);

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

  useEffect(() => {
    cargarFaqs();
    cargarInformacion();
    cargarContactos();
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
    </div>
  );
}

export default App;