<template>
    <div class="container">
        <div class="header">
            <span>车次</span>
            <el-input placeholder="9921"></el-input>
            <el-button type="primary">查询</el-button>
        </div>
        <div class="wrapper">
            <div class="content" id="contentbox">
                <!-- 类型1：火车头 -->
                <div class="train-head-box train">
                    <div class="head-body">
                        <img src="../assets/images/车头.png" style="width:237px; height:204px">
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>
                <!-- 类型2：带轨道双车厢 -->
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>20GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                            <div class="carriage-line"></div>
                            <div class="carriage-box">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>20GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact" id="contact">
                            <div class="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>
                <!-- 类型3：带轨道单车厢 -->
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box2">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>40GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact">
                            <div class="contact" id="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>
                <!-- 类型4：不带轨道双车厢 -->
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>20GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                            <div class="carriage-line"></div>
                            <div class="carriage-box">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>20GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact" id="contact">
                            <div class="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>
                <!-- 类型5：不带轨道单车厢 -->
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box2">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>40GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact" id="contact">
                            <div class="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box2">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>40GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact">
                            <div class="contact" id="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box2">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>40GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact">
                            <div class="contact" id="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box2">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>40GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact">
                            <div class="contact contact-empty" id="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box2">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>40GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact">
                            <div class="contact" id="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>                
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box2">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>40GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact">
                            <div class="contact" id="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>                
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box2">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>40GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact">
                            <div class="contact" id="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box2">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>40GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact">
                            <div class="contact" id="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box2">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>40GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact">
                            <div class="contact" id="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box2">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>40GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact">
                            <div class="contact" id="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box2">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>40GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact">
                            <div class="contact contact-empty" id="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>
                <div class="connect-carriage-box train">
                    <div class="carriage-body">
                        <div class="carriage-content">
                            <div class="carriage-box2">
                                <div>
                                    <p>DMCU0955906</p>
                                    <p>40GP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E</p>
                                    <p>Car23014</p>
                                </div>
                            </div>
                        </div>
                        <div class="carriage-contact">
                            <div class="contact" id="contact"></div>
                            <img src="../assets/images/车底.png"  style="width: 239px;height:72px">
                        </div>
                    </div>
                    <div class="head-track">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                        <img class="track-img" src="../assets/images/轨道.png" alt="">
                    </div>
                </div>
                
                <!-- 左侧铁轨连接 -->
                <div class="track-left" id="track-left"></div>
                <!-- 右侧铁轨连接 -->
                <div class="track-right" id="track-right">
                </div>
            </div>
        </div>
        
    </div>
</template>

<script  lang="ts">
import { defineComponent, ref, reactive, toRefs,onMounted, onUnmounted } from 'vue';
export default defineComponent({
  name: 'TrainMonitoring',
  setup() {
    const data = reactive({})
    onMounted(() => {
    });
    onUnmounted(() => {
    });
    return {
        ...toRefs(data)
    };
  },
 });
</script>

<style lang="scss" scoped>
.container {
    // height: 100%;
    /* padding: 20px 30px; */
}
.header {
    height: 30px;
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 15px;
    span {
        color: #1068E2;
        font-weight: 400;
        margin-right: 10px;
    }
    .el-input {
        width: 134px;
        height: 30px;
        margin-right: 10px;
        border: 1px solid #badaff;
        border-radius: 5px;
    }
    .el-button {
        width: 69px;
        height: 30px;
        background: #0068E2;
    }
}
.wrapper {
    width: 1860px;
    height: 985px;
}
.content {
    position: relative;
    display: flex;
    flex-wrap: wrap; //多余换到第二行
    justify-content: start ;
    width: 1860px;
    height: 985px;
    padding: 64.74px 4px;
    // padding: 64.74px 20px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(16,104,226,0.10); 
}
.track-left {
    position: absolute;
    top: 575px;
    left: 0;
    width: 9px;
    height: 314.5px;
    background: #918E91;
}
.track-right  {
    display: inline;
    position: absolute;
    top: 268.5px;
    right: 21px;
    width: 20px;
    height: 315px;
    border: 9px solid #918E91;
    border-left: none;
    /* transition: all .1s; */
}
// @media (min-width: 1272px){
//     .track-right{
//         display: inline;
//         top: 284px;
//         left: 1118px;
//     }
// }
// @media (max-width: 1272px){
//     .track-right{
//         display: inline;
//         top: 284px;
//         left: 859px;
//     }
// }
// @media (max-width: 1013px){
//     .track-right{
//         display: inline;
//         top: 284px;
//         left: 600px;
//     }
// }
// @media (max-width: 755px){
//     .track-right{
//         display: inline;
//         top: 284px;
//         left: 341px;
//     }
//     .contact {
//         visibility:hidden;
//     }
// }
.right-box {
    position: relative;
}
.right-box1 {
    position: absolute;
}
.right-box2 {
    position: absolute;
    left: 20px;

}
.right-box3 {
    position: absolute;
    top: 306.9px;
}
.train {
    height: 226.38px;
    width: 259px;
    text-align: right;
    box-sizing: border-box;
    margin-bottom: 80px;
}
.head-body {
    display: flex;
    margin-left: 22px;
}
.head-bod {
    z-index: 1;
}
.head-track {
    display: flex;
    text-align: left;
}
.track-img {
    width: 87px;
    height: 20px;
}
.carriage-body {
    position: relative;
    padding-top: 39px;
}
.carriage-content {
    display: flex;
    margin-left: 24px;
}
.carriage-contact {
    display: flex;
}
.contact {
    width:20px;
    height:9px;
    background: #918E91;
    margin-top: 30px;
}
.contact-empty {
        width:20px;
    height:9px;
    background: #ffffff;
    margin-top: 30px;
}
.carriage-box, .carriage-box2 {
    font-size: 12px;
    color: #ffffff;
    display:flex;
    text-align: left;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
.carriage-box{
    width: 108px;
    height: 93px;
    background: #ff9176;
    border: 4px solid #ea5732;
}
.carriage-box2{
    width: 224px;
    height: 93px;
    background: #82c8d3;
    border: 4px solid #22b5cc;
}
.carriage-box p,.carriage-box2 p{
    margin-bottom: 5px;
    text-align: left;
}
</style>
