<template>
  <a-layout-sider
    v-model="collapsed"
    collapsible
    theme="light"
    class="sidenav"
  >
    <div class="logo" />
    <a-menu :default-selected-keys="['2']" mode="inline">
      <a-menu-item key="1">
        <a-icon type="desktop" />
        <span>Home</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="snippets" />
        <span>Student Assesment</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"
          ><a-icon type="user" /><span>User | Parent </span></span
        >
        <a-menu-item key="3"> Tomothy Kimani </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="team" /><span>Students</span></span>
        <a-menu-item key="6"> {{ studentName }} </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: "SideNav",
  props: ["studentName"],
  data() {
    return { collapsed: true,};
  },
};
</script>

<style >
@media screen and (max-width: 770px) {
  .sidenav{
    display: none;
  }
  
}
</style>

