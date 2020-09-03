<template>
  <div>
    <div v-if="list.length > 0" class="buycar">
      <div class="table-head">
        <el-col :span="6">选择</el-col>
        <el-col :span="3">商品名称</el-col>
        <el-col :span="3">图片</el-col>
        <el-col :span="3">数量</el-col>
        <el-col :span="3">价格</el-col>
        <el-col :span="3">总金额</el-col>
        <el-col :span="3">操作</el-col>
      </div>
      <div class="table-body">
        <ul class="table-ul">{{ checkList }}
          <li v-for="item in list" :key="item.id">
            <el-col :span="6"><el-checkbox v-model="checkList" @change="item.check = !item.check" :label="item.id">{{ item.othername }}</el-checkbox></el-col>
            <el-col :span="3">{{ item.name }}</el-col>
            <el-col :span="3"><img :src="item.imgStr" alt=""></el-col>
            <el-col :span="3">
              <span class="btn" @click="cutCount(item)">-</span>
              {{ item.num }}
              <span class="btn" @click="addCount(item)">+</span>
            </el-col>
            <el-col :span="3">{{ item.price }}元</el-col>
            <el-col :span="3">{{ item.num * item.price }}元</el-col>
            <el-col :span="3"><span class="del" @click="delcloth(item)">{{ item.caozuo }}</span></el-col>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      购物车空空如也，去逛逛吧~
    </div>
    <div class="totalCount">
      <div class="checkall">
        <el-checkbox v-model="allcheck" @change="getallcheck">全选</el-checkbox>
      </div>
      <div class="totalprice">合计{{ totalPrice }}元</div>
      <div class="checknum">已选商品{{ totalNum }}件</div>
    </div>
  </div>
</template>

<script>
// var imgUrl = require('./../../public/img2.jpg')
import imgUrl from './../../public/img2.jpg'
export default {
  data () {
    return {
      allcheck: false,
      checkList: [],
      totalNum: 0,
      totalPrice: 0,
      list: [
        {
          id: 1,
          name: '良品铺子',
          othername: '坚果',
          price: '156',
          imgStr: require('./../../public/img1.jpg'),
          num: '2',
          caozuo: '删除',
          check: false
        },
        {
          id: 2,
          name: '三只松鼠',
          othername: '猪肉铺',
          price: '158',
          imgStr: imgUrl,
          num: '2',
          caozuo: '删除',
          check: false
        }
      ]
    }
  },
  methods: {
    total () {
      let totalNum = 0
      let totalPrice = 0
      this.list.map(item => {
        if (item.check) {
          totalNum += parseInt(item.num)
          totalPrice += parseInt(item.num) * parseFloat(item.price)
        }
      })
      this.totalNum = totalNum
      this.totalPrice = totalPrice
    },
    cutCount (item) {
      if (item.num === 0) {
        return
      }
      item.num--
      this.total()
    },
    addCount (item) {
      item.num++
      this.total()
    },
    delcloth (item) {
      this.list.map((res, index) => {
        if (res.id === item.id) {
          this.list.splice(index, 1)
        }
      })
      this.total()
    },
    getallcheck (val) {
      if (val) {
        this.checkList = []
        this.list.map(item => {
          this.checkList.push(item.id)
          item.check = true
        })
      } else {
        this.checkList = []
        this.list.map(item => {
          item.check = false
        })
      }
      this.total()
    }
  },
  watch: {
    checkList () {
      this.total()
      if (this.checkList.length === this.list.length) {
        this.allcheck = true
      } else {
        this.allcheck = false
      }
    }
  }
}
</script>

<style lang="less" scoped="scoped">
  .table-head{height: 40px;}
  .buycar,.table-head,.table-body,.table-ul{width: 100%;}
  .table-ul{
    list-style: none;
    padding: 0;
    li{
      height: 54px;
      img{
        width: 50px;
        height: 50px;
      }
    }
   }
  .del{
    cursor: pointer;
    color: #ff0000;
    user-select: none;
  }
  .btn{
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border: 1px solid #000000;
    cursor: pointer;
    user-select: none;
  }
  .totalCount{
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 40px;
    background-color: #ddd;
    line-height: 40px;
    .checkall{
      float: left;
      margin-left: 20px;
    }
    .totalprice,.checknum{
      float: right;
      margin-right: 60px;
    }
  }
</style>
