export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaTrue = diasSemana.indexOf(diaAgora) !== -1;
  const horarioTrue =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaTrue && horarioTrue) {
    funcionamento.classList.add("aberto");
  }
}
