<template>
  <div class="demo-content">
    <!-- Drawer -->
    <ui-drawer viewport-height>
      <ui-drawer-header>
        <ui-drawer-title>发现音乐</ui-drawer-title>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-nav>
          <ui-nav-item href="#" @click="goToHome">Home
          </ui-nav-item>
          <ui-nav-item href="#" @click="goToPosts">Les posts !
          </ui-nav-item>
          <ui-nav-item href="#" @click="goToAbout">A propos
          </ui-nav-item>
        </ui-nav>
      </ui-drawer-content>
    </ui-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const str = ref('test')
</script>

<style scoped></style>
