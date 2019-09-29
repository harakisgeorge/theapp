<template>
  <div  class="md-layout md-gutter">
    <md-table v-model="users" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">LeaderBoard</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>
<style lang="scss" scoped>
  div{
    background-color:cadetblue;

  }
  .md-table{
     font-size:30px;
  }
  .md-table{
    width:400px;
  }
</style>
<script>
  export default {
    name: 'TableSort',
    data: () => ({
      users: [
        {
          id: 1,
          name: 'Shawna Dubbin',
        },
        {
          id: 2,
          name: 'Odette Demageard',
        },
        {
          id: 3,
          name: 'Lonnie Izkovitz',
        },
        {
          id: 4,
          name: 'Thatcher Stave',
          email: 'tstave4@reference.com',
        },
        {
          id: 5,
          name: 'Clarinda Marieton',
        },
        {
          id: 5,
          name: 'Clarinda Marieton',
        },
        {
          id: 5,
          name: 'Clarinda Marieton',
        },
        {
          id: 5,
          name: 'Clarinda Marieton',
        }
      ]
    })
  }
</script>