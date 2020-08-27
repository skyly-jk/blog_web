<template>
  <div class="manage">
    <table>
      <thead>
      <tr>
        <th>标题</th>
        <th>发布时间</th>
        <th>分类</th>
        <th>标签</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in postList" :key="post.id">
        <td>
          <edit-cell :text="post.title"></edit-cell>
        </td>
        <td>
          {{post.createDate}}
        </td>
        <td>
          <span class="tag">{{post.categoryName}}</span>
        </td>
        <td>
          <span class="tag" style="margin-right: 1rem" v-for="tag in post.tagNames.split(',')" :key="tag">{{tag}}</span>
        </td>
        <td>
          <a-popconfirm title="是否删除？">
            <a-button>删除</a-button>
          </a-popconfirm>
        </td>
      </tr>
      </tbody>
    </table>
    <a-button @click="writePost">写博客</a-button>
  </div>
</template>

<script>
    import EditCell from "../util/editCell";

    export default {
        name: "postMan",
        data(){
            return {
                postList:[],
                currentPage:1,
                onePageCount:10
            }
        },
        mounted() {
            this.getPost()
            console.log(this.postList)
        },
        methods:{
            getPost(){
                let _this=this;
                let data={
                    currentPage:this.currentPage,
                    onePageCount:this.onePageCount
                }
                this.$axios.post("/api/post/getPost",data).then(res=>{
                    _this.postList=res.data.data
                })
            },
            writePost(){
                this.$router.push({name:"editor"})
            }
        },
        components: {EditCell},
    }
</script>

<style scoped lang="scss" src="@/assets/scss/manage.scss">

</style>