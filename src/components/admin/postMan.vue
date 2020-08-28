<template>
  <div class="manage">
    <table>
      <thead>
      <tr>
        <th>标题</th>
        <th>发布时间</th>
        <th>分类</th>
        <th>标签</th>
        <th>状态</th>
        <th>内容</th>
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
          <span v-if="post.draft==0" class="status status-normal">正常</span>
          <span v-else class="status status-draft">草稿</span>
        </td>
        <td>
          <a class="td-info">{{post.pureText}}</a>
        </td>
        <td>
          <a-popconfirm title="是否删除？">
            <a-button>删除</a-button>
          </a-popconfirm>
        </td>
      </tr>
      </tbody>
    </table>
    <a-button @click="writePost" style="margin-left: 10px">写博客</a-button>
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

<style scoped lang="scss">
  @import "@/assets/scss/manage.scss";
  .status{
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    line-height: 2rem;
    border-radius: 3px;
  }
  .status-normal{
    background-color: #a3a3fa;
    color: #2323e0;
  }
  .status-draft{
    background-color: #f5f5c9;
    color: #a5a502;
  }
  .td-info{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    width: 10rem;
    color: #222222;
  }
</style>