let display = document.querySelector("#secondsDisplay");
let button = document.querySelector("#startTimerButton");
let textInput = document.querySelector("#textInput");
let mainText = document.querySelector(".mainText");
let pointsDisplay = document.querySelector("#pointsDisplay");

//Status 0=No ha salido 1=corrrecta 2=incorrecta 3=pasada
let rosco = [
  {
    letter: "A",
    status: 0,
    display: document.querySelector("#containerA"),
    questions: [
      {
        question: "CON LA A. Mes que se encuentra entre marzo y mayo",
        answer: "ABRIL",
        selected: false,
      },
      {
        question:
          "CON LA A. Persona que se encarga del cumplimiento de las reglas en algunos deportes",
        answer: "ARBITRO",
        selected: false,
      },
      {
        question: "CON LA A. Nombre ciéntifico que recien las arañas",
        answer: "ARACNIDOS",
        selected: false,
      },
    ],
  },
  {
    letter: "B",
    status: 0,
    display: document.querySelector("#containerB"),
    questions: [
      {
        question:
          "CON LA B. Juego de azar en el que se van sacando números hasta completar un cartón",
        answer: "BINGO",
        selected: false,
      },
      {
        question: "CON LA B. Hoyo en una carretera",
        answer: "BACHE",
        selected: false,
      },
      {
        question: "CON LA B. Mamífero acuático de gran tamaño",
        answer: "BALLENA",
        selected: false,
      },
    ],
  },
  {
    letter: "C",
    status: 0,
    display: document.querySelector("#containerC"),
    questions: [
      {
        question: "CON LA C. Marioneta azul de barrio Sésamo",
        answer: "COCO",
        selected: false,
      },
      {
        question: "CON LA C. Punto medio",
        answer: "CENTRO",
        selected: false,
      },
      {
        question: "CON LA C. Alimento",
        answer: "COMIDA",
        selected: false,
      },
    ],
  },
  {
    letter: "D",
    status: 0,
    display: document.querySelector("#containerD"),
    questions: [
      {
        question: "CON LA D. Contrario a zurdo",
        answer: "DIESTRO",
        selected: false,
      },
      {
        question: "CON LA D. Contrario a izquierda",
        answer: "DERECHA",
        selected: false,
      },
      {
        question: "CON LA D. Romper, hacer añicos",
        answer: "DESTROZAR",
        selected: false,
      },
    ],
  },
  {
    letter: "E",
    status: 0,
    display: document.querySelector("#containerE"),
    questions: [
      {
        question: "CON LA E. Contrario a la salida",
        answer: "ENTRADA",
        selected: false,
      },
      {
        question: "CON LA E. Dirigente masculino de un imperio",
        answer: "EMPERADOR",
        selected: false,
      },
      {
        question: "CON LA E. Dirigente femenina de un imperio",
        answer: "EMPERATRIZ",
        selected: false,
      },
    ],
  },
  {
    letter: "F",
    status: 0,
    display: document.querySelector("#containerF"),
    questions: [
      {
        question: "CON LA F. Contrario de acierto",
        answer: "FALLO",
        selected: false,
      },
      {
        question: "CON LA F. Aparato utilzado para dar aire",
        answer: "FUELLE",
        selected: false,
      },
      {
        question: "CON LA F. Dirigente masculino en el antíguo Egipto",
        answer: "FARAON",
        selected: false,
      },
    ],
  },
  {
    letter: "G",
    status: 0,
    display: document.querySelector("#containerG"),
    questions: [
      {
        question: "CON LA G. Contrario a pequeño",
        answer: "GRANDE",
        selected: false,
      },
      {
        question: "CON LA G. Contrario a perder",
        answer: "GANAR",
        selected: false,
      },
      {
        question: "CON LA G. Educad@, de buenas maneras",
        answer: "GENTIL",
        selected: false,
      },
    ],
  },
  {
    letter: "H",
    status: 0,
    display: document.querySelector("#containerH"),
    questions: [
      {
        question: "CON LA H. Agua en estado sólido",
        answer: "HIELO",
        selected: false,
      },
      {
        question:
          "CON LA H. Fenómeno atmosférico producido a bajas temperaturas",
        answer: "HELADA",
        selected: false,
      },
      {
        question: "CON LA H. Lugar donde habita una especie",
        answer: "HABITAT",
        selected: false,
      },
    ],
  },
  {
    letter: "I",
    status: 0,
    display: document.querySelector("#containerI"),
    questions: [
      {
        question: "CON LA I. Templo cristiano",
        answer: "IGLESIA",
        selected: false,
      },
      {
        question: "CON LA I. Dar la vuelta",
        answer: "INVERTIR",
        selected: false,
      },
      {
        question: "CON LA I. Persona que no sabe sobre un determinado tema",
        answer: "IGNORANTE",
        selected: false,
      },
    ],
  },
  {
    letter: "J",
    status: 0,
    display: document.querySelector("#containerJ"),
    questions: [
      {
        question: "CON LA J. Baile regional",
        answer: "JOTA",
        selected: false,
      },
      {
        question:
          "CON LA J. Preparado farmacéutico líquido que se administra por la boca",
        answer: "JARABE",
        selected: false,
      },
      {
        question:
          "CON LA J. Protuberancia que tienen algunos mamíferos en la espalda",
        answer: "JOROBA",
        selected: false,
      },
    ],
  },
  {
    letter: "K",
    status: 0,
    display: document.querySelector("#containerK"),
    questions: [
      {
        question: "CON LA K. Unidad de medida de peso",
        answer: "KILOGRAMO",
        selected: false,
      },
      {
        question: "CON LA K. Unidad de medida de distancia",
        answer: "KILOMETRO",
        selected: false,
      },
      {
        question: "CON LA K. Salsa de tomate con aditivos",
        answer: "KETCHUP",
        selected: false,
      },
    ],
  },
  {
    letter: "L",
    status: 0,
    display: document.querySelector("#containerL"),
    questions: [
      {
        question: "CON LA L. Que no está cuerdo",
        answer: "LOCO",
        selected: false,
      },
      {
        question: "CON LA L. Contrario de corto",
        answer: "LARGO",
        selected: false,
      },
      {
        question: "CON LA L. Que no está cautivo",
        answer: "LIBRE",
        selected: false,
      },
    ],
  },
  {
    letter: "M",
    status: 0,
    display: document.querySelector("#containerM"),
    questions: [
      {
        question: "CON LA M. Figura bíblica que liberó al pueblo de israel",
        answer: "MOISES",
        selected: false,
      },
      {
        question: "CON LA M. Aquel que no está vivo",
        answer: "MUERTO",
        selected: false,
      },
      {
        question: "CON LA M. Día siguiente a hoy",
        answer: "MAÑANA",
        selected: false,
      },
    ],
  },
  {
    letter: "N",
    status: 0,
    display: document.querySelector("#containerN"),
    questions: [
      {
        question: "CON LA N. Contrario al día",
        answer: "NOCHE",
        selected: false,
      },
      {
        question:
          "CON LA N. Sustancia blanca formada por le precipitación de agua a bajas temperaturas",
        answer: "NIEVE",
        selected: false,
      },
      {
        question: "CON LA N. Contrario de siempre",
        answer: "NUNCA",
        selected: false,
      },
    ],
  },
  {
    letter: "Ñ",
    status: 0,
    display: document.querySelector("#containerÑ"),
    questions: [
      {
        question:
          "CONTIENE LA Ñ. Trozo de tela utilizado para cubrir partes del cuerpo",
        answer: "PAÑUELO",
        selected: false,
      },
      {
        question: "CON LA Ñ. Pimiento seco",
        answer: "ÑORA",
        selected: false,
      },
      {
        question: "CONTIENE LA Ñ. Golpe dado con la mano cerrada",
        answer: "PUÑETAZO",
        selected: false,
      },
    ],
  },
  {
    letter: "O",
    status: 0,
    display: document.querySelector("#containerO"),
    questions: [
      {
        question: "CON LA O. Animal que da lana",
        answer: "OBEJA",
        selected: false,
      },
      {
        question: "CON LA O. Animal que produce perlas",
        answer: "OSTRA",
        selected: false,
      },
      {
        question: "CON LA O. Fenómeno provocado por las mareas",
        answer: "OLAS",
        selected: false,
      },
    ],
  },
  {
    letter: "P",
    status: 0,
    display: document.querySelector("#containerP"),
    questions: [
      {
        question: "CON LA P. Parte final de la pierna",
        answer: "PIE",
        selected: false,
      },
      {
        question: "CON LA P. Que ocurre cada cierto tiempo",
        answer: "PERIODICO",
        selected: false,
      },
      {
        question: "CON LA P. Azúcar sin refinar",
        answer: "PANELA",
        selected: false,
      },
    ],
  },
  {
    letter: "Q",
    status: 0,
    display: document.querySelector("#containerQ"),
    questions: [
      {
        question: "CON LA Q. Sinónimo de denuncia",
        answer: "QUERELLA",
        selected: false,
      },
      {
        question: "CON LA Q. Producto sólido derivado de la leche",
        answer: "QUESO",
        selected: false,
      },
      {
        question: "CON LA Q. Prender fuego",
        answer: "QUEMAR",
        selected: false,
      },
    ],
  },
  {
    letter: "R",
    status: 0,
    display: document.querySelector("#containerR"),
    questions: [
      {
        question: "CON LA R. Roedor pequeño, de cola larga",
        answer: "RATON",
        selected: false,
      },
      {
        question: "CON LA R. Destruir",
        answer: "ROMPER",
        selected: false,
      },
      {
        question: "CON LA R. Solución",
        answer: "Remedio",
        selected: false,
      },
    ],
  },
  {
    letter: "S",
    status: 0,
    display: document.querySelector("#containerS"),
    questions: [
      {
        question: "CON LA S. Añadido de un periódico con temas particulares",
        answer: "SUPLEMENTO",
        selected: false,
      },
      {
        question: "CON LA S. Baile típico de brasil",
        answer: "SAMBA",
        selected: false,
      },
      {
        question: "CON LA S. Contrario de nunca",
        answer: "SIEMPRE",
        selected: false,
      },
    ],
  },
  {
    letter: "T",
    status: 0,
    display: document.querySelector("#containerT"),
    questions: [
      {
        question:
          "CON LA T. Catástrofe producida por aire girando a alta velocidad",
        answer: "TORNADO",
        selected: false,
      },
      {
        question: "CON LA T. Ola de proporciones descomunales",
        answer: "TSUNAMI",
        selected: false,
      },
      {
        question: "CON LA T. Glándula ubicada en el cuello",
        answer: "TIROIDES",
        selected: false,
      },
    ],
  },
  {
    letter: "U",
    status: 0,
    display: document.querySelector("#containerU"),
    questions: [
      {
        question: "CON LA U. Fruto con el que se hace el vino",
        answer: "UVA",
        selected: false,
      },
      {
        question: "CON LA U. Límite que separa dos lugares",
        answer: "UMBRAL",
        selected: false,
      },
      {
        question: "CON LA U. Juntar",
        answer: "UNIR",
        selected: false,
      },
    ],
  },
  {
    letter: "V",
    status: 0,
    display: document.querySelector("#containerV"),
    questions: [
      {
        question: "CON LA V. Que tiene ideas que antes que los demas",
        answer: "VISIONARIO",
        selected: false,
      },
      {
        question: "CON LA V. Que le presta mucha atencióna lo superficial",
        answer: "VANIDOSO",
        selected: false,
      },
      {
        question:
          "CON LA V. Pieza de tela que cubre la cabeza y cara de las novias cristianas",
        answer: "VELO",
        selected: false,
      },
    ],
  },
  {
    letter: "W",
    status: 0,
    display: document.querySelector("#containerW"),
    questions: [
      {
        question: "CON LA W. Sitio o página ubicado online",
        answer: "WEB",
        selected: false,
      },
      {
        question:
          "CON LA W. Parte de la informática que comprende los programas",
        answer: "SOFTWARE",
        selected: false,
      },
      {
        question:
          "CON LA W. Parte de la informática que comprende los componentes y piezas",
        answer: "HARDWARE",
        selected: false,
      },
    ],
  },
  {
    letter: "X",
    status: 0,
    display: document.querySelector("#containerX"),
    questions: [
      {
        question: "CON LA X. Instrumento de percusión",
        answer: "XILOFONO",
        selected: false,
      },
      {
        question: "CON LA X. Nombre de la apófisis final del esternón",
        answer: "XIFOIDES",
        selected: false,
      },
      {
        question: "CON LA X. Nombre de los alinenígenas en la película 'Alien'",
        answer: "XENOMORFO",
        selected: false,
      },
    ],
  },
  {
    letter: "Y",
    status: 0,
    display: document.querySelector("#containerY"),
    questions: [
      {
        question: "CON LA Y. Base de metal usada por herreros",
        answer: "YUNQUE",
        selected: false,
      },
      {
        question: "CON LA Y. Material utilizado para comenzar un fuego",
        answer: "YESCA",
        selected: false,
      },
      {
        question:
          "CON LA Y. Sustancia blanca utilizada para cubrir paredes o inmovilizar partes del cuerpo",
        answer: "YESO",
        selected: false,
      },
    ],
  },

  {
    letter: "Z",
    status: 0,
    display: document.querySelector("#containerZ"),
    questions: [
      {
        question: "CON LA Z. Herramienta utilizada antaño para buscar agua",
        answer: "ZAHORI",
        selected: false,
      },
      {
        question: "CON LA Z. Persona que hace zapatos",
        answer: "ZAPATERO",
        selected: false,
      },
      {
        question: "CON LA Z. Sinónimo de vestíbulo",
        answer: "ZAGUAN",
        selected: false,
      },
    ],
  },
];

let bestPlayers = [
  { username: "Pepe", points: 12 },
  { username: "Juan", points: 21 },
  { username: "Luis", points: 15 },
];

let getRandQ = () => {
  return Math.floor(Math.random() * 3);
};

let index = 0;

let gameFinished = false;

let timeLeft = parseInt(display.textContent);

let timer = (username) => {
  let restOneSecond = setInterval(() => {
    timeLeft--;
    display.textContent = timeLeft;
    if (timeLeft == 0) {
      alert("Se acabó el tiempo!");
      clearInterval(restOneSecond);
      return endGame(username);
    } else if (gameFinished) {
      clearInterval(restOneSecond);
    }
  }, 1000);
};

let endGame = (username) => {
  gameFinished = true;
  textInput.style.visibility = "hidden";
  let success = 0;
  let error = 0;
  for (letra of rosco) {
    if (letra.status == 1) {
      success++;
    } else {
      error++;
    }
  }

  bestPlayers.push({ username: username, points: success });
  bestPlayers.sort((a, b) => {
    if (a.points < b.points) {
      return 1;
    }
    if (a.points > b.points) {
      return -1;
    }
    return 0;
  });

  let finalText = `<p>Has tenido ${success} aciertos y ${error} errores. Enhorabuena ${username}!. Estás dentro de los 3 primeros?</p></br></br>`;

  //TEngo que hacer que esto salga en pantalla y no en la consola
  for (let i = 0; i < bestPlayers.length; i++) {
    finalText =
      finalText +
      `<p>${i + 1}º: ${bestPlayers[i].username} con ${
        bestPlayers[i].points
      } puntos!</p>`;
  }

  mainText.innerHTML = finalText;
};

let abandon = (username) => {
  let success = 0;
  let error = 0;
  for (letra of rosco) {
    if (letra.status == 1) {
      success++;
    } else {
      error++;
    }
  }
  mainText.textContent = `Has tenido ${success} aciertos y ${error} errores. Recuerda que las no contestadas contarán como errores y que para entrar en el ranking, tienes que acabar la partida`;
};

let pasapalabra = () => {
  let username = textInput.value;
  button.style.visibility = "hidden";
  setTimeout(timer(username), 1);
  textInput.value = "";
  textInput.placeholder = "";

  let loop = async () => {
    //Comprueba si la letra ha sido respondida (status 1 o 2), si lo ha sido, le suma uno al index, y así hasta que no esté respondida, entonces acaba
    console.log(
      "--------------------------------------------------------------"
    );
    console.log("Checking this index:", index);
    let checkIfAnswered = () => {
      if (rosco[index].status == 1 || rosco[index].status == 2) {
        index++;
        if (index <= rosco.length - 1) {
          checkIfAnswered();
        } else {
          index = 0;
          checkIfAnswered();
        }
      }
    };
    checkIfAnswered();

    //Comprueba si hay alguna letra con pregunta seleccionada. Si no hay ninguna, selecciona una aleatoriamente.
    console.log("Index working with", index);

    let questionIndex;
    if (rosco[index].questions.some((x) => x.selected == true)) {
      let question = rosco[index].questions.find((x) => x.selected == true);
      questionIndex = rosco[index].questions.indexOf(question);
    } else {
      questionIndex = getRandQ();
    }
    rosco[index].questions[questionIndex].selected = true;

    //Muestra la pregunta
    mainText.textContent = rosco[index].questions[questionIndex].question;
    rosco[index].display.classList.toggle("selected");

    //Espera a que el usuario presione la tecla enter
    let getResponse = () => {
      return new Promise((resolve) => {
        textInput.addEventListener("keydown", onKeyHandler);
        function onKeyHandler(e) {
          if (e.keyCode === 13) {
            resolve(textInput.value.toUpperCase());
          }
        }
      });
    };
    const response = await getResponse();

    //Finaliza la letra, suma uno al index y comprueba si el rosco está sin acabar
    let finishLetter = () => {
      //Pone en blanco el input
      textInput.value = "";

      //Comprueba si el rosco está sin acabar y decide en consecuencia
      let isRoscoUnfinished = rosco.some((x) => x.status == 0);
      let lettersPending = rosco.some((x) => x.status == 3);

      if (index == rosco.length - 1 && (isRoscoUnfinished || lettersPending)) {
        index = 0;
        console.log(index);
        loop();
      } else if (
        index < rosco.length - 1 &&
        (isRoscoUnfinished || lettersPending)
      ) {
        index++;
        loop();
      } else {
        endGame(username);
      }
    };

    //Comprueba la respuesta y aplica estilos
    if (response == "PASAPALABRA" || response == "") {
      rosco[index].status = 3;
      rosco[index].display.classList.toggle("selected");
      if (!rosco[index].display.classList.contains("pending")) {
        rosco[index].display.classList.toggle("pending");
      }
      finishLetter();
    } else if (response == "END") {
      gameFinished = true;
      return abandon(username);
    } else if (response == rosco[index].questions[questionIndex].answer) {
      rosco[index].status = 1;
      if (rosco[index].display.classList.contains("pending")) {
        rosco[index].display.classList.toggle("pending");
      }
      rosco[index].display.classList.toggle("selected");
      rosco[index].display.classList.toggle("success");

      alert("CORRECTO!!");
      pointsDisplay.textContent = parseInt(pointsDisplay.textContent) + 1;
      finishLetter();
    } else {
      rosco[index].status = 2;
      if (rosco[index].display.classList.contains("pending")) {
        rosco[index].display.classList.toggle("pending");
      }
      rosco[index].display.classList.toggle("selected");
      rosco[index].display.classList.toggle("error");

      alert(
        `ERROR! La respuesta era '${rosco[index].questions[questionIndex].answer}'`
      );
      finishLetter();
    }
  };
  loop();
};

button.addEventListener("click", pasapalabra);
