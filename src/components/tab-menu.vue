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
          <v-card-text>{{ text }}</v-card-text>
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
      tab: null,
      items: [
        '¿Estoy apto para viajar?', 'Historial de pruebas', 'Verificar prueba',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
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