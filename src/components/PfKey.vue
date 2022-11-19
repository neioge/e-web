<template>
    <table class="Table">
        <tbody class="Table-Body">
            <tr class="Table-Body-Row">
                <td class="Table-Body-Row-Cell" v-for="menuItem in menuItemsUpper" :key="menuItem.id">{{ menuItem.menuName }}</td>
            </tr>
            <tr class="Table-Body-Row">
                <td class="Table-Body-Row-Cell" v-for="menuItem in menuItemsLower" :key="menuItem.id">{{ menuItem.menuName }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'PfKey',
    data() {
    return{
        menuItemsUpper: [
            { id:'1', menuName: 'pfKey1' },
            { id:'2', menuName: 'pfKey2' },
            { id:'3', menuName: 'pfKey3' },
            { id:'4', menuName: 'pfKey4' },
            { id:'5', menuName: 'pfKey5' },
            { id:'6', menuName: 'pfKey6' },
            { id:'7', menuName: 'pfKey7' },
            { id:'8', menuName: 'pfKey8' },
            { id:'9', menuName: 'pfKey9' },
            { id:'10', menuName: 'pfKey10' },
            { id:'11', menuName: 'pfKey11' },
            { id:'12', menuName: 'pfKey12' }
       ],
        menuItemsLower: [
            { id:'13', menuName: 'pfKey13' },
            { id:'14', menuName: 'pfKey14' },
            { id:'15', menuName: 'pfKey15' },
            { id:'16', menuName: 'pfKey16' },
            { id:'17', menuName: 'pfKey17' },
            { id:'18', menuName: 'pfKey18' },
            { id:'19', menuName: 'pfKey19' },
            { id:'20', menuName: 'pfKey20' },
            { id:'21', menuName: 'pfKey21' },
            { id:'22', menuName: 'pfKey22' },
            { id:'23', menuName: 'pfKey23' },
            { id:'24', menuName: 'pfKey24' }
       ],
    }
   }
}
</script>

<style>
.Table {
    width: 100%;
    border: solid 2px #333;
    border-collapse: collapse;
    font-size: 12px;
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
    border: solid 2px #333;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 0.3em;
    padding-right: 0.3em;
    }
</style>

