<template>
  <el-row class="row-bg" justify="end">
    <el-button
      name="addButton"
      :icon="CirclePlus"
      type="primary"
      @click="dialogFormVisible = true"
      >新增</el-button
    >
  </el-row>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="id" width="300" />
    <el-table-column prop="name" label="name" width="300" />
    <el-table-column prop="data" label="data" width="400">
      <template v-slot:default="{ row }">
        <span v-if="row.data">
          <div v-for="(value, objKey) in row.data" :key="objKey">
            <span>{{ objKey }}: {{ value }}</span
            ><br />
          </div>
        </span>
      </template>
    </el-table-column>

    <el-table-column width="200">
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
            <el-form-item type="text" label="id" required>
              <el-input v-model="form.id" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="name" required>
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="data" required>
              <el-input v-model="form.data" />
            </el-form-item>
          </el-col>
        </el-row>

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
<script setup>
import { CirclePlus, Delete, Edit } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { ref, onMounted } from "vue";
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get("https://api.restful-api.dev/objects");
    tableData.value = response.data;
  } catch (error) {
    console.error("獲取數據時出現錯誤:", error);
  }
};
onMounted(async () => {
  // do something ....
  const response = await fetchData();
  console.log(response);

  const postData = {
    name: "Apple MacBook Pro 16",
    data: {
      year: 2019,
      price: 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
    },
  };

  axios
    .post("https://api.restful-api.dev/objects", postData)
    .then((response) => {
      console.log("Post request successful:", response.data);
    })
    .catch((error) => {
      console.error("Post request failed:", error);
    });
  // axios
  //   .post("https://api.restful-api.dev/objects")
  //   .then((response) => {
  //     console.log("Post request successful:", response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Post request failed:", error);
  //   });

  axios
    .get("https://api.restful-api.dev/objects?id=3&id=5&id=10")
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
});

const dialogFormVisible = ref(false);
const tableData = ref([]);

const dialogTitle = ref("新增");
const confirm = ref("確認");
let editIndex = ref(-1);

const defaultFormData = {
  id: "",
  name: "",
  data: [],
};
let form = ref({ ...defaultFormData });

const handleRemove = (index) => {
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
  editIndex.value = tableData.value.indexOf(row);
};
const handleConfirm = () => {
  if (
    form.value.id.trim().length == 0 ||
    form.value.name.trim().length == 0 ||
    form.value.data.trim().length == 0
  ) {
    alert("必填表格不得為空");
    return;
  }

  if (editIndex.value != -1) {
    tableData.value.splice(editIndex, 1, { ...form.value }); //更新數據
    editIndex.value = -1;
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
