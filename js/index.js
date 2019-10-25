var items = document.getElementsByClassName('item') //获取所有盒子

var tab = 15 //间隔15

window.onload = function(){//进入页面后执行
    this.waterFall()
}   
function waterFall() {
    var screenWidth = getClient().width //可使页面宽度
    var itemWidth = items[0].offsetWidth
    var col  = parseInt(screenWidth/(itemWidth+tab))//列数

    var arr=[] //存储元素的高度
    for(var i=0;i<items.length;i++){
        if(i<col){//设置第一行的top 和 left值
            items[i].style.top = 0
            items[i].style.left=(itemWidth+tab)*i+'px'
            arr.push(items[i].offsetHeight)
        }else{
            //找出最小高度列和索引
            var minHeight = arr[0]
            var index = 0;
            for(var j = 0;j<arr.length;j++){//找出最小值
                if(minHeight>arr[j]){
                    minHeight=arr[j]
                    index=j
                }

            }
            //设置下一行的第一个盒子的高度
        //top值就是最小列的高度+tab
        items[i].style.top=arr[index]+tab+'px'
        items[i].style.left=items[index].offsetLeft+'px'
        //修改最小列的高度
        arr[index] = arr[index] + items[i].offsetHeight+tab

        }
        
    }
}



//当页面尺寸发生变化时，触发函数，实现响应式
window.onresize = function () {
    waterFall();
}

// clientWidth 处理兼容性
function getClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}
// scrollTop兼容性处理
function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
}