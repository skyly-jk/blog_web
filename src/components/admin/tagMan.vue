<template>
  <div class="manage">
    <table>
      <thead>
        <tr>
          <th>标签名</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tag in $store.state.tags" :key="tag.id">
          <td>
            <edit-cell :text="tag.name"></edit-cell>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import EditCell from "../util/editCell";
    export default {
        name: "tagMan",
        components: {EditCell},
        data(){
            return {
                tagList:[]
            }
        },
        mounted() {

        },
        methods:{

        }
    }
</script>

<style scoped lang="scss" src="@/assets/scss/manage.scss">

</style>