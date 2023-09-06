<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Infraestructura tecnológica
    
    p.mb-5 La herramienta utilizada en este curso para la lectura y manipulación de los archivos se basa en una distribución de #[em Python] llamada Anaconda, la cual es de uso gratuito, descargándola desde su sitio oficial.
    
    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img01.svg' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        .tarjeta.BG03.p-4.mb-4 
          p.mb-0 Es importante tener en cuenta como todo #[em software] que se vaya a utilizar dentro de un equipo de cómputo, requiere de unas condiciones técnicas para que el aplicativo funcione correctamente, por eso a continuación se hará una descripción detalla de dichas consideraciones y se dará a conocer el paso a paso para la instalación y despliegue de las herramientas de #[em software].
        p.mb-0 Para la implementación de una infraestructura tecnológica existe un concepto importante que tiene que ver con la unificación de diversas fuentes de información y herramientas de análisis, que optimizan las tareas de lectura, adecuación y procesamiento de los datos, a continuación, se reconocerá esta tecnología.
    
    .BGIMG05.px-md-5.px-4.pb-5
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FDBF2D; border-radius: 9px;" data-aos="fade-right")
          img.img-01.mb-1(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: 8px;")
          h3.col.ps-3.mb-0 Arquitectura #[em Datawarehouse]

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p Con los formatos y estructuras de los archivos plenamente identificados se puede pensar en la unificación de sistema propio de almacenamiento que permita, independiente de la estructura o formato, tener toda la información en única base de datos normalizada, esta base de datos estará preparada para recibir grandes volúmenes de información, actualizarse, modificarse y consultarse. A este tipo de arquitectura se le conoce como #[strong.sub-bg1 #[em DATAWAREHOUSE].]
          .BG06.p-4
            .row.justify-content-center
              .col-lg-2.col-3.mb-lg-0.mb-4
                img(src='@/assets/curso/tema1/img03.svg' alt="Imagen decorativa")
              .col
                p.mb-0 #[strong ¡Nota!:] continuando con la explicación de la infraestructura tecnológica y referente a lo que compete a este curso, se darán a conocer los pasos y consideraciones que se deben tener en cuenta para la instalación de la herramienta Anaconda. Es clave seguir, atentamente, las instrucciones para que la instalación sea exitosa.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img02.png' alt="Imagen decorativa")

      separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Instalación
      
      p.mb-5 Para empezar con la instalación de las herramientas tecnológicas que permita el despliegue del lenguaje de programación #[em Python], es importante que se valide los requerimientos mínimos técnicos con los que debe contar su equipo ya sea portátil o de escritorio, estos son:

      .row.justify-content-center.mb-5
        .col-xl-2.col-md-4.col-sm-8.mb-xl-0.mb-4(data-aos="fade-right")
          .tarjeta--boton.color-acento-botones.hg-07.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema3/img04.svg' alt="Imagen decorativa")
            p.mb-0 #[strong Memoria RAM]: 3GB.
        .col-xl-2.col-md-4.col-sm-8.mb-xl-0.mb-4(data-aos="flip-right")
          .tarjeta--boton.color-acento-botones.hg-07.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema3/img05.svg' alt="Imagen decorativa")
            p.mb-0 #[strong Disco Duro]: Mínimo 4 GB espacio disponible.
        .col-xl-2.col-md-4.col-sm-8.mb-xl-0.mb-4(data-aos="flip-up")
          .tarjeta--boton.color-acento-botones.hg-07.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema3/img06.svg' alt="Imagen decorativa")
            p.mb-0 #[strong Procesador]: Procesador de 32- o 64-bit.
        .col-xl-2.col-md-4.col-sm-8.mb-xl-0.mb-4(data-aos="flip-left")
          .tarjeta--boton.color-acento-botones.hg-07.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema3/img07.svg' alt="Imagen decorativa")
            p.mb-0 #[strong Sistema Operativo]: Windows, Linux y Mac.
        .col-lg-4.col-sm-8(data-aos="fade-left")
          .BG05.hg-07.p-4
            p.mb-0 Posteriormente a la verificación de los requerimientos técnicos, se procede con la descarga del programa Anaconda, disponible en la página oficial.

      p.mb-5 Preste atención al siguiente video, donde se explica este procedimiento:

      figure.mb-5(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Puesta en Marcha
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Es importante tener en cuenta que Anaconda maneja múltiples aplicativos, para este curso en particular se utilizará #[em JupiterLab], la cual es una herramienta web, que permite mediante una interfaz gráfica, ejecutar líneas de comando del lenguaje de programación #[em Python]. Estas líneas de código se ejecutan en celdas, de manera independiente, lo que permite ir probando cada parte del programa facilitando la detección de errores pues al ejecutarse, línea a línea, se puede saber exactamente dónde se encuentra la dificultad.
        .tarjeta.BG06.p-4.mb-5(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/img09.svg" alt="Imagen decorativa")
            .col
              p.mb-0 Por otro lado, #[em Python], gracias a sus aplicaciones y gran número de librerías es el lenguaje de programación mayormente utilizado para proyectos de ciencia de datos. #[em JupiterLab] es una herramienta muy intuitiva y muy fácil de usar, lo que permite que el despliegue sea realmente sencillo.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img08.png' alt="Imagen decorativa")

    p Para empezar a trabajar en un proyecto de desarrollo se debe abrir la aplicación #[em Jupiterlab], para realizar este procedimiento, se abre el programa Anaconda y se busca la aplicación #[em Anaconda Navigator], y, dentro de sus aplicaciones, se puede encontrar dicha herramienta.
    p.mb-5 Sepa cómo crear el entorno de trabajo; atienda la explicación y de los pasos necesarios, los cuales se ofrecen en el siguiente video:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Instalación e importación de librerías
    
    .BGM01.px-md-5.px-4.pb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p Hasta este punto ya se conocen los procedimientos básicos para instalar las herramientas necesarias para realizar el análisis de datos; igualmente, ya se sabe cómo desplegar el entorno de trabajo #[em JupiterLab], así como se han identificado cada uno de los elementos que la conforman. En este apartado se profundizará en cada una de las librerías necesarias para trabajar proyectos de ciencia de datos, puntualmente las que ayudarán en todo el proceso de limpieza y transformación de los datos.
          p Estos son algunos aspectos clave que usted debe tener en cuenta sobre las librerías:
          .BGRS02.p-4
            SlyderA(tipo="b")
              .row.justify-content-center
                .col-lg-2.col-4.mb-lg-0.mb-4
                  img(src='@/assets/curso/tema3/img11.svg' alt="Imagen decorativa")
                .col-lg-10
                  .h5.texto-acento-botones Conjunto de archivos
                  p.mb-0 Es uno o varios archivos escritos en un lenguaje de programación determinado, la cual proporciona diversas funcionalidades.
              .row.justify-content-center
                .col-lg-2.col-4.mb-lg-0.mb-4
                  img(src='@/assets/curso/tema3/img12.svg' alt="Imagen decorativa")
                .col-lg-10
                  .h5.texto-acento-botones Aporte
                  p.mb-0 Una librería no aporta la estructura sobre cómo realizar el desarrollo, sino que proporciona funcionalidades comunes, que ya han sido resueltas previamente por otros programadores y evitan la duplicidad de código. Además, reducen el tiempo de desarrollo y aumentan la calidad del mismo.
              .row.justify-content-center
                .col-lg-2.col-4.mb-lg-0.mb-4
                  img(src='@/assets/curso/tema3/img13.svg' alt="Imagen decorativa")
                .col-lg-10
                  .h5.texto-acento-botones Espacialidades y fortalezas
                  p.mb-0 Cada librería se especializa o tiene una fortaleza, por ejemplo, algunas pueden ser muy fuertes en la lectura, manipulación, limpieza y demás acciones con los datos, sin embargo, otro tipo de librerías pueden trabajar de manera más fuerte en las visualizaciones de resultados gráficos.
              .row.justify-content-center
                .col-lg-2.col-4.mb-lg-0.mb-4
                  img(src='@/assets/curso/tema3/img14.svg' alt="Imagen decorativa")
                .col-lg-10
                  .h5.texto-acento-botones ¿Qué se busca con ellas?
                  p.mb-0 El objetivo es utilizar un conjunto de librerías y que se aprovechen de cada una de ellas sus fortalezas. Dentro del desarrollo de proyectos se puede hacer uso de múltiples librerías y pueden combinarse para obtener mejores resultados.  
              .row.justify-content-center
                .col-lg-2.col-4.mb-lg-0.mb-4
                  img(src='@/assets/curso/tema3/img15.svg' alt="Imagen decorativa")
                .col-lg-10
                  .h5.texto-acento-botones Las más importantes
                  p Las librerías más importantes utilizadas en proyectos de ciencia de datos para la fase de limpieza y transformación de los datos son:
                  p #[strong.texto-acento-botones Pandas y Numpy:] utilizada para la manipulación de grandes volúmenes de datos, cálculos numéricos, análisis de estructuras de datos, análisis estadísticos.
                  p #[strong.texto-acento-botones serianMatplotlib y Seaborn:] utilizada para una mejor comprensión de los datos mediante visualizaciones gráficas y visualizaciones estadísticas.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img10.png' alt="Imagen decorativa")

    p.mb-5 El video que se muestra enseguida explica cada uno de los pasos para la importación de librerías:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
