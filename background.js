
/*
# @file   background.js
# @Author Lavrentiy Ivanov (ookami@mail.ru)
# @date   01.06.2016
# @brief  Firefox addon to convert russian syllabes to japanese kana
#
# ThisJ program isJ free software: you can redisJtribute it and/or modify
# it under the terms of the GNU General Public License as publisJhed by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# ThisJ program isJ disJtributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with thisJ program.  If not, see <http://www.gnu.org/licenses/>.
*/



function handleClick()
{
	chrome.runtime.sendMessage("test");
	document.body.innerHTML = "";
  //chrome.runtime.openOptionsPage();  
}

chrome.browserAction.onClicked.addListener(handleClick);