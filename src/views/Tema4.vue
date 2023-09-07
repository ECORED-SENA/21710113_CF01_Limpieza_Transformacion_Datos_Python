<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 4
      h1 Preparación de los datos

    .BGM01.p-md-5.p-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p Una de las etapas más importantes en los proyectos de ciencia de datos es la búsqueda y preparación de los datos puesto estos son el insumo principal con el que se debe empezar a trabajar. Por ende, es fundamental definir de dónde se obtendrán los datos y qué estrategias se implementarán para la obtención de la información inicial.
          p Teniendo los aspectos anteriores claros, se pueden determinar si los datos privados con los que cuenta la organización son suficientes o si, por el contrario, se necesita obtener información en fuentes externas.
          p.mb-0 Si el análisis o investigación arroja que se necesitan definitivamente datos externos, porque la empresa no cuenta con este insumo, es importante iniciar dicha preparación planteándose algunas preguntas, como:
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img1.png' alt="Imagen decorativa")

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img02.svg' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          p #[strong ¿Se pueden conseguir, los datos externos, en fuentes públicas?] <br>
            | #[strong ¿Estos datos públicos son gratis o tienen algún costo?] <br>
            | #[strong ¿Qué tan fiables son las fuentes de información de donde obtendría estos datos?] <br>
            | #[strong ¿En qué tipo de formato puedo obtener la información?]
          p Una vez resueltas todas las dudas que se puedan presentar en la obtención de los datos, es importante determinar la estrategia para recuperar esa información de manera eficiente, dicha estrategia debe contemplar, los recursos tecnológicos y humanos que se requieren para satisfacer ese requerimiento.
          p Por ejemplo, en este punto, es un deber que dentro de la organización se cuente con personal capacitado en:
          ul.lista-ul--color
            li(style="margin-bottom: 16px")
              i.fas.fa-laptop-code(style="color: #FDBF2D;")
              span El manejo de bases de datos relacionales y no relaciones.
            li(style="margin-bottom: 16px")
              i.fas.fa-laptop-code(style="color: #FDBF2D;")
              span Manejar el lenguaje SQL para la extracción personalizada de información.
            li(style="margin-bottom: 16px")
              i.fas.fa-laptop-code(style="color: #FDBF2D;")
              span Manejar los diferentes formatos y estructuras para almacenar la información.

      p.mb-5 Algunas fuentes de información públicas requieren de registro en sus plataformas para ser descargar información, otras simplemente requieren de ciertos datos para ser descargada sin ninguna restricción.

    .row.justify-content-center.img-02
      .col-lg-10
        .tarjeta.BG06.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema4/img03.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Ejemplo busqueda de información
                  p.mb-0 Lo invitamos a consultar el siguiente recurso donde encontrará un ejemplo de búsqueda de información en fuentes de datos que son públicas y que se pueden descargar gratuitamente.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Ejemplo_busqueda_de_información.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FDBF2D; border-radius: 9px;" data-aos="fade-right")
        img.img-01.mb-1(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: 8px;")
        h3.col.ps-3.mb-0 Lectura de Archivos en diferentes formatos

    .row.justify-content-center.mb-4
      .col-auto(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img04.svg' alt="Imagen decorativa")
      .col(data-aos="fade-left")
        p.mb-0 A continuación, a través de un ejemplo, se van a leer diversos tipos de formatos y estructuras, se revisarán las estructuras de cada uno de los archivos y se procederá con la unificación, entendiendo que todos los archivos manejan el mismo número de columnas en la misma posición.

    p.mb-5 Para comenzar es importante ubicar, en la misma ruta donde se crearán los notebooks, tres tipos de archivos diferentes como se muestra en la Figura 4.

    .row.justify-content-center.mb-5
      .col-lg-10.BG04.p-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 4.
          span Carpeta con Archivos
        .row.justify-content-center(data-aos="zoom-in")
          .col-lg-7.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema4/img05.jpg' alt="Imagen decorativa")
          .col-lg-5.col-10
            p.mb-0 Como la imagen muestra, se trata de archivos diferentes, identificados cada uno con su respectiva extensión, el primer archivo llamado #[em Archivo1.csv] es un archivo delimitado por comas con extensión #[em CSV], segundo archivo #[em Archivo.json] tal como su extensión lo indica es un archivo con una estructura tipo #[em JSON], y el último archivo denominado #[em Archivo.xlsx] es una hoja de cálculo con formato #[em XLSX] y como se sabe es una extensión de archivos del programa #[em Excel].

    p.mb-5 Directamente desde la plataforma #[em JupiterLab] se pueden ver los archivos para analizar un poco los datos. para ese fin es importante hacer clic sobre el archivo que desea visualizar y la información se podrá observar en el panel de la derecha:

    .row.justify-content-center.mb-5
      .col-lg-10.BG04.p-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 5.
          span Visualizando Archivos desde #[em JupiterLab]
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/img06.jpg' alt="Imagen decorativa")

    p.mb-5 Para ver el archivo tipo JSON, igualmente se debe hacer doble clic sobre el archivo con extensión JSON:

    .row.justify-content-center.mb-5
      .col-lg-10.BG04.p-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 6.
          span Visualizar Archivos tipo JSON
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/img07.jpg' alt="Imagen decorativa")

    p.mb-5 Al leer el último archivo que es de tipo XLSX puede presentar el siguiente error:


    .BG04.mb-5.p-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 7.
        span Error Abriendo el Archivo de Excel
      .row.justify-content-center(data-aos="zoom-in")
        .col-lg-7.col-10.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/img08.jpg' alt="Imagen decorativa")
        .col-lg-5.col-10
          p.mb-0 Este archivo no se puede abrir directamente en el panel, aunque esto no sería una preocupación, toda vez que este tipo de archivo se puede visualizar directamente con el programa Excel, pero sí se debe tener en cuenta la codificación UTF-8 al momento de leerlo para pasarlo a un #[em Dataframe].

    p.mb-5 Para proceder con la lectura de cada uno de los archivos y unificarlos, para preparar un #[em Dataframe] y posterior limpieza y transformación de los datos, se deben realizar unos pasos específicos, como los que se detallan enseguida:

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img09.png' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta BG03")
          div(titulo="Crear un nuevo <em>notebook</em>")
            p Crear una nueva área de trabajo donde se empezará con la importación de las librerías necesarias para la lectura de los archivos.  Es necesario ingresar las siguientes librerías:
            .row
              .col-lg-5.col-10
                .BG08.p-4
                  p.texto-blanco-c.mb-2 #[span.texto-fucsia import] pandas #[span.texto-fucsia as] pd
                  p.texto-blanco-c.mb-2 #[span.texto-fucsia import] numpy #[span.texto-fucsia as] np
                  p.texto-blanco-c.mb-2 #[span.texto-fucsia import] matplotlib.pyplot #[span.texto-fucsia as] plt
                  p.texto-blanco-c.mb-2 #[span.texto-fucsia import] seaborn #[span.texto-fucsia as] sns
                  p.texto-blanco-c.mb-2 #[span.texto-fucsia from] io #[span.texto-fucsia import] #[span.texto-cielo open]
          div(titulo="Leer archivo CSV")
            p Para realizar la lectura de archivos con extensión CSV, se ejecuta la siguiente línea de comandos, el resultado muestra los cinco primeros y cinco últimos registros importados, al final se debe visualizar el total de registros y número de columnas:
            .row
              .col-lg-5.col-10
                .BG08.p-4
                  p.texto-blanco-c.mb-2 #[span.texto-fucsia df1] = #[span.texto-fucsia pd].#[span.texto-cielo read_csv]('#[span.texto-purpura Archivo1.csv]')
                  p.texto-blanco-c.mb-2 #[span.texto-fucsia df1]
          div(titulo="Importar archivos JSON")
            p Este tipo de estructuras se deben convertir en filas y columnas para que se puedan utilizar en el análisis de los datos y poderlas unir, también, con los otros dos archivos. Para realizar la importación de este tipo de estructuras se debe usar el siguiente comando:
            .row
              .col-lg-5.col-10
                .BG08.p-4
                  p.texto-blanco-c.mb-2 #[span.texto-fucsia df2] = #[span.texto-fucsia pd].#[span.texto-cielo read_json]('#[span.texto-purpura Archivo2.json]')
                  p.texto-blanco-c.mb-2 #[span.texto-fucsia df2]

    .row.justify-content-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta BG03")
          div(titulo="Importar archivos XLSX")
            p Para realizar la importación de este archivo se debe tener cuenta el error que se generó anteriormente. Para solucionar este problema y poderlo importar sin inconvenientes, se deben ejecutar los comandos de la siguiente manera: primero se realiza la codificación para luego realizar la importación, de lo contrario se generarán errores.
            .row
              .col-lg-5.col-10
                .BG08.p-4
                  p.texto-blanco-c.mb-2 #[span.texto-fucsia f] = #[span.texto-fucsia open]("#[span.texto-purpura Archivo3.xlsx]", #[span.texto-cielo mode]="#[span.texto-purpura r]", #[span.texto-cielo encoding]="#[span.texto-purpura utf-8]")
                  p.texto-blanco-c.mb-2 #[span.texto-fucsia df3] = #[span.texto-fucsia pd].#[span.texto-cielo read_excel]('#[span.texto-purpura Archivo3.xlsx]')
          div(titulo="Unir los <em>dataframe</em>")
            p Cada archivo se importó en un Dataframe independiente, para este ejemplo, cada uno de los resultados de las importaciones manejan las mismas columnas en las mismas posiciones, lo que quiere decir que se puede unificar en un solo archivo; cada archivo cuenta con mil registros y nueve columnas, por ende, el resultado final debe mostrar 3000 registros y nueve columnas, para obtener este resultado se debe ejecutar las siguientes líneas de comando:
            .row
              .col-lg-5.col-10
                .BG08.p-4
                  p.texto-blanco-c.mb-2 #[span.texto-fucsia df]=#[span.texto-fucsia pd].#[span.texto-cielo concat]([#[span.texto-purpura df1],#[span.texto-purpura df2],#[span.texto-purpura df3]])
                  p.texto-blanco-c.mb-2 #[span.texto-fucsia df]
          div(titulo="Guardar en único formato")
            p Se debe guardar todo el proceso en único tipo de formato para que en las próximas lecturas solo se tenga que leer un solo archivo con toda la información consolidada, para ello es importante ejecutar la siguiente línea de comando:
            .row
              .col-lg-5.col-10
                .BG08.p-4
                  p.texto-blanco-c.mb-2 #[span.texto-fucsia df].#[span.texto-cielo to_csv]('#[span.texto-purpura Unificado.csv]')
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img10.png' alt="Imagen decorativa")

</template>

<script>
export default {
  name: 'Tema4',
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
