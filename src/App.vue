<script setup>
import HeaderMenu from "@/components/HeaderMenu.vue";
import HeaderMenuItem from "@/components/HeaderMenuItem.vue";
import HeaderMenuLogo from "@/components/HeaderMenuLogo.vue";
import HeaderSearchInput from "@/components/HeaderSearchInput.vue";
import HeaderSearchPanel from "@/components/HeaderSearchPanel.vue";
import HeaderSearchPanelButton from "@/components/HeaderSearchPanelButton.vue";
import CategoryMenu from "@/components/CategoryMenu.vue";
</script>

<template>
  <HeaderMenu>
    <HeaderMenuLogo></HeaderMenuLogo>

    <HeaderMenuItem caption="Home" link="/"/>
    <HeaderMenuItem caption="Shop" link="/"/>
    <HeaderMenuItem caption="About" link="/about"/>

    <HeaderSearchPanel>
      <HeaderSearchInput></HeaderSearchInput>
      <HeaderSearchPanelButton></HeaderSearchPanelButton>
    </HeaderSearchPanel>

    <div class="right">
      <HeaderMenuItem caption="Cart" link="#"/>
      <div class="menu-divider"> </div>
      <HeaderMenuItem caption="Login" link="#"/>
    </div>
  </HeaderMenu>

  <div class="shop-content">
    <CategoryMenu></CategoryMenu>

    <!--  <HomeShopContent></HomeShopContent>-->
    <router-view></router-view>
  </div>

</template>

<style lang="scss" scoped>
.right {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-left: auto;
  align-items: center;
}

.menu-divider {
  width: 2px;
  height: 100%;
  background-color: var(--color-border);
}

.shop-content {
  display: flex;
}

</style>
