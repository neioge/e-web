<template>
    <table class="Table" align="left">
        <tbody class="Table-Body">
            <tr class="Table-Body-Row" v-for="(gMenuName, index) in extractGMenus" :key="index">
                <td class="Table-Body-Row-Cell"  v-if="Number(gMenuName.gMenuId) <= 15">
                    <!-- 下記のリンクは仮ページ。書画面に遷移させたい -->
                    <router-link :to="{ name: 'aboutParam', params: {id: '1' } }">
                        {{gMenuName.gMenuName}}
                    </router-link>
                </td>        
            </tr>
        </tbody>
    </table>
    <table class="Table" align="left">
        <tbody class="Table-Body">
            <tr class="Table-Body-Row" v-for="(gMenuName, index) in extractGMenus" :key="index">
                <td class="Table-Body-Row-Cell"  v-if="Number(gMenuName.gMenuId) > 15">
                    <!-- 下記のリンクは仮ページ。書画面に遷移させたい -->
                    <router-link :to="{ name: 'aboutParam', params: {id: '1' } }">
                        {{gMenuName.gMenuName}}
                    </router-link>
                </td>        
            </tr>
        </tbody>
    </table>
</template>

<script>
import AllMenus from '../assets/menuInfo.json'

export default{
   name: 'GMenu',
   data() {
    return{
        AllMenus: AllMenus
    }
   },
   computed: {
        extractGMenus: function() {
            return this.AllMenus[this.$route.params.subMenuId - 1].guidanceMenus;
        }
    },
}
</script>

<style scoped>
.Table {
    width: 400px;
    border: solid 2px #ccc;
    border-collapse: collapse;
    font-size: 13px;
    }
    @media screen and (max-width: 768px) {
    .Table {
    font-size: 12px;
    }
    }
    .Table-Body {
    background: #fff;
    }
    .Table-Body-Row-Cell {
    border: solid 2px #ccc;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 0.3em;
    padding-right: 0.3em;
    }
</style>
