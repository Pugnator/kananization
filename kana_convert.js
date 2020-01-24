
/*
# @file   kana_convert.js
# @Author Lavrentiy Ivanov (ookami@mail.ru)
# @date   01.06.2016
# @brief  Firefox addon to convert russian syllabes to japanese kana
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

if (!DEBUG)
{
    if (!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "info", "error"];
    for(var i=0;i<methods.length;i++)
    {
      console[methods[i]] = function(){};
    }
}

function storageAvailable(type) 
{
  try 
  {
    var storage = window[type],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) 
  {
    return false;
  }
}

function getSettings() 
{
  console.info("Reading settings in the content script");
  try
  {
    console.info("chrome: ", chrome);
    chrome.storage.local.get('mode', function (res) 
    {  
      if ("undefined" === res)
      {
        console.info("Mode settings is undefined");
        return;
      } 
      console.info("Mode settings is ", res.mode);
      Mode = res.mode;    
    });
  }
  catch (e)
  {
    console.error("Error occured : %s", e.message);
  }
  console.info("Finished reading mode settings");

  try
  {
    chrome.storage.local.get('simple', function (res) 
    {
      console.info("Simple: ", res.simple);
      if ("undefined" === res)
      {
        return;
      }     
      console.info("Simple mode was %s", true == SimpleMode ? "enabled" : "disabled");
      if("true" === res.simple)
      {
        SimpleMode = true;
      }
      console.info("Simple mode is now %s", true == SimpleMode ? "enabled" : "disabled");
    });
  }
  catch(e)
  {
    console.error("Error occured: %s", e.message);
  }
  console.info("Finished reading settings: Mode: %s. simple mode: %s", Mode, true == SimpleMode ? "true" : "false");
}

function convert2hiraganaRU(text) 
{
  if (false == SimpleMode)
  {  
  for (var i = 0; i < rosiajiHiraganaDouble.length; i++) 
  {        
    text = text.replace(new RegExp(rosiajiHiraganaDouble[i][1], 'g'), rosiajiHiraganaDouble[i][0]);
  }
  }
  for (i = 0; i < rosiajiHiraganaSingle.length; i++) 
  {        
    text = text.replace(new RegExp(rosiajiHiraganaSingle[i][1], 'g'), rosiajiHiraganaSingle[i][0]);
  }    
  return text;
}

function convert2katakanaRU(text) 
{
  if (false == SimpleMode)
  {
  for (var i = 0; i < rosiajiKatakanaDouble.length; i++) 
  {        
    text = text.replace(new RegExp(rosiajiKatakanaDouble[i][1], 'g'), rosiajiKatakanaDouble[i][0]);
  }
  }
  for (i = 0; i < rosiajiKatakanaSingle.length; i++) 
  {        
    text = text.replace(new RegExp(rosiajiKatakanaSingle[i][1], 'g'), rosiajiKatakanaSingle[i][0]);
  }    
  return text;
}

function getpageTreeWalker()
{
  var treeWalker = document.createTreeWalker(
  document.body, NodeFilter.SHOW_TEXT,
      {acceptNode: function(node) 
          {
              if (0 === node.textContent.length)
              {
                  return NodeFilter.FILTER_SKIP;
              }
              return NodeFilter.FILTER_ACCEPT;
          }
      }, 
  false);
  return treeWalker;
}

function convertPage()
{
  console.info("Converting the page");
  
  var treeWalker = getpageTreeWalker();

  while(treeWalker.nextNode()) 
  {
  switch(Mode)
  {
    case "katakana":
      treeWalker.currentNode.textContent = convert2katakanaRU(treeWalker.currentNode.textContent);
      break;
    case "hiragana":
      treeWalker.currentNode.textContent = convert2hiraganaRU(treeWalker.currentNode.textContent);
      break;  
    default:
    break;  
  }    
  }
}

//##############################################

if (storageAvailable('localStorage')) 
{
  console.info("Local storage is available");
  getSettings();  
}
else 
{
  console.error("No local storage available");
}

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) 
{
  switch(msg.kana)
  {   
  case "convert-page":
    convertPage();    
    break;  
  case "katakana":  
    Mode = msg.kana;
    chrome.storage.local.set({mode: Mode});
    break;
  case "hiragana":    
    Mode = msg.kana;
    chrome.storage.local.set({mode: Mode});
    break;
  case "simplemode":
    SimpleMode ^= 1;
    chrome.storage.local.set({simple: true == SimpleMode ? "true" : "false"});
    break;  
  default:
    break;
  }
  console.info("Message: %s", msg.kanalog);
  
});