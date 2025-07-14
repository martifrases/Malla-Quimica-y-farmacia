const ramos = {
  // Formato: "ID": {nombre, requisitos: [IDs]}
  "DQUI1045": { nombre: "Química General I", req: [], desbloquea: ["DQUI1046"] },
  "DBIO1091": { nombre: "Biología Celular", req: [], desbloquea: ["DBIO1085"] },
  "FORI0001": { nombre: "Antropología", req: [], desbloquea: ["FORI0002"] },
  "DCEX0002": { nombre: "Matemática", req: [], desbloquea: ["DCEX0003", "DCEX0019", "DCEX0005"] },
  "QYFAA001": { nombre: "Introducción a las Ciencias Farmacéuticas", req: [], desbloquea: ["QYFAB001"] },
  "QYFAA002": { nombre: "Integrado Habilidades Científicas", req: [] },
  "DQUI1046": { nombre: "Química General II", req: ["DQUI1045"], desbloquea: ["DQUI1047", "DQUI1053"] },
  "DCEX0003": { nombre: "Cálculo Diferencial", req: ["DCEX0002"] },
  "DCEX0019": { nombre: "Física", req: ["DCEX0002"] },
  "DCEX0005": { nombre: "Bioestadística", req: ["DCEX0002"] },
  "QYFAB001": { nombre: "Fundamentos del Quehacer Farmacéutico", req: ["QYFAA001"] },
  "FORI0002": { nombre: "Ética", req: ["FORI0001"], desbloquea: ["FORI0003"] },
  "DQUI1047": { nombre: "Química Analítica Cualicuantitativa", req: ["DQUI1046"], desbloquea: ["DQUI1054"] },
  "DQUI1053": { nombre: "Fisicoquímica", req: ["DQUI1046"], desbloquea: ["QYFAE001"] },
  "DBIO1085": { nombre: "Fisiología Integrada", req: ["DBIO1091"], desbloquea: ["DMOR0019"] },
  "DQUI1052": { nombre: "Química Orgánica", req: [], desbloquea: ["DQUI1055"] },
  "DSPU0012": { nombre: "Salud Poblacional", req: [], desbloquea: ["DSPU0014"] },
  "ELECDGEE01": { nombre: "Gestión y Habilidades Vida", req: [] },
  "DSPU0014": { nombre: "Epidemiología", req: ["DSPU0012"] },
  "DQUI1054": { nombre: "Análisis Químico Instrumental", req: ["DQUI1047"] },
  "DMOR0019": { nombre: "Fisiopatología", req: ["DBIO1085"], desbloquea: ["DBIO1087"] },
  "DBIO1094": { nombre: "Bioquímica General", req: [], desbloquea: ["DBIO1095"] },
  "DQUI1055": { nombre: "Química Orgánica Avanzada", req: ["DQUI1052"], desbloquea: ["QYFAE002"] },
  "QYFAD001": { nombre: "Hito Evaluativo Integrativo", req: ["2Aprobados", "3Aprobados"] },
  "DBIO1087": { nombre: "Farmacología I", req: ["DMOR0019"], desbloquea: ["DBIO1096"] },
  "DBIO1095": { nombre: "Microbiología General", req: ["DBIO1094"] },
  "FACU0004": { nombre: "Salud Digital", req: [] },
  "QYFAE001": { nombre: "Tecnología Farmacéutica I", req: ["DQUI1053"], desbloquea: ["QYFAF001"] },
  "QYFAE002": { nombre: "Química Farmacéutica I", req: ["DQUI1055"], desbloquea: ["QYFAF002"] },
  "FORI0003": { nombre: "Persona y Sociedad", req: ["FORI0002"] },
  // Puedes continuar añadiendo el resto del mapa aquí...
};

const aprobados = new Set();

function crearMalla() {
  const contenedor = document.getElementById("malla");

  // Agrupar por semestre según nombre (rústico, puedes hacer un sistema más limpio si quieres)
  const ordenSemestres = [
    { nombre: "1° Semestre", ramos: ["DQUI1045", "DBIO1091", "FORI0001", "DCEX0002", "QYFAA001", "QYFAA002"] },
    { nombre: "2° Semestre", ramos: ["DQUI1046", "DCEX0003", "DCEX0019", "DCEX0005", "QYFAB001", "FORI0002"] },
    { nombre: "3° Semestre", ramos: ["DQUI1047", "DQUI1053", "DBIO1085", "DQUI1052", "DSPU0012", "ELECDGEE01"] },
    { nombre: "4° Semestre", ramos: ["DSPU0014", "DQUI1054", "DMOR0019", "DBIO1094", "DQUI1055", "QYFAD001"] },
    { nombre: "5° Semestre", ramos: ["DBIO1087", "DBIO1095", "FACU0004", "QYFAE001", "QYFAE002", "FORI0003"] }
  ];

  ordenSemestres.forEach(sem => {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";
    semestreDiv.innerHTML = `<h2>${sem.nombre}</h2>`;

    sem.ramos.forEach(cod => {
      const ramo = document.createElement("div");
      ramo.className = "ramo";
      ramo.id = cod;
      ramo.innerText = `${ramos[cod].nombre}`;
      ramo.onclick = () => aprobarRamo(cod);
      semestreDiv.appendChild(ramo);
    });

    contenedor.appendChild(semestreDiv);
  });

  actualizarRamos();
}

function aprobarRamo(id) {
  if (!document.getElementById(id).classList.contains("activo")) return;
  aprobados.add(id);
  document.getElementById(id).classList.add("aprobado");
  actualizarRamos();
}

function actualizarRamos() {
  for (let id in ramos) {
    const ramo = ramos[id];
    const div = document.getElementById(id);
    if (!div) continue;

    const requisitosCumplidos = ramo.req.every(req => {
      if (req === "2Aprobados") return contarAprobados(1) === 6;
      if (req === "3Aprobados") return contarAprobados(2) === 6;
      return aprobados.has(req);
    });

    if (requisitosCumplidos || ramo.req.length === 0) {
      div.classList.add("activo");
    }
  }
}

function contarAprobados(semestreIndex) {
  const semestres = [
    ["DQUI1045", "DBIO1091", "FORI0001", "DCEX0002", "QYFAA001", "QYFAA002"],
    ["DQUI1046", "DCEX0003", "DCEX0019", "DCEX0005", "QYFAB001", "FORI0002"],
    ["DQUI1047", "DQUI1053", "DBIO1085", "DQUI1052", "DSPU0012", "ELECDGEE01"]
  ];
  return semestres[semestreIndex].filter(r => aprobados.has(r)).length;
}

crearMalla();

