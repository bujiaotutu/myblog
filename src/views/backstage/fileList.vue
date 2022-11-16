<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-10-16 21:47:07
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-10-17 18:51:13
 * @FilePath: \myblog\src\views\backstage\userList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
      <el-table :data="tableData" class="infoItem" @row-click="choose($event)" >
        <el-table-column prop="id" label="id" width="50">
        </el-table-column>
        <el-table-column prop="date" label="存入日期" width="150">
        </el-table-column>
        <el-table-column prop="fileName" label="文件昵称" width="150">
        </el-table-column>
        <el-table-column prop="type" label="文件型号" width="50">
        </el-table-column>
        <el-table-column prop="url" label="文件路径">
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
        fileName: 'vue生命周期',
        type: 'md',
        url:'/md/user/...',
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
