const ramos = [
  // 1° Semestre
  { nombre: "Química General I", codigo: "DQUI1045", depende: [] },
  { nombre: "Biología Celular", codigo: "DBIO1091", depende: [] },
  { nombre: "Antropología", codigo: "FORI0001", depende: [] },
  { nombre: "Matemática", codigo: "DCEX0002", depende: [] },
  { nombre: "Introducción a las Ciencias Farmacéuticas", codigo: "QYFAA001", depende: [] },
  { nombre: "Integrado Habilidades Científicas para el QF", codigo: "QYFAA002", depende: [] },

  // 2° Semestre
  { nombre: "Química General II", codigo: "DQUI1046", depende: ["DQUI1045"] },
  { nombre: "Cálculo Diferencial", codigo: "DCEX0003", depende: ["DCEX0002"] },
  { nombre: "Física", codigo: "DCEX0019", depende: ["DCEX0002"] },
  { nombre: "Bioestadística", codigo: "DCEX0005", depende: ["DCEX0002"] },
  { nombre: "Fundamentos del Quehacer Farmacéutico", codigo: "QYFAB001", depende: ["QYFAA001"] },
  { nombre: "Ética", codigo: "FORI0002", depende: ["FORI0001"] },

  // 3° Semestre
  { nombre: "Química Analítica Cualicuantitativa", codigo: "DQUI1047", depende: ["DQUI1046"] },
  { nombre: "Fisicoquímica", codigo: "DQUI1053", depende: ["DQUI1046"] },
  { nombre: "Fisiología Integrada", codigo: "DBIO1085", depende: ["DBIO1091"] },
  { nombre: "Química Orgánica", codigo: "DQUI1052", depende: ["DQUI1045"] },
  { nombre: "Salud Poblacional", codigo: "DSPU0012", depende: [] },
  { nombre: "Gestión y habilidades para la vida", codigo: "ELECDGEE01", depende: [] },

  // 4° Semestre
  { nombre: "Epidemiología", codigo: "DSPU0014", depende: ["DSPU0012"] },
  { nombre: "Análisis Químico Instrumental", codigo: "DQUI1054", depende: ["DQUI1047"] },
  { nombre: "Fisiopatología", codigo: "DMOR0019", depende: ["DBIO1085"] },
  { nombre: "Bioquímica General", codigo: "DBIO1094", depende: [] },
  { nombre: "Química Orgánica Avanzada", codigo: "DQUI1055", depende: ["DQUI1052"] },
  { nombre: "Hito evaluativo integrativo", codigo: "QYFAD001", depende: ["DQUI1046", "DQUI1047", "DQUI1053", "DQUI1052", "DBIO1085"] },

  // 5° Semestre
  { nombre: "Farmacología I", codigo: "DBIO1087", depende: ["DMOR0019"] },
  { nombre: "Microbiología General", codigo: "DBIO1095", depende: ["DBIO1094"] },
  { nombre: "Salud Digital", codigo: "FACU0004", depende: [] },
  { nombre: "Tecnología Farmacéutica I", codigo: "QYFAE001", depende: ["DQUI1053"] },
  { nombre: "Química Farmacéutica I", codigo: "QYFAE002", depende: ["DQUI1055"] },
  { nombre: "Persona y Sociedad", codigo: "FORI0003", depende: ["FORI0002"] },

  // 6° Semestre
  { nombre: "Farmacología II", codigo: "DBIO1096", depende: ["DBIO1087"] },
  { nombre: "Bioética", codigo: "DEBI0002", depende: [] },
  { nombre: "Tecnología Farmacéutica II", codigo: "QYFAF001", depende: ["QYFAE001"] },
  { nombre: "Química Farmacéutica II", codigo: "QYFAF002", depende: ["QYFAE002"] },
  { nombre: "Práctica I: Rol del químico farmacéutico", codigo: "PRACTICA1", depende: ["DBIO1096"] },

  // 7° Semestre
  { nombre: "Metodología de la Investigación", codigo: "DSPU0011", depende: [] },
  { nombre: "Control de la calidad farmacéutica", codigo: "QYFAG003", depende: [] },
  { nombre: "Farmacognosia y Fitoterapia", codigo: "QYFAG002", depende: ["QYFAF002"] },
  { nombre: "Farmacia Clínica y Atención Farmacéutica I", codigo: "QYFAG001", depende: [] },
  { nombre: "Legislación farmacéutica", codigo: "QYFAG004", depende: ["QYFAF001"] },
  { nombre: "Electivo II: Formación integral", codigo: "ELECFORI02", depende: [] },

  // 8° Semestre
  { nombre: "Toxicología", codigo: "QYFAH001", depende: ["QYFAG002"] },
  { nombre: "Farmacia Clínica y Atención Farmacéutica II", codigo: "QYFAH002", depende: ["QYFAG002"] },
  { nombre: "Biofarmacia", codigo: "QYFAH003", depende: ["QYFAG003"] },
  { nombre: "Práctica II: Farmacia Comunitaria", codigo: "QYFAH004", depende: ["QYFAG004"] },
  { nombre: "Hito evaluativo integrativo interprofesional", codigo: "QYFAH005", depende: ["DBIO1096", "QYFAG001"] },
  { nombre: "Farmacia Asistencial", codigo: "QYFAH006", depende: [] },

  // 9° Semestre
  { nombre: "Gestión y Marketing Farmacéutico", codigo: "QYFAI001", depende: [] },
  { nombre: "Electivo III: Formación integral", codigo: "ELECFORI03", depende: [] },
  { nombre: "Electivo I", codigo: "ELECQYFA01", depende: ["QYFAH004", "QYFAH003"] },
  { nombre: "Electivo II", codigo: "ELECQYFA02", depende: ["QYFAH004", "QYFAH003"] },
  { nombre: "Electivo III", codigo: "ELECQYFA03", depende: ["QYFAH004", "QYFAH003"] },
  { nombre: "Farmacovigilancia y Tecnovigilancia", codigo: "QYFAI002", depende: [] },

  // 10° Semestre
  { nombre: "Internado", codigo: "INTERNADO", depende: ["QYFAH004", "QYFAI001"] }
];

// Cargar malla
function cargarMalla() {
  const contenedor = document.getElementById("malla");

  // Añadir título de semestre según progresión
  let semestre = 1;
  let index = 0;
  for (let i = 0; i < ramos.length; i++) {
    if (index === 0) {
      const titulo = document.createElement("div");
      titulo.className = "semestre";
      titulo.textContent = `Semestre ${semestre}`;
      contenedor.appendChild(titulo);
    }

    const ramo = document.createElement("div");
    ramo.className = "ramo";
    ramo.id = ramos[i].codigo;
    ramo.textContent = `${ramos[i].nombre} (${ramos[i].codigo})`;
    contenedor.appendChild(ramo);

    // Si no tiene dependencias, desbloquear
    if (ramos[i].depende.length === 0) {
      ramo.classList.add("inicial");
      ramo.onclick = () => aprobarRamo(ramos[i].codigo);
    }

    index++;
    // cambiar de semestre manualmente cada cierta cantidad si quieres
    if (index === 6) { semestre++; index = 0; }
  }
}

// Aprobar ramo y desbloquear dependientes
function aprobarRamo(codigo) {
  const ramo = document.getElementById(codigo);
  if (!ramo.classList.contains("aprobado")) {
    ramo.classList.add("aprobado");
    ramo.onclick = null;

    // Desbloquear los que dependen de este
    ramos.forEach(r => {
      if (r.depende.includes(codigo)) {
        // Verificar si todos sus requisitos están aprobados
        const requisitosCumplidos = r.depende.every(req => document.getElementById(req).classList.contains("aprobado"));
        if (requisitosCumplidos) {
          const ramoDesbloquear = document.getElementById(r.codigo);
          ramoDesbloquear.classList.add("inicial");
          ramoDesbloquear.onclick = () => aprobarRamo(r.codigo);
        }
      }
    });
  }
}

window.onload = cargarMalla;
