<template>
  <el-table :data="tableData">
    <el-table-column prop="className" label="類別名稱" />
    <el-table-column prop="remark" label="備註" />
    <el-table-column prop="language" label="語系" />
    <el-table-column prop="certificate" label="此類別所需證照" />
    <el-table-column>
      <template v-slot="scope">
        <el-button type="danger" plain @click="removeButton(scope.$index)"
          >x</el-button
        >
        <el-button type="info" plain @click="editButton(scope.row)"
          >edit</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-row class="row-bg" justify="end">
    <el-button name="addButton" type="primary" @click="dialogFormVisible = true"
      >新增</el-button
    >
  </el-row>

  <br />
  <div id="modal" class="modal">
    <el-dialog
      :title="dialogTitle"
      v-model="dialogFormVisible"
      :before-close="onClose"
    >
      <el-form :model="form" ref="form" rules="rules">
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
          <el-button type="primary" @click="handleConfirm">{{
            confirm
          }}</el-button>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
// import { Edit } from "@element-plus/icons-vue";
import { ref } from "vue";
const dialogFormVisible = ref(false);
export default {
  data() {
    return {
      dialogTitle: "新增",
      confirm: "確認",
      editIndex: -1, //表示不是編輯狀態
      tableData: [],
      dialogFormVisible: false,
      form: {
        className: "",
        remark: "",
        language: "",
        certificate: [],
      },
      rules: {
        className: [{ required: true, message: "請輸入類別", trigger: "blur" }],
        remark: [{ required: true, message: "請輸入備註", trigger: "blur" }],
        language: [{ required: true, message: "請選擇語系", trigger: "blur" }],
      },
    };
  },
  methods: {
    removeButton(index) {
      // alert(index);
      this.tableData.splice(index, 1);
    },
    editButton(row) {
      this.dialogTitle = "編輯";
      this.confirm = "修改";
      this.dialogFormVisible = true;
      this.form = { ...row };
      this.editIndex = this.tableData.indexOf(row);
    },
    handleConfirm() {
      if (
        this.form.className.trim().length == 0 ||
        this.form.remark.trim().length == 0 ||
        this.form.language.trim().length == 0
      ) {
        alert("必填表格不得為空");
        return;
      }

      if (this.editIndex !== -1) {
        this.tableData.splice(this.editIndex, 1, { ...this.form }); //更新數據
        this.editIndex = -1;
      } else {
        this.tableData.push({ ...this.form }); //新增數據
      }

      this.onClose();
      // this.dialogFormVisible = false;
      // this.form.className = "";
      // this.form.remark = "";
      // this.form.language = "";
      // this.form.certificate = [];
      // dialogFormVisible;
    },
    onClose() {
      this.dialogFormVisible = false;
      this.form.className = "";
      this.form.remark = "";
      this.form.language = "";
      this.form.certificate = [];
      dialogFormVisible;
    },
  },
};
</script>
<style></style>
