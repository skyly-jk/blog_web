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
        <tr v-for="tag in tagList" :key="tag.id">
          <td>
            <edit-cell :text="tag.name"></edit-cell>
          </td>
          <td>
            <a-popconfirm title="是否删除？">
              <a-button>删除</a-button>
            </a-popconfirm>
          </td>
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
                tagList:[
                    {
                        id:1,
                        name:"java"
                    }
                ]
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