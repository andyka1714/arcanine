<template>
  <header>
    <el-row>
      <el-col :span="6" :lg="4">
        <div class="logo-block">
          <img src="../assets/logo.svg" alt="">
          <span class="logo-line"></span>
        </div>
      </el-col>
      <el-col :span="13" :lg="16">
        <div class="center-block">
          <div class="search-block">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="請輸入搜尋關鍵字">
          </div><!--
          --><div class="message-block">
            <div class="message">
              <i class="far fa-envelope"></i>
            </div>
            <div class="remind">
              <i class="far fa-bell"></i>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="5" :lg="4">
        <div class="user-block">
          <div class="avator">
            
          </div>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              ADMIN<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>ADMIN</el-dropdown-item>
              <el-dropdown-item>LOG OUT</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="sass">
header
  width: 100%
  height: 80px
  padding-left: 40px
  .logo-block, .center-block, .user-block
    width: 100%
    height: 80px
    padding: 10px 30px
  .logo-block
    text-align: right
    position: relative
    img
      height: 100%
    .logo-line
      height: 60px
      width: 1px
      position: absolute
      top: 10px
      right: 0
      background-color: #ccc
  .center-block
    .search-block, .message-block
      display: inline-flex
    .search-block
      width: calc(100% - 130px)
      align-items: center
      i
        font-size: 20px
        color: #CCC
      input
        height: 40px
        width: calc(100% - 20px)
        padding: 10px 15px
        font-size: 20px
        border: 0
        margin: 0 10px
    .message-block
      width: 130px
      justify-content: space-between
      .message, .remind
        width: 60px
        height: 60px
        border-radius: 10px
        box-shadow: 0 0 10px #ccc
        display: flex
        justify-content: center
        align-items: center
        font-size: 20px
        color: #ecac79
  .user-block
    border-left: 1px solid #eee
    display: flex
    justify-content: center
    align-items: center
    .avator
      width: 60px
      height: 60px
      border-radius: 10px
      background-color: #eee
      background-image: url('../assets/user-regular.svg')
      background-size: 50% 50%
      background-repeat: no-repeat
      background-position: center center
      margin-right: 10px

</style>
