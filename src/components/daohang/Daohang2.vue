<template>
    <div class="juzhong2">
      <img src="https://www.ziyimall.com/images/logo_new.jpg" alt="">
      <div id="sousuo">
        <div id="sousuokuang">
          <form action="">
            <div>
              <input type="text" placeholder="葡萄籽" name='username'>
              <button id="btn1" type="submit" class="el-icon-search"></button>
            </div>
          </form>
          <a style="color:red;" href="javascript:;">酵素</a>
          <em>丨</em>
          <a href="javascript:;">牡蛎</a>
          <em>丨</em>
          <a href="javascript:;">蔓越莓</a>
          <em>丨</em>
          <a style="color:red;" href="javascript:;">减肥奶昔</a>
          <em>丨</em>
          <a href="">维骨力</a>
          <em>丨</em>
          <a style="color:red;" href="javascript:;">见月草</a>
        </div>
        <a class="gouwu" href="javascript:;">
          <div id="gouwu">
            <div id="gouwutubiao"></div><span>购物车</span>
          </div>
        </a>
      </div>
    </div>
</template>

<script>

  export default {
    name: "daohang2",

  };
</script>

<style>
  .juzhong2 {
    position: relative;
    margin: 0 auto;
    width: 1200px;
  }

  #sousuo {
    width: 45%;
    height: 58%;
    /* background-color: lightblue; */
    position: absolute;
    right: 0;
    bottom: 0;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  #sousuo input {
    height: 34px;
    width: 100%;
    border: 1px solid black;
    box-sizing: border-box;
    font-size: 13px;
    padding-left: 5px;
    box-sizing: border-box;
  }

  #sousuo a {
    color: #999999;
    font-size: 12px;
  }

  #sousuokuang {
    width: 75%;
  }

  #sousuokuang div {
    display: flex;
    margin-bottom: 5px;
  }

  em {
    font-size: 12px;
    font-style: normal;
    color: #999999;
    margin: 0 5px;
  }

  #btn1 {
    height: 34px;
    width: 20%;
    border: 1px solid black;
    border-left: none;
    background-color: #333333;
    font-size: 20px;
    color: whitesmoke;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .gouwu {
    height: 34px;
    width: 21%;
    background-color: #333333;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    overflow: hidden;
  }

  #gouwu {
    height: 34px;
    width: 100%;
    background-color: #333333;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gouwu * {
    font-size: 15px;
    color: white;
  }

  #gouwutubiao {
    width: 20px;
    height: 20px;
    background-image: url('https://www.ziyimall.com/images/icon1.png');
      background-position: -957px -163px;
    margin-right: 5px;
  }
</style>