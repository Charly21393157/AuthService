<template>
    <div>
      <h1>User View</h1>
      <div v-if="user">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>
      <form @submit.prevent="registerUser">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import UserService from '@/services/AuthService'
  import type IUser from '@/interfaces/IUser'
  
  let name = ref('')
  let email = ref('')
  let password = ref('')
  let user = ref<IUser | null>(null)
  
  async function getUserByEmail() {
    try {
      user.value = await UserService.getUserByEmail(email.value)
    } catch (error) {
      console.error('No se pudo recuperar la usuario:', error)
    }
  }
  
  async function registerUser() {
    try {
      await UserService.registerUser(name.value, email.value, password.value)
      name.value = ''
      email.value = ''
      password.value = ''
    } catch (error) {
      console.error('No se pudieron recuperar los usuarios:', error)
    }
  }
  </script>
  