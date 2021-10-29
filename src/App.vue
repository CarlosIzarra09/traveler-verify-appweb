<template>
  <v-app>
    <v-app-bar
      app
      color="#004F9F"
      dark
      height="extended"
    >
      <v-row class="text-center" align="center">
        <v-col cols="12" xl="2" sm="6" align="center" >
          <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              :src="require('../src/assets/Imagen1.png')"
              transition="scale-transition"
              width="300"

          />

        </v-col>
        <v-spacer></v-spacer>

        <v-col cols="12" xl="3" sm="6">
          <v-container style="background-color: #09ACA8; min-width: 220px" rounded-lg>

            <p style="color: whitesmoke">
              CONSULTA DE PRUEBAS MOLECULARES COVID - 19
            </p>
          </v-container>

        </v-col>

      </v-row>
<!--      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../src/assets/Imagen1.png')"
          transition="scale-transition"
          width="250"
        />

      </div>

      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-container style="background-color: #09ACA8;height: 80px;min-width: 220px" rounded-lg>
          <p style="color: whitesmoke">
            CONSULTA DE PRUEBAS MOLECULARES COVID - 19
          </p>
        </v-container>
      </div>-->


<!--      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>-->
    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
