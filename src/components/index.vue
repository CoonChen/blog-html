<template>
    <div>
      <el-row :gutter="20">
        <el-col :span="9">
          <el-card :body-style="{ padding: '0px'}">
            <div class="avatar">
              <img src="../assets/bg2.png" class="image" style="cursor:pointer;">
            </div>
            <div style="padding: 20px;">
              <div style="margin-top: 10px">
                <span>欢迎您，<strong>{{username}} </strong>。</span>
              </div>
              <div class="bottom">
                <time style=" font-size: 13px;color: #999;">{{ currentDate }}</time>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="15">
          <div class="context">
            <el-card  :body-style="{ padding: '0px', height: '140px'}">
              <div style="color: #bfbfbf;">
                <p>人生若只如初见，何事秋风悲画扇。</p>
                <p>等闲变却故人心，却道故人心易变。</p>
                <p>骊山语罢清宵半，泪雨霖铃终不怨。</p>
                <strong>......</strong>
                <!--<p>何如薄幸锦衣郎，比翼连枝当日愿。</p>-->
              </div>
            </el-card>
          </div>
          <div class="context">
            <el-card  :body-style="{ padding: '0px', height: '170px'}">
              <div style="color: #bfbfbf;">
                <p> 滚滚长江东逝水，浪花淘尽英雄。</p>
                <p>   是非成败转头空。</p>
                <p>  青山依旧在，几度夕阳红。</p>
                <p>  白发渔樵江渚上，惯看秋月春风。</p>
                <strong>......</strong>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "index",
      data() {
          return {
            currentDate: "",
            username: ""
          }
      },
      methods: {
        getUserInformation() {
          $http.get('/api/getUserInformation').then((response) => {
            this.currentDate = response.data.currentDate;
            this.username = response.data.user.username;
          });
        }
      },
      created() {
        $http.get('/api/isLogin').then((response) => {
          if (response.data) {
            this.getUserInformation();
          } else {
            this.$router.push({name:"login"});
          }
        });
      }
    }
</script>
<style scoped>
 .bottom {
    margin-top: 30px;
   margin-bottom: 10px;
    line-height: 12px;
  }

  .image {
    width: 100%;
    display: block;
  }
  .avatar {
    display: block;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
  .avatar img {
    display: block;
    border: 0;
    width: 100%;
    transform: scale(1);
    transition: all 1s ease 0s;
    -webkit-transform: scale(1);
  }

  .avatar:hover img {
    transform: scale(1.3);
    transition: all 1s ease 0s;
    -webkit-transform: scale(1.5);
  }
  .context {
    text-align: center;
    margin-bottom: 15px;
  }

</style>
