<template>
  <div >
     <TopMenu/>
    <md-table v-model="users" >
      <md-table-toolbar>
        <h1 class="md-title">User Details</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell  md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell  md-sort-by="name">{{ item.name }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>
<style lang="scss" scoped>
  
  .md-table{
    width:60%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: inline-block;
  }
</style>
<script>
import TopMenu from "@/components/TopMenu"
export default {
  name: 'Forums',
  components: {
     TopMenu
  },
    name: 'TableSort',
    data: () => ({
      users: [
        {
          id: "Username",
          name: 'george',
        },
        {
          id: "Email",
          name: 'george@gmail.com',
        },
        {
          id: "Position On Leaderboard",
          name: '5th',
        },
        {
          id: "Streak",
          name: '5 days',
        }
      ]
    })
  }
</script>