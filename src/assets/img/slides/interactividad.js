$(document).ready(function() {
    
    arrastrarElemento();
    validarImagenes();
    arrastrarImagen();
    arrastrarImagen2();
    sistemaVotacion();
    pausarMultimedia();
    mediaIdioma();
    // tour();
    //funcionalidad para hacer zoom en la imagen (SLIDE 12)
    $('.zoom').magnify();

    //Actualizar el progreso del curso cada vez que se avanza en los slides
    $("#next").on('click', function() {
        updateProgress();
    });

    $("#actividad_1").on("click", function() {
        trackingManager.startTracking("actividad_1");
        trackingManager.stopTracking("actividad_1");
    });

    $("#actividad_3").on("click", function() {
        trackingManager.startTracking("actividad_3");
        trackingManager.stopTracking("actividad_3");
    });
    
    $("#clave1Btn").on("click", function() {
        trackingManager.startTracking("clave1Btn");
        trackingManager.stopTracking("clave1Btn");
    });

    $("#clave2Btn").on("click", function() {
        trackingManager.startTracking("clave2Btn");
        trackingManager.stopTracking("clave2Btn");
    });

    $("#clave3Btn").on("click", function() {
        trackingManager.startTracking("clave3Btn");
        trackingManager.stopTracking("clave3Btn");
    });

    $("#actividad_6").on("click", function() {
        trackingManager.startTracking("actividad_6");
        trackingManager.stopTracking("actividad_6");
    });

    $("#actividad_7").on("click", function() {
        trackingManager.startTracking("actividad_7");
        trackingManager.stopTracking("actividad_7");
    });

    $("#actividad_8").on("click", function() {
        trackingManager.startTracking("actividad_8");
        trackingManager.stopTracking("actividad_8");
    });

    $("#actividad_9").on("click", function() {
        trackingManager.startTracking("actividad_9");
        trackingManager.stopTracking("actividad_9");
    });


    //Comportamiento del slide 2, imagen con zoom
    const imageContainer = document.querySelector(".image-container");
    historieta01();
    
});

function historieta01(){
    var image = document.getElementById('img_slide_07');
    var audio  = document.getElementById('audio_slide_07');
    
    toggleSwitch.addEventListener("change", function() {
        if (this.checked) {
            audio.src = "assets/audio/slide_07_historieta_ingles.mp3";
        }else{
            audio.src = "assets/audio/slide_07_historieta.mp3";
        }

        image.src = "assets/img/historieta_01.png";
        actualizarImagen();
    });

    function actualizarImagen(){
        var currentTime = audio.currentTime;
        console.log(currentTime);
        if (currentTime >= 6) {
            image.src = "assets/img/historieta_02.png";
        } 
        if (currentTime >= 28) {
            image.src = "assets/img/historieta_03.png";
        }
        if (currentTime >= 34) {
            image.src = "assets/img/historieta_04.png";
        }
        if (currentTime >= 45) {
            image.src = "assets/img/historieta_05.png";
        }
        if (currentTime >= 68) {
            image.src = "assets/img/historieta_06.png";
        }
        if (currentTime >= 99) {
            image.src = "assets/img/historieta_07.png";
        }
        if (currentTime >= 110) {
            image.src = "assets/img/historieta_08.png";
        }
        if (currentTime >= 131) {
            image.src = "assets/img/historieta_09.png";
        }
        if (currentTime >= 144) {
            image.src = "assets/img/historieta_10.png";
        }
        if (currentTime >= 168) {
            image.src = "assets/img/historieta_11.png";
        }
    }

    audio.addEventListener("timeupdate", function() {
        actualizarImagen();
    });

    audio.addEventListener("seeked", function () {
        actualizarImagen();
    });

    
}



//constantes para facilitar el guardado del progreso
var userId   = $('#userId').val();
var courseId = $('#unique_course_id').val();
var module_id = $('#module_id').val(); 
var fullName = $('#fullName').val();

function validarImagenes() {
    const imagenesCorrectas = {
        "SALUD": [""],
        "MEDIO AMBIENTE": ["sl05img13.png"],
        "FISICOS": ["sl05img15.png", "sl05img16.png"],
    };

    // Objeto para realizar un seguimiento de las selecciones del usuario
    const seleccionados = {};

    // Agrega eventos de clic a las imágenes
    const imagenes = document.querySelectorAll(".inner-box-act img");
    imagenes.forEach((imagen) => {
        imagen.addEventListener("click", () => {
            const tema = imagen.parentElement.parentElement.querySelector("h4").textContent;
            const nombreArchivo = obtenerNombreArchivo(imagen.src);

            // Si la imagen ya está seleccionada, desmárcala
            if (seleccionados[nombreArchivo]) {
                delete seleccionados[nombreArchivo];
                imagen.style.border = "";
            } else {
                seleccionados[nombreArchivo] = tema;
                imagen.style.border = "5px solid blue";
            }
        });
    });

    // Agrega un evento de clic al botón de validación
    const validarBtn = document.getElementById("validarBtn");
    
    validarBtn.addEventListener("click", () => {
        let imagenCorrecta = 0;
        let imagenesIncorrectas = 0;
        for (const nombreArchivo in seleccionados) {
            const tema = seleccionados[nombreArchivo];
            const nombreArchivoCorrecto = imagenesCorrectas[tema];
            const imagen = document.querySelector(`.inner-box-act img[src$="${nombreArchivo}"]`);

            if (nombreArchivoCorrecto && nombreArchivoCorrecto.includes(nombreArchivo)) {
                imagen.style.border = "6px solid green"; // Borde verde si es correcta
                imagenCorrecta++;
            } else {
                imagen.style.border = "6px solid red"; // Borde rojo si es incorrecta
                imagenesIncorrectas++;
            }
        }

        let correct = imagenCorrecta;
        let total = 3;
        let percentage = (imagenCorrecta / total) * 100;;
        //activit_id se usa para controlar cada actividad dentro del módulo y del número de actividades dentro del curso
        let activity_id = 1;

        trackingManager_activities.getProgress(userId, courseId, module_id, fullName, percentage, activity_id);
        getProgressActivity(userId, courseId, module_id, fullName, percentage, activity_id, correct, total);
        

    });

    // Agrega un evento de clic al botón de limpiar
    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", () => {
        for (const nombreArchivo in seleccionados) {
            const imagen = document.querySelector(`.inner-box-act img[src$="${nombreArchivo}"]`);
            imagen.style.border = ""; // Elimina el borde
            delete seleccionados[nombreArchivo]; // Elimina la selección
        }
    });
}

function tour(){
    var hasSeenTour = getCookie("hasSeenTourEmeraldM6");

    if (!hasSeenTour) {
         var intro = introJs();
           intro.setOptions({
               tooltipClass: 'custom-tooltip', 
               highlightClass: 'custom-highlight', 
               //showProgress: true,
               titleClass: 'custom-tour-title',
               nextLabel: 'Siguiente',
               prevLabel: 'Atrás',
               doneLabel: 'Terminar',
               steps: [
               
                   {
                       title: '<h4 class="custom-tour-title">¡Bienvenidas y Bienvenidos! </h4>',
                       intro: "Este es el tour de este curso que te mostrará los elementos clave que debes navegar para una correcta ejecución de tu formación virtual"
                   },
                   {
                       element: "#englishHints",
                       intro: "Si activas este switch podras escuchar todos los audios del curso en ingles"
                   },
                   {
                       element: "#home",
                       intro: "Con este botón puedes regresar al inicio del curso"
                   },
                   {
                       element: "#slide_progress",
                       intro: "Aquí podrás ver en el slide que te encuentras ubicado"
                   },
                   {
                       element: "#menu_bar",
                       intro: "Con este botón puedes desplegar el menu de opciones"
                   },
                   {
                       element: "#progreso",
                       intro: "En esta sección puedes ver el progreso que llevas en el curso"
                   },
                   {
                       element: "#presentacion",
                       intro: "Con este botón puedes navegar hasta la presentación del curso"
                   },
                   {
                       element: "#contenido",
                       intro: "Con este botón podrás navegar hasta el contenido propio del curso"
                   },
                   {
                       element: "#evaluacion",
                       intro: "Con este botón podrás navegar hasta la ventana de la evaluación si has completado el % mínimo de progreso del curso"
                   },
                   {
                       element: "#tutorial",
                       intro: "Con este botón podrás navegar hasta un video tutorial  del curso"
                   },
                   {
                       element: "#homember",
                       intro: "Con este botón podrás navegar a tu ruta de aprendizaje, con tu lista de cursos"
                   },
                   {
                       element: "#logout",
                       intro: "Con este botón podrás cerrar la sesión"
                   },
                   {
                       element: "#estadisticas",
                       intro: "Aqui podrás ver tus estadisticas generales y especificas",
                       position: "left"
                   }
               ]
           });
       
           // Evita que el menú se cierre al hacer clic en cualquier parte de la pantalla
           $(document).click(function(event) {
               var menuIcon = $(".fas.fa-bars");
               if (!$(".fas.fa-bars").is(event.target) && $(".fas.fa-bars").has(event.target).length === 0) {
                   // Evita que el menú se cierre al hacer clic en cualquier parte de la pantalla
                   if (menuIcon.length > 0) {
                       var clickEvent = new MouseEvent("click", {
                       bubbles: true,
                       cancelable: true,
                       view: window
                       });
                       menuIcon[0].dispatchEvent(clickEvent);
                   }
               }
           });

           intro.onexit(function() {
               // Establecer la cookie para indicar que el usuario ha realizado el tour
               setCookie("hasSeenTourEmeraldM6", "true", 365); // La cookie expira en 365 días
               location.reload();
           });
           intro.start();
    }
}

function updateProgress(){
    let code_course = $('#course_code').val();
    
    $.ajax(
    {
        type: "POST",
        url: "../../functions_helpers.php?progress_courses",
        dataType: "json",
        data:
        {
            code_course: code_course,
            module_id: module_id
        },
        success: function(result)
        {
            let courseProgress = result.course_progress;

            if (courseProgress === null || courseProgress === undefined) {
                $('#course-progress').html('<strong>0.0%</strong>');
            }else{
                $('#course-progress').html('<strong>' + courseProgress + '%</strong>');
            }
        }
    });
}

var correctCount4 = 0;
function mostrarImagen(elemento){
    correctCount4++;
    console.log(correctCount4);
    let interrogacion = elemento;
    let respuesta = elemento.nextElementSibling;

    // Ocultar el signo de interrogación
    interrogacion.style.display = "none";

    // Mostrar la imagen de respuesta
    respuesta.style.display = "inline";
   
    let correct = correctCount4;
    let total = 5;
    let percentage = (correctCount4 / total) * 100;;
    //activit_id se usa para controlar cada actividad dentro del módulo y del número de actividades dentro del curso
    let activity_id = 5;

    trackingManager_activities.getProgress(userId, courseId, module_id, fullName, percentage, activity_id);
    getProgressActivity(userId, courseId, module_id, fullName, percentage, activity_id, correct, total);
   
}

function mediaIdioma(){
    // Obtenemos los switches y los elementos de audio y video en inglés y español
    const toggleSwitch = document.getElementById("toggleSwitch");
    const toggleSwitchMenu = document.getElementById("toggleSwitchMenu");
    const mediaElementsIngles = document.querySelectorAll(".media-ingles");
    const mediaElementsEspanol = document.querySelectorAll(".media-espanol");

    // Ocultamos los elementos de audio y video en inglés al cargar la página
    mediaElementsIngles.forEach(media => {
        media.style.display = "none";
    });

    mediaElementsEspanol.forEach(media => {
        media.classList.add("center-media");
    });

    // Función para pausar medios en reproducción
    function pauseMedia(mediaElements) {
        mediaElements.forEach(media => {
            if (!media.paused) {
                media.pause();
            }
        });
    }
 
    
    // Función para cambiar la visibilidad de medios basado en el estado del switch
    function toggleMediaVisibility(mediaElements, isVisible) {
        mediaElements.forEach(media => {
            media.style.display = isVisible ? "block" : "none";
            media.classList.toggle("center-media", isVisible);
        });
    }

    // Agregamos el evento de cambio al switch principal
    toggleSwitch.addEventListener("change", function() {
        // Pausamos los medios que se estén reproduciendo
        pauseMedia(mediaElementsIngles);
        pauseMedia(mediaElementsEspanol);

        // Cambiamos la visibilidad de los medios según el estado del switch
        if (this.checked) {
            toggleMediaVisibility(mediaElementsIngles, true);
            toggleMediaVisibility(mediaElementsEspanol, false);
        } else {
            toggleMediaVisibility(mediaElementsEspanol, true);
            toggleMediaVisibility(mediaElementsIngles, false);
        }

        // Sincronizamos el switch del menú lateral con el switch principal
        toggleSwitchMenu.checked = this.checked;
    });

    // Agregamos el evento de cambio al switch del menú lateral
    toggleSwitchMenu.addEventListener("change", function() {
        // Pausamos los medios que se estén reproduciendo
        pauseMedia(mediaElementsIngles);
        pauseMedia(mediaElementsEspanol);

        // Cambiamos la visibilidad de los medios según el estado del switch
        if (this.checked) {
            toggleMediaVisibility(mediaElementsIngles, true);
            toggleMediaVisibility(mediaElementsEspanol, false);
        } else {
            toggleMediaVisibility(mediaElementsEspanol, true);
            toggleMediaVisibility(mediaElementsIngles, false);
        }

        // Sincronizamos el switch principal con el switch del menú lateral
        toggleSwitch.checked = this.checked;
    });
}

function sistemaVotacion(){
    const estrellas = document.querySelectorAll('input[name="estrellas"]');
    const resultado = document.querySelector('.resultado');
    const estrellasLabels = document.querySelectorAll('.rating label');
    const course_code = $('#course_code').val();
    const module_id = $('#module_id').val();
    const unique_course_id = $('#unique_course_id').val();


     // Función para obtener la calificación guardada en la base de datos
     function obtenerCalificacionGuardada() {
        $.ajax({
            type: "POST",
            url: "../../functions_helpers.php?sistema_votacion=2", // Cambia la URL a una que maneje la obtención de la calificación guardada
            data: {
                course_code: course_code,
                module_id: module_id,
                unique_course_id: unique_course_id
            },
            success: function (response) {

                if (response ) {
                    let responseData = JSON.parse(response);
                    let numEstrellas = responseData.num_estrellas;
                    resultado.innerHTML = `Has calificado con ${numEstrellas} estrella${numEstrellas === 1 ? '' : 's'}.<br>¡Gracias por tu calificación!`;
                    estrellasLabels.forEach((label, i) => {
                        if (i < numEstrellas) {
                            label.style.backgroundImage = 'url("assets/img/estrella-llena.png")';
                        } else {
                            label.style.backgroundImage = 'url("assets/img/estrella-vacia.png")';
                        }
                    });
                }
            }
        });
    }

    obtenerCalificacionGuardada();

    estrellas.forEach((estrella, index) => {
        estrella.addEventListener('change', () => {
            resultado.innerHTML = `Has calificado con ${estrella.value} estrella${estrella.value === '1' ? '' : 's'}.<br>¡Gracias por tu calificación!`;
            
            // Llena todas las estrellas anteriores a la seleccionada
            estrellasLabels.forEach((label, i) => {
                if (i <= index) {
                    label.style.backgroundImage = 'url("assets/img/estrella-llena.png")'; 
                } else {
                    label.style.backgroundImage = 'url("assets/img/estrella-vacia.png")'; 
                }
            });
            //Guardar el numero de estrellas con que calificación
            $.ajax({
                type: "POST", 
                url: "../../functions_helpers.php?sistema_votacion=1",
                data: {
                    num_estrella: estrella.value,
                    course_code : course_code,
                    module_id : module_id,
                    unique_course_id : unique_course_id
                },
                success: function (response) {
                    console.log(response);
                }
            });
        });
    });
}

function pausarMultimedia(){
    //Funcionalidad que permite pausar los elementos multimedias que se este reproduciendo
    $("#prev, #next").on("click", function() {
        let allMediaElements = $("audio, video");
        // Pausar cada elemento multimedia
        allMediaElements.each(function() {
            if (!this.paused) {
            this.pause();
            }
        });

    });
}

function toggleAudio() {

    let toggleSwitch = document.getElementById("toggleSwitch");
    let audioEsp = document.getElementById("audio_slide_15_1");
    let audioIng = document.getElementById("audio_slide_15_2");

    if (toggleSwitch.checked) {
        if(audioIng.paused){
            audioIng.play();
            audioEsp.pause();
        }else{
            audioIng.pause();
            audioEsp.pause();
        }
        
    }else{
        if(audioEsp.paused){
            audioEsp.play();
            audioIng.pause();
        }else{
            audioEsp.pause();
            audioIng.pause();
        }
        
    }
    
}
  
// Función para cambiar la imagen al pasar el ratón por encima
function onMouseOver(element, nuevaImagen) {
  // Obtener la imagen actual
  var imagen = element.querySelector(".inf2");

  // Guardar la imagen original en un atributo personalizado
  if (!imagen.dataset.originalImagen) {
    imagen.dataset.originalImagen = imagen.src;
  }

  // Cambiar la imagen al pasar el ratón por encima
  imagen.src = nuevaImagen;
}

// Función para restaurar la imagen original al quitar el ratón
function onMouseOut(element) {
  var imagen = element.querySelector(".inf2");

  // Restaurar la imagen original
  if (imagen.dataset.originalImagen) {
    imagen.src = imagen.dataset.originalImagen;
  }
}

// Función para obtener el nombre de archivo a partir de una ruta
 function obtenerNombreArchivo(ruta) {
    const partesRuta = ruta.split("/");
    return partesRuta[partesRuta.length - 1];
}

function arrastrarImagen2(){
    // item 1
   $("#act3_drag1").draggable({
       revert: 'invalid'
   });
   $("#act3_drop1").droppable({
       accept: '#act3_drag1',
       drop: function(event, ui) {
           $(this).addClass("corret");
       }
   });

   // item 2
   $("#act3_drag2").draggable({
       revert: 'invalid'
   });
   $("#act3_drop2").droppable({
       accept: '#act3_drag2',
       drop: function(event, ui) {
           $(this).addClass("corret");
       }
   }); 

     // item 3
   $("#act3_drag3").draggable({
       revert: 'invalid'
   });
   $("#act3_drop3").droppable({
       accept: '#act3_drag3',
       drop: function(event, ui) {
           $(this).addClass("corret");
       }
   }); 

     // item 4
     $("#act3_drag4").draggable({
       revert: 'invalid'
   });
   $("#act3_drop4").droppable({
       accept: '#act3_drag4',
       drop: function(event, ui) {
           $(this).addClass("corret");
       }
   }); 
}

function arrastrarImagen(){
    // Logica para la actividad (SLIDE 6)
    $("#act2_drag1, #act2_drag2, #act2_drag3, #act2_drag4").css('z-index', '9999');

     // item 1
    $("#act2_drag1").draggable({
        revert: 'invalid'
    });
    $("#act2_drop1").droppable({
        accept: '#act2_drag1',
        drop: function(event, ui) {
            $(this).addClass("corret");
        }
    });

    $("#act2_drag2").draggable({
        revert: 'invalid'
    });
    $("#act2_drop2").droppable({
        accept: '#act2_drag2',
        drop: function(event, ui) {
            $(this).addClass("corret");
        }
    });

    $("#act2_drag3").draggable({
        revert: 'invalid'
    });
    $("#act2_drop3").droppable({
        accept: '#act2_drag3',
        drop: function(event, ui) {
            $(this).addClass("corret");
        }
    });

    $("#act2_drag4").draggable({
        revert: 'invalid'
    });
    $("#act2_drop4").droppable({
        accept: '#act2_drag4',
        drop: function(event, ui) {
            $(this).addClass("corret");
        }
    });

}

function arrastrarElemento(){
    // Logica para la actividad (SLIDE 6)
     // item 1
       $("#drag1").draggable({
           revert: 'invalid',
           snap: '#drop1',
           snapMode: 'corner',
           snapTolerance: '22'
       });
       $("#drop1").droppable({
           accept: '#drag1'
           }).on('droppable:drop',function(e){
           $(this).addClass("corret");
       });

       // item 2
       $("#drag2").draggable({
           revert: 'invalid',
           snap: '#drop2',
           snapMode: 'corner',
           snapTolerance: '22'
       });
       $("#drop2").droppable({
           accept: '#drag2'
           }).on('droppable:drop',function(e){
           $(this).addClass("corret");
       });

       // item 3
       $("#drag3").draggable({
           revert: 'invalid',
           snap: '#drop3',
           snapMode: 'corner',
           snapTolerance: '22'
       });
       $("#drop3").droppable({
           accept: '#drag3'
           }).on('droppable:drop',function(e){
           $(this).addClass("corret");
       });

       // item 4
       $("#drag4").draggable({
           revert: 'invalid',
           snap: '#drop4',
           snapMode: 'corner',
           snapTolerance: '22'
       });
       $("#drop4").droppable({
           accept: '#drag4'
           }).on('droppable:drop',function(e){
           $(this).addClass("corret");
       });
}

//ACTIVIDAD #2 Para validar cuando se haya terminando la actividad del slide 06
var correctCount = 0;
// Función para verificar si se ha completado todo.
function checkCompletion() {           
    
    let correct = correctCount;
    let total = 4;
    let percentage = (correctCount / total) * 100;;
    //activit_id se usa para controlar cada actividad dentro del módulo y del número de actividades dentro del curso
    let activity_id = 2;

    trackingManager_activities.getProgress(userId, courseId, module_id, fullName, percentage, activity_id);
    getProgressActivity(userId, courseId, module_id, fullName, percentage, activity_id, correct, total);
   
}
// En cada evento 'droppable:drop', aumenta el contador correctCount y verifica la finalización.
$("#drop1, #drop2, #drop3, #drop4, #drop5").on('droppable:drop', function(e) {
    correctCount++;
    checkCompletion();
});


// ACTIVIDAD #3 Para validar cuando se haya terminando la actividad del slide 10
var correctCount2 = 0;
// Función para verificar si se ha completado todo.
function checkCompletion2() {           
    
    let correct = correctCount2;
    let total = 4;
    let percentage = (correctCount2 / total) * 100;;
    //activit_id se usa para controlar cada actividad dentro del módulo y del número de actividades dentro del curso
    let activity_id = 3;

    trackingManager_activities.getProgress(userId, courseId, module_id, fullName, percentage, activity_id);
    getProgressActivity(userId, courseId, module_id, fullName, percentage, activity_id, correct, total);
   
}
// En cada evento 'droppable:drop', aumenta el contador correctCount y verifica la finalización.
$("#act2_drop1, #act2_drop2, #act2_drop3, #act2_drop4, #act2_drop5").on('droppable:drop', function(e) {
    correctCount2++;
    checkCompletion2();
});



// ACTIVIDAD #4 Para validar cuando se haya terminando la actividad del slide 11
var correctCount3 = 0;
// Función para verificar si se ha completado todo.
function checkCompletion3() {           
    
    let correct = correctCount3;
    let total = 4;
    let percentage = (correctCount3 / total) * 100;;
    //activit_id se usa para controlar cada actividad dentro del módulo y del número de actividades dentro del curso
    let activity_id = 4;

    trackingManager_activities.getProgress(userId, courseId, module_id, fullName, percentage, activity_id);
    getProgressActivity(userId, courseId, module_id, fullName, percentage, activity_id, correct, total);
   
}
// En cada evento 'droppable:drop', aumenta el contador correctCount y verifica la finalización.
$("#act3_drop1, #act3_drop2, #act3_drop3, #act3_drop4, #act3_drop5").on('droppable:drop', function(e) {
    correctCount3++;
    checkCompletion3();
});

// Función para obtener el valor de la cookie
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}
  
  // Función para establecer la cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}