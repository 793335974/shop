"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[341],{1341:function(s,t,a){a.r(t),a.d(t,{default:function(){return l}});var i=function(){var s=this,t=s._self._c;return t("div",{staticClass:"pay"},[t("van-nav-bar",{attrs:{fixed:"",title:"订单结算台","left-arrow":""},on:{"click-left":function(t){return s.$router.go(-1)}}}),t("div",{staticClass:"address"},[t("div",{staticClass:"left-icon"},[t("van-icon",{attrs:{name:"logistics"}})],1),t("div",{staticClass:"info"},[t("div",{staticClass:"info-content"},[t("span",{staticClass:"name"},[s._v(s._s(s.address.name))]),t("span",{staticClass:"mobile"},[s._v(s._s(s.address.phone))])]),t("div",{staticClass:"info-address"},[s._v(" "+s._s(s.address.region.province)+" "+s._s(s.address.region.city)+" "+s._s(s.address.region.district)+" "+s._s(s.address.detail)+" ")])]),t("div",{staticClass:"right-icon"},[t("van-icon",{attrs:{name:"arrow"}})],1)]),t("div",{staticClass:"pay-list"},[t("div",{staticClass:"list"},s._l(s.order.goodsList,(function(a){return t("div",{key:a.goods_id,staticClass:"goods-item"},[t("div",{staticClass:"left"},[t("img",{attrs:{src:a.goods_image,alt:""}})]),t("div",{staticClass:"right"},[t("p",{staticClass:"tit text-ellipsis-2"},[s._v(" "+s._s(a.goods_name)+" ")]),t("p",{staticClass:"info"},[t("span",{staticClass:"count"},[s._v("x"+s._s(a.total_num))]),t("span",{staticClass:"price"},[s._v("¥"+s._s(a.goods_price_min))])])])])})),0),t("div",{staticClass:"flow-num-box"},[t("span",[s._v("共 "+s._s(s.order.orderTotalNum)+" 件商品，合计：")]),t("span",{staticClass:"money"},[s._v("￥"+s._s(s.order.orderTotalPrice))])]),t("div",{staticClass:"pay-detail"},[t("div",{staticClass:"pay-cell"},[t("span",[s._v("订单总金额：")]),t("span",{staticClass:"red"},[s._v("￥"+s._s(s.order.orderTotalPrice))])]),s._m(0),t("div",{staticClass:"pay-cell"},[t("span",[s._v("配送费用：")]),t("span",{staticClass:"red"},[s._v("+￥0.00")])])]),t("div",{staticClass:"pay-way"},[t("span",{staticClass:"tit"},[s._v("支付方式")]),t("div",{staticClass:"pay-cell"},[t("span",[t("van-icon",{attrs:{name:"balance-o"}}),s._v("余额支付（可用 ¥ 999919.00 元）")],1),t("span",{staticClass:"red"},[t("van-icon",{attrs:{name:"passed"}})],1)])]),t("div",{staticClass:"buytips"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:s.remark,expression:"remark"}],attrs:{placeholder:"选填：买家留言（50字内）",name:"",id:"",cols:"30",rows:"10"},domProps:{value:s.remark},on:{input:function(t){t.target.composing||(s.remark=t.target.value)}}})])]),t("div",{staticClass:"footer-fixed"},[t("div",{staticClass:"left"},[s._v("实付款："),t("span",[s._v("￥"+s._s(s.order.orderTotalPrice))])]),t("div",{staticClass:"tipsbtn",on:{click:s.submitOrder}},[s._v("提交订单")])])],1)},e=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"pay-cell"},[t("span",[s._v("优惠券：")]),t("span",[s._v("无优惠券可用")])])}],r=(a(4114),a(4797)),o={name:"PayIndex",data(){return{address:[],city:[],order:{},personal:{},remark:""}},methods:{async submitOrder(){"cart"==this.mode&&await(0,r.Bc)(this.mode,{remark:this.remark,cartIds:this.cartIds}),"buyNow"==this.mode&&await(0,r.Bc)(this.mode,{goodsId:this.goodsId,goodsNum:this.goodsNum,goodsSkuId:this.goodsSkuId}),this.$router.push({path:"/myorder",query:{status:1}}),this.$toast("结算成功")}},async created(){const s={address_id:10014,name:"张小二1",phone:"18999292929",province_id:782,city_id:783,region_id:785,detail:"北京路1号楼8888室",user_id:10003,region:{province:"上海",city:"上海市",region:"徐汇区"}};if(this.address=s,"cart"==this.mode){const s=await(0,r.$v)(this.mode,{cartIds:this.cartIds});this.order=s.order,this.personal=s.personal}if("buyNow"==this.mode){const s=await(0,r.$v)(this.mode,{goodsId:this.goodsId,goodsNum:this.goodsNum,goodsSkuId:this.goodsSkuId});this.order=s.order,this.personal=s.personal}},computed:{mode(){return this.$route.query.mode},goodsId(){return this.$route.query.goodsId},goodsNum(){return this.$route.query.goodsNum},goodsSkuId(){return this.$route.query.goodsSkuId},cartIds(){return this.$route.query.cartIds}}},d=o,n=a(1656),c=(0,n.A)(d,i,e,!1,null,"cda13036",null),l=c.exports},4797:function(s,t,a){a.d(t,{$v:function(){return e},Bc:function(){return r},jH:function(){return o}});var i=a(1953);const e=(s,t)=>i.A.get("/checkout/order",{params:{mode:s,delivery:10,couponId:0,isUsePoints:0,...t}}),r=(s,t)=>i.A.post("/checkout/submit",{mode:s,delivery:10,couponId:0,payType:10,isUsePoints:0,...t}),o=(s,t)=>i.A.get("/order/list",{params:{dataType:s,page:t}})}}]);
//# sourceMappingURL=341.ebcb03db.js.map