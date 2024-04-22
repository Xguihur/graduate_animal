<template>
  <div>
    <slot></slot>

    <div ref="myTree" class="chart-box">
      <div class="root-box" ref="scrollBox" @mousewheel="handleScroll">
        <div class="top-and-bottom" v-for="item in res" :key="item">
          <div class="top-item">
            <span class="doc"></span>
            <span class="direct"></span>
            <div class="content">
              <div class="con-title">{{ item.top.title }}</div>
              <div class="con-data">
                {{ item.top.content }}
              </div>
            </div>
          </div>
          <div class="bottom-item" v-if="item.bottom">
            <span class="doc"></span>
            <span class="direct"></span>
            <div class="content">
              <div class="con-title">{{ item.bottom.title }}</div>
              <div class="con-data">
                {{ item.bottom.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'

import { filterData } from '@/hooks/useFilterSlide'

const data1 = [
  {
    title: '1950年5月',
    content:
      '《关于稀有动物保护办法》颁布，规定禁止任意捕猎松藩等地的大熊猫等稀有动物。'
  },
  {
    title: '1956年',
    content:
      '林业部颁布《狩猎管理办法(草案)》,猎枪的制造、销售、购买、持有等做出了规定。猎捕非国家重点保护野生动物的，必须持有狩猎证，并按照狩猎证规定的种类、数量、地点、期限、工具和方法进行猎捕。'
  },
  {
    title: '1962年4月',
    content:
      '国务院颁布《关于积极保护和合理利用野生动物资源的指示》，强调“野生动物资源是国家的自然财富”，要“切实保护”，“合理利用”。'
  },
  {
    title: '1988年11月8日',
    content:
      '酝酿多年的中国第一部为保护野生动物而订立的法律——《中华人民共和国野生动物保护法》获得第七届全国人大常委会第四次会议的一致通过。'
  },
  {
    title: '1989年1月14日',
    content:
      '《国家重点保护野生动物名录》由中华人民共和国林业部、农业部令第1号发布,自发布日起施行'
  },
  {
    title: '1993年4月14日',
    content:
      '林业部发出通知,决定将《濒危野生动植物种国际贸易公约》(CITES)附录一和附录二所列非原产中国的所有野生动物(如犀牛、食蟹猴、袋鼠、鸵鸟、非洲象、斑马等),分别核准为国家一级和国家二级保护野生动物。 '
  },
  {
    title: '2003年2月21日',
    content:
      '国家林业局令第7号发布,将麝科麝属所有种由国家二级保护野生动物调整为国家一级保护野生动物,以全面加强麝资源保护。'
  },
  {
    title: '2019年',
    content:
      '打击野生动植物非法贸易部际联席会议第二次会议，调整发布《国家重点保护野生动物名录》《国家重点保护野生植物名录》。'
  },
  {
    title: '2020年6月',
    content:
      '为进一步加大对穿山甲的保护力度，中国将穿山甲属所有种由国家二级保护野生动物提升至一级。这标志着当前在中国自然分布的中华穿山甲，以及据文献记载中国曾有分布的马来穿山甲和印度穿山甲将受到严格保护。'
  },
  {
    title: '2021年2月5日',
    content:
      '从国家林业和草原局、农业农村部获悉,经国务院批准,调整后的《国家重点保护野生动物名录》正式向公众发布。调整后的《名录》,共列入野生动物980种和8类,其中国家一级保护野生动物234种和1类、国家二级保护野生动物746种和7类。'
  }
]
// 获取过滤后的合适的数据
const res = filterData(data1)
// console.log(res.value)
// 滚动条
const scrollBox = ref()
let isDragging = false
let startDragX = 0
let currentScrollPos = 0
let targetScrollPos = 0 // 目标滚动位置
let rafId = null

onMounted(() => {
  scrollBox.value.addEventListener('mousedown', startDrag)
  scrollBox.value.addEventListener('mousemove', doDrag)
  scrollBox.value.addEventListener('mouseup', endDrag)
  scrollBox.value.addEventListener('mouseleave', endDrag)
  scrollBox.value.addEventListener('wheel', throttle(handleWheel, 100), {
    passive: false
  })

  function startDrag(event) {
    if (event.button !== 0) return // 只处理鼠标左键拖动
    isDragging = true
    startDragX = event.clientX
    currentScrollPos = scrollBox.value.scrollLeft
  }

  function doDrag(event) {
    if (!isDragging) return
    const delta = event.clientX - startDragX
    scrollBox.value.scrollLeft = currentScrollPos - delta
    // cancelAnimationFrame(rafId) // 取消上一次的滚动动画
    // targetScrollPos = currentScrollPos - delta
    cancelAnimationFrame(rafId) // 取消上一次的滚动动画
    scrollToTarget()
  }

  function endDrag(event) {
    isDragging = false
    targetScrollPos = scrollBox.value.scrollLeft
    scrollToTarget()
  }

  function handleWheel(event) {
    event.preventDefault() // 阻止默认的滚动行为
    const delta = event.deltaY
    const scrollAmount = delta > 0 ? 500 : -500 // 每次滚动的距离
    targetScrollPos = scrollBox.value.scrollLeft + scrollAmount
    cancelAnimationFrame(rafId) // 取消上一次的滚动动画
    // throttle(scrollToTarget)
    scrollToTarget()
  }
  function scrollToTarget() {
    const duration = 500 // 缓动时间，单位为毫秒
    let startTimestamp = null
    let lastScrollPos = scrollBox.value.scrollLeft

    function scrollStep(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = timestamp - startTimestamp
      const percent = Math.min(progress / duration, 1)
      const easing = easeOutQuad(percent) // 使用 easeOutQuad 缓动函数
      const distance = targetScrollPos - lastScrollPos
      const newPos = lastScrollPos + distance * easing
      scrollBox.value.scrollLeft = newPos

      if (percent < 1) {
        rafId = requestAnimationFrame(scrollStep)
      } else {
        lastScrollPos = newPos
      }
    }

    rafId = requestAnimationFrame(scrollStep)
  }

  function easeOutQuad(x) {
    return 1 - (1 - x) * (1 - x)
  }
  function throttle(fn, delay) {
    let lastCall = 0
    return function (...args) {
      const now = new Date().getTime()
      if (now - lastCall < delay) {
        return
      }
      lastCall = now
      fn(...args)
    }
  }
  // 在这个实现中，我们新增了一个 targetScrollPos 变量来记录滑轮事件或拖动事件结束时的目标滚动位置，然后在拖动事件或滑轮事件结束时调用一个新的 scrollToTarget 函数来实现滑动缓动。在 scrollToTarget 函数中，我们使用 requestAnimationFrame 方法来实现每一帧的滚动效果，然后使用 easeOutQuad 缓动函数来实现顺滑的缓动效果。这个缓动函数可以根据您的需要替换为其他类型的缓动函数。
})
</script>
<style lang="less" scoped>
.chart-box {
  flex: 1;
  width: 100%;
  height: 100%;
  margin-top: 2vh;
  padding: 0 0.3vw;
  user-select: none; //禁止文字选中
  box-sizing: border-box;

  .root-box {
    width: 100%;
    height: 70vh;
    display: flex;
    box-sizing: border-box;
    padding: 1vh 3vh;
    overflow: auto;
    // background-color: #aaa;

    border-radius: 0.5vw;
    background: linear-gradient(
      to right,
      rgb(249, 157, 172),
      rgb(243, 194, 102)
    );

    .top-and-bottom {
      display: flex;
      flex-wrap: nowrap;

      > div {
        min-width: 15vw; //设置每一个 item 最小宽度
        max-width: 25vw;
      }
      // 点、箭头和内容的设置，公共部分
      .doc {
        position: absolute;
        display: inline-block;
        width: 1.5vh;
        height: 1.5vh;
        border-radius: 50%;
        background-color: rgb(200, 125, 125);
        transform: translateX(-50%);
      }
      .content {
        height: 100%;
        width: 100%;
        border-radius: 0.5vw;
        padding: 1vh;
        box-sizing: border-box;
        background-color: rgb(255, 255, 255);
        text-align: left;

        .con-title {
          font-size: 18px;
          font-weight: 600;
        }
        .con-data {
          text-indent: 2em;
          height: 85%;
          overflow: auto;
        }
      }
      .direct {
        position: absolute;
        display: inline-block;
        border: 0.5vw solid rgb(255, 255, 255);
        transform: translateX(-50%);
      }

      .top-item {
        position: relative;
        padding: 2vh 1vh;
        max-height: 27vh;
        // background-color: pink;
        // box-sizing: border-box;//不能用这个控制，不然边框border会不准确
        border-bottom: 0.5vh solid #fff;
        text-align: center;

        .doc {
          bottom: -1vh;
        }
        .content {
          border: 6px outset #ff6600;
          padding-top: 10%;
        }

        .direct {
          bottom: 0.1vh;
          border-top: 0.5vw solid #ff6600;
          border-bottom: 0.5vw solid transparent;
          border-left: 0.5vw solid transparent;
          border-right: 0.5vw solid transparent;
        }
      }
      .bottom-item {
        position: relative;
        padding: 2vh 1vh;
        height: auto;
        margin-top: 31vh;
        text-align: center;
        border-top: 0.5vh solid #fff;
        // background-color: skyblue;

        .doc {
          top: -1vh;
        }
        .content {
          border: 6px outset #ff6600;
          padding-top: 10%;
        }
        .direct {
          top: 0.1vh;
          border-bottom: 0.5vw solid #ff6600;
          border-top: 0.5vw solid transparent;
          border-left: 0.5vw solid transparent;
          border-right: 0.5vw solid transparent;
          // background-color: red;
        }
      }
    }
  }

  // 滚动条
  .root-box::-webkit-scrollbar {
    height: 1vh;
  }
  .root-box::-webkit-scrollbar-track {
    border-radius: 0.5vh;
  }
  .root-box::-webkit-scrollbar-thumb {
    background-color: rgb(215, 125, 170);
    border-radius: 0.5vh;
  }
  .root-box::-webkit-scrollbar-thumb:hover {
    background-color: rgb(245, 17, 55);
  }
}
</style>
