<template>
  <div class="main">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="堆场计划" name="first"><YarnPlan></YarnPlan></el-tab-pane>
      <el-tab-pane label="火车监控" name="second"><TrainMonitoring></TrainMonitoring></el-tab-pane>
      <el-tab-pane label="堆场管理" name="third"><YarnManager></YarnManager></el-tab-pane>
      <el-tab-pane label="集装箱动态" name="fourth"><ContainerDynamics></ContainerDynamics></el-tab-pane>
      <el-tab-pane label="闸口管理" name="fifth"><GateManager></GateManager></el-tab-pane>
  </el-tabs>
  </div>
</template>

<script  lang="ts">
import type { TabsPaneContext } from 'element-plus'
import { defineComponent, ref, reactive, toRefs,onMounted, onUnmounted } from 'vue';
import YarnPlan from '../components/YarnPlan.vue';
import TrainMonitoring from '../components/TrainMonitoring.vue';
import ContainerDynamics from '../components/ContainerDynamics.vue';
import GateManager from '../components/GateManager.vue';
import YarnManager from '../components/YarnManager.vue';
export default defineComponent({
    name: "Index",
    setup() {
        const data = reactive({});
        const activeName = ref('first');
        const handleClick = (tab: TabsPaneContext, event: Event) => {
          console.log(tab, event)
        }
        onMounted(() => {
        });
        onUnmounted(() => {
        });
        function toYarnplan() {

        }
        return {
            ...toRefs(data),
            activeName,
            handleClick,
            toYarnplan
        };
    },
    components: { YarnPlan, TrainMonitoring, ContainerDynamics, GateManager, YarnManager }
});
</script>

<style lang="scss" scoped>
.main {
  // width: 100%;
  width: 100%;
  min-width: 1920px;
  // height: calc(100vh - 0px); //vh，是指css中相对长度单位，表示相对视口高度，1vh = 1% * 视口高度，vh就是当前屏幕可见高度的1%
  background: #F7FAFF;
  overflow: hidden;
  padding: 30px;
}
:deep .el-tabs__item.is-active {
  // background: #0068E2;
  // color: #ffffff;
}
</style>
