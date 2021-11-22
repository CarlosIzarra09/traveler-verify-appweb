<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in desserts"
          :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.casos }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            casos: 45,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            casos: 45,
          },
          {
            name: 'Eclair',
            calories: 262,
            casos: 45,
          },
          {
            name: 'Cupcake',
            calories: 305,
            casos: 45,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            casos: 45,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            casos: 45,
          },
          {
            name: 'Lollipop',
            calories: 392,
            casos: 45,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            casos: 45,
          },
          {
            name: 'Donut',
            calories: 452,
            casos: 45,
          },
          {
            name: 'KitKat',
            calories: 518,
            casos: 45,
          },
        ],
      }
    },
  }
</script>

<style>

</style>
