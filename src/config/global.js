export default {
  global: {
    componenteFormativo: 'En búsqueda de la información',
    descripcionCurso:
      'Este componente formativo aborda diferentes metodologías para desarrollar proyectos de ciencia de datos, apropiarse de diversas fuentes de información necesarias para la búsqueda eficiente de datos. Con su estudio responsable, el aprendiz podrá identificar algunos formatos del manejo de datos y, finalmente, sabrá desplegar una herramienta tecnológica basada en Python para la preparación, limpieza y transformación de datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Metodologías de análisis de datos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fuentes de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de bases de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de archivos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Infraestructura tecnológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Instalación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Puesta en marcha',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Instalación e importación de librerías',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Preparación de los datos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Metodologías de análisis de datos.',
      referencia:
        'Conceptos básicos de ayuda de CRISP-DM. (2022). Metodología Crisp-DM.',
      tipo: 'Página Web',
      link:
        'https://www.ibm.com/docs/es/spss-modeler/SaaS?topic=dm-crisp-help-overview',
    },
    {
      tema: 'Tipos de base de datos.',
      referencia:
        'Holamyndo. (s.f). ¿Qué es SQL y NOSQL? cuáles son sus diferencias y cuando deberías utilizarlos. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zmXl2dOGWL8&t=9s',
    },
    {
      tema: 'Infraestructura tecnológica',
      referencia:
        'pandas documentation — pandas 1.4.2 documentation. (2022). Pandas.',
      tipo: 'Página Web',
      link: 'https://pandas.pydata.org/docs/index.html',
    },
  ],
  glosario: [
    {
      termino: 'Extensión:',
      significado:
        'identificador al final de cada archivo que define su estructura.',
    },
    {
      termino: 'Tipo de Archivo:',
      significado:
        'dependiendo del tipo de archivo se puede almacenar la información en estructuras diferentes de acuerdo con la necesidad o software que lo cree.',
    },
    {
      termino: 'JSON:',
      significado:
        'formato que se basa en una estructura de texto simple que almacena la información en forma de objetos.',
    },
    {
      termino: 'CSV:',
      significado:
        'extensión para definir archivos delimitados por comas, no almacena texto enriquecido ni imágenes o tablas.',
    },
    {
      termino: 'XLSX:',
      significado:
        'extensión que se utiliza para identificar archivos procedentes de hojas de cálculo, como por ejemplo Excel.',
    },
    {
      termino: 'Base de datos:',
      significado:
        'sistema que permite el almacenamiento de datos de manera organizada ya sea de manera relacional o no relacional.',
    },
    {
      termino: 'Librerías:',
      significado:
        'conjunto de instrucciones que realizan una labor específica, y facilitan el desarrollo de proyectos.',
    },
    {
      termino: 'Lenguaje SQL:',
      significado:
        'se utiliza para recuperar, modificar o eliminar información de una base de datos relacional.',
    },
  ],
  referencias: [
    {
      referencia:
        'Tiempo, A. (2022,). Limpieza de datos con Python - Al mal tiempo, buena data. Medium.',
      link:
        'https://lauralpezb.medium.com/limpieza-de-datos-con-python-48d436ca9ace',
    },
    {
      referencia:
        'L. (2021Manual de Anaconda y Conda. ¿Cómo administro y configuro mi entorno para Python? - Tutoriales de programación y un poco más.',
      link: 'https://tutorialdeprogramacion.com/manual-conda-y-python/',
    },
    {
      referencia: 'Introducción al CRISP-DM. (2021). IBM.',
      link:
        'https://www.ibm.com/docs/es/spss-modeler/SaaS?topic=guide-introduction-crisp-dm',
    },
    {
      referencia: 'NumPy. (2022). Numpy.',
      link: 'https://numpy.org/',
    },
    {
      referencia:
        'Datos Abiertos Colombia | Datos Abiertos Colombia. (2022). La plataforma de datos abiertos del gobierno colombiano.',
      link: 'https://www.datos.gov.co/',
    },
    {
      referencia: 'Oracle. (2022). Base de Datos.',
      link:
        'https://www.oracle.com/co/database/what-is-database/#:%7E:text=Una%20base%20de%20datos%20es,bases%20de%20datos%20(DBMS).',
    },
    {
      referencia: 'Oracle. (2022). Tipos de Bases de Datos.',
      link: 'https://www.oracle.com/co/database/what-is-database/#link5',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ronald Alexander Vacca Ascanio',
          cargo: 'Experto Temático',
          centro: 'Dirección General, Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la industria, la empresa y los servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfondo Bautista',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
