
"use client";
import React, { useState } from 'react';

const TorneoForm = () => {
  const [entityType, setEntityType] = useState('equipo'); // Tipo de entidad: equipo, jugador, entrenador

  const [team, setTeam] = useState({
    name: '',
    city: '',
    yearFounded: ''
  });

  const [player, setPlayer] = useState({
    cedula: '',
    firstName: '',
    lastName: '',
    position: '',
    dorsal: '',
    teamName: '' // Nombre del equipo
  });

  const [coach, setCoach] = useState({
    cedula: '',
    name: '',
    experience: '',
    nationality: '',
    teamName: '' // Nombre del equipo
  });
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Aquí iría la lógica para enviar los datos al backend.
    try {
      const response = await fetch('http://localhost:5000/api/torneo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          entityType,
          ...(entityType === 'equipo' ? { team } : entityType === 'jugador' ? { player } : { coach })
        })
      });

      if (response.ok) {
        alert('Datos enviados exitosamente');
      } else {
        alert('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <html>
      <head>
        <title>Inscripción Copa Unimayor</title>
        <meta name="description" content="Formulario para la inscripción en la Copa Unimayor" />
        <link rel="icon" href="/escudo.ico" />
      </head>
      <body suppressHydrationWarning={true} className="bg-gray-800 text-gray-200">
        <div className="container mx-auto p-6">
          {/* Barra de navegación */}
          <nav className="bg-gray-700 p-4 rounded-lg mb-6">
            <ul className="flex space-x-4">
              <li>
                <a href="#crear" className="text-white hover:text-blue-300">Crear</a>
              </li>
              <li>
                <a href="#consultar" className="text-white hover:text-blue-300">Consultar</a>
              </li>
              <li>
                <a href="#actualizar" className="text-white hover:text-blue-300">Actualizar</a>
              </li>
              <li>
                <a href="#eliminar" className="text-white hover:text-blue-300">Eliminar</a>
              </li>
            </ul>
          </nav>

          <div className="flex justify-center mb-8">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_MhfcrQkq-KTH63w2h_6wiI7rqKrcinBYU7hvy2uhYLlNi4BR-bXuhx6q6P5VFI2Zzw&usqp=CAU" alt="Escudo UNIMAYOR" className="h-60 w-60 bg-blend-screen" />
          </div>

          <h1 className="text-3xl font-bold text-center mb-8">Copa UNIMAYOR</h1>

          {/* Selector para tipo de entidad */}
          <div className="flex flex-col mb-6">
            <label className="font-medium text-white">Seleccione el tipo de entidad a crear:</label>
            <select
              value={entityType}
              onChange={(e) => setEntityType(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg"
            >
              <option value="equipo" className='text-gray-900'>Equipo</option>
              <option value="jugador" className='text-gray-900'>Jugador</option>
              <option value="entrenador" className='text-gray-900'>Entrenador</option>
            </select>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {entityType === 'equipo' && (
              <div className="space-y-4 text-white" id="crear">
                <h2 className="text-2xl font-semibold">Equipo</h2>

                <div className="flex flex-col text-white">
                  <label className="font-medium">Nombre del equipo</label>
                  <input
                    type="text"
                    value={team.name}
                    onChange={(e) => setTeam({ ...team, name: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>

                <div className="flex flex-col text-white">
                  <label className="font-medium">Ciudad</label>
                  <input
                    type="text"
                    value={team.city}
                    onChange={(e) => setTeam({ ...team, city: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>

                <div className="flex flex-col text-white">
                  <label className="font-medium">Año de fundación</label>
                  <input
                    type="number"
                    value={team.yearFounded}
                    onChange={(e) => setTeam({ ...team, yearFounded: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>
              </div>
            )}

            {entityType === 'jugador' && (
              <div className="space-y-4 text-white">
                <h2 className="text-2xl font-semibold">Jugador</h2>

                <div className="flex flex-col text-white">
                  <label className="font-medium">Cédula</label>
                  <input
                    type="text"
                    value={player.cedula}
                    onChange={(e) => setPlayer({ ...player, cedula: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>

                <div className="flex flex-col text-white">
                  <label className="font-medium">Nombre</label>
                  <input
                    type="text"
                    value={player.firstName}
                    onChange={(e) => setPlayer({ ...player, firstName: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>

                <div className="flex flex-col text-white">
                  <label className="font-medium">Apellido</label>
                  <input
                    type="text"
                    value={player.lastName}
                    onChange={(e) => setPlayer({ ...player, lastName: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>

                <div className="flex flex-col text-white">
                  <label className="font-medium">Posición</label>
                  <input
                    type="text"
                    value={player.position}
                    onChange={(e) => setPlayer({ ...player, position: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>

                <div className="flex flex-col text-white">
                  <label className="font-medium">Dorsal</label>
                  <input
                    type="number"
                    value={player.dorsal}
                    onChange={(e) => setPlayer({ ...player, dorsal: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>

                <div className="flex flex-col text-white">
                  <label className="font-medium">Nombre del equipo</label>
                  <input
                    type="text"
                    value={player.teamName}
                    onChange={(e) => setPlayer({ ...player, teamName: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>
              </div>
            )}

            {entityType === 'entrenador' && (
              <div className="space-y-4 text-white">
                <h2 className="text-2xl font-semibold">Entrenador</h2>

                <div className="flex flex-col text-white">
                  <label className="font-medium">Cédula</label>
                  <input
                    type="text"
                    value={coach.cedula}
                    onChange={(e) => setCoach({ ...coach, cedula: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>

                <div className="flex flex-col text-white">
                  <label className="font-medium">Nombre</label>
                  <input
                    type="text"
                    value={coach.name}
                    onChange={(e) => setCoach({ ...coach, name: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>

                <div className="flex flex-col text-white">
                  <label className="font-medium">Años de experiencia</label>
                  <input
                    type="number"
                    value={coach.experience}
                    onChange={(e) => setCoach({ ...coach, experience: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>

                <div className="flex flex-col text-white">
                  <label className="font-medium">Nacionalidad</label>
                  <input
                    type="text"
                    value={coach.nationality}
                    onChange={(e) => setCoach({ ...coach, nationality: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>

                <div className="flex flex-col text-white">
                  <label className="font-medium">Nombre del equipo</label>
                  <input
                    type="text"
                    value={coach.teamName}
                    onChange={(e) => setCoach({ ...coach, teamName: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg text-gray-900"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-center">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </body>
    </html>
  );
};

export default TorneoForm;
