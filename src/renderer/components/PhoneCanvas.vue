<template>
    <div>
        <div id="screen" class="screen iphone ">
            <div class="screen-tip">
                <span>主页 - 默认状态</span>
                <span>375x667 100%</span>
            </div>
            <div class="carrier">
                <span class="text">中国移动</span>
            </div>
            <div id="canvas" class="canvas" @drop="drop_handler" @dragover="dragover_handler">

            </div>
        </div>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                compoents: [

                ]
            }
        },

        components: {},
        methods: {
            open(link) {
                this.$electron.shell.openExternal(link)
            },
            dragover_handler:function(ev) {
                console.log(ev.clientX +','+ ev.clientY) ;
                event.preventDefault();

            },
            drop_handler:function(ev) {
                ev.preventDefault();
                var shiftX = document.getElementById('canvas').clientLeft;
                var shiftY = document.getElementById('canvas').clientTop;
                var data = ev.dataTransfer.getData("text/comId");
                var top = ev.clientY-50;
                var left = ev.clientX -100;
                let element = document.createElement('div');
                element.style.top = top + 'px';
                element.style.left =  left+ 'px';
                element.style.position = 'absolute';
                element.style.border='solid red 1px';
                element.innerText = 'Hello';
                element.type = "text";
                event.target.appendChild(element);
                console.log( left+","+top);

                //element.innerText = data;


            },


        }
    }
</script>

<style scoped>


    .screen {
        width: 375px;
        height: 667px;
        top: 52px;
        position: relative;
        left: 100px;
        padding: 12px;
        padding-bottom: 34px;
        margin-bottom: 200px;
        border: 1px dashed #d9d9d9;
        background: #fdfdfd;
        box-sizing: content-box;
        pointer-events: auto;
    }

    .mac .iphone, .mac .ipad {
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "Pingfang SC", "Microsoft Yahei", "WenQuanYi Micro Hei", sans-serif;
    }

    .screen-tip {
        position: absolute;
        left: 50%;
        bottom: 100%;
        width: 100%;
        min-width: 160px;
        margin-bottom: 6px;
        color: #a9afb8;
        pointer-events: none;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .canvas {
        position: relative;
        box-sizing: content-box;
        background-color: white;
        background-repeat: repeat;
        background-position: top left;
        background-size: 100% auto;
        overflow: visible;
        z-index: 1;
        -webkit-transform-origin: top left;
        -ms-transform-origin: top left;
        transform-origin: top left;
        width: 375px;
        height: 667px;
        background-image: none;
        border: silver solid 1px;
    }


    .phobe-bar .grids {
        position: absolute;
        border: solid black 1px;
        top: 5px;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -65535;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAABlBMV…6AHRRIAAAAAnRSTlMAsyT7Lw4AAAANSURBVAjXY2hgoCoAACfQAIGM5uSyAAAAAElFTkSuQmCC);
        background-size: 10px 10px;
        pointer-events: none;
    }

    .canvas .group-list {
        position: relative;
        z-index: 1;
    }

    .canvas .group, .canvas .single {
        position: absolute;
        box-sizing: content-box;
        display: block;
    }

    .widget {
        position: relative;
        border: solid red 1px;

    }

</style>
