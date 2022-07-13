<template>
  <div class="container">
    <div class="header">
      <span>箱区号</span>
      <el-input v-model="input" placeholder="9921"></el-input>
      <el-button type="primary">查询</el-button>
    </div>
    <div class="content-map">
        <div class="title">
            <span>箱区图</span>
        </div>
        <div class="content-chart">
            <div class="content-chart-title">
                <span>默认码放方向</span>
                <el-radio-group v-model="radio1" class="ml-4">
                    <el-radio label="1" size="large">贝优先</el-radio>
                    <el-radio label="2" size="large">排优先</el-radio>
                </el-radio-group>
            </div>
            <!-- <div id="box-area-map"></div> -->
            <canvas id="box-area-map"></canvas>
        </div>
    </div>
    <div class="content-info">
        <div class="info-left ">
            <div class="title">
                <span>场箱位信息</span>
            </div>
            <div class="info-left-btn">
                <el-button type="primary">新增</el-button>
                <el-button type="primary" plain>删除</el-button>
            </div>
            <div class="info-left-table">
                <el-table :data="tableData1.slice((currentPageOne-1) * pageSize, currentPageOne * pageSize)"  
                    :height="tableHeight" style="width: 100%">
                    <el-table-column prop="number" width="26"></el-table-column>
                    <el-table-column type="selection" width="128" ></el-table-column>
                    <el-table-column prop="position" label="场箱位"></el-table-column>
                    <el-table-column prop="row" label="排" width="72"></el-table-column>
                    <el-table-column prop="layer" label="层" width="72"></el-table-column>
                    <el-table-column prop="sign" label="冷藏箱位标志"></el-table-column>
                    <el-table-column prop="state" label="状态" width="110"></el-table-column>
                </el-table>
            </div>
            <div class="paging">
                <div>
                    <span>显示</span>
                    <span class="num">1</span>
                    <span>到</span>
                    <span class="num num-two">{{Math.ceil((tableData1.length)/3)}}</span>
                    <span>共</span>
                    <span class="num">{{tableData1.length}}</span>
                    <span>条记录</span>
                </div>
                <el-pagination
                    background 
                    layout="prev, pager, next" 
                    :total="tableData1.length" 
                    :page-size="pageSize"
                    :current-page.sync="currentPage1"
                    @current-change="handleCurrentChangeOne"
                />
                <!-- <el-pagination background layout="prev, pager, next" :total="100" /> -->
            </div>
        </div>
        <div class="info-right">
            <div class="title">
                <span>倍位列表</span>
            </div>
            <div class="info-right-btn">
                <el-button type="primary">保存</el-button>
            </div>
            <div class="info-right-table">
                <el-table :data="tableData2.slice((currentPageTwo-1) * pageSize, currentPageTwo * pageSize)"  
                    :height="tableHeight" style="width: 100%">
                    <el-table-column prop="number"></el-table-column>
                    <el-table-column prop="state" label="状态"></el-table-column>
                    <el-table-column prop="tagnum" label="倍位号"></el-table-column>
                    <el-table-column prop="maxrow" label="最大排数"></el-table-column>
                    <el-table-column prop="maxlayer" label="最大层数"></el-table-column>
                    <el-table-column prop="sign" label="使用标志"></el-table-column>
                    <el-table-column prop="boxnum" label="冷藏箱插座数" width="120" ></el-table-column>
                    <el-table-column prop="time" label="输入时间" width="180" ></el-table-column>
                    <el-table-column prop="staff" label="输入员工"></el-table-column>
                </el-table>
            </div>
            <div class="paging">
                <div>
                    <span>显示 </span>
                    <span class="num">1</span>
                    <span> 到 </span>
                    <span class="num num-two">{{Math.ceil((tableData2.length)/3)}}</span>
                    <span> 共 </span>
                    <span class="num">{{tableData2.length}}</span>
                    <span> 条记录</span>
                </div>
                <el-pagination 
                    background 
                    layout="prev, pager, next" 
                    :total="tableData2.length" 
                    :page-size="pageSize"
                    :current-page.sync="currentPage1"
                    @current-change="handleCurrentChangeTwo" 
                />
            </div>
        </div>
    </div>
  </div>
</template>

<script  lang="ts">
import * as echarts from 'echarts';
import { defineComponent, ref, reactive, toRefs,onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'YarnPlan',
  setup() {
    const data = reactive({
        tableData1: [
            {
                number: '1',
                position: '030111',
                row: '1',
                layer: '1',
                sign: '标志1',
                state: '空',
            },
            {
            number: '2',
                position: '030111',
                row: '1',
                layer: '2',
                sign: '标志2',
                state: '空',
            },
            {
            number: '3',
                position: '030111',
                row: '1',
                layer: '1',
                sign: '标志3',
                state: '空',
            },
            {
            number: '4',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '5',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
                number: '6',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '7',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '3',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '4',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '5',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
                number: '1',
                position: '030111',
                row: '1',
                layer: '1',
                sign: '标志1',
                state: '空',
            },
            {
            number: '2',
                position: '030111',
                row: '1',
                layer: '2',
                sign: '标志2',
                state: '空',
            },
            {
            number: '3',
                position: '030111',
                row: '1',
                layer: '1',
                sign: '标志3',
                state: '空',
            },
            {
            number: '4',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '5',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
                number: '1',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '2',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '3',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '4',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '5',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
                        {
                number: '1',
                position: '030111',
                row: '1',
                layer: '1',
                sign: '标志1',
                state: '空',
            },
            {
            number: '2',
                position: '030111',
                row: '1',
                layer: '2',
                sign: '标志2',
                state: '空',
            },
            {
            number: '3',
                position: '030111',
                row: '1',
                layer: '1',
                sign: '标志3',
                state: '空',
            },
            {
            number: '4',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '5',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
                number: '1',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '2',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '3',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '4',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
            {
            number: '5',
                position: '030111',
                row: '1',
                layer: '1',
                sign: ' ',
                state: '空',
            },
        ],    //用于存储列表的数据
        tableData2:[
            {
            number: '1',
            state: '20’占',
            tagnum: '01',
            maxrow: '6',
            maxlayer: '4',
            sign: '可用',
            boxnum: '100',
            time: '2018/06/14 16:11',
            staff: 'hzadmin',
            },
            {
            number: '2',
            state: '空',
            tagnum: '01',
            maxrow: '6',
            maxlayer: '4',
            sign: '可用',
            boxnum: '100',
            time: '2018/06/14 16:11',
            staff: 'hzadmin',
            },
            {
            number: '3',
            state: '20’占',
            tagnum: '01',
            maxrow: '6',
            maxlayer: '4',
            sign: '可用',
            boxnum: '100',
            time: '2018/06/14 16:11',
            staff: 'hzadmin',
            },
            {
            number: '4',
            state: '空',
            tagnum: '01',
            maxrow: '6',
            maxlayer: '4',
            sign: '可用',
            boxnum: '100',
            time: '2018/06/14 16:11',
            staff: 'hzadmin',
            },
            {
            number: '5',
            state: '空',
            tagnum: '01',
            maxrow: '6',
            maxlayer: '4',
            sign: '可用',
            boxnum: '100',
            time: '2018/06/14 16:11',
            staff: 'hzadmin',
            },
            {
            number: '3',
            state: '空',
            tagnum: '01',
            maxrow: '6',
            maxlayer: '4',
            sign: '可用',
            boxnum: '100',
            time: '2018/06/14 16:11',
            staff: 'hzadmin',
            },
            {
            number: '1',
            state: '20’占',
            tagnum: '01',
            maxrow: '6',
            maxlayer: '4',
            sign: '可用',
            boxnum: '100',
            time: '2018/06/14 16:11',
            staff: 'hzadmin',
            },
            {
            number: '2',
            state: '空',
            tagnum: '01',
            maxrow: '6',
            maxlayer: '4',
            sign: '可用',
            boxnum: '100',
            time: '2018/06/14 16:11',
            staff: 'hzadmin',
            },
            {
            number: '3',
            state: '空',
            tagnum: '01',
            maxrow: '6',
            maxlayer: '4',
            sign: '可用',
            boxnum: '100',
            time: '2018/06/14 16:11',
            staff: 'hzadmin',
            },
            {
            number: '1',
            state: '20’占',
            tagnum: '01',
            maxrow: '6',
            maxlayer: '4',
            sign: '可用',
            boxnum: '100',
            time: '2018/06/14 16:11',
            staff: 'hzadmin',
            },
            {
            number: '2',
            state: '空',
            tagnum: '01',
            maxrow: '6',
            maxlayer: '4',
            sign: '可用',
            boxnum: '100',
            time: '2018/06/14 16:11',
            staff: 'hzadmin',
            },
            {
            number: '3',
            state: '空',
            tagnum: '01',
            maxrow: '6',
            maxlayer: '4',
            sign: '可用',
            boxnum: '100',
            time: '2018/06/14 16:11',
            staff: 'hzadmin',
            },
        ],
        tableHeight: '197', //列表的初始高度
        currentPageOne: 1,    //当前页
        currentPageTwo: 1,    //当前页
        pageSize: 3,   //每页的数据条数
    })
    const input = ref('')
    const radio1 = ref('1')
    onMounted(() => {
        draw()
    });
    onUnmounted(() => {
    });
    function draw() {
        // 获得canvas
        var canvas = document.getElementById('box-area-map'); //月度出口货值的柱状图
        canvas.width="828";		// 注意：没有单位
	    canvas.height="162";	// 注意：没有单位
        if(!canvas.getContext) return;
        // 获取上下文
        var ctx = canvas.getContext("2d");
        //开始代码
        //绘制y轴
        ctx.beginPath();
        ctx.moveTo(10,10);
        ctx.lineTo(10,124);
        ctx.strokeStyle = "#F5F5F5";
        ctx.lineWidth=20;
        ctx.lineCap="round";
        ctx.stroke();
        //绘制y轴数字
        ctx.font = "10px sans-serif"
        for(var i = 1; i < 8; i++) {
            ctx .fillStyle="#666666";
            ctx.fillText(i, 7, 18 * i);
        }
        //绘制x轴
        ctx.beginPath();
        ctx.moveTo(38,152);
        ctx.lineTo(818,152);
        ctx.strokeStyle = "#F5F5F5";
        ctx.lineWidth=20;
        ctx.lineCap="round";
        // ctx.lineCap="square";
        ctx.stroke();
        //绘制x轴数字
        ctx.font = "10px sans-serif"
        for(var i = 1; i < 40; i++) {
            ctx .fillStyle="#666666";
            ctx.fillText(i, 20 * i + 20, 156);
            i++;
        }
        //绘制表格
        //横线
        // ctx.strokeStyle = "red";
        for (let i = 0; i < 8; i++) {
            ctx.beginPath();
            ctx.moveTo(29, 18.6 * i + 1);
            ctx.lineTo(830, 18.6 * i + 1);
            ctx.lineWidth=2;
            ctx.stroke();
        }
        // 竖线
        for (let i = 0; i < 21; i++) {
            ctx.beginPath();
            ctx.moveTo(39.85 * i + 30, 1);
            ctx.lineTo(39.85 * i + 30, 131);
            ctx.lineWidth=2;
            ctx.stroke();
        }
    };
    //当前页,拿到页码 并赋值
    function handleCurrentChangeOne(value) {
        data.currentPageOne = value;
    };
    function handleCurrentChangeTwo(value) {
        data.currentPageTwo = value;
    };
    return {
        ...toRefs(data),
        handleCurrentChangeOne,
        handleCurrentChangeTwo,
        radio1,
        input
    };
  },
 });
</script>

<style lang="scss" scoped>
.container {
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
    .title {
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        font-weight: 400;
        text-align: left;
        padding: 0 20px ;
        border: 1px solid #efefef;
    }
    .content-chart {
        text-align: left;
        font-size: 14px;
        padding: 20px;
        .content-chart-title {
            display: flex;
            height: 20px;
            line-height: 20px;
            margin-bottom: 22px;
            span {
                margin-right: 20px;
            }
            .el-radio {
                height: 20px;
                margin-right: 20px;
                --el-radio-input-border: 0;
                .el-radio__input {
                    border: none;
                }
                :deep .el-radio__inner {
                    width: 20px;
                    height: 20px;
                    background: #f0f0f0;
                    border-color: #ffffff;
                }
                :deep .el-radio__inner::after {
                    width: 10px;
                    height: 10px;
                    background: #1068E2;
                    border-color: #f0f0f0;
                }
                :deep .el-radio__label {
                    padding-left: 5px;
                }
                :deep .el-radio__input.is-checked+.el-radio__label {
                    color: #333333;
                }
            }
        }
    }
    .content-map {
        width: 1860px;
        height: 582px;
        background: #ffffff;
        box-shadow: 0px 0px 10px 0px rgba(16,104,226,0.10); 
        margin-bottom: 30px;
    }
    .content-info {
        display: flex;
        width: 1860px;
        height: 373px;
        .info-left,.info-right {
            width: 915px;
            height: 373px;
            background: #ffffff;
            box-shadow: 0px 0px 10px 0px rgba(16,104,226,0.10);
            .info-left-btn,.info-right-btn {
                text-align: left;
                padding: 0 20px ;
                margin-top: 19px;
                margin-bottom: 20px;
                .el-button {
                    width: 69px;
                    height: 30px;
                    background: #0068e2;
                    border-radius: 5px;
                }
                .el-button:nth-child(2) {
                    background: #ffffff;
                    border: 1px solid #0068e2;
                    margin-left: 20px;
                }
            }
            .info-left-table,.info-right-table {
                padding: 0 20px;
                :deep .el-table {
                    --el-table-header-text-color: #004493;
                    --el-table-header-bg-color: #F7FAFF;
                    --el-table-text-color: #888888;
                    --el-table-border: 1px solid #f5f5f5;
                    .el-table__header {
                        --el-table-height: 40px;
                        --el-table-border: 0;
                    }
                    .cell.el-tooltip {
                        min-width: 66px;
                    }
                    .cell {
                        padding: 0;
                    }
                    .el-table__cell {
                        text-align: center;
                        // padding: 9px 0;
                        padding: 0;
                        // min-width: 45px;
                        height: 45px;
                    }
                    .el-checkbox {
                        --el-checkbox-input-height: 20px;
                        --el-checkbox-input-width: 20px;
                        --el-checkbox-input-border: 1px solid #1068e2;
                        --el-checkbox-border-radius: 5px;
                        // padding: 2px 0;
                    }
                    .el-table__row:nth-of-type(3) {
                        --el-table-border: 0;
                    }
                    .el-checkbox__inner::after {
                        height: 12px;
                        left: 7px;
                    }

                }
            }
            .paging {
                display: flex;
                justify-content: space-between;
                height: 30px;
                line-height: 30px;
                margin-top: 15px;
                padding: 0 20px ;
                div {
                    font-size: 14px;
                    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
                    .num {
                        font-weight: 800;
                        margin: 0 5px;
                        color: #333333;
                    }
                    .num-two {
                        margin-right: 18px;
                    }
                }
                :deep .el-pagination {
                    --el-pagination-button-width: 30px;
                    --el-pagination-button-height: 30px;
                    --el-pagination-button-bg-color: #ffffff;
                    // --el-pagination-border: 1px solid #eeeeee;
                    .el-pager li {
                        min-width: 30px;
                        margin: 0;
                        padding: 0;
                        border: 1px solid #eeeeee;
                        border-right: none;
                    }
                    .el-pager li:not(.is-disabled).is-active {
                        font-weight: 400;
                    }
                    .btn-prev,.btn-next {
                        margin: 0;
                        background-color: #ffffff;
                        border: 1px solid #eeeeee;
                    }
                    .btn-prev {
                        border-right: none;
                        .el-icon-arrow-left:before {
                            content: "\e6ea";
                        }
                    }
                    .btn-next {
                        border-left: none;
                        .el-icon-arrow-right:before {
                            content: "\e6e9";
                        }
                    }
                    .el-pager li:last-of-type {
                        border: 1px solid #eeeeee;
                    }
                    li:not(.is-disabled).is-active {
                        background-color: #1068E2;
                    }
                }
            }
        }
        .info-left {
            margin-right: 30px;
            .el-table {
            }
        }
        .info-right {

        }
    }
}
</style>
