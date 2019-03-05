var $i = 0;
var pointX=0;
var pointY=0;
$(function() {
    $( ".form_component" ).sortable({

    });

    $(".utilityCol .utility" ).draggable({
    appendTo: "body",
    connectToSortable: ".form_component",
    opacity:0.4,
    cursor: "move",
    helper: "clone",
    revert: "invalid",
    cursorAt: { top: 20, left: 20 } ,
    start:function(event,ui){
     var $tra = ui.helper;

    },
    drag: function() {
    },
    stop:function( event, ui ){

      addClass:"limit-disable";
      $(".form_component .utility").css("display","inline-block");
      /*拖动结束候随意改变组件的位置**************************20170616*/
      $( ".form_component >.utility" ).draggable({
          start:function(event,ui){

          },
          stop:function( event, ui ){
             $(this).addClass("clicked").siblings().removeClass("clicked");
             //$(this).find(".del_img").show();
        }
      });

    }
});

 $(".form_component").droppable({
      accept: ".utility",
      classes: {
        "ui-droppable-active": "ui-state-highlight"
      },
      drop: function( event, ui ) { //排序时不调用
         //alert("放置完成");
         var ultop=$(".form_component").offset().top;
         var ulleft=$(".form_component").offset().left;
         //alert(ultop+"-"+ulleft)
         test(event);
         var t=pointY-ultop-20;
         var l=pointX-ulleft-20;
         //console.log((pointX-ulleft)+"-"+(pointY-ultop));
         //alert($(this).html());
         // $(this).find("li").each(function(){//设置鼠标位置&拖动位置
         //   if($(this).hasClass("clicked")){
         //     //alert(1)
         //     $(this).css("position","absolute");
         //     $(this).css({top:t,left:l});
         //   }
         // })
        $.getScript('js/drag.js',function(){
          all();
        });
        $.getScript('js/mnn-cardPrint.js',function(){
          click_li();
        });
        var html = ui.draggable.html();
        if(html.indexOf("formOption")>0){
          pushItem(ui.draggable);
        };

        $(".form_component > li").each(function() { //放置时选中当前的
          /*setClicked(index);
          console.log(this)*/
          //alert($(this).css("position"));

        });
        $(".form_component .utility").click();
        /*设置编辑内容回显*/
         $(".drug_cur").addClass('current').siblings().removeClass('current');
         $(".invitee_b_con3").show().siblings().hide();
         $(this).find("div[name='paper']").each(function (){
          var dir = $(this).attr("dir");
          $("#dir"+dir).show().siblings().hide();
        });
      }
    });
});

function test(e){
  pointX = e.pageX;
  pointY = e.pageY;
  //console.log(pointX+"-"+pointY);
}


//添加不同组件
function pushItem($item){
  if($item.find("span.title").text()=="活动标题" ){ //1

      /*if(cnt==0){
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='10'><div class='active_tit_box'><div class='active_tit_img'></div><span class='title'>活动标题</span><div class='halving_line'></div><p class='hint_section' style='color:#333;'></p></div></div><span class='deleteButton' onclick='deleteThis(this)'></span>";
        $item.removeAttr("data-title title");
        $item.find("span.formOption").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find("span.title").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.append($newHtml);
      }*/
     /* <div class='coor_right'></div><div class='coor_topR'></div><div class='coor_left'></div><div class='coor_leftTop'></div><div class='coor_leftBottom'></div>*/
  }if($item.find("span.title").text()=="文字" ){ //门票
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='11'><div style='position:relative;width: 320px;min-height: 38px;line-height: 1.25;text-align: center;word-wrap: break-word; word-break: normal;' class='dir11 wenzi1'><span>请输入文字</span><img class='del_img' src='images/delete_hover.png'><div class='coor1'></div></div>";

      $item.removeAttr("data-title id title");
      $item.find(".i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find("span.title").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="图片" ){ //3
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='12'><div class='dir12 g_picture' style='position:relative;'><img src='images/u461.png' width='100%' height='100%'/><div class='coor3'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find(".i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find("span.title").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="二维码" ){ //4
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='13'><div class='dir13 g_picture' style='position:relative;'><img src='images/u1263.png' width='100%' height='100%'/><img class='del_img' src='images/delete_hover.png'><div class='coor4'></div></div></div>";

      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find("span.title").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.')
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="自定义" ){ //5
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='14'><div class='dir14' style='position:relative;width: 320px;min-height: 38px;line-height: 1.25;text-align: center;word-wrap: break-word; word-break: normal;'><span>请输入自定义字段</span><img class='del_img' src='images/delete_hover.png'><div class='coor5'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.');
      $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="姓名" ){ //7
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='21'><div class='dir21' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>姓名</span><img class='del_img' src='images/delete_hover.png'><div class='coor6'></div></div></div>";
        $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find("span.title").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.')
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="移动电话" ){ //8
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='22'><div class='dir22' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>移动电话</span><img class='del_img' src='images/delete_hover.png'><div class='coor7'></div></div></div>";
        $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.find("span.title").remove();
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="邮箱" ){ //9
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='23'><div class='dir23' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>邮箱</span><img class='del_img' src='images/delete_hover.png'><div class='coor8'></div></div></div>";
        $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.find("span.title").remove();
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="公司名称" ){ //10
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='24'><div class='dir24' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>公司名称</span><img class='del_img' src='images/delete_hover.png'><div class='coor9'></div></div></div>";
        $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.find("span.title").remove();
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="身份证号" ){ //25
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='25'><div class='dir25' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>身份证号</span><img class='del_img' src='images/delete_hover.png'><div class='coor10'></div></div></div>";
        $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.find("span.title").remove();
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="工作电话" ){ //12
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='26'><div class='dir26' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>工作电话</span><img class='del_img' src='images/delete_hover.png'><div class='coor11'></div></div></div>";
        $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.find("span.title").remove();
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="职位" ){ //13
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='27'><div class='dir27' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>职位</span><img class='del_img' src='images/delete_hover.png'><div class='coor12'></div></div></div>";
        $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.find("span.title").remove();
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="省市县" ){ //14
        var time = new Date().getTime();
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='28'><div class='dir28' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>省市县</span><img class='del_img' src='images/delete_hover.png'><div class='coor13'></div></div></div>";
        $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.find("span.title").remove();
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="工作地址" ){ //15
        var time = new Date().getTime();
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='29'><div class='dir29' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>工作地址</span><img class='del_img' src='images/delete_hover.png'><div class='coor14'></div></div></div>";
        $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.find("span.title").remove();
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="生日" ){ //16
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='2A'><div class='dir30' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>生日</span><img class='del_img' src='images/delete_hover.png'><div class='coor15'></div></div></div>";
        $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.find("span.title").remove();
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="性别" ){ //16
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='2B'><div class='dir31' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>性别</span><img class='del_img' src='images/delete_hover.png'><div class='coor16'></div></div></div>";
        $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.find("span.title").remove();
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="照片" ){ //16
        var $list = $(".form_component");
        var $newHtml = "<div name='paper' dir='2C'><div class='dir32' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>照片</span><img class='del_img' src='images/delete_hover.png'><div class='coor17'></div></div></div>";
        $item.removeAttr("data-title id title");
        $item.find("i.i_card").remove();
        $item.find("span.deleteButton").remove();
        $item.find("span.cloneButton").remove();
        $item.find('div').remove();
        $item.attr('title','拖动可交换位置.');
        $item.find("span.title").remove();
        $item.append($newHtml);
        $item.css("position","absolute");
  }if($item.find("span.title").text()=="确认码" ){
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='30'><div class='dir33' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>确认码</span><img class='del_img' src='images/delete_hover.png'><div class='coor18'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.');
      $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="酒店名称"){ //18
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='31'><div class='dir34' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>酒店名称</span><img class='del_img' src='images/delete_hover.png'><div class='coor19'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
     $item.attr('title','拖动可交换位置.');
     $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="房型名称"){ //19
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='32'><div class='dir35' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>房型名称</span><img class='del_img' src='images/delete_hover.png'><div class='coor20'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.');
      $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="房间号"){  //20
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='33'><div class='dir36' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>房间号</span><img class='del_img' src='images/delete_hover.png'><div class='coor21'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.');
      $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="是否拼房"){  //21
      var time = new Date().getTime();
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='34'><div class='dir37' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>是否拼房</span><img class='del_img' src='images/delete_hover.png'><div class='coor22'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.');
      $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="入住日期"){ //22
     var time = new Date().getTime();
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='35'><div class='dir38' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>入住日期</span><img class='del_img' src='images/delete_hover.png'><div class='coor23'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.');
      $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
   }if($item.find("span.title").text()=="退房日期"){ //23
      var $list = $(".form_component");
    var $newHtml = "<div name='paper' dir='36'><div class='dir39' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>退房日期</span><img class='del_img' src='images/delete_hover.png'><div class='coor24'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.');
      $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="活动标题"){ //24
      var time = new Date().getTime();
      var $list = $(".form_component");
      var $newHtml = " <div name='paper' dir='37'><div class='dir40' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>活动标题</span><img class='del_img' src='images/delete_hover.png'><div class='coor25'></div></div><div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.');
      $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="主办方"){  //25
      var time = new Date().getTime();
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='38'><div class='dir41' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>主办方</span><img class='del_img' src='images/delete_hover.png'><div class='coor26'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.');
      $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="开始时间"){  //26
        var time = new Date().getTime();
      var $list = $(".form_component");
      var $newHtml = "<div name='paper' dir='39'><div class='dir42' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>开始时间</span><img class='del_img' src='images/delete_hover.png'><div class='coor27'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.');
      $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="结束时间"){  //27
    var $list = $(".form_component");
    var $newHtml = "<div name='paper' dir='40'><div class='dir43' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>结束时间</span><img class='del_img' src='images/delete_hover.png'><div class='coor28'></div></div></div>";
    $item.removeAttr("data-title id title");
    $item.find("i.i_card").remove();
    $item.find("span.deleteButton").remove();
    $item.find("span.cloneButton").remove();
    $item.find('div').remove();
    $item.attr('title','拖动可交换位置.');
    $item.find("span.title").remove();
    $item.append($newHtml);
    $item.css("position","absolute");
  }if($item.find("span.title").text()=="活动地点"){  //28
    var $list = $(".form_component");
    var $newHtml = "<div name='paper' dir='41'><div class='dir44' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>活动地点</span><img class='del_img' src='images/delete_hover.png'><div class='coor29'></div></div></div>";
      $item.removeAttr("data-title id title");
      $item.find("i.i_card").remove();
      $item.find("span.deleteButton").remove();
      $item.find("span.cloneButton").remove();
      $item.find('div').remove();
      $item.attr('title','拖动可交换位置.');
      $item.find("span.title").remove();
      $item.append($newHtml);
      $item.css("position","absolute");
  }if($item.find("span.title").text()=="联系人"){  //29
    var $list = $(".form_component");
    var $newHtml = "<div name='paper' dir='42'><div class='dir45' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>联系人</span><img class='del_img' src='images/delete_hover.png'><div class='coor30'></div></div></div>";
    $item.removeAttr("data-title id title");
    $item.find("i.i_card").remove();
    $item.find("span.title").remove();
    $item.find("span.deleteButton").remove();
    $item.find("span.cloneButton").remove();
    $item.find('div').remove();
    $item.attr('title','拖动可交换位置.');
    $item.find("span.title").remove();
    $item.append($newHtml);
    $item.css("position","absolute");
  }if($item.find("span.title").text()=="联系电话"){  //29
    var $list = $(".form_component");
    var $newHtml = "<div name='paper' dir='43'><div class='dir46' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>联系人</span><img class='del_img' src='images/delete_hover.png'><div class='coor31'></div></div></div>";
    $item.removeAttr("data-title id title");
    $item.find("i.i_card").remove();
    $item.find("span.title").remove();
    $item.find("span.deleteButton").remove();
    $item.find("span.cloneButton").remove();
    $item.find('div').remove();
    $item.attr('title','拖动可交换位置.');
    $item.find("span.title").remove();
    $item.append($newHtml);
    $item.css("position","absolute");
  }if($item.find("span.title").text()=="联系邮箱"){  //29
    var $list = $(".form_component");
    var $newHtml = "<div name='paper' dir='44'><div class='dir47' style='position:relative;width: 120px; min-height: 38px; line-height: 1.25;text-align: center;word-wrap: break-word;word-break: normal;'><span>联系邮箱</span><img class='del_img' src='images/delete_hover.png'><div class='coor32'></div></div></div>";
    $item.removeAttr("data-title id title");
    $item.find("i.i_card").remove();
    $item.find("span.title").remove();
    $item.find("span.deleteButton").remove();
    $item.find("span.cloneButton").remove();
    $item.find('div').remove();
    $item.attr('title','拖动可交换位置.');
    $item.find("span.title").remove();
    $item.append($newHtml);
    $item.css("position","absolute");
  };
};


/*function setClicked($n){
  $(".form_component > li").each(function(index, element) {


    if($n==index){
       $(this).addClass("clicked");
    }else{
       $(this).removeClass("clicked");
    };
  });
};*/

/*点击时给组件添加类名clickd*/
// function checkedBox(){};
function click_li(){
    $(".form_component .utility").click(function(){
    $(this).addClass("clicked").siblings().removeClass("clicked");
    //$(this).find(".del_img").show();
    $(this).find("div[name='paper']").each(function (){
      var dir = $(this).attr("dir");
      $("#dir"+dir).show().siblings().hide();
    });
  })
}
click_li();

  $(document).on('click','.form_component .utility',function(){
      $(this).addClass("clicked").siblings().removeClass("clicked");
      //$(this).find(".del_img").show();
      /*$(this).find("div[name='paper']").each(function (){
        var dir = $(this).attr("dir");
        $("#dir"+dir).show().siblings().hide();
        alert(2);
        alert(dir);

      });*/

      $('.invitee_b_tit span').each(function(){
         if("编辑内容"==$(this).text()){
           $(this).click();
         }
      });
  });


// 键盘事件 -- 标题
$('#tit_text1').keyup(function(event){
  var txt = $(this).val();
  $('.form_title h2').html(txt);
});
// 键盘事件 -- 描述
$('#tit_text2').keyup(function(event){
  var txt = $(this).val();
  $('.form_title div').html(txt);
});

// 允许范围
$(".form_range_p .input_top").on('change',function(){
   var id = $(this).attr("id");
   if($(this).prop("checked") == true){
     $(this).parent().parent().siblings('.form_range').show();
     if(id=="isBackgroundShow"){
          var backgroundPicUrl = $("#backgroundPicUrl").val();
          if(backgroundPicUrl!=null && backgroundPicUrl!=""){
              $(".formBuilder_example_form").attr("style","background: url(/upload/quesPaper/"+backgroundPicUrl+") no-repeat;background-size: cover;");
          }
     }if(id=="isBannerShow"){
        var bannerPicUrl = $("#bannerPicUrl").val();
        if(bannerPicUrl!=null && bannerPicUrl!=""){
          $("#form_title_bg").attr("src","/upload/quesPaper/"+bannerPicUrl);
          $("#form_title_bg").show();
        }
      }
    }else{
      $(this).parent().parent().siblings('.form_range').hide();
      if(id=="isBackgroundShow"){
        var quesPaperTemplateId
          $(".formBuilder_example_form").css({"background":""});
          var quesPaperTemplateName = $("#quesPaperTemplateId").val().split("_")[1];
          showTempStyle(quesPaperTemplateName);
      }
      if(id=="isBannerShow"){
        $("#form_title_bg").hide();
      }
    }
});
// 更换字体大小
$(".fontSize_change").on('change',function(){
   var fontSize = $(this).val();
   if(fontSize == '18'){
    $('.active_tit_box .title').css('font-size','22px');
    $('.formBuilder_example_form .form_title div,.form_component').css('font-size','18px');
   }else if(fontSize == '16'){
    $('.active_tit_box .title').css('font-size','20px');
    $('.formBuilder_example_form .form_title div,.form_component').css('font-size','16px');
   };
});

/*******************************2.题目设置****************************************/
//验证有效性
$(".mobile_check .check_p").find("input[name='mobile2']").on('click',function(){
  var large = $(this).prop('checked');
  // console.log(index);
  if(large == true){
    $(".clicked").find("div[class='basic_mobile']").find("p[class$='verification_p']").show();
    $(".clicked").find("div[dir='2C']").find("div[class$='basic_mobile_b']").show();
  }else {
    $(".clicked").find("div[class='basic_mobile']").find("p[class$='verification_p']").hide();
    $(".clicked").find("div[dir='2C']").find("div[class$='basic_mobile_b']").hide();
  }
});

 // 单行文本尺寸大小--函数
function inputSize(element){
    var inputSize = $(element).val();
    if(inputSize == "2"){
       $(".form_component").find("li[class$='clicked']").find("input[type='text']").removeClass('small large').addClass('medium');
    }else if(inputSize == "1"){
       $(".form_component").find("li[class$='clicked']").find("input[type='text']").removeClass('medium large').addClass('small');
    }else if(inputSize == "3"){
       $(".form_component").find("li[class$='clicked']").find("input[type='text']").removeClass('medium small').addClass('large');
    };
};
//多行文本尺寸大小--函数
function selectSize(element){
    var selectSize = $(element).val();
    console.log(selectSize)
    if(selectSize == "2"){
       $('.clicked .cl_multiple').removeClass('select_large select_small').addClass('select_medium');
    }if(selectSize == "1"){
       $('.clicked .cl_multiple').removeClass('select_medium select_large').addClass('select_small');
    }if(selectSize == "3"){
       $('.clicked .cl_multiple').removeClass('select_medium select_small').addClass('select_large');
    };
};

//横排 竖排--函数
function editSort(obj){
    $(obj).addClass('editlayout_current').siblings().removeClass('editlayout_current');
    var text = $(obj).text();
    if(text=="竖排"){
       $(".form_component").find("li[class$='clicked']").find("li[class^='radio_img_list']").attr('class','radio_img_list');
    }else if(text=="横排"){
       $(".form_component").find("li[class$='clicked']").find("li[class^='radio_img_list']").attr('class','radio_img_list f_left');
    };
};
// 横排 竖排 -- 调用
$(document).on('click','#dir34 .edit_sort span',function(){
  editSort(this);
});
$(document).on('click','#dir35 .edit_sort span',function(){
  editSort(this);
});
$(document).on('click','#dir29 .edit_sort span',function(){
    editSort(this);
});
$(document).on('click','#dir6 .edit_sort span',function(){
    editSort(this);
});

/*******多选*******/
//多选--至少项
function checkbox_Must1(obj){
   var checked = $(obj).prop("checked");
   $(".form_component").find("li[class$='clicked']").each(function (){
       if(checked==true){
         $(this).html("<span class='check_must1' style='display:none;'></span>"+ $(this).html());
       }else{
         $(this).find("span[class='check_must1']").remove();
       };
   });
};
// 多选--至少项值
function checkbox_wordLimit1(obj){
  var val = $(obj).val();
  $(".form_component").find("li[class$='clicked']").find("span[class='check_must1']").html(val);
};


/********************选项设置**********************/
/****单选选项设置*****/
// 单选选中
function setSelClick(obj){
     var checkedArr =new Array();
     var i = 0;
     $(obj).parent().parent().find("input[type='radio']").each(function(){
         checked = $(this).prop("checked");
         checkedArr[i] = checked;
         i++;
     });
     $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
          var cnt = 0;
          $(this).find("input[type='radio']").each(function(){
                 $(this).attr("checked",checkedArr[cnt] );
                 cnt++;
           });
      });
}
// 单选描述
function setSelValue(obj){
   var html = $(obj).val();
   var count = 0;
   var size = 0;
   $(obj).parent().parent().find("textarea").each(function(){
      count ++;
      var val = $(this).val();
      if(val==html){
        $(this).text(html);
        size = count;
      }
   });
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
      var cnt = 0;
      $(this).find("label[class='optionValue']").each(function(){
           cnt++;
           if(cnt==size){
             $(this).html(html);
             return ;
           }
       });
      cnt = 0;
      $(this).find("input[type='radio']").each(function(){
       cnt++;
       if(cnt==size){
         $(this).val(html);
         return ;
       }
      });
    });
}
  // 单选选项删除
  function deleteSelOption(obj){
    var name = $(obj).parent().find("textarea[class^='edittext']").attr("dir"); //右边dir
    var count = 0;
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").each(function(){
       count++;
    });
    if(count==1){
      alert("不允许删除最后一个选项");
      return ;
    }
    var flag = false;
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").find("label[class='optionValue']").each(function(){
         if(flag){
           return;
         }
         var labelName  =$(this).attr("dir"); //左边dir
         if(labelName==name){
           $(this).parent().remove();
           flag = true;
         }
    });
    flag = false;
    $('.module_edit_box').find("div[class^='module_reset']").each(function(){
       var style = $(this).attr("style");
       if(undefined == style || style=="" || style.indexOf("block")>-1){
         $(this).find("ul[class='editradio_list']").find("li[class='editradio_item']").find("textarea[class^='edittext ']").each(function (){
                if(flag){
               return;
              }
              var text = $(this).attr("dir"); //右边
              if(name==text){
                $(this).parent().remove();
                flag = true;
              };
           });
       };
     });
  };
/*********多选选项设置*******/
// 多选选中
function check_setSelClick(obj){
   var checkedArr =new Array();
   var i = 0;
   $(obj).parent().parent().find("input[type='checkbox']").each(function(){
       checked = $(this).prop("checked");
       checkedArr[i] = checked;
       i++;
   });

   $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
        var cnt = 0;
        $(this).find("input[type='checkbox']").each(function(){
               $(this).attr("checked",checkedArr[cnt] );
               cnt++;
         });
    });
};
// 多选描述
function check_setSelValue(obj){
   var html = $(obj).val();
   var count = 0;
   var size = 0;
   $(obj).parent().parent().find("textarea").each(function(){
      count ++;
      var val = $(this).val();
      if(val==html){
        $(this).text(html);
        size = count;
      }
   });
    $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").each(function(){
      var cnt = 0;
      $(this).find("label[class='optionValue']").each(function(){
           cnt++;
           if(cnt==size){
             $(this).html(html);
             return ;
           }
       });
      cnt = 0;
      $(this).find("input[type='checkbox']").each(function(){
       cnt++;
       if(cnt==size){
         $(this).val(html);
         return ;
       }
      });
    });
}

//多选选项添加
function check_addOption(obj){
    // 右边的
    var time = new Date().getTime();
    var html1 = "<li class='editradio_item' linenum='0'>"
      + "  <input class='editstatus' type='checkbox' name='radio_com1' onclick='check_setSelClick(this);' >"
      +"   <textarea class='edittext textarea input_textarea' onkeyup='check_setSelValue(this);' dir='"+time+"'>新增选项</textarea>"
      +"   <p class='addButton' onclick='check_addOption(this);'></p>"
      +"   <p class='removeButton' onclick='check_deleteSelOption(this);'>";
    $('.module_edit_box').find("div[class^='module_reset']").each(function(){
       var style = $(this).attr("style");
   });
   var type="";
   $('.module_edit_box').find("div[class^='module_reset']").each(function(){
     var style = $(this).attr("style");
     if(undefined == style || style=="" || style.indexOf("block")>-1){
       $(obj).parent().after(html1);
       type = $(this).find("div[class^='found_list']").find("span[class$='editlayout_current']").text();
     }
    });
  var clazz = "";
  if(type=="横排"){
    clazz = "radio_img_list f_left";
  }else{
    clazz = "radio_img_list";
  }

  var date = new Date().getTime();
  var html2 = "";
  $(obj).parent().parent().each(function(){
    $(this).find("textarea").each(function(){
       var val = $(this).val();
       var textdir = $(this).attr('dir'); ////label中dir
       var checked = $(this).parent().find("input[type='checkbox']").prop("checked");
       var inputHtml = "";
       if(checked==true){
         inputHtml = "<input type='checkbox' checked='checked' name='"+date+"' value='"+val+"' disabled='true'>";
       }else{
         inputHtml = "<input type='checkbox' name='"+date+"' value='"+val+"' disabled='true'>";
       }
       html2 = html2 + " <li class='"+clazz+"'>"
            + inputHtml
            +"<label class='optionValue' dir='"+textdir+"'>"+val+"</label>"
            +"</li>"
    });
  });
  $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").html(html2);
};
// 多选选项删除
function check_deleteSelOption(obj){
  var name = $(obj).parent().find("textarea[class^='edittext']").attr("dir");
  var count = 0;
  $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").each(function(){
     count++;
  });
  if(count==1){
    alert("不允许删除最后一个选项");
    return ;
  }
  var flag = false;
  $(".form_component").find("li[class$='clicked']").find("div[name='paper']").find("ul[class^='radio_img_ul']").find("li[class^='radio_img_list']").find("label[class='optionValue']").each(function(){
       if(flag){
         return;
       }
         var labelName  =$(this).attr("dir");
       if(labelName==name){
         $(this).parent().remove();
         flag = true;
       }
  });
  flag = false;
  $('.module_edit_box').find("div[class^='module_reset']").each(function(){
     var style = $(this).attr("style");
     if(undefined == style || style=="" || style.indexOf("block")>-1){
       $(this).find("ul[class='editcheckbox_list']").find("li[class='editradio_item']").find("textarea[class^='edittext ']").each(function (){
              if(flag){
             return;
            }
            var text = $(this).attr("dir");
            if(name==text){
              $(this).parent().remove();
              flag = true;
            }
         });
     };
   });
};
/***提示弹窗***/
  $('.pop_btn').on('click',function(){
    $('.popup').show();
  });
  $('.pop_xx').on('click',function(){
    $('.popup').hide();
  });


/*设置tap栏*/
$('.invitee_b_tit span').on('click',function(){
    $(this).addClass('current').siblings().removeClass('current');
    var num=$(this).index();
    $('.initee_box .invitee_b_con').eq(num).show().siblings().hide();
});

/*显示高度*/

function Heightfn(){
    var editingHeight = $(window).height() - 190 + "px";
    var initeeHeight = $(window).height() - 230 + "px";
    var navHeight = $(window).height() - 50 + "px";

    $('.editing_content .formBuilder_edit').css('height',editingHeight);
    $('.formBuilder_example_form').css('height',editingHeight);
    $('#initee_box ').css('height',initeeHeight);
    $('.invitee_b_con').css('height',initeeHeight);
    $('.c_left_nav').css('height',navHeight);
};
Heightfn();


$(window).resize(function(){
    /*显示高度*/
    Heightfn();
});


/*******************门票设置************************/
// 键盘事件 - 函数 ,标题
function keyupText(obj1,obj2){
  var val = $(obj1).val();
  obj2.html(val);
};


// 1点击 - 新增项目按钮
$(".admission_con .add_btn").on("click",function(event){
    //阻止冒泡
      var event = event || window.event;
      if(event && event.stopPropagation){
          event.stopPropagation();
      }else{
          event.cancelBubble = true;
      };

  $(".add_admission_main").find("li.qwe").each(function(i,element){
      $(element).removeClass("clickBorder");
    });
});
// 2点击空白处保存
$(document).on("click",function(event){
    var event = event || window.event;
    var targetId = event.target?event.target.id:event.srcElement.id;
    if(targetId != "admission_con" ){
      $(".add_admission_main").find("li.qwe").each(function(i,element){
          $(element).removeClass("clickBorder");
        });
    };
});
// 3添加项目 - 编辑，保存
$(document).on("click",".add_admission_main .qwe",function(event){
   //阻止冒泡
    var event = event || window.event;
    if(event && event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble = true;
    };

  // 点击可以进行编辑
  $(this).parent().find("li.qwe").each(function(i,element){
    $(element).addClass("clickBorder");
  });
  // 点击其他的，当前保存
    $(this).parent().siblings().find("li.qwe").each(function(i,element){
      $(element).removeClass("clickBorder");
    });
});
// 4删除
$(document).on("click",".add_admission_list .remove_btn",function(){
  $(this).parent().remove();
});
// 5选择check
$(document).on("click",".add_admission_list .checkbox_li input",function(){
  var large = $(this).prop("checked");
  if(large == true){
    $(".add_admission_main li").find("input[type='checkbox']").prop("checked",true);
  }else{
    $(".add_admission_main li").find("input[type='checkbox']").prop("checked",false);
  }
});




/****************************************二级联动**************************************************/
// 设置选项
// 一级选项获取光标时显示对应的二级选项
$(document).on("click",".secondOne_ul li",function(){
  var num  = $(this).index();
  $(".relevance_two .secondTwo_ul").eq(num).show().siblings().hide();
});


// 活动标题 - 不留边距
$("div[dir='10']").parent().css("padding","0");

/*******注册页面*******/
$(".form_component  .utility ").removeAttr("title");
/*清除弹窗*/
$(".language div").click(function(){
  $(this).addClass("language_active").siblings().removeClass("language_active");
})
// 开启状态 开关按钮
$(".childs_reset").on('click',function(){
    $(this).toggleClass("project_bg");
})
/*保存按钮*/
function save_web(){
  $(".popup").show();
}

/****************************20170616**********************************************/
/*组件随意拖动*/
$( ".form_component >.utility" ).draggable({
  cursorAt: { top: 20, left: 20 } ,
  start:function(event,ui){
  },
  stop:function( event, ui ){
   $(this).addClass("clicked").siblings().removeClass("clicked");
   $(this).find("div[name='paper']").each(function (){
    var dir = $(this).attr("dir");
    $("#dir"+dir).show().siblings().hide();

  });
  }
});

/*
20170619
 键盘事件*/
document.onkeydown=function(event){
     var e = event || window.event || arguments.callee.caller.arguments[0];
     var li_Top=$(".clicked").css("top").split("px")[0];
     var li_left=$(".clicked").css("left").split("px")[0];
    if(e && (/*e.keyCode==8 ||*/ e.keyCode==46)){ // 按 Backspace或delete
        $(".clicked").remove();
     } else if(e &&e.keyCode==38){
          //alert(li_left)
          $(".clicked").css("top",(parseInt(li_Top)-1)+"px");
     }else if(e &&e.keyCode==39){
          $(".clicked").css("left",(parseInt(li_left)+1)+"px");
     }else if(e &&e.keyCode==40){
          $(".clicked").css("top",(parseInt(li_Top)+1)+"px");
     }else if(e &&e.keyCode==37){
          $(".clicked").css("left",(parseInt(li_left)-1)+"px");
     }
};
$(".editing_view_con").click(function(){
  $(".formBuilder_main>ul>li").removeClass("clicked");
})
/*文本内容 - 函数*/
function setText(obj1,obj2){
  var val = $(obj1).html();
  $(obj2).html(val);
};
/*设置字体*/
function fontFamily(obj,attr,selector){
  var val = $(obj).val();
  $(selector).css(attr,val);
}
/*设置行间距*/
function fontLine(obj,attr,selector){
  var val = $(obj).val();
  $(selector).css(attr,val);
}
/*设置字体类型*/
function fontStyle(obj,attr,selector){
  var val = $(obj).val();
  if(val=="normal"){
    $(selector).css("fontStyle",val);
    $(selector).css("fontWeight","");
    $(selector).css("fontStyle","");
    $(selector).css("textDecoration","");
  }if(val=="bold"){
    $(selector).css("fontWeight",val);
  }if(val=="italic"){
    $(selector).css("fontStyle",val);
  }if(val=="underline"){
    $(selector).css("textDecoration",val);
  }

}
/*改变字体大小*/
function size_add(obj,selector1,selector2){
    var t=$(obj).parent().find(selector1);
    t.val(parseInt(t.val())+1);
    sizeNum(selector1,selector2);
}
function size_min(obj,selector1,selector2){
  var t=$(obj).parent().find(selector1);
  t.val(parseInt(t.val())-1)
  if(parseInt(t.val())<12){
  t.val(12);
  }
  sizeNum(selector1,selector2);
}
function sizeNum(selector1,selector2){
  var sizeNum=$(selector1).val();
  if(sizeNum>=12){
    $(selector2).css("fontSize",sizeNum+"px");
  }else if(sizeNum<12){
    sizeNum=12;
    $(selector1).val(sizeNum);
    $(selector2).css("fontSize",sizeNum+"px");
  }
}
/*设置文字对齐方式*/
function fontAlign(obj1,obj2,selector){
  $(obj1).css("color","#4078cb").siblings().css("color","#ccc");
  $(selector).css("textAlign",obj2);
}
/*设置文字寛高*/
function font_width(obj,selector){
  var w_val=$(obj).val();
  $(selector).css("width",w_val+"px");
}
function font_height(obj,selector){
  var h_val=$(obj).val();
  if(h_val>=38){
    $(selector).css("height",h_val+"px");
  }else if(h_val<38){
    h_val=38;
    $(selector).css("height","38px");
  }
}
/*设置文字位置*/
function font_left(obj){
  var l_val=$(obj).val();
  $(".form_component .clicked").css("left",l_val+"px");
}
function font_top(obj){
  var t_val=$(obj).val();
  $(".form_component .clicked").css("top",t_val+"px");
}
/*旋转角度*/
function font_rotate(obj){
  var r_val=$(obj).val();
  $(".form_component .clicked").css("transform","rotate("+r_val+"deg)");
  $(".form_component .clicked").css("-ms-transform","rotate("+r_val+"deg)");
  $(".form_component .clicked").css("-moz-transform","rotate("+r_val+"deg)");
  $(".form_component .clicked").css("-webkit-transform","rotate("+r_val+"deg)");
  $(".form_component .clicked").css("-o-transform","rotate("+r_val+"deg)");
}
/*设置图片寛高*/
function img_width(obj){
  var w_val=$(obj).val();
  $(".form_component .clicked .dir12,.form_component .clicked .dir12b").css("width",w_val+"px");
}
function img_height(obj){
  var h_val=$(obj).val();
    $(".form_component .clicked .dir12,.form_component .clicked .dir12b").css("height",h_val+"px");
}
/*设置图片位置*/
function img_left(obj){
  var l_val=$(obj).val();
  $(".form_component .clicked").css("left",l_val+"px");
}
function img_top(obj){
  var t_val=$(obj).val();
  $(".form_component .clicked").css("top",t_val+"px");
}
/*设置二维码寛高*/
function QR_width(obj){
  var w_val=$(obj).val();
  $('.form_component .clicked .dir13').css("width",w_val+"px");
}
function QR_height(obj){
  var h_val=$(obj).val();
    $('.form_component .clicked .dir13').css("height",h_val+"px");
}
/*自定义字段名称*/
function font_custom(obj){
  var val = $(obj).val();
  $(".form_component .clicked .dir14>span").html(val);
}

$(".form_component .utility").css("display","inline-block");
$(".s_hover").mouseover(function(){
  $(".s_hoverB").css("display","block");
});
$(".s_hover").mouseout(function(){
  $(".s_hoverB").css("display","none");
})
/*控制是否使用默认胸卡*/
function projectSwitch(obj1){
  $(obj1).toggleClass("switch_primary");
  var clazz = $(obj1).attr("class");  //判断是否含有class名switch_primary
  if(clazz.indexOf("switch_primary")>-1){
     $(obj1).find(".on_left").removeClass("on_style");
     $(obj1).find(".off_right").addClass("off_style");
  }else {
     $(obj1).find(".on_left").addClass("on_style");
     $(obj1).find(".off_right").removeClass("off_style");
  };
};
/*多选按钮控制*/
$(".check_box>li").each(function(){
   var input = $(this).find("input").eq(0).attr("type");
   $(this).removeClass("f_left");
   if(input=="radio"){
       $(this).attr("onclick","clickRadio(this);");
   }else if(input=="checkbox"){
       $(this).attr("onclick","clickCheckBox(this);");
   }
});
$(".check_box>li").each(function(){
   var input = $(this).find("input").eq(0).attr("type");
   if(input=="radio"){
       $(this).attr("onclick","clickRadio(this);");
   }else if(input=="checkbox"){
       $(this).attr("onclick","clickCheckBox(this);");
   }
});
function clickRadio(obj){
   $(obj).find("input[type='radio']").prop("checked",true);
}
function clickCheckBox(obj){
   var checked = $(obj).find("input[type='checkbox']").attr("checked");
   var click = $(obj).find("input[type='checkbox']").prop("click");
   if(checked==undefined || checked=="" || checked==false){
        $(obj).find("input[type='checkbox']").attr("checked",true);
        $(obj).find("input[type='checkbox']").prop("checked",true);
   }else{
        $(obj).find("input[type='checkbox']").removeAttr("checked");
        $(obj).find("input[type='checkbox']").prop("checked",false);
        $(".check_box2>li").find("input[type='checkbox']").removeAttr("checked");
        $(".check_box2>li").find("input[type='checkbox']").prop("checked",false);
   }
}
/*全选*/
function clickCheckBoxAll(obj){
   var checked = $(obj).find("input[type='checkbox']").attr("checked");
   var click = $(obj).find("input[type='checkbox']").prop("click");
   if(checked==undefined || checked=="" || checked==false){
        $(obj).find("input[type='checkbox']").attr("checked",true);
        $(obj).find("input[type='checkbox']").prop("checked",true);
        $(".check_box>li").find("input[type='checkbox']").attr("checked",true);
        $(".check_box>li").find("input[type='checkbox']").prop("checked",true);
   }else{
        $(obj).find("input[type='checkbox']").removeAttr("checked");
        $(obj).find("input[type='checkbox']").prop("checked",false);
        $(".check_box>li").find("input[type='checkbox']").removeAttr("checked");
        $(".check_box>li").find("input[type='checkbox']").prop("checked",false);
   }
}
/*设置尺寸选项卡*/
$(".gr").click(function(){
  $(this).addClass("act").siblings().removeClass("act");
  $(".tab_txt1").show().siblings().hide();
});
$(".cus").click(function(){
  $(this).addClass("act").siblings().removeClass("act");
  $(".tab_txt2").show().siblings().hide();
})
$(".tab_txt1>ul>li").click(function(){
  $(this).addClass("border_act").siblings().removeClass("border_act");
  var li_index=$(this).index();
  if(li_index=="0"){
    $(".form_component").css({
      width:"360px",
      height:"470px"
    })
  }else if(li_index=="1"){
    $(".form_component").css({
      width:"448px",
      height:"360px"
    })
  }else if(li_index=="2"){
    $(".form_component").css({
      width:"304px",
      height:"190px"
    })
  }else if(li_index=="3"){
    $(".form_component").css({
      width:"228px",
      height:"152px"
    })
  }
})
/*自定义设置胸卡寛高*/
function set_width(obj){
  var inp_val=$(obj).val();
  var card_width=inp_val*3.8;
  $(".form_component").css("width",card_width+"px");
}
function set_height(obj){
  var inp_val=$(obj).val();
  var card_height=inp_val*3.8;
  $(".form_component").css("height",card_height+"px");
}
/*设置打印方式选项卡*/
$(".one_print").click(function(){
  $(this).addClass("act").siblings().removeClass("act");
});
$(".two_print").click(function(){
  $(this).addClass("act").siblings().removeClass("act");
});
/*打印弹窗*/
$(".btn_list_r .btn2").click(function(){
  $(".tanchuang_box").show();
})
$(".pop_tit .pop_xx").click(function(){
  $(".tanchuang_box").hide();
})
$(".G_txt").click(function(){
  var G_val=$(this).html();
  if(G_val=="显示高级设置..."){
    $(this).html("隐藏高级设置...");
    $(".G_set").css("display","block");
  }else{
    $(this).html("显示高级设置...");
    $(".G_set").css("display","none");
  }
})
// 左右交换内容
$(".name").click(function(){
  $(this).parent().find("div[class^='dir']").css("display","block");
  $(this).parent().siblings().find("div[class^='dir']").css("display","none");
});

function move(type,obj){
   var dir = $(obj).parent().attr("dir");
   if(type==1){
       var html = "<li onclick='move(2,this);'>" + $(obj).html() + "</li>";
       $(".l-r .lr_right").find("ul").find("span[dir='"+dir+"']").append(html);
   }else if(type==2){
       var html = "<li onclick='move(1,this);'>" + $(obj).html() + "</li>";
       var dis=[];
       $(".lr_left>ul>span").find("div[class='dir']").each(function(i){
          dis[i]=$(this).css("display");
          if(dis[i]=="block"){
              $(this).append(html);
          }
       })
   }
   $(obj).remove();
}
$(".form_component .utility").click(function(){
  $(this).each(function(){
    $(this).find(".del_img").show();
    $(this).siblings().find(".del_img").hide();
  })
})
$(".form_component .utility").each(function(){
    $(this).mouseover(function(){
      if($(this).hasClass("clicked")){
        $(this).find(".del_img").show();
      }
    });
    $(this).mouseout(function(){
      if($(this).hasClass("clicked")){
        $(this).find(".del_img").hide();
      }
    })
});
$(".del_img").click(function(){
  $(this).parent().parent().parent().remove();
})



function whichButton(e){
if (window.e&&event.button==1){
  //alert("您在IE中点击了鼠标左键！");
  return  false;
}else if(e&&e.button==0){
   //alert("您在其他浏览器中点击了鼠标左键！");
   return false;
  }
}
/*$(".fal").click(function(event){
   alert(12)
})*/
function moumove(event){
 event.stopPropagation()
}
