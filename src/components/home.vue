<template>
    <div class="app-wrapper">
        <!--侧滑菜单-->
        <div class="el-aside">
          <el-menu class="aside-menu" default-active="index" :collapse="collapse" unique-opened router>
            <el-menu-item index="index" key="index">
              <i class="fa fa-send"></i>
              <span class="menu-item">首页栏</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="fa fa-reddit-alien"></i>
                <span class="menu-item">导航一</span>
              </template>
              <el-menu-item index="edit" key="edit">记忆执笔</el-menu-item>
              <el-menu-item index="notes" key="notes">灵犀一刻</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="fa fa-jsfiddle"></i>
                <span class="menu-item">导航二</span>
              </template>
              <el-menu-item index="echart" key="echart">图表之美</el-menu-item>
              <el-menu-item index="picture" key="picture">画林之艺</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="fa fa-resistance"></i>
                <span class="menu-item">导航三</span>
              </template>
              <el-menu-item index="about" key="about">关于系统</el-menu-item>
              <el-menu-item index="setting" key="setting">工匠之技</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>

      <!--头部header-->
        <div class="el-header" :class="{'el-main-collapse':collapse}">
          <div class="header-aside" :class="{'header-aside-rotate1':menuIconRotate}">
            <img src="../assets/menu.png" style="cursor:pointer;" width="32" height="32"  @click="collapseClick">
          </div>
          <div class="header-notes">
            <img src="../assets/notes.png" style="cursor:pointer;" width="32" height="32" @click="notesClick">
          </div>
          <div class="header-user">
            <img src="../assets/user.png" style="cursor:pointer;" width="42" height="42"  @click="userClick">
          </div>
        </div>

      <!--主体内容-->
        <div class="el-main" :class="{'el-main-collapse':collapse}">
          <transition name="move" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </div>
      <div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" >
          <div style="width: 100%;text-align: center;">确认要退出系统</div>
          <span slot="footer" class="dialog-footer">
            <el-button  type="text" @click="dialogVisible = false">取 消</el-button>
            <el-button type="text" @click="logout">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
</template>
<script>
    export default {
        name: "home",
      data() {
          return {
            collapse: false,
            dialogVisible: false,
            menuIconRotate: false
          }
      },
      methods: {
        collapseClick() {
          this.collapse = !this.collapse;
          this.menuIconRotate = !this.menuIconRotate;
        },
        notesClick() {

        },
        userClick() {
          this.dialogVisible = true;
        },
        logout() {
          this.dialogVisible = false;
          $http.post('/api/logout').then(() => {
            this.$router.push({name:"login"});
          });
        }
      },
      created() {
        $http.get('/api/isLogin').then((response) => {
          if (response.data) {

          } else {
            this.$router.push({name:"login"});
          }
        });
      }

    }
</script>

<style scoped>
  .app-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .el-aside {
    display: block;
    position: absolute;
    height: 100%;
    border-right: solid 1px #000;
    left: 0;
  }
  .aside-menu:not(.el-menu--collapse){
    width: 230px;
  }
  .el-aside > ul {
    height:100%;
  }
  .el-header {
    background-color: #ffffff;
    position: absolute;
    right: 0;
    left: 231px;
    height: 56px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    display: flex;
    border-bottom: solid 2px #f6f6f6;
  }
  .el-main {
    background: #f8f9fa;
    position: absolute;
    left: 231px;
    right: 0;
    top: 56px;
    bottom: 0;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
  }
  .el-main-collapse {
    left: 65px;
  }
  .menu-item {
    margin-left: 10px;
  }

  .header-aside {
    margin-top: 12px;
    width: 48px;
    height: 48px;
  }

  .header-aside img{
    transition:all .3s ease-in-out;
    -webkit-transition:all .3s ease-in-out;
    -moz-transition:all .3s ease-in-out;
    -ms-transition:all .3s ease-in-out;
    -o-transition:all .3s ease-in-out;
  }

  .header-aside-rotate1 img{
    transform:rotate(90deg);
    -webkit-transform:rotate(90deg);
    -moz-transform:rotate(90deg);
    -ms-transform:rotate(90deg);
    -o-transform:rotate(90deg)
  }

  .header-aside-rotate2 img{
    transform:rotate(-90deg);
    -webkit-transform:rotate(-90deg);
    -moz-transform:rotate(-90deg);
    -ms-transform:rotate(-90deg);
    -o-transform:rotate(-90deg)
  }


  .header-notes {
    position: absolute;
    right: 100px;
    margin-top: 12px;
  }
  .header-user {
    position: absolute;
    right: 24px;
    margin-top: 8px;
  }

  .el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 220px;
    left: 10px;
  }
</style>
