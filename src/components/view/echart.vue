<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">
        <el-button type="primary" @click="submit()">测试</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "echart",
      data() {
          return {
            inputForm: {
              id: "ddd",
              name: "ddddd"
            }
          }
      },
      methods: {
        submit() {
          $http.post("/api/test", this.inputForm).then((response) => {
            console.log(response.data);
          });
        }
      }
    }
</script>

<style scoped>

</style>
