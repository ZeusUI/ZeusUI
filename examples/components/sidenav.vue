<template>
  <nav class="side-nav" :style="navStyle">
    <ul>
      <li class="nav-item" v-for="item in data">
        <a v-if="!item.path && !item.href" @click="expandMenu">{{item.name}}</a>
        <a v-if="item.href" :href="item.href" target="_blank">{{item.name}}</a>
        <router-link
          v-if="item.path"
          active-class="active"
          :to="base + item.path"
          exact
          v-text="item.title || item.name">
        </router-link>
        <ul class="pure-menu-list sub-nav" v-if="item.children">
          <li class="nav-item" v-for="navItem in item.children">
            <router-link
              class=""
              active-class="active"
              :to="base + navItem.path"
              exact
              v-text="navItem.title || navItem.name">
            </router-link>
          </li>
        </ul>
        <template v-if="item.groups">
          <div class="nav-group" v-for="group in item.groups">
            <div class="nav-group__title" @click="expandMenu">{{group.groupName}}</div>
            <ul class="pure-menu-list">
              <li
                class="nav-item"
                v-for="navItem in group.list"
                v-if="!navItem.disabled">
                <router-link
                  active-class="active"
                  :to="base + navItem.path"
                  exact
                  v-text="navItem.title"></router-link>
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
  </nav>
</template>

<style lang="sass">
  .side-nav {
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;
    padding-right: 30px;
    .nav-dropdown {
      margin-bottom: 6px;
      width: 100%;
      span {
        display: block;
        width: 100%;
        font-size: 16px;
        color: #5e6d82;
        line-height: 40px;
        transition: .2s;
        padding-bottom: 6px;
        border-bottom: 1px solid #eaeefb;
        &:hover {
          cursor: pointer;
        }
      }
      i {
        transition: .2s;
        font-size: 12px;
        color: #d3dce6;
      }
      @when active {
        span, i {
          color: #20a0ff;
        }
        i {
          transform: rotateZ(180deg) translateY(2px);
        }
      }
      &:hover {
        span, i {
          color: #20a0ff;
        }
      }
    }

    .nav-item {
      a {
        font-size: 16px;
        color: #5e6d82;
        line-height: 40px;
        height: 40px;
        display: block;
        position: relative;
        transition: all .3s;
        padding:0 16px;
        &.active {
          color: #20a0ff;
          background-color: #ecf6fd;
          &:after {
		    		content: "";
				    position: absolute;
				    right: 0;
				    top: 0;
				    bottom: 0;
				    border-right: 3px solid #108ee9;
		    	}
        }
      }
      .nav-item {
        a {
          display: block;
          height: 40px;
          line-height: 40px;
          font-size: 13px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding-left: 34px;

          &:hover {
            color: #20a0ff;
          }
        }
      }
    }
    .nav-group__title {
      font-size: 12px;
      color: #99a9bf;
      padding-left: 8px;
      line-height: 26px;
      margin-top: 10px;
    }
  }
  .nav-dropdown-list {
    width: 120px;
    margin-top: -8px;
    li {
      font-size: 14px;
    }
  }
</style>

<script>
  export default {
    props: {
      data: Array,
      base: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        highlights: [],
        navState: [],
        isSmallScreen: false,
        dropdownVisible: false
      };
    },
    watch: {
      '$route.path'() {
        this.handlePathChange();
      }
    },
    computed: {
      navStyle() {
        return this.isSmallScreen ? { 'padding-bottom': '60px' } : {};
      },
      isComponentPage() {
        return /^component-/.test(this.$route.name);
      }
    },
    methods: {
      handleResize() {
        this.isSmallScreen = document.documentElement.clientWidth < 768;
        this.handlePathChange();
      },
      handlePathChange() {
        if (!this.isSmallScreen) {
          this.expandAllMenu();
          return;
        }
        this.$nextTick(() => {
          this.hideAllMenu();
          let activeAnchor = this.$el.querySelector('a.active');
          let ul = activeAnchor.parentNode;
          while (ul.tagName !== 'UL') {
            ul = ul.parentNode;
          }
          ul.style.height = 'auto';
        });
      },
      hideAllMenu() {
        [].forEach.call(this.$el.querySelectorAll('.pure-menu-list'), ul => {
          ul.style.height = '0';
        });
      },
      expandAllMenu() {
        [].forEach.call(this.$el.querySelectorAll('.pure-menu-list'), ul => {
          ul.style.height = 'auto';
        });
      },
      expandMenu(event) {
        if (!this.isSmallScreen) return;
        let target = event.currentTarget;
        if (!target.nextElementSibling || target.nextElementSibling.tagName !== 'UL') return;
        this.hideAllMenu();
        event.currentTarget.nextElementSibling.style.height = 'auto';
      },
      handleDropdownToggle(visible) {
        this.dropdownVisible = visible;
      }
    },
    mounted() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    }
  };
</script>
