function countdown(endDate) {
    // Obtener la fecha y hora actual
    const now = new Date().getTime();
  
    // Calcular la diferencia en milisegundos entre la fecha actual y la fecha final
    const difference = endDate - now;
  
    // Calcular los días, horas, minutos y segundos restantes
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    // Devolver el resultado como un objeto
    return {
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  // Fecha objetivo para la cuenta regresiva (puedes cambiarla según tus necesidades)
  const targetDate = new Date("2023-12-16T20:00:00").getTime();
  
  // Función para mostrar la cuenta regresiva
  function displayCountdown() {
    const countdownContainer = document.getElementById("countdown");
  
    // Obtener el resultado de la cuenta regresiva
    const { days, hours, minutes, seconds } = countdown(targetDate);
  
    // Verificar si el ancho de la pantalla es menor a 720 píxeles
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 720;
  
    // Mostrar el resultado en el contenedor
    countdownContainer.innerHTML = `
      ${isMobile ? 
      `<h4>Faltan</h4>
        <br> 
          <table>
            <tr>
              <th>Días</th>
              <th>Horas</th>
            </tr>
            <tr>
              <th>${days}</th>
              <th>${hours}</th>
            </tr>
            <tr>
              <th>Minutos</th>
              <th>Segundos</th>
            </tr>
            <tr>
              <th>${minutes}</th>
              <th>${seconds}</th>
            </tr>
          </table>` : 
      `<h4>Faltan</h4>
        <br> 
          <table>
            <tr>
              <th>Días</th>
              <th>Horas</th>
              <th>Minutos</th>
              <th>Segundos</th>
            </tr>
            <tr>
              <th>${days}</th>
              <th>${hours}</th>
              <th>${minutes}</th>
              <th>${seconds}</th>
            </tr>
          </table>
      `}
    `;
  }
  
  // Actualizar la cuenta regresiva cada segundo
  setInterval(displayCountdown, 1000);
  