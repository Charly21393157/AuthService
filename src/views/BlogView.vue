<template>
  <div>
    <h1>Blog View</h1>
    <input type="text" v-model="searchQuery" placeholder="Buscar por nombre">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Group</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.name">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.user_group }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import UserService from '@/services/AuthService'
import type IUser from '@/interfaces/IUser'

const users = ref<IUser[]>([])
const searchQuery = ref('')

const filteredUsers = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return users.value.filter(user => user.name.toLowerCase().includes(query))
})

onMounted(async () => {
  try {
    users.value = await UserService.getUsers()
  } catch (error) {
    console.error('Failed to fetch users:', error)
  }
})
</script>
