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
          :key="item.id"
      >
        {{ item.text }}
      </v-tab>
    </v-tabs>

    <v-tabs-items
        v-model="tab">
      <v-tab-item
          v-for="item in items"
          :key="item.id"
      >
        <v-card
            color="basil"
            flat
        >
          <v-container style="padding: 50px">
            <template v-if="item.id===1">
              <v-form
                  ref="form"
                  v-model="valid"
              >
                <v-text-field
                    v-model="user.name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="user.age"
                    label="Age"
                    :rules="numberRules"
                    type="number"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="user.ubigeo"
                    type="number"
                    label="Codigo de Ubigeo"
                    :rules="numberRules"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="user.uuid"
                    type="number"
                    label="Codigo de test"
                    :rules="numberRules"
                    required
                ></v-text-field>


                <v-select
                    v-model="valueDepartment"
                    :items="deparments"
                    label="Departamento destino"
                ></v-select>


                <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Acepto los términos de servicio"
                    required
                ></v-checkbox>

                <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="getRvalue"
                >
                  Validate
                </v-btn>

                <v-btn
                    color="error"
                    class="mr-4"
                    @click="resetForm"
                >
                  Reset Form
                </v-btn>


              </v-form>
            </template>


          </v-container>


        </v-card>
      </v-tab-item>
    </v-tabs-items>



    <div class="text-center">
      <v-dialog
          v-model="isCharging"
          hide-overlay
          persistent
          width="300"
      >
        <v-card
            color="primary"
            dark
        >
          <v-card-text>
            Cargando predicción
            <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog
          transition="dialog-top-transition"
          max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="primary"
              v-bind="attrs"
              v-on="on"
          >From the top</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
                color="primary"
                dark
            >Opening from the top</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                  text
                  @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>



  </v-card>
</template>

<script>
import PredictionApiService from "../services/prediction-api.service";



export default {
  name: "tab-menu",
  data () {
    return {
      valid: false,
      checkbox: false,
      showDialog: false,
      isCharging:false,
      valueDepartment: "",

      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],

      numberRules:[
          v => (v > 0) || 'It must be a valid number'
      ],

      deparments:["AMAZONAS","ANCASH", "APURIMAC", "AREQUIPA", "AYACUCHO", "CAJAMARCA",
        "CUSCO", "HUANCAVELICA", "HUANUCO", "ICA", "JUNIN", "LA LIBERTAD", "LAMBAYEQUE", "LIMA",
        "LORETO", "MADRE DE DIOS", "MOQUEGUA", "PASCO", "PIURA", "PUNO", "SAN MARTIN",
        "TACNA", "TUMBES", "UCAYALI"],


      user:{
        name:"",
        uuid:0,
        age: 0,
        result :"POSITIVO",
        ubigeo :0,
        destiny :"",
      },
      message:"",
      tab: null,
      items: [
        {id:1, text:"¿Estoy apto para viajar?"},
        {id:2, text:"Historial de pruebas"},
        {id:3, text:"Verificar prueba"}
      ],
      //text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
  methods:{

    getRvalue() {
      if(this.valid){
        this.valid = false
        this.isCharging = true
        this.user.destiny=this.valueDepartment
        PredictionApiService.getRvalue(this.user).then(resp =>{
          this.valid = true
          this.isCharging = false
          this.showDialog = true
          console.log(resp.data.pred)
        })
      }
    },

    resetForm(){
      this.valid = false
      this.user.name=""
      this.user.age=0
      this.user.destiny=""
      this.user.uuid=0
      this.user.ubigeo=0
    }


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
