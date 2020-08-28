<template>
  <div class="tagCloud">
    <svg :width="width" :height="height">
      <a v-for="tag in tags" :key="tag.id" >
        <text :x='tag.x' :y='tag.y' :font-size='20 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)' :style="{fill:tag.color}">{{tag.name}}</text>
      </a>
    </svg>
  </div>
</template>

<script>
    export default {
        name: "tagCloud",
        data(){
            return {
                width:500,
                height:500,
                tags:[],
                radius:200,
                speedX:Math.PI/(360*1.5),//球一帧绕x轴旋转的角度
                speedY:Math.PI/(360*1.5),//球-帧绕y轴旋转的角度
            }
        },
        computed:{
            CX(){//球心x坐标
                return this.width/2;
            },
            CY(){//球心y坐标
                return this.height/2;
            }
        },
        created() {
            let _this=this;
            this.$axios.post("/api/tag/getTag").then(res=>{
                let tags=res.data.data
                let tagsNum=tags.length
                for (let i=0;i<tagsNum;i++){
                    let tag = tags[i];
                    let k = -1 + (2 * (i + 1) - 1) / tagsNum;
                    let a = Math.acos(k);
                    let b = a * Math.sqrt(tagsNum * Math.PI)//计算标签相对于球心的角度
                    tag.x = _this.CX +  _this.radius * Math.sin(a) * Math.cos(b);//根据标签角度求出标签的x,y,z坐标
                    tag.y = _this.CY +  _this.radius * Math.sin(a) * Math.sin(b);
                    tag.z = _this.radius * Math.cos(a);
                    tag.color='rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')'
                }
                _this.tags=tags
            })
        },
        mounted() {
            setInterval(() => {
                this.rotateX(this.speedX);
                this.rotateY(this.speedY);
            }, 17)
        },
        methods:{
            rotateX(angleX){
                var cos = Math.cos(angleX);
                var sin = Math.sin(angleX);
                for(let tag of this.tags){
                    var y1 = (tag.y- this.CY) * cos - tag.z * sin  + this.CY;
                    var z1 = tag.z * cos + (tag.y- this.CY) * sin;
                    tag.y = y1;
                    tag.z = z1;
                }
            },
            rotateY(angleY){
                var cos = Math.cos(angleY);
                var sin = Math.sin(angleY);
                for(let tag of this.tags){
                    var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
                    var z1 = tag.z * cos + (tag.x - this.CX) * sin;
                    tag.x = x1;
                    tag.z = z1;
                }
            },
        }
    }
</script>

<style scoped>

</style>