<template>
    <table class="Table" align="left">
        <tbody class="Table-Body">
            <tr class="Table-Body-Row" v-for="menuItem in AllMenus" :key="menuItem.id" >
                <td class="Table-Body-Row-Cell" v-if="Number(menuItem.subMenuId) <= 15">
                    <router-link :to="{ name: 'gmenu', params: {subMenuId: menuItem.subMenuId } }">
                        {{ menuItem.subMenuName }}
                    </router-link>
                </td>        
            </tr>
        </tbody>
    </table>
    <table class="Table" align="left">
        <tbody class="Table-Body">
            <tr class="Table-Body-Row" v-for="menuItem in AllMenus" :key="menuItem.id" >
                <td class="Table-Body-Row-Cell" v-if="Number(menuItem.subMenuId) > 15">
                    <router-link :to="{ name: 'gmenu', params: {subMenuId: menuItem.subMenuId } }">
                        {{ menuItem.subMenuName }}
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>
  
<script>
import AllMenus from '../assets/menuInfo.json'

export default {
    name: 'SubMenu',
    data() {
        return{
            AllMenus: AllMenus
        }
    }
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
