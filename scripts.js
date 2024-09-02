        // Datos de ejemplo
        const experiencias = [
            { puesto: "Analista BI y automatización de procesos Experiencia Cliente", empresa: "Indra Mint Sait", periodo: "2020 - Presente", descripcion: "Operar plataformas de actualización Data Integration, Arquitectura y creación de procesos de ejecución en SQL, Power BI, importaciones, procedimientos de almacenado, para la creación de reportes gerenciales con conexiones directamente de DDBB (SQL)" },
            { puesto: "Analista en Automatización", empresa: "Americas Bussines", periodo: "2018 - 2020", descripcion: "Operar plataformas de actualización Data Integration, crear procesos de ejecución en SQL, power BI y ACCESS, importaciones, procedimientos de almacenado, para la creación de reportes gerenciales con conexiones directamente de DDBB (SQL), donde se conecta con PI creando tablas, vistas, procedimientos de almacenado, depuración y tratamiento de bases de datos, entre otros realizar conexiones con office para la elaboración de informes y procesos, para ser visualizado POWER BI." }
        ];

        const educacion = [
            { titulo: "Ingeniería sistemas 3er semestre", institucion: "CUN", año: "2023" },
            { titulo: "Técnico en Programación de Software", institucion: "SENA", año: "2017" }
        ];

        // Función para añadir experiencias
        function añadirExperiencias() {
            const listaExperiencia = document.getElementById('lista-experiencia');
            experiencias.forEach(exp => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${exp.puesto}</strong> en ${exp.empresa}<br>
                                ${exp.periodo}<br>
                                ${exp.descripcion}`;
                listaExperiencia.appendChild(li);
            });
        }
        // Función para añadir educación
        function añadirEducacion() {
            const listaEducacion = document.getElementById('lista-educacion');
            educacion.forEach(edu => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${edu.titulo}</strong><br>
                                ${edu.institucion}, ${edu.año}`;
                listaEducacion.appendChild(li);
            });
        }