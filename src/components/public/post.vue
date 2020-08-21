<template>
  <div class="post">
    <a-card>
      <div slot="title">测试标题</div>
      <div v-html="getContent()"></div>
    </a-card>
  </div>
</template>

<script>
    export default {
        name: "post",
        props:["id"],
        methods:{
            getContent(){
                let tmp=`\`\`\`java
public class Helloworld{
    public static void main(String[] args){
        System.out.println("hello world!");
    }
}
\`\`\``
                return this.$marked(tmp)
            }
        }
    }
</script>

<style scoped>

</style>