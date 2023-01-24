<template>
  <div class="about">
    <h1>初画面 現在はVueの機能のテスト用の場所</h1>

    <!-- requireを使ってJsonファイルを読み込むテスト -->
    <h3>requireを使ってJsonファイルを読み込むモジュール</h3>
    <p v-for="(menu, index) in screenInfo" :key="index">
     画面ID : {{menu.screenId}}
    </p>

    <!-- URLパラメータ付きのリンク。クリックをするとroute.jsで定義したパラメータ付きのパスにルーティングされる -->
    <h3>URLパラメータ付きのリンクと、パラメータの取得方法</h3>
    <p><router-link to="/about/1">・パラメータ 1表示</router-link></p>
    <p><router-link to="/about/2">・パラメータ 2表示</router-link></p>
    <p><router-link to="/about/3">・パラメータ 3表示</router-link></p>
    
    <p>ページ描画のたびに$route変数にアクセスしてURLパラメータを取得して表示 ⇒ {{ $route.params.id }}</p>
    <p>ページ更新時にプロパティdataに一度$route変数を格納してから表示 ⇒  {{ path }}</p>
    <p>ページ更新時にプロパティdataで定義した文字列を表示 ⇒ 「{{message}}」</p>

    <!-- パスとパラメータを分割して取得：ライフサイクルフック -->
    <h3>ライフサイクルフック「created」を使って、URLをもとにパスとパラメータを切り離して表示</h3>
    <p v-for="(splitedURLString, index) in splitedURLStrings" :key="index">
      {{splitedURLString}}
    </p>

    <!-- パスとパラメータを分割して取得：computed -->
    <h3>computedを使って、URLをもとにパスとパラメータを切り離して表示</h3>
    <p v-for="(splitedURLString, index) in splitURL" :key="index">
      {{splitedURLString}}
    </p>

    <!-- パスとパラメータを分割して取得：methods -->
    <h3>methodsを使って、URLをもとにパスとパラメータを切り離して表示</h3>
    <p v-for="(splitedURLString, index) in splitURLMethod()" :key="index">
      {{splitedURLString}}
    </p>

    <!-- メニュー情報から、パラメータをインデックスとして業務メニューを取得 -->
    <h3>methodを使って、URLパラメータとサブメニューIDが合致するサブメニューの業務メニューの一覧を表示</h3>
    <div v-for="(gMenuName, index) in extractGMenus" :key="index">
      <p v-if="Number(gMenuName.gMenuId) > 15">
        {{gMenuName.gMenuName}}
      </p>
    </div>    

    <!-- JSONファイルを読み込む実験 -->
    <h3>JSONファイルを読み込み、メニュー情報をdataプロパティに格納・表示</h3>
    <p v-for="(menu, index) in AllMenus" :key="index">
      {{menu}}
    </p>
    
  </div>
</template>

<script>
import AllMenus from '@/assets/menuInfo.json'
import {readJson} from '@/utils/getScreenInfo.js'

export default{
  data: function(){
    return{
      message: 'データの受け渡しテスト',
      path:  this.$route.path,
      splitedURLStrings: [],
      AllMenus: AllMenus,
      screenInfo:[]
    }
  },
  created() {
    this.splitedURLStrings = this.path.split('/');
  },
  mounted(){
    console.log("マウントしました。")
    this.screenInfo = readJson(this.$route.params.id);
  },
  computed: {
    splitURL: function () {
      return this.$route.path.split('/');
    },
    // extractGMenus: function() {
    //   return this.AllMenus[this.$route.params.id - 1].guidanceMenus;
    // }
  },
  methods: {
    splitURLMethod: function (){
      return this.$route.path.split('/');
    }
  }
}
</script>
