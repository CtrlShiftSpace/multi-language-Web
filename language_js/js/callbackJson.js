
/**
 * [checkLang description] 確認網站的語系
 * @param  {Function} callback [接收資料的函式]
 * @return {[void]}
 */
function checkLang(callback){
    var url = location.href;
    //當前網址的連結
    var zh_tw = 0,en_us = 1;
    //正體中文=0 英文=1
    var lang_type = 'zh_tw';
    //預設語言類型為正體中文

    if (url.indexOf("en_us") > -1){
        lang_flag = 'en_us';
        //為英文版網址
    }else{
        lang_flag = 'zh_tw';
        //為中文版網址
    }
    readJson(lang_flag,callback);
    //對應語系的json檔案
}


/**
 * [readJson description] 讀取json檔案並回傳內容
 * @param  {[string]}   tag      [json檔案名稱]
 * @param  {Function} callback [接收資料的函式]
 * @return {[void]}
 */
function readJson(tag,callback) {
    var req1 = new XMLHttpRequest();
    req1.open("GET","lang/"+ tag +".json", true);
    req1.send();

    req1.onreadystatechange= function () {
        if (req1.readyState == 4 && req1.status == 200) {
            returned_data = req1.responseText;
            //fire your callback function
            callback.apply(this,[returned_data]);
        }else{

        }
    };
}


