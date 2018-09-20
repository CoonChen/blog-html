<template>
    <div>
      <el-row>
        <el-col :span="12">
          <el-input v-model="title" placeholder="文章标题"></el-input>
        </el-col>
        <el-col :span="2" :offset="8">
          <el-button @click="reset">重置</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="save">保存</el-button>
        </el-col>
      </el-row>
      <div style="margin-top: 10px"></div>
      <el-row>
        <el-col :span="24">
          <vue-editor v-model="content"></vue-editor>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import { VueEditor  } from 'vue2-editor'
    export default {
      name: "edit",
      components: { VueEditor  },
      data() {
        return {
          title: "",
          content: ""
        }
      },
      methods: {
        reset() {
          this.content = "";
        },
        save() {
          console.log(this.content);
        }
      }

    }
</script>

<style scoped>
  .ql-editor {
    min-height: 1000px;
    font-size: 16px;
  }
</style>
