<template>
  <div class="about">
    <h1>Vueの基本について</h1>

    <h2>①requireを使ってJsonファイルを読み込むモジュール</h2>
        <p>
          画面の大枠をコンポーネントとして作成し、項目はすべて画面定義体Jsonファイルを読み込んで描画する。<br>
          その際、業務メニュー画面からURLパラメータで渡された画面IDをもとに、適切な画面定義体を取得する必要がある。<br><br>
          Javascriptでテキストファイル(Jsonなど)を読み込む際はImport文で読み込むが、Import文に変数をかませることができない。<br>
          そのため、下記のモジュールを作成した。
        </p>
        <pre>
          <code>
            export let readJson = screenID =>{
              const jsonData= require(`@/assets/screen/${screenID}.json`); 
              return jsonData;
            }    
          </code>
        </pre>

        <p>下記のリンクをクリックすると、このページにURLパラメータ「GAX10119」を渡して表示する。<br>
          1.ライフサイクルフック「mounted()」の際に、「this.$route.params.id」でURLパラメータを取得する。<br>
          2.モジュール「readJson」にURLパラメータ「GAX10119」を渡して実行する。<br>
          3.結果、GAX10119.jsonを読み込んで、画面を描画する。
        </p>
        <router-link to="/about/GAX10119">
          画面GAX10119を読み込む
        </router-link>
        <p>{{ screenInfo }}</p>

    <h2>②URLパラメータ付きのリンク。クリックをするとroute.jsで定義したパラメータ付きのパスにルーティング</h2>
        <p><router-link to="/about/1">・パラメータ 1表示</router-link></p>
        <p><router-link to="/about/2">・パラメータ 2表示</router-link></p>
        <p><router-link to="/about/3">・パラメータ 3表示</router-link></p>

    <h2>③プロパティ「data」の扱い方について</h2>
        <p>ページ更新時にプロパティdataで定義した文字列を表示  ⇒ {{message}}</p>
        <p>ページ更新時にプロパティdataに一度$route変数を格納してから表示  ⇒  {{ path }}</p>
        <p>ページ描画のたびに$route変数にアクセスしてURLパラメータを取得して表示  ⇒  {{ URLParam }}</p>
    
        <pre>
          <code>
            ---html---
            &lt;p&gt;ページ更新時にプロパティdataで定義した文字列を表示 ⇒ &lbrace;&lbrace; message &rbrace;&rbrace;&lt;/p&gt;
            &lt;p&gt;ページ更新時にプロパティdataに一度$route変数を格納してから表示 ⇒  &lbrace;&lbrace; path &rbrace;&rbrace;&lt;/p&gt;
            &lt;p&gt;ページ描画のたびに$route変数にアクセスしてURLパラメータを取得して表示 ⇒ &lbrace;&lbrace; URLParam &rbrace;&rbrace;&lt;/p&gt;

            ---javascript---
            export default{
              data: function(){
                return{
                  message: 'データの受け渡しテスト', 
                  path:  this.$route.path,
                  URLParam: this.$route.params.id,
                  .
                  .
                  .
          </code>
        </pre>

    <h2>⑦JSONファイルを読み込み、メニュー情報をdataプロパティに格納・表示</h2>
        <p v-for="(menu, index) in AllMenus" :key="index">
          <a v-if="Number(menu.subMenuId) <= 3">{{menu.subMenuName}}</a>
        </p>

    <h2>④算出プロパティ「computed」を使って、URLをもとにパスとパラメータを切り離して表示</h2>
        <p v-for="(splitedURLString, index) in splitURL" :key="index">
          {{splitedURLString}}
        </p>
        <pre>
          <code>
            export let readJson = screenID =>{
              const jsonData= require(`@/assets/screen/${screenID}.json`); 
              return jsonData;
            }    
          </code>
        </pre>

    <h2>⑤メソッド「methods」を使って、URLをもとにパスとパラメータを切り離して表示</h2>
        <p v-for="(splitedURLString, index) in splitURLMethod()" :key="index">
          {{splitedURLString}}
        </p>

        <h2>⑥メソッド「methods」を使って、アコーディオンメニューを実装する</h2>
        <!-- https://www.kabanoki.net/4277/ -->
        <vue-accordion :items="items"></vue-accordion>

    <h2>⑧ライフサイクルフック「created」を使って、URLをもとにパスとパラメータを切り離して表示</h2>
        <p v-for="(splitedURLString, index) in splitedURLStrings" :key="index">
          {{splitedURLString}}
        </p>

    <h2>⑧ライフサイクルフック「mounted」を使って、</h2>

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
      URLParam: this.$route.params.id,
      splitedURLStrings: [],
      AllMenus: AllMenus,
      screenInfo:[],
    }
  },
  created() {
    this.splitedURLStrings = this.path.split('/');
  },
  mounted(){
    this.screenInfo = readJson(this.$route.params.id);  
  },
  computed: {
    calNum: function(){
      return this.oldnum * this.newnum
    }
  },
  methods: {
  }
}
</script>
<style>
pre {
  margin: 1em 0; /* ブロック前後の余白 */
  padding: 1em; /* ブロック内の余白 */
  border-radius: 5px; /* 角丸 */
  background: #25292f; /* 背景色 */
  color: #fff; /* 文字色 */
  white-space: pre-wrap; /* はみ出たときに折り返す */
  width: 40%
}
</style>