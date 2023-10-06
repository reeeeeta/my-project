<template>
  <div class="container">
    <br /><br />
    <el-card class="card">
      <el-row :gutter="24">
        <el-col :span="4">
          <div class="border">Week1<br />7/3-7/7</div>
        </el-col>
        <el-col :span="20">
          <div class="list">
            <li>閱讀Vue相關資料、教程</li>
            <li>實作1A2B</li>
            <li>實作ToDo List</li>
          </div></el-col
        >
      </el-row>
    </el-card>
    <br /><br />
    <el-card class="card" justify="end">
      <el-row justify="end">
        <el-col :span="8">
          <div class="list">
            <li>將1A2B、TodoList改寫成.vue</li>
            <li>將vue整合成可切換畫面</li>
            <li>將網頁部署到github</li>
            <li>element-ui網格布局實作</li>
            <li>學習並使用Postman練習API</li>
          </div></el-col
        >
        <el-col :span="4">
          <div class="border">Week2<br />7/10-7/14</div>
        </el-col>
      </el-row>
    </el-card>
    <br /><br />
    <el-card class="card">
      <el-row :gutter="24">
        <el-col :span="4">
          <div class="border">Week3<br />7/17-7/21</div>
        </el-col>
        <el-col :span="20">
          <div class="list">
            <li>使用element-plus 寫出Table+Form CRUD</li>
            <li>實際練習打API</li>
            <li>熟悉模組資料夾結構</li>
          </div></el-col
        >
      </el-row>
    </el-card>
    <br /><br />
    <el-card class="card">
      <el-row justify="end">
        <el-col :span="8">
          <div class="list">
            <li>討論工時系統規格</li>
            <li>學習增加側邊欄位</li>
            <li>figma製作工時系統UI</li>
            <li>用mock測試api</li>
            <li>工時系統功能模擬</li>
          </div></el-col
        >
        <el-col :span="4">
          <div class="border">Week4<br />7/24-7/28</div>
        </el-col>
      </el-row>
    </el-card>
    <br /><br />
  </div>
</template>

<script></script>

<style>
.card {
  /*width: 80%;*/
  background-color: #dec8c8;
}
.border {
  border: solid;
  border-radius: 10px;
  text-align: center;
  /* height:50px;*/

  /* line-height: 50px; */
}
.list {
  text-align: left;
}

.container {
  justify-content: center;
  align-items: center;
  /*background-color: #c48888;*/
}
</style>
