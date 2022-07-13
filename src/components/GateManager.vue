<template>
    <div class="container">
        <div class="header">
            <div class="header-title">
                <span>车辆信息</span>
            </div>
            <div class="header-info">
                <div class="card-brand common-box">
                    <span>车牌号</span>
                    <div class="card-brand-info common-info"></div>
                </div>
                <div class="entrance-time common-box">
                    <span>进门时间</span>
                    <div class="entrance-time-info common-info"></div>
                </div>
                <div class="over-weight common-box">
                    <span>过磅重量</span>
                    <div class="over-weight-info common-info"></div>
                </div>
                <div class="tray common-box">
                    <span>托盘</span>
                    <div class="tray-info common-info"></div>
                </div>
                <div class="remarks common-box">
                    <span>备注</span>
                    <div class="remarks-info common-info"></div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-title">
                <span>车载箱信息</span>
            </div>
            <div class="content-search">
                <div class="box-company common-box">
                    <span>委托号查询</span>
                    <span>箱公司</span>
                    <div class="card-brand-info common-info"></div>
                </div>
                <div class="content-size common-box">
                    <span>尺寸</span>
                    <div class="entrance-time-info common-info"></div>
                </div>
                <div class="content-type common-box">
                    <span>类型</span>
                    <div class="over-weight-info common-info"></div>
                </div>
                <div class="content-select common-box">
                    <span>作业方式</span>
                    <el-radio-group v-model="radio1" class="ml-4">
                        <el-radio label="1" size="large">收箱</el-radio>
                        <el-radio label="2" size="large">提箱</el-radio>
                    </el-radio-group>
                </div>
            </div>
            <div class="content-car">
                <div class="car-box">
                    <div class="car-left car-common">
                        <div class="left-left">
                            <div class="drop-down-info">
                                <span>委托号</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        654616521
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                            <el-dropdown-item>654616521</el-dropdown-item>
                                            <el-dropdown-item>654616521</el-dropdown-item>
                                            <el-dropdown-item>654616521</el-dropdown-item>
                                            <el-dropdown-item>654616521</el-dropdown-item>
                                            <el-dropdown-item>654616521</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>箱号</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>尺寸</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>场位</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>贸易</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>备注</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                        </div>
                        <div class="left-right">
                            <div class="drop-down-info">
                                <span>序号</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>箱ISO</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>类型</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>箱公司</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>残损</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                        </div>
                    </div>
                    <div class="car-line"></div>
                    <div class="car-right car-common">
                        <div class="left-left">
                            <div class="drop-down-info">
                                <span>委托号</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        654616521
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                            <el-dropdown-item>654616521</el-dropdown-item>
                                            <el-dropdown-item>654616521</el-dropdown-item>
                                            <el-dropdown-item>654616521</el-dropdown-item>
                                            <el-dropdown-item>654616521</el-dropdown-item>
                                            <el-dropdown-item>654616521</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>箱号</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>尺寸</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>场位</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>贸易</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>备注</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                        </div>
                        <div class="left-right">
                            <div class="drop-down-info">
                                <span>序号</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>箱ISO</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>类型</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>箱公司</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                            <div class="drop-down-info">
                                <span>残损</span>
                                <el-dropdown  trigger="click">
                                    <el-button type="primary">
                                        <el-icon class="el-icon--right"><arrow-down/></el-icon>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                        <el-dropdown-item>Action 3</el-dropdown-item>
                                        <el-dropdown-item>Action 4</el-dropdown-item>
                                        <el-dropdown-item>Action 5</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script  lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { defineComponent, ref, reactive, toRefs,onMounted, onUnmounted } from 'vue';
export default defineComponent({
  name: 'GateManager',
  setup() {
    const data = reactive({})
    const radio1 = ref('1')
    onMounted(() => {
    });
    onUnmounted(() => {
    });
    return {
        ...toRefs(data),
        radio1,
    };
  },
 });
</script>

<style lang="scss" scoped>
.container {
    .header {
        text-align: left;
        width: 1860px;
        height: 110px;
        background: #ffffff;
        box-shadow: 0px 0px 10px 0px rgba(16,104,226,0.10); 
    }
    .header-title,.content-title {
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        padding: 0 20px;
        border-bottom: 1px solid #efefef;
        color: #333333;
    }
    .header-info,.content-search {
        display: flex;
        height: 30px;
        font-size: 14px;
        margin-top: 20px;
        padding: 0 20px;
        color: #333333;
        .common-box {
            display: flex;
            height: 30px;
            line-height: 30px;
            .common-info {
                width: 134px;
                height: 30px;
                background: #ffffff;
                border: 1px solid #badaff;
                border-radius: 5px;
                margin-left: 20px;
                margin-right: 30px;
            }
            .remarks-info {
                width: 406px;
            }
        }
        .box-company,.content-select {
            span:nth-of-type(1) {
                margin-right: 20px;
            }
        }
        .content-select {
            .el-radio {
                height: 30px;
                margin-right: 30px;
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
    .content {
        width: 1860px;
        height: 880px;
        text-align: left;
        background: #ffffff;
        box-shadow: 0px 0px 10px 0px rgba(16,104,226,0.10); 
        margin-top: 30px;
        .content-car {
            width: 1730px;
            height: 641.27px;
            background: url('../assets/images/gate1.png');
            background-size: 1730px 641.27px;
            margin: 40.36px 65px 0;
            .car-box {
                width: 1367px;
                height: 466px;
                display: flex;
                margin-left: 362.88px;
                .car-common {
                    display: flex;
                    width: 681.56px;
                    height: 466px;
                    padding: 93.64px 128.5px 92.41px 131.12px;
                    .left-left,.left-right {
                        width: 186px;
                        .drop-down-info {
                            width: 186px;
                            height: 30px;
                            line-height: 30px;
                            display: flex;
                            font-size: 14px;
                            margin-bottom: 20px;
                            span {
                                width: 42px;
                                color: #ffffff;
                                margin-right: 10px;
                                text-align: right;

                            }
                            .el-button {
                                width: 134px;
                                height: 30px;
                                font-size: 14px;
                                color: #123E4E;
                                background: #97BFCE;
                                border: none;
                                align-items: left;
                            }
                        }
                    }
                    .left-left {
                        margin-right: 50px;
                    }
                }
                .car-line {
                    width: 4px;
                    height: 466px;
                    background: #82C8D3;
                }
            }
        }
    }
}
</style>
