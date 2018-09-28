window.onload=function(){
//搜索栏的选项卡开始
    let b=document.querySelectorAll(".search-bottom-center-b");
    let aul=document.querySelectorAll(".search-select");
    // console.log(b,aul);
    for(let i=0;i<b.length-2;i++){
        b[i].onmouseover=function(){
            for(let j=0;j<aul.length;j++){
                aul[j].style.display="none";
            }
            aul[i].style.display="block";
        }
        b[i].onmouseout=function(){
            aul[i].style.display="none";
        }
    }


//    导航栏的选项卡开始
    let bannera=document.querySelectorAll(".banner-center-left-b");
    let banners=document.querySelectorAll(".banner-select");
    // console.log(banners,bannera);
    for(let i=0;i<bannera.length;i++){
        bannera[i].onmouseover=function(){
            for(let j=0;j<aul.length;j++){
                banners[j].style.display="none";
            }
            banners[i].style.display="block";
        }
        bannera[i].onmouseout=function(){
            banners[i].style.display="none";
        }
    }



//    明星单品的横向轮播图开始
//    1,获取元素
    let leftbtn=document.querySelectorAll(".starbtn-left")[0];
    let rightbtn=document.querySelectorAll(".starbtn-right")[0];
    let con=document.querySelectorAll(".starthing ul")[0];
    // console.log(con);
    let widths=parseInt(getComputedStyle(con,null).width)/4;
    // let widths = parseInt(getComputedStyle(banner,null).width);
    /*console.log(leftbtn);
    console.log(rightbtn);*/
    // console.log(widths);
    //2,点击右箭头
    let num=0;
    rightbtn.onclick=function(){
        leftbtn.style.background="#fff";
        num++;
        if(num==4){
            rightbtn.style.background="red";
            num=3;
            return;
        }
        con.style.transform="translateX("+(-widths*num)+"px)";
    }
    //3,点击左箭头
    leftbtn.onclick=function(){
        rightbtn.style.background="#fff";
        num--;
        if(num==-1){
            leftbtn.style.background="red";
            num=0;
            return;
        }
        con.style.transform="translateX("+(-widths*num)+"px)";
    }
    con.onmouseover=function(){
        leftbtn.style.display="block";
        rightbtn.style.display="block";
    }
    // con.onmouseout=function(){
    //     leftbtn.style.display="none";
    //     rightbtn.style.display="none";
    // }

//透明轮播图
    let dots=document.querySelectorAll('.dot');
    let imgs=document.querySelectorAll('.banner .banner-img');
    let banner=document.querySelectorAll('.banner')[0];
    let lbtn=document.querySelector('.banner-left-btn');
    let rbtn=document.querySelector('.banner-right-btn');
    // console.log(banner);
    // console.log(dots,imgs);
    // console.log(lbtn,rbtn);
    tm(dots,imgs,lbtn,rbtn,banner,1800);



//    固定导航栏的楼层跳转
    let miaosha=document.querySelector(".miaosha");
    let supstar=document.querySelector(".sup-star");
    let iphons=document.querySelectorAll(".iphon-s");
    let list=document.querySelectorAll(".fnav");
    let tops=document.querySelector(".tops");
    console.log(tops);
    let arr=[];
    let bodytop;
    arr.push(miaosha.offsetTop);
    arr.push(supstar.offsetTop);
    iphons.forEach((val,index)=>{
    arr.push(val.offsetTop)
    });
    // console.log(miaosha,supstar,iphons,fnav,arr,bodytop);
    window.onscroll=function(){
        bodytop=document.body.scrollTop||document.documentElement.scrollTop;
        let leftlist=document.querySelector(".fixednav");
        if(bodytop>=500){
         leftlist.style.left="2px";
    }
    if(bodytop<100){
        leftlist.style.left="-50px";
    }

    arr.forEach((val,index)=>{
    if (bodytop+innerHeight/2>=val-100){
        //获取每一楼层中对应的图片
        for (let i = 0; i <list.length ; i++) {
        // list[i].classList.remove("active");
        list[i].style.background="";
        }
        // list[index].classList.add("active");
        list[index].style.background="green";
        }
        });
    }
    //楼层跳转
    list.forEach((val,index)=>{
        val.onclick=function () {
        for (let i = 0; i <list.length ; i++) {
        // list[i].classList.remove("active");
        list[i].style.background="";
    }
        // list[index].classList.add("active");
        list[index].style.background="green";

        animate(document.body,{scrollTop:arr[index]-100});
        animate(document.documentElement,{scrollTop:arr[index]-100});

        }
    });
    //返回顶部
    tops.onclick=function () {
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }

    //倒计时
    let spans=document.querySelectorAll(".real-seconds-kill-first span");
    console.log(spans);
    let future=new Date();
    future.setFullYear(2200);
    // 距离2018.9.21   18:00  还有几天几分钟
    future.setMonth(8,21);
    future.setHours(18,0,0);
    let futuretime=future.getTime();
    let t=setInterval(function(){
        let nowdate=new Date();
        let nowtime=nowdate.getTime();
        let times=Math.round((futuretime-nowtime)/1000);
        console.log(times);
        let hours=Math.floor(times/60/60%24);
        spans[0].innerHTML=hours;
        console.log(hours);
        let min=Math.floor(times/60%60);
        spans[2].innerHTML=min;
        console.log(min);
        let sec=Math.floor(times%60);
        spans[4].innerHTML=sec;
        console.log(sec);
    },1000)
}