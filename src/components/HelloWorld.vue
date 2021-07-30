<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">
      点击打开Dialog
    </el-button>
    <anchor-dialog
      :visible.sync="dialogVisible"
      @confirm="dialogVisible = false"
    ></anchor-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    }
  };
</script>