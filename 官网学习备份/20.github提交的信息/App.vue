<script setup>
import { ref, watchEffect } from 'vue'
import axios from 'axios'
//api
const API_URL = `https://api.github.com/repos/chizhang977/docs/commits?per_page=3&sha=`
//令牌

//分支
const branches = ['master', 'gh-pages']
const currentBranch = ref(branches[0])
//返回值
const commits = ref(null)
const loading = ref(true)

watchEffect(async () => {
  // 该 effect 会立即运行，
  // 并且在 currentBranch.value 改变时重新运行
  const url = `${API_URL}${currentBranch.value}`

  // commits.value = await (await fetch(url)).json()
  await axios
    .get(url, {
//      headers: {
//        Authorization: `token ${accessToken}`
//      }
    })
    .then((response) => {
      console.log(response.data)
      commits.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching commits:', error)
      commits.value = []
    })
    .finally(() => {
      loading.value = false
    })
})

// 截断字符串
function truncate(v) {
  const newline = v.indexOf('\n')
  return newline > 0 ? v.slice(0, newline) : v
}

// 格式化日期
function formatDate(v) {
  return v.replace(/T|Z/g, ' ')
}
</script>

<template>
  <div class="commit-history">
    <div class="branches">
      <h1>最近的提交</h1>
      <h3>选择分支</h3>
      <template v-for="branch in branches" :key="branch">
        <input type="radio" :id="branch" :value="branch" name="branch" v-model="currentBranch" />
        <label :for="branch">{{ branch }}</label>
      </template>
    </div>
    <div class="commit-list">
      <h3>作者和仓库</h3>
      <p>chizhang977/docs@{{ currentBranch }}</p>
      <ul v-if="commits && commits.length > 0 && loading === false" class="commit-ul">
        <li v-for="{ html_url, sha, commit } in commits" :key="sha" class="commit-item">
          <a :href="html_url" target="_blank" class="commit-link">{{ sha.slice(0, 7) }}</a>
          <span class="commit-message">{{ truncate(commit.message) }}</span>
          <div class="commit-details">
            <span class="commit-author">
              by <a :href="commit.author.html_url" target="_blank">{{ commit.author.name }}</a>
            </span>
            <span class="commit-date">on {{ formatDate(commit.author.date) }}</span>
          </div>
        </li>
      </ul>
      <p v-else-if="Array.isArray(commits) && commits.length === 0" class="no-commits">
        当前分支无提交记录。
      </p>
      <p v-else class="error-message">加载提交信息时出错，请稍后重试。</p>
    </div>
  </div>
</template>

<style>
.commit-history {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.branches {
  margin-bottom: 20px;
  box-shadow: 0 0 10px;
  border-radius: 5px;
  background-color: #f8f9fa;
}

.commit-list {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px;
}

.commit-ul {
  list-style-type: none;
  padding: 0;
}

.commit-item {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.commit-link {
  font-weight: bold;
  color: #0366d6;
  text-decoration: none;
}

.commit-message {
  margin-left: 10px;
}

.commit-details {
  margin-top: 5px;
  font-size: 0.9em;
  color: #6c757d;
}

.commit-author a {
  color: #0366d6;
  text-decoration: none;
}

.no-commits,
.error-message {
  color: #dc3545;
  margin-top: 10px;
}

.error-message {
  font-weight: bold;
}
</style>
