<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="col-2">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          网易云音乐
        </q-toolbar-title>
        <q-input rounded outlined :dense="true" v-model="text" bordered />

        <q-space></q-space>
        <q-btn flat round dense icon="shirt" class="q-mr-xs" />
      </q-toolbar>
    </q-header>

    <q-drawer class="myDrawer" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list padding>
        <q-item clickable v-ripple to="/discovery">
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>

          <q-item-section>
            发现音乐
          </q-item-section>
        </q-item>

        <q-item active clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>

          <q-item-section>
            推荐歌单
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="send" />
          </q-item-section>

          <q-item-section>
            播客
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="drafts" />
          </q-item-section>
          <q-item-section>
            Drafts
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- <q-tabs align="left">
        <q-route-tab to="/page1" label="个性推荐" />
        <q-route-tab to="/page2" label="歌单" />
        <q-route-tab to="/page3" label="排行榜" />
      </q-tabs> -->
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const leftDrawerOpen = ref(true)
    const text = ref('搜索')
    return {
      leftDrawerOpen,
      text,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
<style lang="scss">
.myDrawer {
  width: 8.333vw;
}

#headerInput {
  line-height: 70%;
}
</style>