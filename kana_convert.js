
/*
# @file   kana_convert.js
# @Author Lavrentiy Ivanov (laffkin@gmail.ru) 
# https://github.com/Pugnator/kananization
# @date   19.04.2022
# @brief  Firefox addon to transliterate cyrillic and latin based text into kana on a button press
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var romajiCapital = [
  ["A", "エー"],
  ["B", "ビー"],
  ["C", "シー"],
  ["D", "ディー"],
  ["E", "イー"],
  ["F", "エフ"],
  ["G", "ジー"],
  ["H", "エイチ"],
  ["I", "アイ"],
  ["J", "ジェー"],
  ["K", "ケー"],
  ["L", "エル"],
  ["M", "エム"],
  ["N", "エヌ"],
  ["O", "オー"],
  ["P", "ピー"],
  ["Q", "キュー"],
  ["R", "アール"],
  ["S", "エス"],
  ["T", "ティー"],
  ["U", "ユー"],
  ["V", "ヴイ"],
  ["W", "ダブリュー"],
  ["X", "エックス"],
  ["Y", "ワイ"],
  ["Z", "ゼット"],
];


var romajiKatakanaSingle = [
  ["ア", "a"],
  ["イ", "i"],
  ["ウ", "u"],
  ["エ", "e"],
  ["オ", "o"],
  ["ン", "n"],
];

var romajiKatakanaDouble = [
  ["ヤ", "ya"],
  ["ユ", "yu"],
  ["ヨ", "yo"],
  ["カ", "ka"],
  ["キ", "ki"],
  ["ク", "ku"],
  ["ケ", "ke"],
  ["コ", "ko"],
  ["キャ", "kya"],
  ["キュ", "kyu"],
  ["キョ", "kyo"],
  ["サ", "sa"],
  ["シ", "shi"],
  ["ス", "su"],
  ["セ", "se"],
  ["ソ", "so"],
  ["シャ", "sha"],
  ["シュ", "shu"],
  ["ショ", "sho"],
  ["タ", "ta"],
  ["チ", "chi"],
  ["ツ", "tsu"],
  ["テ", "te"],
  ["ト", "to"],
  ["チャ", "cha"],
  ["チュ", "chu"],
  ["チョ", "cho"],
  ["ナ", "na"],
  ["ニ", "ni"],
  ["ヌ", "nu"],
  ["ネ", "ne"],
  ["ノ", "no"],
  ["ニャ", "nya"],
  ["ニュ", "nyu"],
  ["ニョ", "nyo"],
  ["ハ", "ha"],
  ["ヒ", "hi"],
  ["フ", "fu"],
  ["ヘ", "he"],
  ["ホ", "ho"],
  ["ヒャ", "hya"],
  ["ヒュ", "hyu"],
  ["ヒョ", "hyo"],
  ["マ", "ma"],
  ["ミ", "mi"],
  ["ム", "mu"],
  ["メ", "me"],
  ["モ", "mo"],
  ["ミャ", "mya"],
  ["ミュ", "myu"],
  ["ミョ", "myo"],
  ["ラ", "ra"],
  ["リ", "ri"],
  ["ル", "ru"],
  ["レ", "re"],
  ["ロ", "ro"],
  ["リャ", "rya"],
  ["リュ", "ryu"],
  ["リョ", "ryo"],
  ["ガ", "ga"],
  ["ギ", "gi"],
  ["グ", "gu"],
  ["ゲ", "ge"],
  ["ゴ", "go"],
  ["ギャ", "gya"],
  ["ギュ", "gyu"],
  ["ギョ", "gyo"],
  ["ザ", "za"],
  ["ジ", "ji"],
  ["ズ", "zu"],
  ["ゼ", "ze"],
  ["ゾ", "zo"],
  ["ジャ", "ja"],
  ["ジュ", "ju"],
  ["ジョ", "jo"],
  ["ダ", "da"],
  ["ヂ", "ji"],
  ["ヅ", "zu"],
  ["デ", "de"],
  ["ド", "do"],
  ["ヂャ", "ja"],
  ["ヂュ", "ju"],
  ["ヂョ", "jo"],
  ["バ", "ba"],
  ["ビ", "bi"],
  ["ブ", "bu"],
  ["ベ", "be"],
  ["ボ", "bo"],
  ["ビャ", "bya"],
  ["ビュ", "byu"],
  ["ビョ", "byo"],
  ["パ", "pa"],
  ["ピ", "pi"],
  ["プ", "pu"],
  ["ペ", "pe"],
  ["ポ", "po"],
  ["ピャ", "pya"],
  ["ピュ", "pyu"],
  ["ピョ", "pyo"],
  ["ワ", "wa"],
  ["ヲ", "wo"],
];

var romajiHiraganaSingle = [
  ["あ", "a"],
  ["い", "i"],
  ["う", "u"],
  ["え", "e"],
  ["お", "o"],
  ["や", "ya"],
  ["ゆ", "yu"],
  ["よ", "yo"],
  ["ん", "n"],
];

var romajiHiraganaDouble = [
  ["か", "ka"],
  ["き", "ki"],
  ["く", "ku"],
  ["け", "ke"],
  ["こ", "ko"],
  ["きゃ", "kya"],
  ["きゅ", "kyu"],
  ["きょ", "kyo"],
  ["さ", "sa"],
  ["し", "shi"],
  ["す", "su"],
  ["せ", "se"],
  ["そ", "so"],
  ["しゃ", "sha"],
  ["しゅ", "shu"],
  ["しょ", "sho"],
  ["た", "ta"],
  ["ち", "chi"],
  ["つ", "tsu"],
  ["て", "te"],
  ["と", "to"],
  ["ちゃ", "cha"],
  ["ちゅ", "chu"],
  ["ちょ", "cho"],
  ["な", "na"],
  ["に", "ni"],
  ["ぬ", "nu"],
  ["ね", "ne"],
  ["の", "no"],
  ["にゃ", "nya"],
  ["にゅ", "nyu"],
  ["にょ", "nyo"],
  ["は", "ha"],
  ["ひ", "hi"],
  ["ふ", "fu"],
  ["へ", "he"],
  ["ほ", "ho"],
  ["ひゃ", "hya"],
  ["ひゅ", "hyu"],
  ["ひょ", "hyo"],
  ["ま", "ma"],
  ["み", "mi"],
  ["む", "mu"],
  ["め", "me"],
  ["も", "mo"],
  ["みゃ", "mya"],
  ["みゅ", "myu"],
  ["みょ", "myo"],
  ["ら", "ra"],
  ["り", "ri"],
  ["る", "ru"],
  ["れ", "re"],
  ["ろ", "ro"],
  ["りゃ", "rya"],
  ["りゅ", "ryu"],
  ["りょ", "ryo"],
  ["が", "ga"],
  ["ぎ", "gi"],
  ["ぐ", "gu"],
  ["げ", "ge"],
  ["ご", "go"],
  ["ぎゃ", "gya"],
  ["ぎゅ", "gyu"],
  ["ぎょ", "gyo"],
  ["ざ", "za"],
  ["じ", "ji"],
  ["ず", "zu"],
  ["ぜ", "ze"],
  ["ぞ", "zo"],
  ["じゃ", "ja"],
  ["じゅ", "ju"],
  ["じょ", "jo"],
  ["だ", "da"],
  ["ぢ", "ji"],
  ["づ", "zu"],
  ["で", "de"],
  ["ど", "do"],
  ["ぢゃ", "ja"],
  ["ぢゅ", "ju"],
  ["ぢょ", "jo"],
  ["ば", "ba"],
  ["び", "bi"],
  ["ぶ", "bu"],
  ["べ", "be"],
  ["ぼ", "bo"],
  ["びゃ", "bya"],
  ["びゅ", "byu"],
  ["びょ", "byo"],
  ["ぱ", "pa"],
  ["ぴ", "pi"],
  ["ぷ", "pu"],
  ["ぺ", "pe"],
  ["ぽ", "po"],
  ["ぴゃ", "pya"],
  ["ぴゅ", "pyu"],
  ["ぴょ", "pyo"],
  ["わ", "wa"],
  ["を", "wo"],
];

var rosiajiHiraganaSingle = [
  ["あ", "а"],
  ["い", "и"],
  ["う", "у"],
  ["え", "э"],
  ["お", "о"],
  ["や", "я"],
  ["ゆ", "ю"],
  ["よ", "ё"],
  ["を", "о"],
  ["ん", "н"]
];

var rosiajiHiraganaDouble = [
  ["か", "ка"],
  ["き", "ки"],
  ["く", "ку"],
  ["け", "кэ"],
  ["こ", "ко"],
  ["きゃ", "кя"],
  ["きゅ", "кю"],
  ["きょ", "кё"],
  ["さ", "са"],
  ["し", "си"],
  ["す", "су"],
  ["せ", "сэ"],
  ["そ", "со"],
  ["しゃ", "ся"],
  ["しゅ", "сю"],
  ["しょ", "сё"],
  ["た", "та"],
  ["ち", "ти"],
  ["つ", "цу"],
  ["て", "тэ"],
  ["と", "то"],
  ["ちゃ", "тя"],
  ["ちゅ", "тю"],
  ["ちょ", "тё"],
  ["な", "на"],
  ["に", "ни"],
  ["ぬ", "ну"],
  ["ね", "нэ"],
  ["の", "но"],
  ["にゃ", "ня"],
  ["にゅ", "ню"],
  ["にょ", "нё"],
  ["ら", "ра"],
  ["り", "ри"],
  ["る", "ру"],
  ["れ", "рэ"],
  ["ろ", "ро"],
  ["りゃ", "ря"],
  ["りゅ", "рю"],
  ["りょ", "рё"],
  ["は", "ха"],
  ["ひ", "хи"],
  ["ふ", "фу"],
  ["へ", "хэ"],
  ["ほ", "хо"],
  ["ひゃ", "хя"],
  ["ひゅ", "хю"],
  ["ひょ", "хё"],
  ["ま", "ма"],
  ["み", "ми"],
  ["む", "му"],
  ["め", "мэ"],
  ["も", "мо"],
  ["みゃ", "мя"],
  ["みゅ", "мю"],
  ["みょ", "мё"],
  ["が", "га"],
  ["ぎ", "ги"],
  ["ぐ", "гу"],
  ["げ", "гэ"],
  ["ご", "го"],
  ["ぎゃ", "гя"],
  ["ぎゅ", "гю"],
  ["ぎょ", "гё"],
  ["ざ", "дза"],
  ["じ", "дзи"],
  ["ず", "дзу"],
  ["ぜ", "дзэ"],
  ["ぞ", "дзо"],
  ["じゃ", "дзя"],
  ["じゅ", "дзю"],
  ["じょ", "дзё"],
  ["だ", "да"],
  ["ぢ", "дзи"],
  ["づ", "дзу"],
  ["で", "дэ"],
  ["ど", "до"],
  ["ぢゃ", "дзя"],
  ["ぢゅ", "дзю"],
  ["ぢょ", "дзё"],
  ["ば", "ба"],
  ["び", "би"],
  ["ぶ", "бу"],
  ["べ", "бэ"],
  ["ぼ", "бо"],
  ["びゃ", "бя"],
  ["びゅ", "бю"],
  ["びょ", "бё"],
  ["ぱ", "па"],
  ["ぴ", "пи"],
  ["ぷ", "пу"],
  ["ぺ", "пэ"],
  ["ぽ", "по"],
  ["ぴゃ", "пя"],
  ["ぴゅ", "пю"],
  ["ぴょ", "пё"],
  ["わ", "ва"]
];

var rosiajiKatakanaSingle = [
  ["ア", "а"],
  ["イ", "и"],
  ["ウ", "у"],
  ["エ", "э"],
  ["オ", "о"],
  ["ヤ", "я"],
  ["ユ", "ю"],
  ["ヨ", "ё"],
  ["ヲ", "о"],
  ["ン", "н"]
];

var rosiajiKatakanaDouble = [
  ["カ", "ка"],
  ["キ", "ки"],
  ["ク", "ку"],
  ["ケ", "кэ"],
  ["コ", "ко"],
  ["キャ", "кя"],
  ["キュ", "кю"],
  ["キョ", "кё"],
  ["サ", "са"],
  ["シ", "си"],
  ["ス", "су"],
  ["セ", "сэ"],
  ["ソ", "со"],
  ["シャ", "ся"],
  ["シュ", "сю"],
  ["ショ", "сё"],
  ["タ", "та"],
  ["チ", "ти"],
  ["ツ", "цу"],
  ["テ", "тэ"],
  ["ト", "то"],
  ["チャ", "тя"],
  ["チュ", "тю"],
  ["チョ", "тё"],
  ["ナ", "на"],
  ["ニ", "ни"],
  ["ヌ", "ну"],
  ["ネ", "нэ"],
  ["ノ", "но"],
  ["ニャ", "ня"],
  ["ニュ", "ню"],
  ["ニョ", "нё"],
  ["ハ", "ха"],
  ["ヒ", "хи"],
  ["フ", "фу"],
  ["ヘ", "хэ"],
  ["ホ", "хо"],
  ["ヒャ", "хя"],
  ["ヒュ", "хю"],
  ["ヒョ", "хё"],
  ["マ", "ма"],
  ["ミ", "ми"],
  ["ム", "му"],
  ["メ", "мэ"],
  ["モ", "мо"],
  ["ミャ", "мя"],
  ["ミュ", "мю"],
  ["ミョ", "мё"],
  ["ラ", "ра"],
  ["リ", "ри"],
  ["ル", "ру"],
  ["レ", "рэ"],
  ["ロ", "ро"],
  ["リャ", "ря"],
  ["リュ", "рю"],
  ["リョ", "рё"],
  ["ガ", "га"],
  ["ギ", "ги"],
  ["グ", "гу"],
  ["ゲ", "гэ"],
  ["ゴ", "го"],
  ["ギャ", "гя"],
  ["ギュ", "гю"],
  ["ギョ", "гё"],
  ["ザ", "дза"],
  ["ジ", "дзи"],
  ["ズ", "дзу"],
  ["ゼ", "дзэ"],
  ["ゾ", "дзо"],
  ["ジャ", "дзя"],
  ["ジュ", "дзю"],
  ["ジョ", "дзё"],
  ["ダ", "да"],
  ["ヂ", "дзи"],
  ["ヅ", "дзу"],
  ["デ", "дэ"],
  ["ド", "до"],
  ["ヂャ", "дзя"],
  ["ヂュ", "дзю"],
  ["ヂョ", "дзё"],
  ["バ", "ба"],
  ["ビ", "би"],
  ["ブ", "бу"],
  ["ベ", "бэ"],
  ["ボ", "бо"],
  ["ビャ", "бя"],
  ["ビュ", "бю"],
  ["ビョ", "бё"],
  ["パ", "па"],
  ["ピ", "пи"],
  ["プ", "пу"],
  ["ペ", "пэ"],
  ["ポ", "по"],
  ["ピャ", "пя"],
  ["ピュ", "пю"],
  ["ピョ", "пё"],
  ["ワ", "ва"]
];

var Mode = "hiragana";
var SimpleMode = false;
var DEBUG = true;

if (!DEBUG) {
  if (!window.console) window.console = {};
  var methods = ["log", "debug", "warn", "info", "error"];
  for (var i = 0; i < methods.length; i++) {
    console[methods[i]] = function () { };
  }
}

function storageAvailable(type) {
  try {
    var storage = window[type],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch (e) {
    return false;
  }
}

function getSettings() {
  console.debug("Reading settings in the content script");
  try {
    console.debug("chrome: ", chrome);
    chrome.storage.local.get('mode', function (res) {
      if ("undefined" === res) {
        console.debug("Mode is undefined");
        return;
      }
      console.debug("Mode is set to ", res.mode);
      Mode = res.mode;
    });
  }
  catch (e) {
    console.error("Error occured : %s", e.message);
  }
  console.debug("Finished reading mode settings");

  try {
    chrome.storage.local.get('simple', function (res) {
      console.debug("Simple: ", res.simple);
      if ("undefined" === res) {
        return;
      }
      console.debug("Simple mode was %s", true == SimpleMode ? "enabled" : "disabled");
      if ("true" === res.simple) {
        SimpleMode = true;
      }
      console.debug("Simple mode is now %s", true == SimpleMode ? "enabled" : "disabled");
    });
  }
  catch (e) {
    console.error("Error occured: %s", e.message);
  }
  console.debug("Finished reading settings: Mode: %s. simple mode: %s", Mode, true == SimpleMode ? "true" : "false");
}

function convert2hiraganaRU(text) {
  console.debug("hiragana conversion");
  if (false == SimpleMode) {
    console.debug("Not a simple mode: starting with double kana");
    for (var i = 0; i < rosiajiHiraganaDouble.length; i++) {
      text = text.replace(new RegExp(rosiajiHiraganaDouble[i][1], 'gi'), rosiajiHiraganaDouble[i][0]);
    }
    for (i = 0; i < romajiHiraganaDouble.length; i++) {
      text = text.replace(new RegExp(romajiHiraganaDouble[i][1], 'gi'), romajiHiraganaDouble[i][0]);
    }
  }
  for (i = 0; i < rosiajiHiraganaSingle.length; i++) {
    text = text.replace(new RegExp(rosiajiHiraganaSingle[i][1], 'gi'), rosiajiHiraganaSingle[i][0]);
  }
  for (i = 0; i < romajiHiraganaSingle.length; i++) {
    text = text.replace(new RegExp(romajiHiraganaSingle[i][1], 'gi'), romajiHiraganaSingle[i][0]);
  }
  
  return text;
}

function convert2katakanaRU(text) {
  console.debug("katakana conversion");
  if (false == SimpleMode) {
    console.debug("Not a simple mode: starting with double kana");
    for (var i = 0; i < rosiajiKatakanaDouble.length; i++) {
      text = text.replace(new RegExp(rosiajiKatakanaDouble[i][1], 'gi'), rosiajiKatakanaDouble[i][0]);
    }
    for (i = 0; i < romajiKatakanaDouble.length; i++) {
      text = text.replace(new RegExp(romajiKatakanaDouble[i][1], 'gi'), romajiKatakanaDouble[i][0]);
    }
  }
  for (i = 0; i < rosiajiKatakanaSingle.length; i++) {
    text = text.replace(new RegExp(rosiajiKatakanaSingle[i][1], 'gi'), rosiajiKatakanaSingle[i][0]);
  }
  for (i = 0; i < romajiKatakanaSingle.length; i++) {
    text = text.replace(new RegExp(romajiKatakanaSingle[i][1], 'gi'), romajiKatakanaSingle[i][0]);
  }
  for (i = 0; i < romajiCapital.length; i++) {
    text = text.replace(new RegExp(romajiCapital[i][1], 'gi'), romajiCapital[i][0]);
  }
  return text;
}

function getpageTreeWalker() {
  var treeWalker = document.createTreeWalker(
    document.body, NodeFilter.SHOW_TEXT,
    {
      acceptNode: function (node) {
        if (0 === node.textContent.length) {
          return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    },
    false);
  return treeWalker;
}

function convertPage() {
  console.debug("Converting the page");

  var treeWalker = getpageTreeWalker();

  while (treeWalker.nextNode()) {
    switch (Mode) {
      case "katakana":
        treeWalker.currentNode.textContent = convert2katakanaRU(treeWalker.currentNode.textContent);
        break;
      case "hiragana":
        treeWalker.currentNode.textContent = convert2hiraganaRU(treeWalker.currentNode.textContent);
        break;
      default:
        console.debug("Unknown mode");
        break;
    }
  }
}

//##############################################

if (storageAvailable('localStorage')) {
  console.debug("Local storage is available");
  getSettings();
}
else {
  console.error("No local storage available");
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  switch (msg.kana) {
    case "convert-page":
      convertPage();
      break;
    case "katakana":
      Mode = msg.kana;
      chrome.storage.local.set({ mode: Mode });
      break;
    case "hiragana":
      Mode = msg.kana;
      chrome.storage.local.set({ mode: Mode });
      break;
    case "simplemode":
      SimpleMode ^= 1;
      chrome.storage.local.set({ simple: true == SimpleMode ? "true" : "false" });
      break;
    default:
      break;
  }
});