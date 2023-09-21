<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 1
      h1 Metodologías de análisis de datos

    .BGM01.p-md-5.p-4.mb-5
      p.mb-5 Existen diferentes metodologías utilizadas para el análisis de los datos, para conocerlas, revise con atención el recurso que se muestra enseguida:

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .BGRS02.p-4
            .row.justify-content-center.mb-4
              .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img01.svg' alt="Imagen decorativa")
              .col-lg-8(data-aos="fade-left")
                SlyderE(indicadores="derecha")
                  div
                    .h4 ASUM-DM
                    p.mb-0 #[strong.texto-acento-botones (#[i Analytics Solutions Unified Method]):] dicha metodología se enfoca en realizar implementaciones ágiles en temas de analítica de datos y minería de datos. A su vez, está basada en CRISP-DM, en la cual se dictan las especificaciones para llevar de manera ordenada y jerárquica tareas específicas para el análisis de los datos.
                  div
                    .h4 KDD
                    p.mb-0 #[strong.texto-acento-botones (#[i Knowledge Discovery in Databases]):] la metodología se basa en la evaluación e interpretación de patrones y modelos para tomar decisiones asertivas para el análisis. Dichos patrones deben caracterizarse por ser muy útiles y entendibles.
                  div
                    .h4 SEMMA
                    p.mb-0 #[strong.texto-acento-botones (#[i Sample, Explore, Modify, Model, Assess]):]  la cual permite la selección, exploración y modelado de grandes cantidades de datos para descubrir patrones de negocio que hasta ahora han sido desconocidos.
                  div
                    .h4 CRISP-DM
                    p.mb-0 #[strong.texto-acento-botones (Cross-Industry Standard Process for Data Mining):] la cual permite llevar de manera organizada cada una de las etapas por la cuales debe pasar un proyecto de análisis de datos, incluyendo la limpieza y la trasformación de datos. Esta metodología facilita la creación de estrategias y el establecimiento de   acciones necesarias para el cumplimiento de os objetivos propuestos en el negocio.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img02.svg' alt="Imagen decorativa")
        .col-lg-9(data-aos="fade-left")
          p Teniendo en cuenta que la metodología que se debe trabajar en este curso es CRISP-DM <i>(Cross-Industry Standard Process for Data Mining)</i>, es importante identificar los pasos para su implementación, el primer paso tiene que ver con identificar requerimientos del cliente o del negocio hacia el cual se va a hacer el análisis, es importante definir las metas y objetivos de la organización, a partir de allí iniciar con la exploración de los datos y su categorización.
          p.mb-0 Posteriormente, se inicia con el proceso de preparación de los datos, aquí se crea el conjunto definitivo de los registros a los que se les va a realizar el análisis, se seleccionará el modelo a implementar para obtener los resultados esperados que serán sometidos a una etapa de evaluación, es importante tener en cuenta que todo este proceso es iterativo hasta perfeccionar cada fase y obtener los mejores resultados.

      p.mb-0 Para comprender mejor dicha metodología, se debe revisar con atención las etapas que se deben seguir para su correcta implementación:

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FDBF2D; border-radius: 9px;" data-aos="fade-right")
        img.img-01.mb-1(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: 8px;")
        h3.col.ps-3.mb-0 Etapa 1:  Fase Inicial

    p.mb-5 Como ya se mencionó antes, lo primero que se debe hacer es el levantamiento de la información, esto permitirá evidenciar qué tan preparada está la organización para iniciarse en un proyecto de analítica de datos, dentro de esta etapa se identifican factores como:

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img03.svg' alt="Imagen decorativa")
      .col-lg-9
        ul.lista-ul--color
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | Tecnologías utilizadas por la organización.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | Las fuentes de datos con los que cuenta la organización.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | Cuáles son los medios para acceder a la información.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | Qué volumen de información maneja la organización.
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | Con qué instalaciones y con qué infraestructura cuenta la organización.

    .BGIMG01.px-md-5.px-4.pb-5.mb-5
      p.mb-5 Por otro lado, es fundamental identificar los roles que, dentro de la organización, son necesarios para desarrollar a cabo el proyecto de análisis. Conózcalos a continuación:

      .row.justify-content-center.mb-5
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img04.png' alt="Imagen decorativa")
        .col-lg-7(data-aos="fade-left")
          AcordionA(tipo="b" clase-tarjeta="tarjeta BG03")
            div(titulo="Patrocinador del proyecto")
              p.mb-0 Es la persona dentro de la organización de nivel superior encargada de tomar las decisiones importantes, y responsable que el proyecto tenga los insumos tecnológicos y humanos requeridos.
            div(titulo="Arquitecto empresarial")
              p.mb-0 Su responsabilidad se basa en mantener todo el inventario a nivel tecnológico al día y acorde a las metas propuestas por la empresa.
            div(titulo="Arquitecto de datos")
              p.mb-0 Se encarga de garantizar la infraestructura necesaria para soportar los proyectos de ciencia de datos.
            div(titulo="Científico de datos")
              p.mb-0 Encargado de los datos, tiene un amplio dominio estadístico y de herramientas tecnológicas para el procesamiento y análisis de datos.
            div(titulo="Analista de negocio")
              p.mb-0 Personal de la empresa que domina muy bien los objetivos y metas, se encarga de las estrategias empresariales y en proyectos de análisis de datos debe trabajar de la mano con el científico de datos.
            div(titulo="Gerente de datos y analítica")
              p.mb-0 Conoce todas las etapas y responsables del proyecto se encarga que todas las áreas de la empresa engranen y la información fluya de la mejor manera.

      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FDBF2D; border-radius: 9px;" data-aos="fade-right")
          img.img-01.mb-1(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: 8px;")
          h3.col.ps-3.mb-0 Etapa 2: Comprender el negocio

      p Durante esta etapa es importante tener claridad frente a los objetivos del negocio, además es fundamental determinar cuáles son los requerimientos y las necesidades de la empresa, teniendo claros dichos aspectos se pueden empezar a visualizar posibles problemas que tiene la empresa y que se quieren resolver con la implementación de la analítica.
      p.mb-5 Para el desarrollo de esta etapa es importante tener en cuenta algunos aspectos, como:

      .tarjeta.BG02.p-4(data-aos="zoom-in")
        LineaTiempoC.color-acento-botones(text-small)
          .row.justify-content-center(titulo="Paso 1")
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img05.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4.texto-acento-botones Evaluación de la situación
              p.mb-0 Evaluación que se fundamenta en los objetivos de la empresa o negocio. En dicha evaluación es importante incluir: inventario, requerimientos, riesgos y planes de contingencia, glosario, análisis de costo-beneficio, ruta de trabajo, reportes.
          .row.justify-content-center(titulo="Paso 2")
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img06.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4.texto-acento-botones Recorrido histórico
              p.mb-0 Para determinar los objetivos organizacionales se puede realizar un recuento histórico de negocio que permita establecer la situación actual, identificando debilidades y fortalezas, a partir de allí se pueden establecer los objetivos del análisis.
          .row.justify-content-center(titulo="Paso 3")
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img07.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4.texto-acento-botones Estado actual o situación sincrónica
              p.mb-0 Una vez se tiene claridad frente a los objetivos del negocio, se debe realizar una evaluación que determine el estado actual de la organización en aspectos como: la empresa cuenta con el personal necesario para completar el proyecto, con qué tipos de datos cuenta la organización para realizar el análisis, cuáles pueden ser los factores de riesgo con los que cuenta la organización, se disponen de planes de contingencia para cada factor de riesgo.
          .row.justify-content-center(titulo="Paso 4")
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img08.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4.texto-acento-botones Identificación de áreas y de personal
              p.mb-0 Es fundamental identificar  el personal por área con el que cuenta la empresa, el conocimiento de negocio, las habilidades tecnológicas con las que cuentan cada uno de ellos. Por ejemplo, los administradores de bases de datos pueden ser útiles para realizar la extracción de datos. Además, es importante determinar los recursos informáticos y las herramientas de #[i software] de las que dispone la organización, como equipos, servidores, capacidades de procesamiento, bases de datos y #[i software] de extracción y análisis de datos.
          .row.justify-content-center(titulo="Paso 5")
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img09.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4.texto-acento-botones Cronograma de actividades
              p.mb-0 Es importante realizar un cronograma de actividades para el desarrollo del proyecto. Esto permitirá tener una visualización clara de cada una de las tareas con sus respectivos responsables. Además, cuando se trabaja con datos, es fundamental tener claridad sobre las políticas de protección de datos. Estas políticas suelen estar reguladas por leyes estatales y estatutos propios de la empresa. Por último, se debe analizar la existencia de limitaciones en cuanto a hardware y #[i software]. En caso de que existan, es crucial comunicar los requerimientos necesarios a las partes correspondientes.
          .row.justify-content-center(titulo="Paso 6")
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img10.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4.texto-acento-botones Identificación de riesgos
              p.mb-0 Es necesario identificar los riesgos visibles que pueden surgir durante el proceso. Por ejemplo, en el ámbito de los recursos humanos, podrían incluir el despido de personal, mientras que en el ámbito tecnológico, podrían incluirse fallas en equipos o herramientas cruciales para el proyecto. Por lo tanto, resulta fundamental contar con una ruta estructurada, documentada en un archivo maestro, que permita tomar medidas para abordar las posibles eventualidades que puedan surgir.
          .row.justify-content-center(titulo="Paso 7")
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img11.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4.texto-acento-botones Comunicación eficaz
              p.mb-0 Para tener una comunicación fluida entre todas las personas que hacen parte de la organización y las que trabajan directamente con el desarrollo de proyecto, es importante socializar un documento y realizar capacitaciones frente a la terminología utilizada.
          .row.justify-content-center(titulo="Paso 8")
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img12.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4.texto-acento-botones Reportes
              p.mb-0 Es necesario realizar un informe detallado que incluya los costos y beneficios que puede traer la implementación del proyecto. Es importante tener en cuenta tanto los costos directos como los indirectos en el proceso de recolección de los datos y en el despliegue del proyecto. Asimismo, es fundamental documentar los posibles beneficios que dicha implementación traerá a la organización una vez finalizada.
          .row.justify-content-center(titulo="Paso 9")
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img13.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4.texto-acento-botones Claridad en los propósitos
              p.mb-0 Para tener éxito en el proyecto, es importante tener claro el paso a paso: qué se va a realizar en cada una de las etapas del proceso. De igual manera, los involucrados y las responsabilidades deben estar bien definidos.
          .row.justify-content-center(titulo="Paso 10")
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img14.svg' alt="Imagen decorativa")
            .col-lg-9
              .h4.texto-acento-botones Beneficios de comprender el negocio
              p.mb-0 Para el equipo de analítica es vital comprender el negocio completamente, el objetivo que se desea alcanzar, los criterios de éxito y demás datos relevantes para entender el negocio, con los reportes se genera un insumo fundamental que puede ser ejecutado en cualquier momento durante el desarrollo del proyecto.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FDBF2D; border-radius: 9px;" data-aos="fade-right")
        img.img-01.mb-1(src='@/assets/curso/temas/img01.svg' style="max-width: 45px; margin-left: 8px;")
        h3.col.ps-3.mb-0 Etapa 3:  Fuentes de información y descripción de los datos

    p.mb-5 Para llevar a cabo un análisis de datos exitoso, es necesario realizar una recolección de datos iniciales que permita determinar la consistencia de la información. Se espera que en dicha recolección sea posible describirlos, llevar a cabo todas las exploraciones planteadas y realizar la verificación de la calidad de los mismos.

    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img15.svg' alt="Imagen decorativa")
      .col-lg-7(data-aos="fade-left")
        p.mb-0 En ese orden de ideas, existen diferentes fuentes de información, es decir, los diversos medios a través de los cuales se pueden adquirir los datos. Puede ser que la organización tenga sus datos en sus sistemas privados, de los cuales es propietaria, o también puede adquirirlos desde sistemas externos (ya sean de pago o gratuitos).

    .BGM01.p-md-5.p-4.mb-5
      .row.justify-content-center.mb-5
        .col-xl-10
          p.mb-5 Dentro de los tipos de fuentes de información se tienen:
        .col-xl-5.col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
          .BGRT02.hg-01
            figure
              img(src='@/assets/curso/tema1/img16.png' alt="Imagen decorativa")
            .p-4
              .h4.texto-acento-botones.text-center.mb-4 Fuentes propias de datos
              p.text-center.mb-0 Es todo de tipo de información privada de cual se es propietario y se tiene completo control, como, por ejemplo, sistemas de información, encuestas, movimientos transaccionales y demás datos relevantes de la compañía.
        .col-xl-5.col-lg-6.mb-5(data-aos="fade-left")
          .BGRT02.hg-01
            figure
              img(src='@/assets/curso/tema1/img17.png' alt="Imagen decorativa")
            .p-4
              .h4.texto-acento-botones.text-center.mb-4 Fuentes de datos externos
              p.text-center.mb-0 En caso de que la empresa no posea cierto tipo de datos puede optar por la compra de estos, de igual manera puede hacer uso de datos abiertos disponibles gratuitamente en internet.
        .col-12.mb-5
          p.mb-0 Después de realizar la exploración de los datos por medio de las diferentes fuentes, es importante empezar a realizar la descripción de cada colecciona analizada; generalmente, estos deben ser organizados en filas y columnas, las columnas pueden estar determinadas por dos tipos de datos, así:
        .col-xl-5.col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
          .BGRT02.hg-02
            figure
              img(src='@/assets/curso/tema1/img18.png' alt="Imagen decorativa")
            .p-4
              .h4.texto-acento-botones.text-center.mb-4 Datos categóricos
              p.text-center.mb-0 Este tipo de datos hacen referencia a valores cualitativos como, por ejemplo, el género, color, marca, estado. Estos son valores que no se pueden cuantificar.
        .col-xl-5.col-lg-6(data-aos="fade-left")
          .BGRT02.hg-02
            figure
              img(src='@/assets/curso/tema1/img19.png' alt="Imagen decorativa")
            .p-4
              .h4.texto-acento-botones.text-center.mb-4 Datos numéricos
              p.text-center Representan un valor que se puede cuantificar de forma numérica y los cuáles se les puede aplicar diversos métodos estadísticos, dentro de este tipo de datos podemos definir edad, salario, temperatura, etc.
              p.text-center.mb-0  Al ser numéricos se pueden sumar, promediar y en general aplicar todas las operaciones matemáticas y estadísticas.

    p.mb-5 Después de determinar los datos categóricos y numéricos es fundamental establecer las medidas de tendencia central como la moda, media, mediana, varianzas, máximos y mínimos.

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img20.svg' alt="Imagen decorativa")
      .col-lg-9
        p Dentro de esta #[strong.sub-bg1 etapa 3,] también es necesario realizar una verificación detallada de la calidad de los datos, para esto es importante tener en cuenta aspectos como:
        ul.lista-ul--color
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | ¿Los datos están completos?
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | ¿Los datos son correctos?
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | ¿Qué tipo de errores se pueden presentar durante el análisis?
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | Hay valores que son nulos, ¿qué hacer si esto se presenta?
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | Hay datos con formatos incorrectos, ¿qué hacer si esto se presenta?
          li(style="margin-bottom: 2px" data-aos="fade-left")
            i.fas.fa-laptop-code(style="color: #FDBF2D;")
            | Hay datos duplicados, ¿qué hacer si esto se presenta?
        p.mb-0 Finalmente, es importante la generación de los informes que indiquen el estado en que se encontraron los datos. En este, se debe considerar el proceso que se llevó a cabo para la recolección de los datos, la descripción encontrada del estado de los datos y la descripción del proceso de exploración y calidad de los datos.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .tarjeta.BG04.p-4
          .row.justify-content-center
            .col-lg-1.col-2.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img21.svg' alt="Imagen decorativa")
            .col
              p.mb-0 El informe debe incluir el número total de registros, la clasificación de cada columna en numérica y categórica, una breve descripción de lo que cada columna representa, se debe identificar cuales columnas presentan datos vacíos, si existen valores duplicados, y que columnas se encuentran en un formato incorrecto.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
