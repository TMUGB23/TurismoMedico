<template>

  <body>

<header>
    <!-- Inicio Navbar Doble-->
    <div class="container">
  <nav class="navbar navbar-expand-lg navbar-dark bg-custom fixed-top">
      <!-- Contenido del primer navbar -->
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <img src="https://us.123rf.com/450wm/nexusby/nexusby2012/nexusby201200212/161199154-icono-de-logotipo-de-vector-de-turismo-m%C3%A9dico.jpg" alt="Logo" width="60" height="60" class="d-inline-block align-text-top">
    <h6 class="text-light mt-1">Turismo Medico</h6>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-4 mb-md-0">
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-dark bg-custom fixed-top my-mt">
    <!-- Contenido del segundo navbar -->
    <div class="collapse navbar-collapse justify-content-center" id="navbar2">
      <ul class="navbar-nav  mb-2 mb-lg-0">

      <!-- Enlace por Vue Router-->
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
    
      <!-- Enlace por Vue Router-->
          <li class="nav-item">
            <router-link class="nav-link active" to="/categorias">Turismo Medico</router-link>
          </li>
    
      <!-- Enlace por Vue Router-->
          <li class="nav-item">
            <a class="nav-link disabled">Ofertas de viajes</a>
          </li>
     <!-- Enlace por Vue Router-->
           <li class="nav-item">
            <a class="nav-link disabled">Nosotros</a>
          </li>
      </ul>
    </div>
  </nav>
</div>
</header>
<main>

<!-- Inicia Carousel -->
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
                <!-- Foto 1 -->
    <img src="https://mejoreszonas.com/wp-content/uploads/2019/05/D%C3%B3nde-alojarse-en-San-Salvador-El-Salvador.jpg" class="d-block w-100" alt="imagen">
    <div class="container">
      <div class="carousel-caption">
        <h1>Nombre de la Categoria.</h1>
      </div>
    </div>
  </div>
  <div class="carousel-item">
                <!-- Foto 2 -->
    <img src="https://mejoreszonas.com/wp-content/uploads/2019/05/D%C3%B3nde-alojarse-en-San-Salvador-El-Salvador.jpg" class="d-block w-100" alt="imagen">
    <div class="container">
      <div class="carousel-caption">
        <h1>Nombre de la Categoria.</h1>
      </div>
    </div>
  </div>
  <div class="carousel-item">
                <!-- Foto 3 -->
    <img src="https://mejoreszonas.com/wp-content/uploads/2019/05/D%C3%B3nde-alojarse-en-San-Salvador-El-Salvador.jpg" class="d-block w-100" alt="imagen">
    <div class="container">
      <div class="carousel-caption">
        <h1>Nombre de la Categoria.</h1>
      </div>
    </div>
  </div>
</div>
            <!-- Botones-->
<button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>

 <!-- Termina Carousel -->


   <!-- Inicia Album card Group -->
<div class="album py-3">

<div class="container">

  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <div class="col">
      <div class="card shadow-sm">
        <!-- Enlace por Vue Router-->
        <router-link to="/tour">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" 
        role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
        <rect width="100%" height="100%" fill="#63719A"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Tour Medico-1</text></svg>
        </router-link>

        <div class="card-body">
              <h5 class="card-title align-items-center">Tour Medico_1</h5>
          <div class="d-flex justify-content-between align-items-center">
          </div>
        </div>
      </div>
    </div>
    
    <div class="col">
      <div class="card shadow-sm">
                  <!-- Enlace por Vue Router-->
        <router-link to="/tour">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#63719a"/><text x="50%" y="50%" fill="#e9f5f9" dy=".3em">Tour Medico-2</text></svg>
        </router-link>

        <div class="card-body">
              <h5 class="card-title align-items-center">Tour Medico_2</h5>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card shadow-sm">
                  <!-- Enlace por Vue Router-->
        <router-link to="/tour">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#63719A"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Tour Medico-3</text></svg>
        </router-link>

        <div class="card-body">
              <h5 class="card-title align-items-center">Tour Medico_3</h5>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            </div>
          </div>
        </div>
      </div>
    </div>

      <div class="col">
      <div class="card shadow-sm">
                  <!-- Enlace por Vue Router-->
        <router-link to="/tour">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#63719A"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Tour Medico-4</text></svg>
        </router-link>

        <div class="card-body">
              <h5 class="card-title align-items-center">Tour Medico_4</h5>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            </div>
          </div>
        </div>
      </div>
    </div>

    
<div class="col">
      <div class="card shadow-sm">
                  <!-- Enlace por Vue Router-->
        <router-link to="/tour">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#63719A"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Tour Medico-5</text></svg>
        </router-link>

        <div class="card-body">
              <h5 class="card-title align-items-center">Tour Medico_5</h5>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card shadow-sm">
        <!-- Enlace por Vue Router-->
        <router-link to="/tour">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#63719A"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Tour Medico-6</text></svg>
        </router-link>

        <div class="card-body">
              <h5 class="card-title align-items-center">Tour Medico_6</h5>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Divisor -->
  <hr class="featurette-divider">
</div>
</div>

<!-- FOOTER -->
<footer class="container">
<p class="float-end active"><a href="#">Back to top</a></p>
<p>&copy; 2017–2022 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
</footer>
</main>
</body>
</template>

<script>
export default {
name: 'HelloWorld',
props: {
  msg: String
}
}
</script>

<!-- Estilo CSS-->
<style scoped>

.bg-custom {
background-color: #102340; /* Cambia el color de fondo a tu preferencia */
/* Otros estilos personalizados */
}

.my-mt {
margin-top: 75px; /* Ajusta el tamaño del margen según tus necesidades */
}


h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}

/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

body {
padding-top: 3rem;
padding-bottom: 3rem;
color: #5a5a5a;
}



/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
bottom: 3rem;
z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
height: 28rem;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
margin-bottom: 1.5rem;
text-align: center;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
margin-right: .75rem;
margin-left: .75rem;
}
/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
margin: 2rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
letter-spacing: -.05rem;
}

/* rtl:end:remove */

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
/* Bump up size of carousel content */
.carousel-caption p {
margin-bottom: 1.25rem;
font-size: 1.25rem;
line-height: 1.4;
}

.featurette-heading {
font-size: 50px;
}
}

@media (min-width: 62em) {
.featurette-heading {
margin-top: 7rem;
}
}

.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
</style>
