<template>
  <div id="wrapper">

      <Layout>
        <Sider hide-trigger>
          <Tabs>
            <TabPane  icon="social-apple">
              <ul v-model="compoents">
                  <li draggable="true" v-for="item in compoents" v-on:dragstart.stop="dragstart_handler">
                  <i class="icon-widget-inpit"></i>
                  <span>{{item.displayName}}</span>
                </li>
              </ul>
            </TabPane>
            <TabPane icon="social-windows">标签二的内容</TabPane>
            <TabPane icon="social-tux">标签三的内容</TabPane>
          </Tabs>
        </Sider>
        <Content>Content</Content>
      </Layout>

  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
      data() {
          return {
              compoents :[
              {name:'XInput',displayName:'单行输入'},
              {name:'Xextrea',displayName:' 多行输入'}
          ]}
      },
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
        dragstart_handler: function(ev) {
            ev.dataTransfer.setData("text/comId", 'com1');
            ev.dataTransfer.setData("text/html", "<p>Example paragraph</p>");
            ev.dataTransfer.setData("text/uri-list", "http://developer.mozilla.org");

        }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    height: 100%;
    width: 100%;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
