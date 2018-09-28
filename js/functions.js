//水平轮播图
function con(btnr,btnl,down1btn,down1,banners,widths,active) {
    let now = 0;
    let next = 0;
    let flag = true;
    console.log(btnr,btnl,down1btn,down1,banners,widths,active);
    down1btn[0].classList.add("active");
    down1[0].style.left=0;
    for (let i = 0; i <down1btn.length ; i++) {
        down1btn[i].onmouseover=function () {
            for (let j = 0; j <down1btn.length ; j++) {
                down1btn[j].classList.remove("active");
                down1[j].style.left= -widths+ "px";
            }
            down1btn[i].classList.add("active");
            down1[i].style.left=0;
        }
    }
    function  mover() {
        next++;
        if (next==down1.length){
            next=0;
        }
        down1[now].style.left=0;
        down1[next].style.left=widths + "px";
        animate(down1[now],{left:-widths},function () {
            for (let i = 0; i <down1btn.length ; i++) {
                down1btn[i].classList.remove("active");
                flag=true;
            }
        });
        animate(down1[next],{left:0},function () {
            down1btn[next].classList.add("active");
            flag=true;

        });
        now=next;
    }
    function movel() {
        if (!flag){
            return
        }
        flag=false;
        next--;
        if(next==-1){
            next=down1.length-1;
        }
        down1[now].style.left=0;
        down1[next].style.left= -widths + "px";
        animate(down1[now],{left:widths},function () {
            for (let i = 0; i <down1btn.length ; i++) {
                down1btn[i].classList.remove("active");
                flag=true;
            }
        });
        animate(down1[next],{left:0},function () {
            down1btn[next].classList.add("active");
            flag=true;
        });
        now=next;
    }
    btnr.onclick=function () {
        if (!flag) {
            return;
        }
        flag=false;
        mover()
    }
    btnl.onclick=function () {
        movel()
    }
}

//取随机颜色
function randomcolor() {
    //rgb()
    let str = "rgb(";
    for (let i = 0; i <3 ; i++) {
        str += Math.round(Math.random()*255)+"," ;
    }
    str = str.slice(0,-1)+")";
    return str;
}

/*透明轮播*/
function tm( dots,imgs,lbtn,rbtn,banner){
    dots[0].style.background="#fff";
    for (let i = 0; i <dots.length ; i++) {
        dots[i].onmouseover=function () {
            //其余图片层级变回1 其余轮播点样式改变
            for (let j = 0; j <imgs.length ; j++) {
                imgs[j].style.zIndex=1;
                dots[j].style.background="#333";
            }
            //对应图片层级提高
            imgs[i].style.zIndex=2;
            //对应轮播点样式改变
            dots[i].style.background="#fff";
            //当鼠标移走后,继续轮播
            num=i;
        }
    }
//实现自动轮播
    let num =0;
    let t=setInterval(move,1800);
    function  move() {
        num++;
        if(num==imgs.length){
            num=0;
        }
        //其余图片层级变回1 其余轮播点样式改变
        for (let i = 0; i<imgs.length ; i++) {
            imgs[i].style.zIndex=1;
            dots[i].style.background="#333";
        }
        imgs[num].style.zIndex=2;
        dots[num].style.background="#fff";
    }
//鼠标移入banner 暂停时间间隔函数
    banner.onmouseover=function () {
        clearInterval(t);
    }
//鼠标移入banner 继续时间间隔函数
    banner.onmouseout=function () {
        t=setInterval(move,1800)
    }
    rbtn.onclick=function () {
        move();
    }
    lbtn.onclick=function () {
        movel();
    }
    function  movel() {
        num--;
        if(num<0){
            num=4;
        }
        //其余图片层级变回1 其余轮播点样式改变
        for (let i = 0; i<imgs.length ; i++) {
            imgs[i].style.zIndex=1;
            dots[i].style.background="#333";
        }
        imgs[num].style.zIndex=2;
        dots[num].style.background="#fff";
    }
}
