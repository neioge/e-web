<template>
    <table class="Table" align="left">
        <tbody class="Table-Body">
            <tr class="Table-Body-Row" v-for="menuItem in SubMenusLeft" :key="SubMenusLeft.id" >
                <td class="Table-Body-Row-Cell">{{ menuItem.subMenuName }}</td>        
            </tr>
        </tbody>
    </table>
    <table class="Table" align="left">
        <tbody class="Table-Body">
            <tr class="Table-Body-Row" v-for="menuItem in SubMenusRight" :key="SubMenusRight.id" >
                <td class="Table-Body-Row-Cell">{{ menuItem.subMenuName }}</td>        
            </tr>
        </tbody>
    </table>
</template>
  
<script>
  export default {
    name: 'SubMenu',
    data() {
    return{
        SubMenusLeft: [
            { id:'1', subMenuName: 'サブメニュー1' },
            { id:'2', subMenuName: 'サブメニュー2' },
            { id:'3', subMenuName: 'サブメニュー3' },
            { id:'4', subMenuName: 'サブメニュー4' },
            { id:'5', subMenuName: 'サブメニュー5' },
            { id:'6', subMenuName: 'サブメニュー6' },
            { id:'7', subMenuName: 'サブメニュー7' },
            { id:'8', subMenuName: 'サブメニュー8' },
            { id:'9', subMenuName: 'サブメニュー9' },
            { id:'10', subMenuName: 'サブメニュー10' },
            { id:'11', subMenuName: 'サブメニュー11' },
            { id:'12', subMenuName: 'サブメニュー12' },
            { id:'13', subMenuName: 'サブメニュー13' },
            { id:'14', subMenuName: 'サブメニュー14' },
            { id:'15', subMenuName: 'サブメニュー15' }
       ],
       SubMenusRight: [
            { id:'16', subMenuName: 'サブメニュー16' },
            { id:'17', subMenuName: 'サブメニュー17' },
            { id:'18', subMenuName: 'サブメニュー18' },
            { id:'19', subMenuName: 'サブメニュー19' },
            { id:'20', subMenuName: 'サブメニュー20' },
            { id:'21', subMenuName: 'サブメニュー21' },
            { id:'22', subMenuName: 'サブメニュー22' },
            { id:'23', subMenuName: 'サブメニュー23' },
            { id:'24', subMenuName: 'サブメニュー24' },
            { id:'25', subMenuName: 'サブメニュー25' },
            { id:'26', subMenuName: 'サブメニュー26' },
            { id:'27', subMenuName: 'サブメニュー27' },
            { id:'28', subMenuName: 'サブメニュー28' },
            { id:'29', subMenuName: 'サブメニュー29' },
            { id:'30', subMenuName: 'サブメニュー30' }
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
