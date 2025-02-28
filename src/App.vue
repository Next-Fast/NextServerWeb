<script setup lang="ts">
import { RouterView } from 'vue-router';
import { UseServerInfoStore, type ServerInfo } from './stores/ServerInfo';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

const info : ServerInfo = UseServerInfoStore();
</script>

<template>
  <video autoplay muted loop id="myVideo" class="bg absolute bg-scroll h-full w-full object-cover">
    <source src="./assets/Background.mp4" type="video/mp4">
  </video>

  <div class="content relative z-10 backdrop-blur-[1px]">
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div class="navbar bg-base-100 shadow-sm w-8/12">
        <a class="btn btn-ghost text-xl">Server Web</a>
      </div>
      
      <RouterView />
    </div>
  </div>

  <VueQueryDevtools/>
</template>