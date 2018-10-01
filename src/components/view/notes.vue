<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div class="image-zoom-in" >
          <img src="../../assets/item1.jpg"  style="cursor:pointer;">
        </div>
        <div style="width: 391px; text-align: center;font-size: 24px;color: #999;">
          <span>活在世途</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="image-zoom-in" >
          <img src="../../assets/item2.jpg"  style="cursor:pointer;">
        </div>
        <div class="item-tip">
          <span>诗与远方</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="image-zoom-in" >
          <img src="../../assets/item3.jpeg"  style="cursor:pointer;">
        </div>
        <div class="item-tip">
          <span>梦之摇篮</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="image-zoom-in" >
          <img src="../../assets/item4.jpg"  style="cursor:pointer;">
        </div>
        <div class="item-tip">
          <span>码行天下</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="image-zoom-in" >
          <img src="../../assets/item5.jpg"  style="cursor:pointer;">
        </div>
        <div class="item-tip">
          <span>心之所愿</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="image-zoom-in" >
          <img src="../../assets/item6.gif"  style="cursor:pointer;">
        </div>
        <div class="item-tip">
          <span>诗画人生</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "notes",
      data() {
          return {

          }
      },
      methods: {

      }
    }
</script>

<style scoped>
  .image-zoom-in {
    position:relative;
    width:391px;
    height:220px;
    display:inline-block;
    overflow:hidden;
    background:#fff;
  }

  .image-zoom-in img
  {
    transform: scale(1);
    transition: all 1s ease 0s;
    -webkit-transform: scale(1);
  }

  .image-zoom-in:hover img
  {
    transform: scale(1.5);
    transition: all 1s ease 0s;
    -webkit-transform: scale(1.5);
  }
  .item-tip {
    width: 391px;
    text-align: center;
    font-size: 24px;
    color: #999;
  }

</style>
