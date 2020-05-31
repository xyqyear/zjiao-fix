// ==UserScript==
// @name         zjiao image fix
// @version      0.1
// @description  fix zjiao.com compatibility shit
// @author       xyqyear
// @updateURL    https://cdn.jsdelivr.net/gh/xyqyear/zjiao-fix@master/zjiao-fix.js
// @downloadURL  https://cdn.jsdelivr.net/gh/xyqyear/zjiao-fix@master/zjiao-fix.js
// @homepage     https://github.com/xyqyear
// @match        *://www.zjiao.com/student/course.jsp*
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.querySelector("[name=leftFrame]").onload = replaceImageElement

function replaceImageElement(){
    while(window.parent.frames[1].document.querySelector("v\\:shape")){
        var imageUrl = window.parent.frames[1].document.querySelector("v\\:shape > v\\:imagedata").getAttribute("src");
        window.parent.frames[1].document.querySelector("v\\:shape > v\\:imagedata").parentElement.outerHTML = `<image src=\"${imageUrl}\"></image>`
    }
}