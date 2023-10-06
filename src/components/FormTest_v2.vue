<template>
  <div>
    <el-row class="row-bg" justify="end">
      <el-button
        name="addButton"
        type="primary"
        :icon="CirclePlus"
        @click="handleAdd"
        >新增</el-button
      >
    </el-row>
    <el-table :data="tableData">
      <el-table-column prop="className" label="類別名稱" />
      <el-table-column prop="remark" label="備註" />
      <el-table-column prop="language" label="語系" />
      <el-table-column prop="certificate" label="此類別所需證照" />

      <el-table-column>
        <template v-slot="scope">
          <el-button
            type="danger"
            :icon="Delete"
            circle
            @click="handleRemove(scope.$index)"
          />
          <el-button
            type="primary"
            :icon="Edit"
            circle
            @click="handleEdit(scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>

  <br />
  <div id="modal" class="modal">
    <el-dialog
      :title="dialogTitle"
      v-model="dialogFormVisible"
      :before-close="onClose"
    >
      <el-form :model="form">
        <el-row class="row-bg" justify="space-evenly">
          <el-col :span="6">
            <el-form-item type="text" label="類別名稱" required>
              <el-input v-model="form.className" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="備註" required>
              <el-input v-model="form.remark" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="語系" required>
              <el-select v-model="form.language">
                <el-option label="zh" value="zh" />
                <el-option label="en" value="en" />
                <el-option label="ja" value="ja" />
                <el-option label="ko" value="ko" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="此類別所需證照">
          <el-select v-model="form.certificate" placeholder="多選證照" multiple>
            <el-option label="TOEIC" value="TOEIC" />
            <el-option label="GEPT" value="GEPT" />
            <el-option label="APX" value="APX" />
          </el-select>
        </el-form-item>

        <el-row class="row-bg" justify="end">
          <el-button @click="onClose">取消</el-button>
          <el-button type="primary" @click="handleConfirm(ruleFormRef)">{{
            confirm
          }}</el-button>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>
<script setup>
import { CirclePlus, Delete, Edit } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { ref } from "vue";
const dialogFormVisible = ref(false);
const tableData = ref([]);
// const ruleFormRef = ref();
const dialogTitle = ref("新增");
const confirm = ref("確認");
let editIndex = -1;

// const rules = ref({
//   className: [{ required: true, message: "請輸入類別名稱", trigger: "blur" }],
//   remark: [{ required: true, message: "請輸入備註", trigger: "blur" }],
//   language: [{ required: true, message: "請選擇語系", trigger: "change" }],
// });

const defaultFormData = {
  className: "",
  remark: "",
  language: "",
  certificate: [],
};
let form = ref({ ...defaultFormData });

const handleAdd = () => {
  dialogFormVisible.value = true;
  dialogTitle.value = "新增";
  confirm.value = "確認";
};

const handleRemove = (index) => {
  // tableData.value.splice(index, 1);
  ElMessageBox.confirm("確定要刪除此筆資料?", "警告", {
    confirmButtonText: "確定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      ElMessage({
        type: "success",
        message: "刪除成功",
      });
      tableData.value.splice(index, 1);
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "取消刪除",
      });
    });
};
const handleEdit = (row) => {
  dialogTitle.value = "編輯";
  confirm.value = "修改";
  dialogFormVisible.value = true;
  form.value = { ...row };
  editIndex = tableData.value.indexOf(row);
};
const handleConfirm = () => {
  if (
    form.value.className.trim().length == 0 ||
    form.value.remark.trim().length == 0 ||
    form.value.language.trim().length == 0
  ) {
    ElMessage({
      type: "error",
      message: "必填表格不得為空",
    });
    return;
  }

  if (editIndex != -1) {
    tableData.value.splice(editIndex, 1, { ...form.value }); //更新數據
    editIndex = -1;
  } else {
    tableData.value.push({ ...form.value }); //新增數據
  }

  onClose();
};
const onClose = () => {
  dialogFormVisible.value = false;
  form.value = { ...defaultFormData };
};
</script>
<style></style>
