<template>
    <div>
       <el-upload 
        ref='imgUpload' 
        action="#"
        :auto-upload="false"
        :show-file-list="false"
        multiple
        :on-change='uploadSectionFile'>
         <el-button slot="default" size="small" type="primary">上传图片</el-button>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <draggable v-model="fileList">
          <transition-group>
              <div v-for="file in fileList" :key="file.uid" class="img-box">
                <div class="btn-list">
                  <i v-if="!file.isMain" class="el-icon-circle-check" @click="setMain(file)"></i>
                  <i v-if="file.isMain" class="el-icon-success"></i>
                  <i class="el-icon-delete" @click="deletFile(file)"></i>
                </div>
                <img :src="file.url" alt="">
              </div>
          </transition-group>
      </draggable>
      <span>
        <p>最多可以上传9张, 建议尺寸640x640像素</p>
        <p style="color:red; margin-top: 10px;">默认第一张为封面</p>
      </span>
     
      <el-button @click="uploadImgs">上传</el-button>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
    data(){
        return {
            dialogVisible: false,
            dialogImageUrl: '',
            disabled: false,
            fileList:[{
              isMain:true,
              uid:'1',
              url:require('../assets/img/chaoliumingdian.jpg')
            },{
              isMain:false,
              uid:'2',
              url:require('../assets/img/tianmao.jpg')
            },{
              isMain:true,
              uid:'3',
              url:require('../assets/img/chaoliumingdian.jpg')
            },{
              isMain:false,
              uid:'4',
              url:require('../assets/img/tianmao.jpg')
            },{
              isMain:true,
              uid:'5',
              url:require('../assets/img/chaoliumingdian.jpg')
            },{
              isMain:false,
              uid:'6',
              url:require('../assets/img/tianmao.jpg')
            }]
      }
    },
    components: {
      draggable,
    },
    updated() {
    console.log(this.fileList)
  },
    methods:{
        uploadSectionFile(file){
          this.fileList.push(file)
          
          console.log(this.fileList)
        },
        uploadImgs(){
            this.$refs['imgUpload'].submit()    
        },
        deletFile(file){
          const findex = this.fileList.map(f => f.uid).indexOf(file.uid);
          if(findex > -1){
            if(this.fileList[findex].isMain === true){
              if(findex === 0){
                this.fileList[1].isMain = true
              }else{
                this.fileList[0].isMain = true
              }
            }
            this.fileList.splice(findex, 1);

          }
        },
        setMain(file){
          this.fileList.forEach(item =>{
            if(item.uid === file.uid){
              item.isMain = true
            }else{
              item.isMain = false
            }
          })
        }
    }
}
</script>
<style scoped>
.img-box{
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 0 5px;
}
.img-box .btn-list{
position: absolute;
width: 100px;
height: 20px;
background: #2c3e506b;
display: flex;
justify-content: right;
align-items: center;
}
.img-box .btn-list i{
  margin: 0 2px;
  cursor: pointer;
}
.img-box img{
  width: 100px;
  height: 100px;
  cursor:move;
}
</style>