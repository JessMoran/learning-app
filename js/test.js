const test =[
  {'information':{
    'description': "Los ESTILOS DE APRENDIZAJE son las preferencias o tendencias generales que una persona utiliza como método propio para aprender. Son estrategias que, de alguna manera, utilizamos cada uno de nosotros para aprender.",
    'instructions': "Escoge la respuesta que mejor explique tu preferencia"
    }
  },
  {'questions':{
   'question':"Imagina que cocinarás algo especial para tu familia, ¿Qué harías?",
   'answers':{
        'a':"Preguntar a amigos por sugerencias." ,
        'v':"Ver videos o fotos que te den ideas.",
        'r':"Usar un libro de cocina donde sabes que hay una buena receta.",
        'k':"Cocinar algo que sabes hacer."
      },
    'question':"Cuando asistes a algun restaurante al querer escoger un alimento o bebida ¿Qué sueles hacer?",
    'answers':{
          'a':"Escuchar al mesero o pedir que amigos recomienden opciones." ,
          'v':"Mirar lo qué otros comen o mirar dibujos de cada platillo.",
          'r':"Escoger de las descripciones en el menú.",
          'k':"Escoger algo que has pedido antes."
        },

    'question':"Aparte del precio, qué más te influenciaría para comprar un libro de ciencia ficción",
    'answers':{
          'a': "Un amigo habla acerca de él y te lo recomienda." ,
          'k':"Tienes historias reales, experiencias y ejemplos.",
          'r':"Leyendo rápidamente partes de él.",
          'v':"El diseño de la pasta es atractivo."
        },

    'question':"Cuando terminas un curso o examen, te gustaría tener alguna retroalimentación ¿De que forma?",
     'answers':{
        'r':"Usando descripciones escritas de los resultados" ,
        'k':"Usando ejemplos de lo que has hecho.",
        'v':"Usando gráficos que muestran lo que has logrado.",
        'a':"De alguien que te lo describa."
      },

    'question':"Si tuvieras un problema en la rodilla, preferirías que el doctor:",
     'answers':{
        'k':"Use un modelo de plástico y te enseñe lo que está mal" ,
        'r':"Te de una página de internet o algo para leer",
        'a':"Te describa lo qué está mal",
        'v':"Te enseñe un diagrama lo que está mal"
      },

    'question':"Si estuvieras a punto de comprar una cámara digital o celular.¿Aparte del precio qué más influirá en tomar tu decisión?",
    'answers':{
        'k':"Probarlo" ,
        'v':"Es un diseño moderno y se ve bien.",
        'r':"Leer los detalles acerca de sus características.",
        'a':"El vendedor te informa acerca de sus características."
      },

    'question':"¿Qué haces cuando no sabes escribir bien una palabra?",
    'answers':{
        'k':"Escribir ambas palabras en un papel y escojo una." ,
        'a':"Pienso cómo suena cada palabra y escojo una.",
        'r':"Busco la palabra en un diccionario.",
        'v':"Veo la palabra en mi mente y escojo según como la veo."
      },

    'question':"Me gustan páginas de Internet que tienen:",
    'answers':{
        'r':"Interesantes descripciones escritas, listas y explicaciones." ,
        'v':"Diseño interesante y características visuales.",
        'k':"Cosas que con un click pueda cambiar o examinar.",
        'a':"Canales donde puedo oír música, programas de radio o entrevistas."
      },

    'question':"Imagina que estas planeando unas vacaciones para un grupo y quisieras que te den alguna observación acerca del plan. ¿Qué harías?",
    'answers':{
        'v':"Usarias un mapa o página de Internet para mostrarles los lugares." ,
        'a':"Describe algunos de los puntos sobresalientes.",
        'r':"Les das una copia del itinerario impreso.",
        'k':"Llamarles por teléfono o mandar mensaje por correo electrónico."
      },

    'question':"En una página de Internet estas buscando cómo aprender a tomar fotos con tu cámara digital nueva. Usted le gustaría tener:",
    'answers':{
        'a':"Una oportunidad de hacer preguntas acerca de la cámara y sus características." ,
        'v':"Esquemas o diagramas que muestran la cámara y la función de cadaparte.",
        'k':"Ejemplos de buenas y malas fotos y cómo mejorarlas.",
        'r':"Aclarar las instrucciones escritas con listas y puntos sobre qué hacer."
      },

    'question':"Usted quiere aprender un programa nuevo, habilidad o juego en una computadora. Usted qué hace:",
    'answers':{
        'a':"Hablar con gente que sabe acerca del programa." ,
        'r':"Leer las instrucciones que vienen en el programa.",
        'v':"Seguir los esquemas en el libro que acompaña el programa.",
        'k':"Use los controles o el teclado."
      },

    'question':"Estás ayudando a alguien que quiere ir al aeropuerto ¿Qué harias?",
    'ansewers':{
        'k':"Va con la persona." ,
        'r':"Anote las direcciones en un papel.",
        'a':"Le dices las direcciones.",
        'v':"Le dibujas un croquis"
      },

    'question':"Recuerda un momento en tu vida en que tú hayas aprendió a hacer algo nuevo. Evitar escoger una destreza física (andar en bici) ¿Cómo aprendizte mejor?",
    'answers':{
        'k':"Viendo una demostración." ,
        'r':"Con instrucciones escritas, en un manual o libro de texto.",
        'a':"Escuchando a alguien explicarlo o haciendo preguntas.",
        'v':"Con esquemas y diagramas o pistas visuales."
      },

    'question':"Prefieres un maestro o conferencista que use:",
    'answers':{
        'k':"Demostraciones, modelos o sesiones prácticas." ,
        'r':"Folletos, libros o lecturas",
        'v':"Diagramas, esquemas o gráficos.",
        'a':"Preguntas y respuestas, pláticas y oradores invitados."
      },

    'question':" Si un grupo de turistas quiere aprender acerca de parques o reservas naturales en su área. ¿Qué harías para ayudarlos?",
    'answers':{
        'k':"Los acompañas a un parque o reserva natural." ,
        'r':"Le das un libro o folleto acerca de parques o reservas naturales.",
        'a':"Le das una plática acerca de parques o reservas naturales.",
        'v':"Le muestra imágenes de Internet, fotos o libros con dibujos."
      },

    'question':"Si tuvieras que hacer un discurso para una conferencia u ocasión especial ¿Qué harias?",
    'answers':{
        'r':"Escribir el discurso y aprendérselo leyéndolo varias veces." ,
        'k':"Reunir muchos ejemplos e historias para hacer el discurso verdadero y práctico.",
        'a':"Escribir algunas palabras claves y practicar el discurso repetidas veces.",
        'v':"Hacer diagramas o esquemas que te ayuden a explicar las cosas."
      }
    }
  }

];
