<template lang="pug">
  el-menu( :default-openeds="['3']" )
    el-menu-item( index="1" )
      router-link( to="/" )
        i.el-icon-s-home
        span Home
    el-menu-item( index="2" )
      router-link( to="/general" )
        i.el-icon-setting
        span API settings
    el-submenu( index="3" )
      template( slot="title" )
        i.el-icon-s-grid
        span API Methods
      el-submenu( v-for="(item, key, index) in structure" :key="key" :index="`3-${index}`" )
        template( slot="title" ) {{ item.label }}
        el-menu-item(
          v-for="(method, methodKey, methodIndex) in item.methods"
          :key="methodKey"
          :index="`2-${index}-${methodIndex}`"
          )
          router-link( :to="`/methods/${key}/${methodKey}`" )
            el-tag( size="small" :type="method.tag | tagType" ) {{ method.tag }}
            span.label {{ method.label }}
</template>

<script>
export default {
  name: 'Navbar',
  filters: {
    tagType(tagName) {
      return {
        read: '',
        create: 'success',
        update: 'warning',
        delete: 'danger'
      }[tagName]
    }
  },
  data() {
    return {
      structure: {
        posts: {
          label: 'Posts',
          methods: {
            create: {
              label: 'Create post',
              tag: 'create'
            },
            list: {
              label: 'List posts',
              tag: 'read'
            },
            listSingle: {
              label: 'Retrieve post',
              tag: 'read'
            },
            update: {
              label: 'Edit posts',
              tag: 'update'
            },
            delete: {
              label: 'Delete posts',
              tag: 'delete'
            }
          }
        },
        postRevisions: {
          label: 'Post revisions',
          methods: {
            list: {
              label: 'List post revisions',
              tag: 'read'
            },
            listSingle: {
              label: 'Retrieve single post revision',
              tag: 'read'
            },
            delete: {
              label: 'Delete post revision',
              tag: 'delete'
            }
          }
        },
        categories: {
          label: 'Categories',
          methods: {
            create: {
              label: 'Create category',
              tag: 'create'
            },
            list: {
              label: 'List categories',
              tag: 'read'
            },
            listSingle: {
              label: 'Retrieve category',
              tag: 'read'
            },
            update: {
              label: 'Edit category',
              tag: 'update'
            },
            delete: {
              label: 'Delete category',
              tag: 'delete'
            }
          }
        },
        tags: {
          label: 'Tags',
          methods: {
            create: {
              label: 'Create tag',
              tag: 'create'
            },
            list: {
              label: 'List tags',
              tag: 'read'
            },
            listSingle: {
              label: 'Retrieve tag',
              tag: 'read'
            },
            update: {
              label: 'Edit tag',
              tag: 'update'
            },
            delete: {
              label: 'Delete category',
              tag: 'delete'
            }
          }
        },
        pages: {
          label: 'Pages',
          methods: {
            create: {
              label: 'Create page',
              tag: 'create'
            },
            list: {
              label: 'List pages',
              tag: 'read'
            },
            listSingle: {
              label: 'Retrieve page',
              tag: 'read'
            },
            update: {
              label: 'Edit page',
              tag: 'update'
            },
            delete: {
              label: 'Delete page',
              tag: 'delete'
            }
          }
        },
        comments: {
          label: 'Comments',
          methods: {
            create: {
              label: 'Create comment',
              tag: 'create'
            },
            list: {
              label: 'List comments',
              tag: 'read'
            },
            listSingle: {
              label: 'Retrieve comment',
              tag: 'read'
            },
            update: {
              label: 'Edit comment',
              tag: 'update'
            },
            delete: {
              label: 'Delete comment',
              tag: 'delete'
            }
          }
        },
        taxonomies: {
          label: 'Taxonomies',
          methods: {
            list: {
              label: 'List taxonomies',
              tag: 'read'
            },
            listSingle: {
              label: 'Retrieve taxonomy',
              tag: 'read'
            }
          }
        },
        media: {
          label: 'Media',
          methods: {
            create: {
              label: 'Create media item',
              tag: 'create'
            },
            list: {
              label: 'List media items',
              tag: 'read'
            },
            listSingle: {
              label: 'Retrieve media item',
              tag: 'read'
            },
            update: {
              label: 'Edit media item',
              tag: 'update'
            },
            delete: {
              label: 'Delete media item',
              tag: 'delete'
            }
          }
        },
        users: {
          label: 'Users',
          methods: {
            create: {
              label: 'Create user',
              tag: 'create'
            },
            list: {
              label: 'List users',
              tag: 'read'
            },
            listSingle: {
              label: 'Retrieve user',
              tag: 'read'
            },
            update: {
              label: 'Edit user',
              tag: 'update'
            },
            delete: {
              label: 'Delete user',
              tag: 'delete'
            }
          }
        },
        postTypes: {
          label: 'Post types',
          methods: {
            list: {
              label: 'List post types',
              tag: 'read'
            },
            listSingle: {
              label: 'Retrieve post type',
              tag: 'read'
            }
          }
        },
        postStatuses: {
          label: 'Post statuses',
          methods: {
            list: {
              label: 'List statuses',
              tag: 'read'
            },
            listSingle: {
              label: 'Retrieve status',
              tag: 'read'
            }
          }
        },
        settings: {
          label: 'Settings',
          methods: {
            list: {
              label: 'List settings',
              tag: 'read'
            },
            listSingle: {
              label: 'Update setting',
              tag: 'update'
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .label {
    margin-left: 5px;
  }
  .el-menu {
    border: 0;
  }
</style>
