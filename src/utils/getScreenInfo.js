// require関数を使ってJsonファイルを読み込む関数を定義しエクスポートする
export let readJson = screenID =>{
    const jsonData= require(`@/assets/screen/${screenID}.json`); 
    return jsonData;
}
