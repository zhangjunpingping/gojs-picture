var textArry1={
        id: "1", 
        name: "风机",
        height: "140", 
        data: [
            {src:'../image/feng/2.png',classifty:'img',category:'风机1',type:2,key:'fegn1',width:80,height:80},
            {src:'../image/feng/3.png',classifty:'img',category:'风机2',type:2,key:'fegn2',width:80,height:80},
        ]
}
// 管道
var textArry2={
        id: "2", 
        name: "管道",
        height: "260", 
        data: [
            {src:'../image/guang/pipe2.svg',classifty:'img',category:'管道2',type:2,key:'guang2',width:80,height:80},
            {src:'../image/guang/pipe3.svg',classifty:'img',category:'管道3',type:2,key:'guang3',width:80,height:80},
            {src:'../image/guang/pipe4.svg',classifty:'img',category:'管道4',type:2,key:'guang4',width:80,height:80},
            {src:'../image/guang/pipe5.svg',classifty:'img',category:'管道5',type:2,key:'guang5',width:80,height:80},
            {src:'../image/guang/pipe6.svg',classifty:'img',category:'管道6',type:2,key:'guang6',width:80,height:80},
        ]
}
// 开关
var textArry3={
        id: "3", 
        name: "开关",
        height: "100", 
        data: [
            {src:'../image/open/1off.png',classifty:'img',category:'开关1',type:2,key:'open1',width:80,height:80},
            {src:'../image/open/1on.png',classifty:'img',category:'开关2',type:2,key:'open2',width:80,height:80},
        ]
}
// 开关
var textArry4={
        id: "4", 
        name: "其他",
        height: "320", 
        data: [
            {src:'../image/other/1.png',classifty:'img',category:'图片1',type:2,key:'other1',width:80,height:67},
            {src:'../image/other/2.png',classifty:'img',category:'图片2',type:2,key:'other2',width:80,height:61},
            {src:'../image/other/3.png',classifty:'img',category:'图片3',type:2,key:'other3',width:80,height:152},
            {src:'../image/other/4.gif',classifty:'img',category:'图片4',type:2,key:'other4',width:80,height:80},
            {src:'../image/other/5.jpg',classifty:'img',category:'图片5',type:2,key:'other5',width:80,height:54}
        ]
}
var textArry5={
        id: "5", 
        name: "文字控件",
        height: "140", 
        data: [
            {key:"onwText", category:"文字一",classifty:"textShape",type:3,color:"#1E9FFF",textColor:"#fff",text:"文字"},
            {key:"twoText", category:"文字二",classifty:"textShape",type:3,color:"#569bd5",textColor:"#fff",text:"文字"},
            {key:"threeText", category:"文字三",classifty:"textShape",type:3,color:"#a9a9e9",textColor:"#fff",text:"文字"},
            {key:"fourBtn", category:"文字四",classifty:"textShape", type:4,color:"#a9a9e9",textColor:"#fff",text:"文字"}
        ]
};
var classifylist=[];
$(function(){
   classifylist.push(textArry1);
   classifylist.push(textArry2);
   classifylist.push(textArry3);
   classifylist.push(textArry4);
   classifylist.push(textArry5);
   init();// 初始化组件内容
})
function init() {
     // 定义菜单有的分类
      menusList()
      objGo  = go.GraphObject.make;  // for conciseness in defining templates
      myDiagram =
      objGo(go.Diagram, "myDiagramDiv",  // create a new Diagram in the HTML DIV element "myDiagramDiv"
          {
            "grid": objGo(go.Panel, "Grid",
                  objGo(go.Shape, "LineH", { stroke: "lightgray", strokeWidth: 0.5 }),
                  objGo(go.Shape, "LineH", { stroke: "gray", strokeWidth: 0.5, interval: 10 }),
                  objGo(go.Shape, "LineV", { stroke: "lightgray", strokeWidth: 0.5 }),
                  objGo(go.Shape, "LineV", { stroke: "gray", strokeWidth: 0.5, interval: 10 })
                ),
            "grid.gridCellSize": new go.Size(10, 8),
            "allowDrop": true,  // 允许拖拽
            "initialContentAlignment": go.Spot.Center, // 居中显示
            "draggingTool.dragsLink": true,
            "draggingTool.isGridSnapEnabled": true,
            "linkingTool.isUnconnectedLinkValid": true,
            "linkingTool.portGravity": 20,
            "relinkingTool.isUnconnectedLinkValid": true,
            "relinkingTool.portGravity": 20,
            "relinkingTool.fromHandleArchetype":
              objGo(go.Shape, "Diamond", { segmentIndex: 0, cursor: "pointer", desiredSize: new go.Size(8, 8), fill: "tomato", stroke: "darkred" }),
            "relinkingTool.toHandleArchetype":
              objGo(go.Shape, "Diamond", { segmentIndex: -1, cursor: "pointer", desiredSize: new go.Size(8, 8), fill: "darkred", stroke: "tomato" }),
            "linkReshapingTool.handleArchetype":
              objGo(go.Shape, "Diamond", { desiredSize: new go.Size(7, 7), fill: "lightblue", stroke: "deepskyblue" }),
            rotatingTool: objGo(TopRotatingTool),  // defined below
            "rotatingTool.snapAngleMultiple": 15,
            "rotatingTool.snapAngleEpsilon": 15,
            "undoManager.isEnabled": true,
            // "ModelChanged": function(e) {     // 模块改变，生成相应的json文件
            //   if (e.isTransactionFinished) {  // json格式文件
            //      console.log(e.model.toJson())
            //   }
            // }
          });
      myDiagram.linkTemplate =
       objGo(go.Link,
           { routing: go.Link.AvoidsNodes, curve: go.Link.JumpGap, corner: 10, reshapable: true, toShortLength: 7 },
           new go.Binding("points").makeTwoWay(),
           objGo(go.Shape, { isPanelMain: true, stroke: "#1E9FFF", strokeWidth: 6 }),// 线的边
           objGo(go.Shape, { isPanelMain: true, stroke: "#3a77e2", strokeWidth: 4 }), // 线的背景颜色
           objGo(go.Shape, { isPanelMain: true, stroke: "#f5f5f5", strokeWidth: 2, name: "PIPE", strokeDashArray: [10, 10] }), // 中间流动的
           objGo(go.Shape, { toArrow: "Triangle", fill: "#3a77e2", stroke: null }), // 箭头的颜色
          );
          sharedToolTip =
            objGo(go.Adornment, "Auto",
            objGo(go.Shape, "RoundedRectangle", { fill: "lightyellow" }),
            objGo(go.TextBlock, { margin: 2 },
            new go.Binding("text",  "" , function(d) { return d.category; })));
     var nodeSelectionAdornmentTemplate =
      objGo(go.Adornment, "Auto",
        objGo(go.Shape, { fill: null, stroke: "deepskyblue", strokeWidth: 1.5, strokeDashArray: [4, 2] }),
        objGo(go.Placeholder)
      );

    nodeResizeAdornmentTemplate =
      objGo(go.Adornment, "Spot",
        { locationSpot: go.Spot.Right },
        objGo(go.Placeholder),
        objGo(go.Shape, { alignment: go.Spot.TopLeft, cursor: "nw-resize", desiredSize: new go.Size(4, 4), fill: "lightblue", stroke: "deepskyblue" }),
        objGo(go.Shape, { alignment: go.Spot.Top, cursor: "n-resize", desiredSize: new go.Size(2, 2), fill: "lightblue", stroke: "deepskyblue" }),
        objGo(go.Shape, { alignment: go.Spot.TopRight, cursor: "ne-resize", desiredSize: new go.Size(4, 4), fill: "lightblue", stroke: "deepskyblue" }),

        objGo(go.Shape, { alignment: go.Spot.Left, cursor: "w-resize", desiredSize: new go.Size(2, 2), fill: "lightblue", stroke: "deepskyblue" }),
        objGo(go.Shape, { alignment: go.Spot.Right, cursor: "e-resize", desiredSize: new go.Size(2, 2), fill: "lightblue", stroke: "deepskyblue" }),

        objGo(go.Shape, { alignment: go.Spot.BottomLeft, cursor: "se-resize", desiredSize: new go.Size(4, 4), fill: "lightblue", stroke: "deepskyblue" }),
        objGo(go.Shape, { alignment: go.Spot.Bottom, cursor: "s-resize", desiredSize: new go.Size(2, 2), fill: "lightblue", stroke: "deepskyblue" }),
        objGo(go.Shape, { alignment: go.Spot.BottomRight, cursor: "sw-resize", desiredSize: new go.Size(4, 4), fill: "lightblue", stroke: "deepskyblue" })
      );

    nodeRotateAdornmentTemplate =
      objGo(go.Adornment,
        { locationSpot: go.Spot.Center, locationObjectName: "CIRCLE" },
        objGo(go.Shape, "Circle", { name: "CIRCLE", cursor: "pointer", desiredSize: new go.Size(8, 8), fill: "lightblue", stroke: "deepskyblue" }),
        objGo(go.Shape, { geometryString: "M4.2 8 L4.2 30", isGeometryPositioned: true, stroke: "deepskyblue", strokeWidth: 1.0, strokeDashArray: [4, 2] })
      );
      // 根据数据定义菜单分类
      paletteArry=[]
      for(var item of classifylist){
         let contentDataImg={};
         contentDataImg.paletteDefine=new go.Palette("classify-"+item.id);
         contentDataImg.id=item.id;
         contentDataImg.data=item.data;
         for(var itemm of item.data){ // 每个分类里的图片
           var node;
        if(itemm.classifty=="img"){
                 node =objGo(go.Node, "Spot", nodeStyle(),
                  objGo(go.Panel, "Auto",
                      { name: "PANEL" },
                       new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                      objGo(go.Shape, "Rectangle",  // default figure
                          {
                            portId: "",
                            fromLinkable: true, margin:0,toLinkable: true, cursor: "pointer",
                            fill: "rgba(70,113,196,0)",  // default color
                            strokeWidth: 0
                          },
                          ),
                      objGo(go.Picture,
                       { width:itemm.width-5,height:itemm.height-5},
                        new go.Binding("source"),
                        new go.Binding("width"),
                        new go.Binding("height"),
                       ),
                      ),
                        makePort("top", go.Spot.Top, true, true),
                        makePort("left", go.Spot.Left, true, true),
                        makePort("right", go.Spot.Right, true, true),
                        makePort("botton", go.Spot.Bottom, true, true),
                        { 
                          mouseEnter: function(e, node) { showSmallPorts(node, true); },
                          mouseLeave: function(e, node) { showSmallPorts(node, false); }
                        } 
                   );
            } else if(itemm.classifty=="shape"){
                   node =objGo(go.Node, "Spot", nodeStyle(),
                     objGo(go.Shape, "Rectangle",
                       { strokeWidth:1, fill: "#8fbdee"},
                       new go.Binding("figure")),
                        makePort("top", go.Spot.Top, true, true),
                        makePort("left", go.Spot.Left, true, true),
                        makePort("right", go.Spot.Right, true, true),
                        makePort("botton", go.Spot.Bottom, true, true),
                        { 
                          mouseEnter: function(e, node) { showSmallPorts(node, true); },
                          mouseLeave: function(e, node) { showSmallPorts(node, false); }
                        } 
                   );
             } else if(itemm.classifty=="textBlock"){
                   node = objGo(go.Node, "Spot",nodeStyle(),
                        objGo(go.TextBlock,
                            {
                              font: "normal 11pt Helvetica, Arial, sans-serif",
                              margin: 8,
                              maxSize: new go.Size(160, NaN),
                              editable: true,stroke:"#0A7EF7",
                            },
                            new go.Binding("text").makeTwoWay(),
                            new go.Binding("stroke","color"),
                            )
                     );
            } else if(itemm.classifty=="textShape"&&itemm.type==4){
                   node=objGo(go.Node, "Horizontal",nodeStyleNo(),
                            { background: "#c1c4ee" },                          
                            objGo(go.TextBlock,
                              // 文字周围的空隙, 大号字体, 白色笔画:
                               {
                                font: "normal 11pt Helvetica, Arial, sans-serif",
                                margin: 6,
                                maxSize: new go.Size(160, 25),
                                wrap: go.TextBlock.WrapFit,
                                editable: true,
                                stroke:itemm.textColor,
                              },
                              new go.Binding("text").makeTwoWay()),
                             objGo(go.Panel, "Auto",
                                objGo(go.Shape, "Rectangle",
                                   {
                                     fill:"#1E9FFF",  // default color
                                     width:60,
                                     height:30,
                                     strokeWidth:0,
                                  },
                                ),
                                objGo(go.TextBlock, 
                                    {
                                       font: "normal 11pt Helvetica, Arial, sans-serif",
                                      margin: 8,
                                      editable: true,
                                      text:"生效",
                                      stroke:"#fff"
                                    },
                                  ),
                              ),
                            
                             new go.Binding("strokeWidth"),
                        );
             } else if(itemm.classifty=="textShape"){
                   node=objGo(go.Node, "Spot",nodeStyle(),
                          objGo(go.Panel, "Auto",
                             { name: "PANEL" },
                             new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                            objGo(go.Shape, "Rectangle",
                              {
                                fill: itemm.color,  // default color
                                strokeWidth: 0,
                              },
                              new go.Binding("strokeWidth"),
                           ),
                            objGo(go.TextBlock,
                              {
                                font: "normal 11pt Helvetica, Arial, sans-serif",
                                margin: 8,
                                maxSize: new go.Size(160, NaN),
                                wrap: go.TextBlock.WrapFit,
                                editable: true,
                                stroke:itemm.textColor,
                              },
                              new go.Binding("stroke"),
                              new go.Binding("text").makeTwoWay())
                          ),
                        );
             }
              myDiagram.nodeTemplateMap.add(itemm.category, node);
         }
         paletteArry.push(contentDataImg);
      }
      for(var itemList of paletteArry){
           itemList.paletteDefine.nodeTemplateMap = myDiagram.nodeTemplateMap;
           var nodeDataList=[];
           for(var itemChart of itemList.data){
               if(itemChart.key.indexOf('开关')>=0){
                  nodeDataList.push( {key:itemChart.key,category: itemChart.category ,"source":itemChart.src,'text':''})
               } 
               else if(itemChart.classifty=="img"){
                  nodeDataList.push( {key:itemChart.key,category: itemChart.category ,"source":itemChart.src})
               } else if(itemChart.classifty=="shape"){
                  nodeDataList.push( {key:itemChart.key,category:itemChart.category, figure: itemChart.figure})
               } else if(itemChart.classifty=="textBlock"){
                  nodeDataList.push({key:itemChart.key,category: itemChart.category})
               } else if(itemChart.classifty=="textShape"){
                  nodeDataList.push({key:itemChart.key,category: itemChart.category ,text: itemChart.text})
               }
           }
           itemList.paletteDefine.model.nodeDataArray = nodeDataList
      }
      setTimeout(function(){
         for(var itemList of paletteArry){
           $("#classify-"+itemList.id).css('display',"none")
         }
      },100)          
      load();
}
function load(){
 var contentData={ "class": "go.GraphLinksModel",
                      "linkFromPortIdProperty": "fromPort",
                      "linkToPortIdProperty": "toPort",
                      "nodeDataArray": [ 
                    {"key":"other3", "category":"图片3", "source":"../image/other/3.png", "loc":"-270 -200", "size":"135 207", "width":130, "height":202},
                    {"key":"other4", "category":"图片4", "source":"../image/other/4.gif", "loc":"560 -56"},
                    {"key":"other5", "category":"图片5", "source":"../image/other/5.jpg", "loc":"480 -272", "size":"250 128", "width":245, "height":123},
                    {"key":"onwText", "category":"文字一", "text":"水压", "loc":"-340 -184", "size":"45.319976806640625 30.875448608398436", "width":40, "height":25},
                    {"key":"onwText2", "category":"文字一", "text":"水压高度：20", "loc":"-400 -136"},
                    {"key":"other2", "category":"开关2", "source":"../image/other/2.png", "loc":"110 88"},
                    {"key":"guang2", "category":"管道2", "source":"../image/guang/pipe2.svg", "loc":"-30 160", "angle":270},
                    {"key":"guang22", "category":"管道2", "source":"../image/guang/pipe2.svg", "loc":"-100 24", "angle":90},
                    {"key":"guang6", "category":"管道6", "source":"../image/guang/pipe6.svg", "loc":"-100 24"},
                    {"key":"guang4", "category":"管道4", "source":"../image/guang/pipe4.svg", "loc":"-100 88"},
                    {"key":"guang23", "category":"管道2", "source":"../image/guang/pipe2.svg", "loc":"40 160", "angle":270},
                    {"key":"guang3", "category":"管道3", "source":"../image/guang/pipe3.svg", "loc":"-240 24"},
                    {"key":"guang24", "category":"管道2", "source":"../image/guang/pipe2.svg", "loc":"-240 -40"},
                    {"key":"fegn2", "category":"风机2", "source":"../image/feng/3.png", "loc":"20 -184"},
                    {"key":"other1", "category":"图片1", "source":"../image/other/1.png", "loc":"230 -176", "size":"100 95", "width":95, "height":90},
                    {"key":"other42", "category":"图片4", "source":"../image/other/4.gif", "loc":"-240 -144"},
                    {"key":"open1", "category":"图片1", "source":"../image/open/1off.png", "loc":"350 0"}
                     ],
                      "linkDataArray": [ 
                    {"from":"fegn2", "to":"other3", "fromPort":"left", "toPort":"", "points":[20,-146.5,10,-146.5,-57.5,-146.5,-57.5,-96.5,-125,-96.5,-135,-96.5]},
                    {"from":"other1", "to":"fegn2", "fromPort":"left", "toPort":"", "points":[230,-128.5,220,-128.5,162.5,-128.5,162.5,-146.5,105,-146.5,95,-146.5]},
                    {"from":"open1", "to":"other1", "fromPort":"top", "toPort":"botton", "points":[387.5,0,387.5,-10,387.5,-40.5,280,-40.5,280,-71,280,-81]}
                     ]}
  myDiagram.model = go.Model.fromJson(contentData);
}
// 组件样式定义
 function nodeStyle() {
    return [new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
      { resizable: true, resizeObjectName: "PANEL", resizeAdornmentTemplate: nodeResizeAdornmentTemplate },
      { rotatable: true, rotateAdornmentTemplate: nodeRotateAdornmentTemplate },
        new go.Binding("angle").makeTwoWay(),
        new go.Binding("isShadowed", "isSelected").ofObject(),
        {
          selectionAdorned: false,
          shadowOffset: new go.Point(0, 0),
          shadowBlur: 15,
          shadowColor: "#00a9c9",
          toolTip: sharedToolTip
        }];
}
function nodeStyleNo() {
    return [new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
      { rotatable: true, rotateAdornmentTemplate: nodeRotateAdornmentTemplate },
        new go.Binding("angle").makeTwoWay(),
        new go.Binding("isShadowed", "isSelected").ofObject(),
        {
          selectionAdorned: false,
          shadowOffset: new go.Point(0, 0),
          shadowBlur: 15,
          shadowColor: "#00a9c9",
          toolTip: sharedToolTip
        }];
}
 // 默认连线的链接位置
function makePort(name, spot, output, input) {
      let makePortWidth=10;
      var shapeStr = "";
     switch (name){
          case "top":shapeStr = "TriangleUp";break;
          case "right":shapeStr = "TriangleRight";break;
          case "botton":shapeStr = "TriangleDown";break;
          case "left":shapeStr = "TriangleLeft";break;
      }

     return objGo(go.Shape, shapeStr,
         {
            fill: null,  // not seen, by default; set to a translucent gray by showSmallPorts, defined below
            stroke: null,
            strokeWidth:0,
            desiredSize: new go.Size(makePortWidth, makePortWidth),
            alignment: spot,  // align the port on the main Shape
            alignmentFocus: spot,  // just inside the Shape
            portId: name,  // declare this object to be a "port"
            fromSpot: spot,  // declare where links may connect at this port
            fromLinkable: output,  // declare whether the user may draw links from here
            toSpot: spot,  // declare where links may connect at this port
            toLinkable: input,  // declare whether the user may draw links to here
            cursor: "pointer"  // show a different cursor to indicate potential link point
         });
 }
// 图片自定义连线的链接位置
function makePortImg(axis,order) { // 图片定义链接口的样式
  if(parseInt(order+1)<=axis.length){
    return objGo(go.Shape,
         {
            fill: "rgba(175,223,220,0)",  // not seen, by default; set to a translucent gray by showSmallPorts, defined below
            strokeWidth: 0,  // no stroke
            stroke: "#3aa0ff",
            desiredSize: new go.Size(10, 10),
            alignment: new go.Spot(axis[order].x,axis[order].y), 
            fromLinkable: true, 
            toLinkable: true, 
            portId: axis[order].portId,  // declare this object to be a "port"
            cursor: "pointer"  // show a different cursor to indicate potential link point
         });
  } 
}
function TopRotatingTool() {
  go.RotatingTool.call(this);
}
function showSmallPorts(node, show) {
      node.ports.each(function(port) {
        if (port.portId !== "") {  // don't change the default port, which is the big shape
          port.fill = show ? "rgba(58,160,255,1)" : null;
        }
      });
}
go.Diagram.inherit(TopRotatingTool, go.RotatingTool);

/** @override */
TopRotatingTool.prototype.updateAdornments = function(part) {
  go.RotatingTool.prototype.updateAdornments.call(this, part);
  var adornment = part.findAdornment("Rotating");
  if (adornment !== null) {    
        if(adornment.$d.size&&adornment.$d.key.indexOf('Shape')<0){
          ratateImg=setTimeout(function(){
            let nodeData = myDiagram.model.findNodeDataForKey(adornment.$d.key);
            nodeData.width = parseInt(adornment.$d.size.split(' ')[0])-5;
            nodeData.height = parseInt(adornment.$d.size.split(' ')[1])-5;
            myDiagram.model.updateTargetBindings(nodeData);          
            clearTimeout(ratateImg)
          },200)   
        }
    adornment.location = part.rotateObject.getDocumentPoint(new go.Spot(0.5, 0, 0, -30));  // above middle top
  }
};

/** @override */
TopRotatingTool.prototype.rotate = function(newangle) {
  go.RotatingTool.prototype.rotate.call(this, newangle + 90);
};
function menusList(){
  var menusHtml=''
  for(var item of classifylist){
     menusHtml =' <div class="classify-title" onclick="classifyShow('+item.id+')">'+item.name+'</div>'
       +'<div id="classify-'+item.id+'" class="classify-title-content" style="height: '+item.height+'px" ></div>'
       $("#menu").append(menusHtml);
  }
}
// 菜单显示内容
function classifyShow(showId){
  if( $("#classify-"+showId).css('display')=="block"){
     $("#classify-"+showId).css('display',"none");
     $(".classify-"+showId).css('display',"none");
  } else{
    $(".classify-title-content").css('display',"none")
    $("#classify-"+showId).css('display',"block");
    $(".classify-"+showId).css('display',"block");
  }   
}
// 配置效果图片
function effectImg(){
   window.location.href="effect.html"
}
// 查看效果图片
function checkImg(){
   var contentData= myDiagram.model.toJson();
   sessionStorage.setItem('conetent',contentData);
   window.location.href="index.html"
}