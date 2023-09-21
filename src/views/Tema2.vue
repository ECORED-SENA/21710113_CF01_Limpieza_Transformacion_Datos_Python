<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fuentes de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 Es fundamental tener total claridad frente a este tema, pues el valor de la información que maneja la organización se determina también a partir de las fuentes de donde estas son extraídas. Como ya se mencionó anteriormente, las fuentes de datos pueden ser privadas o públicas. Respecto a las fuentes privadas, los datos se pueden obtener desde sistemas de información, bases de datos, hojas de cálculo, entre otros recursos en los cuales la organización almacena la información propia. En cuanto a las fuentes públicas, estas permiten obtener información desde internet de manera libre o mediante un registro de usuario.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img01.png' alt="Imagen decorativa")

    p.mb-5 A continuación, conozca algunas fuentes de datos:

    .BGIMG02.p-md-5.p-4.pb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          SlyderF(columnas="col-lg-6")
            .BGRS02.hg-03.p-4
              .row.justify-content-center.mb-5
                .col-lg-4.col-6
                  img(src='@/assets/curso/tema2/img03.svg' alt="Imagen decorativa")
              .h4.texto-acento-botones.text-center Bases de datos
              p.mb-0 #[i Software] utilizado para almacenar, consultar, modificar o eliminar la información directamente o desde sistemas externos como ERP o CRM.
            .BGRS02.hg-03.p-4
              .row.justify-content-center.mb-5
                .col-lg-4.col-6
                  img(src='@/assets/curso/tema2/img04.svg' alt="Imagen decorativa")
              .h4.texto-acento-botones.text-center ERP
              p.mb-0 Son #[i Software] que se utilizan para administrar las operaciones de las empresas o negocios como el manejo clientes, cartera, contabilidad, recursos humanos, manufactura, entre otras.
            .BGRS02.hg-03.p-4
              .row.justify-content-center.mb-5
                .col-lg-4.col-6
                  img(src='@/assets/curso/tema2/img05.svg' alt="Imagen decorativa")
              .h4.texto-acento-botones.text-center CRM
              p.mb-0 Sistema que se especializa en las relaciones con el cliente y busca capturar toda la información necesaria para   fidelizarlo y establecer estrategias para captar otros nuevos clientes.
            .BGRS02.hg-03.p-4
              .row.justify-content-center.mb-5
                .col-lg-4.col-6
                  img(src='@/assets/curso/tema2/img06.svg' alt="Imagen decorativa")
              .h4.texto-acento-botones.text-center Formularios de consulta
              p.mb-0 Utilizados para la aplicación de encuestas y la recolección de información masiva de un grupo objetivo, estos se comparten fácilmente por redes sociales y aplicaciones de mensajería.
            .BGRS02.hg-03.p-4
              .row.justify-content-center.mb-5
                .col-lg-4.col-6
                  img(src='@/assets/curso/tema2/img07.svg' alt="Imagen decorativa")
              .h4.texto-acento-botones.text-center Redes sociales
              p.mb-0 Permiten la captura de información referente a estados de ánimo, publicaciones, preferencias, gustos y diferente tipo de información para acceder a dicha información se necesitan una autenticación con usuario y contraseña.
            .BGRS02.hg-03.p-4
              .row.justify-content-center.mb-5
                .col-lg-4.col-6
                  img(src='@/assets/curso/tema2/img08.svg' alt="Imagen decorativa")
              .h4.texto-acento-botones.text-center IoT Internet de las cosas
              p.mb-0 Gracias al internet de las cosas se puede capturar información automática, como las variables de clima, temperatura de un departamento o país, las capturas del tráfico y los estados de movilidad de una ciudad determinada.
            .BGRS02.hg-03.p-4
              .row.justify-content-center.mb-5
                .col-lg-4.col-6
                  img(src='@/assets/curso/tema2/img09.svg' alt="Imagen decorativa")
              .h4.texto-acento-botones.text-center Bases de datos gubernamentales
              p.mb-0 Aquí se reportan todas las entidades que hacen parte del Estado; se puede encontrar información como, por ejemplo, resultados de pruebas ICFES, contrataciones, entre otros.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img02.png' alt="Imagen decorativa")

    .tarjeta.BG05.img-02.p-4(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-2
          img(src='@/assets/curso/tema2/img10.svg' alt="Imagen decorativa")
        .col
          p.mb-0 Actualmente se pueden encontrar fuentes de datos públicas de salud, economía, construcción, tendencias y casi que cualquier tipo de tema que se quiera analizar, por ende, se puede afirmar que los datos se han convertido en los activos más importante para cualquier organización pues ellos son la base para la toma de decisiones estratégicas, por tal motivo es necesario establecer protocolos y normas para su manejo, teniendo en cuenta criterios como confidencialidad, disponibilidad e integridad.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Tipos de bases de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 Todo tipo de dato que se obtiene diariamente dentro de la organización, por medio de empleados, sistemas de información, redes sociales, etc., son un insumo de gran importancia para el cumplimiento de los objetivos planteados por la misma. Por tanto, estos deben ser almacenados de manera correcta de modo que se puedan consultar, modificar o eliminar. Para tal almacenamiento se hace uso, generalmente, de dos tipos de bases de datos: las bases de datos relacionales y las no relacionales.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img11.png' alt="Imagen decorativa")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FDBF2D; border-radius: 9px;" data-aos="fade-right")
        img.img-01.mb-1(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: 8px;")
        h3.col.ps-3.mb-0 Bases de datos relacionales

    p Este tipo de base de datos siguen una estructura estricta y se basan en tablas que almacenan la información organizada, de acuerdo con el tipo de dato.
    p.mb-5 A continuación, se mencionan los programas más utilizados para bases de datos relacionales:

    .h4.text-center.mb-5 Programas más usados para bases de datos relacionales
    <br><br>

    .BGM07.px-md-5.px-4.mb-5
      .row.img-02.justify-content-center
        .col-xl-4.col-md-6.col-10.mb-4(data-aos="fade-right")
          .tarjeta--boton.color-acento-botones.hg-04.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema2/img12.png' alt="Imagen decorativa")
            .h4.text-center Microsoft SQL Server
            p.mb-0 Es utilizado para trabajar conjuntos de datos y crear relaciones entre ellos, es desarrollado por la empresa Microsoft, para usos comerciales, por ende, requiere de licencia.
        .col-xl-4.col-md-6.col-10.mb-4(data-aos="flip-up")
          .tarjeta--boton.color-acento-botones.hg-04.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema2/img13.png' alt="Imagen decorativa")
            .h4.text-center DB2
            p.mb-0 Base de datos desarrollada por IBM. Para la versión comercial requiere licencia.
        .col-xl-4.col-md-6.col-10.mb-4(data-aos="fade-left")
          .tarjeta--boton.color-acento-botones.hg-04.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema2/img14.png' alt="Imagen decorativa")
            .h4.text-center Postgree SQL
            p.mb-0 Sistema de base de datos relacional de código abierto, orientado a objetos.
        .col-xl-4.col-md-6.col-10.mb-xl.mb-4(data-aos="fade-right")
          .tarjeta--boton.color-acento-botones.hg-04.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema2/img15.png' alt="Imagen decorativa")
            .h4.text-center Maria DB
            p.mb-0 Igualmente, de código abierto utilizada para proyectos más pequeños que no requieren gran volumen y procesamiento de datos.
        .col-xl-4.col-md-6.col-10.mb-xl.mb-4(data-aos="flip-up")
          .tarjeta--boton.color-acento-botones.hg-04.p-4
            .row.justify-content-center.mb-4
              .col-6
                img(src='@/assets/curso/tema2/img16.png' alt="Imagen decorativa")
            .h4.text-center MySQ
            p.mb-0 Es una de las bases de datos más utilizadas en el mundo, se conecta con múltiples sistemas de información y sistemas operativos, maneja una versión gratis y versiones comerciales.
        .col-xl-4.col-md-6.col-10(data-aos="fade-left")
          .BG05.hg-04.p-4
            p.mb-0 Las bases de datos relacionales hacen referencia a una base de datos cuya característica es almacenar y proporcionar acceso a puntos de datos relacionados entre sí, es una forma directa de representar datos en tablas.

    .row.justify-content-center.img-02
      .col-lg-10
        .tarjeta.BG06.p-4.mb-5(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img17.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Bases de datos relacionales
                  p.mb-0 Para entender mejor en qué consisten las bases de datos relacionales, se le recomienda revisar en detalle el siguiente documento.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Bases_datos_relacionales.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FDBF2D; border-radius: 9px;" data-aos="fade-right")
        img.img-01.mb-1(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: 8px;")
        h3.col.ps-3.mb-0 Bases de datos no relacionales

    p.mb-5 También conocidas como NoSQL, este es un sistema que se caracteriza por no usar el lenguaje SQL para realizar consultas. A diferencia de las bases de datos relacionales, no utiliza tablas y la información no es almacenada como registros, lo hace mediante colecciones y documentos, son muy útiles para almacenar grandes volúmenes de información (ver figura 1).

    .row.justify-content-center.mb-5
      .col-lg-6.BGIMG03.p-4
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1.
          span Bases de datos no relacionales
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img18.svg' alt="Esquema que muestra algunas bases de datos no relacionales: MongoDB, Cassandra, Redis, Elasticserch.")

    p Dentro de las bases de datos no relacionales, la información es almacenada mediante corchetes que hacen referencia a una lista o colecciones y cada documento es almacenado dentro de llaves con la información, ya no en forma de filas y columnas sino de clave y valor. La clave o identificador se coloca a la izquierda de los dos puntos y el valor a la derecha, como se muestra a continuación:
    p.mb-5 En el ejemplo la clave es representado por el nombre y valor como Pedro Pérez (ver figura 2).

    .row.justify-content-center.mb-5
      .col-lg-6.BGIMG03.p-4
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 2.
          span Almacenamiento en bases de datos no relacionales
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img19.svg' alt="Esquema que evidencia la forma de almacenamiento de las bases de datos no relacionales.")

    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-4(data-aos="fade-right")
        .BG07.hg-05.p-4
          p.mb-5 A continuación, se presenta un ejemplo de una colección que tiene cuatro documentos, con información relacionada a empleados de una empresa:
          img(src='@/assets/curso/tema2/img20.svg' alt="Imagen decorativa")
      .col-lg-5.col-10(data-aos="fade-left")
        .BG08.hg-05.p-4
          p.texto-blanco-c.mb-0 [
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;{
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Id_Cliente": #[span.texto-purpura 1001],
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "nombre":"Pedro Perez",
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "edad": 23,
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "Ciudad":"Bogota",
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "Cargo":"Gerente",
          p.texto-blanco-c &nbsp;&nbsp;&nbsp;&nbsp;}

          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;{
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Id_Cliente": #[span.texto-purpura 1002],
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "nombre":"Maria Rojas",
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "edad": 45,
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "Ciudad":"Medellin",
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "Cargo":"Vendedor",
          p.texto-blanco-c &nbsp;&nbsp;&nbsp;&nbsp;}

          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;{
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Id_Cliente": #[span.texto-purpura 1003],
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "nombre":"Pedro Perez",
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "edad": 28,
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "Ciudad":"Barranquilla",
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "Cargo":"Vendedor",
          p.texto-blanco-c &nbsp;&nbsp;&nbsp;&nbsp;}

          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;{
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "Id_Cliente": #[span.texto-purpura 1004],
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "nombre":"Pedro Perez",
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "edad": 32,
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "Ciudad":"Cali",
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  "Cargo":"Contador",
          p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;}
          p.texto-blanco-c.mb-0 ]

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Tipos de archivos

    p.mb-5 La información que es almacenada en las bases de datos, ya sean relacionales o no relacionales, puede ser extraída en diferentes tipos de archivo. Dependiendo del tipo de archivo, la información se visualiza de diversas maneras; son múltiples los tipos de archivos en los que se almacena la información. Para este caso se abarcarán algunas de los más comunes en análisis de datos:

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FDBF2D; border-radius: 9px;" data-aos="fade-right")
        img.img-01.mb-1(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: 8px;")
        h3.col.ps-3.mb-0 Archivos XLS, XLSX

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img21.svg' alt="Imagen decorativa")
      .col-lg-8
        p Este tipo de archivos se generan desde uno de los programas más conocidos en el mundo de la informática para herramientas ofimáticas como lo es #[strong.sub-bg1 Microsoft Excel,] las extensiones de los archivos se generan con extensión XLS para versiones 2003 y XLSX para versiones desde 2007 en adelante. Este tipo de archivos, actualmente, se generan por múltiples sistemas de información: formularios en línea, #[i office] en línea y por muchas otras aplicaciones.
        p Conozca, enseguida, las características más importantes de estos archivos:
        ul.lista-ul--color
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | Utilizan filas y columnas.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | Las filas se identifican con números consecutivos.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | Las columnas se identifican con letras en orden alfabético.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | La intersección entre una columna y una fila se denomina celda.

    p.mb-5 A continuación, se presenta un ejemplo de un archivo que relaciona un listado de clientes; las columnas se utilizan para identificar el tipo de datos y las filas para ingresar cada uno de los registros que pertenecen a esa colección de datos:
    <br><br><br><br>

    .BGM01.px-md-5.px-4.pb-4
      .row.justify-content-center.img-03
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 3.
            span Archivo en formato XLSX
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/tema2/img22.jpg' alt="Equipo de producción, la imagen se encuentra en anexos bajo el nombre de img1.png")

      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FDBF2D; border-radius: 9px;" data-aos="fade-right")
          img.img-01.mb-1(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: 8px;")
          h3.col.ps-3.mb-0 Archivos CSV

      p.mb-5 No es un formato tan popular con el cual se esté familiarizados, pues no se utiliza para tareas cotidianas como sí se hace con las hojas de cálculo de Excel u otro programa, para el manejo de archivos. Este es un tipo de archivo que maneja una estructura simple y almacena la información en forma de filas que corresponden a cada uno de los registros y los campos de esos registros están, a su vez, separadas normalmente por comas, aunque también se pueden encontrar separados por punto y coma o tabulaciones.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img23.svg' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          p.mb-0 El CSV es un tipo de formato que se puede abrir casi en cualquier programa como, por ejemplo, un sencillo block de notas, aunque allí la compresión de los datos no es tan clara, por ende, en hojas de cálculo como Excel, Google Sheet, u otros programas compatibles con esta estructura, es un formato que no admite gráficos, tablas, colores o fuentes y está diseñado, simplemente, como un contendedor de información en la forma más simple.

      .h4.texto-acento-botones.mb-5 Pero, ¿por qué utilizar este tipo de formatos?

      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-6.col-sm-8.mb-xl-0.mb-4(data-aos="fade-right")
          .BGRT02.hg-06
            figure
              img(src='@/assets/curso/tema2/img24.png' alt="Imagen decorativa")
            .p-4
              .h4.texto-acento-botones.text-center.mb-4 Simplicidad
              p.text-center.mb-0 La simpleza con la que se guarda la información permite almacenar grandes volúmenes de datos.
        .col-xl-4.col-lg-6.col-sm-8.mb-xl-0.mb-4(data-aos="flip-up")
          .BGRT02.hg-06
            figure
              img(src='@/assets/curso/tema2/img25.png' alt="Imagen decorativa")
            .p-4
              .h4.texto-acento-botones.text-center.mb-4 Almacenaje amplio
              p.text-center.mb-0 Al ser un formato ligero se utiliza como contenedor.
        .col-xl-4.col-lg-6.col-sm-8.mb-xl-0.mb-4(data-aos="fade-left")
          .BGRT02.hg-06
            figure
              img(src='@/assets/curso/tema2/img26.png' alt="Imagen decorativa")
            .p-4
              .h4.texto-acento-botones.text-center.mb-4 Exportación de información
              p.text-center.mb-0 Luego de ser usado como contenedor se puede realizar, desde allí, la exportación a sistemas de información, directamente de base de datos, o desde las mismas hojas de cálculo sin comprometer el rendimiento de los sistemas.

    .row.justify-content-center.img-02.mb-4
      .col-lg-10
        .tarjeta.BG06.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img27.svg" alt="Imagen decorativa")
            .col
              p.mb-0 Este es uno de los formatos más utilizados para los proyectos de analítica de datos en los que se requiere procesar grandes volúmenes de información, por ende, desde la preparación de los datos es importante ir planeando el proceso para optimización de recursos, tanto en el almacenamiento como en el procesamiento, en ese sentido los archivos en este tipo de formato son altanamente recomendados.

    .BGIMG02.p-md-5.p-4.pb-5
      p.text-center.mb-5 A continuación, conozca los pasos para convertir un archivo en formato CSV a formato XLSX:
      .BGRS02.p-4.mb-5
        SlyderB(:datos="datosSlyder")

      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FDBF2D; border-radius: 9px;" data-aos="fade-right")
          img.img-01.mb-1(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: 8px;")
          h3.col.ps-3.mb-0 Archivos JSON

      p.mb-5 Más que un tipo de archivo es una estructura simple que se utiliza para el intercambio de información entre sitios web, cuando se realiza la exportación de este tipo de archivos se utilizan archivos de texto simple con extensión TXT o JSON. Este tipo de estructuras se puede obtener desde bases de datos relacionales, cuando es necesario compartir grandes volúmenes de datos o también para el intercambio de información entre sistemas.

      .row.justify-content-center.mb-5
        .col-lg-8
          .BGRS02.p-4(data-aos="fade-right")
            .row.justify-content-center
              .col-lg-8.mb-lg-0.mb-4
                p.mb-0 El siguiente es un ejemplo de cómo sería la representación de un documento que muestra la información de las ventas de un empleado:
              .col-lg-4.col-8
                .BG08.p-4
                  p.texto-blanco-c.mb-0 {
                  p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;“Código”: #[strong.texto-purpura 1001],
                  p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;“Nombre”: “Pedro Perez”,
                  p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;“Género”: “M”
                  p.texto-blanco-c.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;Ventas: #[strong.texto-purpura 1200000]
                  p.texto-blanco-c.mb-0 }

      p.mb-5 Para entender mejor la estructura identifique la equivalencia que tiene esta estructura en filas y columnas, configurándose cada uno de los valores de la izquierda en columnas y, los de la derecha, en cada uno de los registros o filas:

      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 1.
            span Equivalencia filas y columnas
          .tabla-a.color-secundario
            table(data-aos="zoom-in"  alt="Texto alternativo tabla")
              thead(style="border-color: transparent")
                tr
                  th(style="background-color: #949AF8;") Código
                  th(style="background-color: #949AF8;") Nombre
                  th(style="background-color: #949AF8;") Género
                  th(style="background-color: #949AF8;") Ventas
              tbody
                tr
                  td(style="background-color: #FFF;") 1001
                  td(style="background-color: #FFF;") Pedro Perez
                  td(style="background-color: #FFF;") M
                  td(style="background-color: #FFF;") 12000000

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        texto: 'Desde la hoja de cálculo Excel, abrir el archivo formato CSV.',
        imagen: require('@/assets/curso/tema2/img28.jpg'),
      },
      {
        texto:
          'El objetivo es separar, dividendo por comas, cada uno de los registros para poder visualizarlos correctamente en filas y columnas. Para ello se selecciona toda la columna A, luego se selecciona la pestaña datos y se presiona texto en columnas.',
        imagen: require('@/assets/curso/tema2/img29.jpg'),
      },
      {
        texto:
          'Entonces, se deben separar los datos por comas; una vez seleccionado texto en columnas se abrirá el asistente en el cual se podrá elegir cómo separar los registros. Se deben seleccionar delimitados, posteriormente seleccionar que la separación se realizará por comas.',
        imagen: require('@/assets/curso/tema2/img30.jpg'),
      },
      {
        texto:
          'Para terminar, se selecciona <strong>finalizar</strong> y se podrán tener los registros separados en columnas.',
        imagen: require('@/assets/curso/tema2/img31.jpg'),
      },
    ],
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
