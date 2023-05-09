AOS.init();

const dataDoEvento = new Date("May 12, 2023 !9:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaOTempo = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diasAteOEvento = Math.floor(
    distanciaAteOEvento / (1000 * 60 * 60 * 24)
  );

  const horasAteOEvento = Math.floor(
    (distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutosAteOEvento = Math.floor(
    (distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60)
  );
}, 1000);
