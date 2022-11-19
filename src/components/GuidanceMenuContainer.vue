<template>
    <table class="Table" align="left">
        <tbody class="Table-Body">
            <tr class="Table-Body-Row" v-for="menuItem in GMenusLeft" :key="GMenusLeft.id" >
                <td class="Table-Body-Row-Cell">{{ menuItem.gMenuName }}</td>        
            </tr>
        </tbody>
    </table>
    <table class="Table" align="left">
        <tbody class="Table-Body">
            <tr class="Table-Body-Row" v-for="menuItem in GMenusRight" :key="GMenusRight.id" >
                <td class="Table-Body-Row-Cell">{{ menuItem.gMenuName }}</td>        
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
   name: 'GMenu',
   data() {
    return{
        GMenusLeft: [
            { id:'1', gMenuName: '業務メニュー1' },
            { id:'2', gMenuName: '業務メニュー2' },
            { id:'3', gMenuName: '業務メニュー3' },
            { id:'4', gMenuName: '業務メニュー4' },
            { id:'5', gMenuName: '業務メニュー5' },
            { id:'6', gMenuName: '業務メニュー6' },
            { id:'7', gMenuName: '業務メニュー7' },
            { id:'8', gMenuName: '業務メニュー8' },
            { id:'9', gMenuName: '業務メニュー9' },
            { id:'10', gMenuName: '業務メニュー10' },
            { id:'11', gMenuName: '業務メニュー11' },
            { id:'12', gMenuName: '業務メニュー12' },
            { id:'13', gMenuName: '業務メニュー13' },
            { id:'14', gMenuName: '業務メニュー14' },
            { id:'15', gMenuName: '業務メニュー15' }
       ],
       GMenusRight: [
            { id:'16', gMenuName: '業務メニュー16' },
            { id:'17', gMenuName: '業務メニュー17' },
            { id:'18', gMenuName: '業務メニュー18' },
            { id:'19', gMenuName: '業務メニュー19' },
            { id:'20', gMenuName: '業務メニュー20' },
            { id:'21', gMenuName: '業務メニュー21' },
            { id:'22', gMenuName: '業務メニュー22' },
            { id:'23', gMenuName: '業務メニュー23' },
            { id:'24', gMenuName: '業務メニュー24' },
            { id:'25', gMenuName: '業務メニュー25' },
            { id:'26', gMenuName: '業務メニュー26' },
            { id:'27', gMenuName: '業務メニュー27' },
            { id:'28', gMenuName: '業務メニュー28' },
            { id:'29', gMenuName: '業務メニュー29' },
            { id:'30', gMenuName: '業務メニュー30' }
       ]
    }
   }
}
</script>

<style scoped>
.Table {
    width: 400px;
    border: solid 2px #333;
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
