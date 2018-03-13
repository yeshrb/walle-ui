<template>
    <div id="designPage">
        <div id="design-toolbar" class="design-toolbar">
            <div class="toolbar-left">
                <span class="icon dora" id="toolbar-back">back_fc</span>
                <span class="project-name">test</span>

            </div>
            <div class="toolbar-center">

            </div>
            <div class="toolbar-right">

            </div>
        </div>

        
    </div>
</template>
<script>

</script>
<style>
    body {
        background: whitesmoke;
        color: #525e71;
    }

    html, body {
        font-family: -apple-system, "SF UI Text", "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Zen Hei", sans-serif;
        font-size: 12px;
        font-weight: normal;
        line-height: 18px;
        overflow: hidden;
        height: 100%;
    }

    .design-toolbar {
        position: relative;
        height: 56px;
        background: #fff;
        -webkit-box-shadow: 1px 0 6px 0 rgba(39, 54, 78, .12);
        box-shadow: 1px 0 6px 0 rgba(39, 54, 78, .12);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        z-index: 105;
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
    }
    .toolbar-left {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 244px;
        flex: 0 0 244px;
        padding-left: 20px;
        padding-right: 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .toolbar-left>.icon {
        color: #8d9ea7;
        font-size: 16px;
        cursor: pointer;
        -webkit-transition: all .1s linear;
        transition: all .1s linear;
    }


    .toolbar-left span {
        white-space: nowrap;
        line-height: 1;
    }
    .dora, .duodora {
        display: inline-block;
        width: 1em;
        font: normal normal normal 1em/1 Dora;
        font-size: inherit;
        speak: none;
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
        -webkit-font-feature-settings: "liga";
        -moz-font-feature-settings: "liga=1";
        -moz-font-feature-settings: "liga";
        font-feature-settings: "liga";
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -webkit-font-variant-ligatures: discretionary-ligatures;
        font-variant-ligatures: discretionary-ligatures;
    }
</style>

