
/*
# @file   background.js
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

function onCreated(n) {}


/* Context menu */

var Mode = "hiragana";
var SimpleMode = false;

function getSettings() 
{
  console.info("Reading settings");
  chrome.storage.local.get('mode', function (res) 
  {
	if("undefined" === res)
	{
		return;
	}
	console.info("Mode = %s", res);
    Mode = res.mode;
	if("true" === res.simple)
	{
		SimpleMode = true;
	}
  });
}

chrome.contextMenus.create({
  id: "hiragana",
  type: "radio",
  title: "Хирагана",
  contexts: ["all"],
  checked: Mode === "hiragana" ? true : false
}, onCreated);

chrome.contextMenus.create({
  id: "katakana",
  type: "radio",
  title: "Катакана",
  contexts: ["all"],
  checked: Mode === "katakana" ? true : false
}, onCreated);

chrome.contextMenus.create({
  id: "simplemode",
  type: "checkbox",
  title: "Только гласные (и ん)",
  contexts: ["all"],
  checked: SimpleMode
}, onCreated);


/* Button listener */

chrome.browserAction.onClicked.addListener(
	function(tab) 
	{		
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	  {
	    chrome.tabs.sendMessage(
	    	tabs[0].id, 
	    	{kana: "convert-page"}, 
	    	function(response) 
	    	{
	    		
	    	});  
	  });
	});

chrome.contextMenus.onClicked.addListener(
	function(info, tab) 
	{
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	  {
	    chrome.tabs.sendMessage(
	    	tabs[0].id, 
	    	{kana: info.menuItemId}, 
	    	function(response) 
	    	{
	    		
	    	});  
	  });
	});