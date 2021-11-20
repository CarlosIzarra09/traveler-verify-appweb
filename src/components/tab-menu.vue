<template>
  <v-card color="#D4EDDA">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 white--text">
        COVID-19
      </h1>
    </v-card-title>

    <v-tabs
        v-model="tab"
        background-color="transparent"
        color="#09ACA8"
        grow
    >
      <v-tab
          v-for="item in items"
          :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
          v-for="item in items"
          :key="item"
      >
        <v-card
            color="basil"
            flat
        >
          <template>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
              <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="Name"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Age"
                  required
              ></v-text-field>
              <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Codigo de Ubigeo"
                  required
              ></v-text-field>
              <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Codigo de test"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Lugar de Destino(Departamento)"
                  required
              ></v-text-field>


              <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="Do you agree?"
                  required
              ></v-checkbox>

              <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="submit()"
              >
                Validate
              </v-btn>

              <v-btn
                  color="error"
                  class="mr-4"
                  @click="reset"
              >
                Reset Form
              </v-btn>

              <v-btn
                  color="warning"
                  @click="resetValidation"
              >
                Reset Validation
              </v-btn>
            </v-form>
          </template>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: "tab-menu",
  data () {
    return {
      nombre:"",
      uuid:"",
      edad : 0,
      resultado :"",
      ubigeo :"",
      lugardestino :"",
      tab: null,
      mensaje:"",
      items: [
        '¿Estoy apto para viajar?', 'Historial de pruebas', 'Verificar prueba',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
  methods(){

  }
}
</script>


<style scoped>
.basil {
  background-color: #FFFBE6 !important;
}
.white--text {
  color: white;
}

</style>
