/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * コンストラクタです.
 * @constructor
 */
function SearchService() {
}
 
/**
 * サンプルデータを返します.
 * @returns {Array} 検索対象データ
 */
SearchService.prototype.getData = function () {
    return [
        {
            id: 1,
            name: "空条承太郎",
            kana: "クウジョウジョウタロウ",
            note: "オラオラ"
        },
        {
            id: 2,
            name: "東方仗助",
            kana: "ヒガシカタジョウスケ",
            note: "変な髪型"
        },
        {
            id: 3,
            name: "荒木飛呂彦",
            kana: "アラキヒロヒコ",
            note: "歳を取らない"
        },
        {
            id: 4,
            name: "虹村億泰",
            kana: "ニジムラオクヤス",
            note: "東方仗助が岸辺露伴を困らせた時わたしは焼身自殺します"
        },
        {
            id: 5,
            name: "岸辺露伴",
            kana: "キシベロハン",
            note: "岸部露伴は動かない"
        },
        {
            id: 6,
            name: "広瀬康一",
            kana: "ヒロセコウイチ",
            note: "エコーズ"
        },
        {
            id: 7,
            name: "東方仗助",
            kana: "ヒガシカタジョウスケ",
            note: "変な髪型"
        },
        {
            id: 8,
            name: "荒木飛呂彦",
            kana: "アラキヒロヒコ",
            note: "歳を取らない"
        },
        {
            id: 9,
            name: "虹村億泰",
            kana: "ニジムラオクヤス",
            note: "東方仗助が岸辺露伴を困らせた時わたしは焼身自殺します"
        },
        {
            id: 5,
            name: "岸辺露伴",
            kana: "キシベロハン",
            note: "岸部露伴は動かない"
        },
        {
            id: 6,
            name: "広瀬康一",
            kana: "ヒロセコウイチ",
            note: "エコーズ"
        }
    ];
};

