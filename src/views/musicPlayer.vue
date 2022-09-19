<!--
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-17 20:33:24
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-09-18 23:05:28
 * @FilePath: \resume\src\views\musicPlayer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template >
    <div class="music_player flex">
        <div class="audio_content">
            <audio src="../assets/退后-周杰伦.mp3" controls></audio>
        </div>
        <div class="music_list"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    $font-color:rgb(65, 184, 210);
    .music_player{
        min-height: 400px;
        height: auto;
        flex-direction: column;

        .audio_content{
            width: 100%;
            height: auto;
            margin-bottom: 20px;
        }

        .music_list{
            width: 100%;
            flex: 1;
            border: 2px dotted $font-color;
        }
    }
</style>