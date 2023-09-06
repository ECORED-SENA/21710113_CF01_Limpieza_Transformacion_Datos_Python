<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/Cuestionario.svg", alt="")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Reconociendo los tipos de archivos
        p.mb-4 Identificar los tipos de archivos y comandos necesarios para la preparación, la limpieza y el análisis de los datos.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Cuestionario
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/cuestionario/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/Relacionar.svg", alt="")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Buscando la información
        p.mb-4 Apropiarse de los principales conceptos que se desarrollaron en el componente “En búsqueda de la información”. 
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Relacionar términos
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/relacionar/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
