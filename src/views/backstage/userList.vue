<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-10-16 21:47:07
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-10-16 22:20:25
 * @FilePath: \myblog\src\views\backstage\userList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
      <el-table :data="tableData" class="infoItem" @row-click="choose($event)" >
        <el-table-column prop="id" label="id" width="50">
        </el-table-column>
        <el-table-column prop="date" label="最新登入日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="用户昵称" width="150">
        </el-table-column>
        <el-table-column prop="account" label="账号" width="200">
        </el-table-column>
        <el-table-column prop="password" label="密码" width="200">
        </el-table-column>
        <el-table-column prop="power" label="权限" width="50">
        </el-table-column>
        <el-table-column prop="notes" label="注解">
        </el-table-column>
      </el-table>
  </div>
</template>
<script>
export default {
    data() {
        const item={
        id:1,
        date: '2016-05-02',
        name: '王小虎',
        account: 'bjtt',
        password:'Aa123456',
        power:1,
        notes:'暂无'
      };
        return {
            tableData: Array(10).fill(item)
        }
    },
    methods:{
      choose(event){
       console.log(event.id); 
      } 
    }
};
</script>
<style lang="scss" scope>
</style>
