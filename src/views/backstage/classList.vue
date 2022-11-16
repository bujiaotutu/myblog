<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-10-16 21:47:07
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-10-19 18:41:01
 * @FilePath: \myblog\src\views\backstage\userList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
      <el-table :data="tableData" class="infoItem" @row-click="choose($event)" >
        <el-table-column prop="id" label="id" width="50">
        </el-table-column>
        <el-table-column prop="class" label="类别" width="150">
        </el-table-column>
        <el-table-column prop="tips" label="注解">
        </el-table-column>
      </el-table>
  </div>
</template>
<script>
export default {
    data() {
        const item={
        id:1,
        class: 'others',
        tips: '其他分类',
      };
        return {
            tableData: Array(4).fill(item)
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
