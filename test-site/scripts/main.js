//document.querySelector("html").addEventListener("click",function(){alert("别戳我，我怕疼！")});
let myImage = document.querySelector("img");
myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "https://s1.4sai.com/src/img/png/05/057b1250b6bf450e9fcdb4b698c87cfa.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:JkdKzFFF8Ywr9qHgXI5vjSaW-IM="){
        myImage.setAttribute("src","images/火狐浏览器图标下载2_爱给网_aigei_com.png");
    }else{
        myImage.setAttribute("src","https://s1.4sai.com/src/img/png/05/057b1250b6bf450e9fcdb4b698c87cfa.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=1735488000&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:JkdKzFFF8Ywr9qHgXI5vjSaW-IM=");
    }
};
//用户输入
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("请输入你的名字。");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}
myButton.onclick = function(){
    setUserName();
}