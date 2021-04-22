export function convertDurationToTimeString(duration: number) {
  // convertendo segundos para horas,
  // retornando o menor número arredondado
  const hours = Math.floor(duration / 3600);

  // convertendo um numero de segundos para minutos,
  // dividindo os segundos que sobram por 60, encontra-se o número dos minutos
  const minutes = Math.floor((duration % 3600) / 60);

  // calculando os segundos
  const seconds = duration % 60;

  // Formatando o retorno
  /* 
    padStart ->
    formatando 2 caracteres,
    adicionando o "0" caso alguma unidade retorne apenas um caractere.
  */
  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, "0"))
    .join(':');

  return timeString;
}