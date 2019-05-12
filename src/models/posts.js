export default {
  // id: {
  //   required: true,
  //   onlyExisting: true,
  //   type: 'number',
  //   label: 'ID',
  //   hint: 'Unique identifier for the object.'
  // },
  title: {
    required: true,
    type: 'string',
    label: 'Title',
    typeGet: Object
  },
  content: {
    required: true,
    type: 'stringMultiline',
    label: 'Content',
    hint: 'Post content'
  },
  excerpt: {
    type: 'stringMultiline',
    label: 'Excerpt',
    hint: 'Post excerpt'
  },
  format: {
    type: 'select',
    options: [
      'standard', 'aside', 'chat', 'gallery', 'link', 'image', 'quote', 'status', 'video', 'audio'
    ],
    label: 'Post format',
  },
  status: {
    type: 'select',
    options: [
      'publish', 'future', 'draft', 'pending', 'private'
    ],
    label: 'Status',
    hint: 'A named status for the object.'
  },
  slug: {
    type: 'string',
    label: 'Slug',
    hint: 'An alphanumeric identifier for the object unique to its type.'
  },
  categories: {
    type: 'array',
    label: 'Categories',
    hint: 'The terms assigned to the object in the category taxonomy.'
  },
  tags: {
    type: 'array',
    label: 'Tags',
    hint: 'The terms assigned to the object in the post_tag taxonomy'
  },
  featured_media: {
    type: 'number',
    label: 'Featured media',
    hint: 'The ID of the featured media for the object.'    
  },
  meta: {
    type: 'object',
    title: 'Meta fields',
    hint: 'Meta fields'
  },
  password: {
    type: 'password',
    label: 'Password',
    hint: 'A password to protect access to the content and excerpt.'
  },
  sticky: {
    type: 'switch',
    label: 'Is sticky',
    hint: 'Whether or not the object should be treated as sticky.'
  },
  author: {
    type: 'number',
    label: 'Author',
    hint: 'The ID for the author of the object.'
  },
  template: {
    type: 'string',
    label: 'Template file',
    hint: 'The theme file to use to display the object'
  },
  comment_status: {
    type: 'switch',
    options: {
      active: 'open',
      inactive: 'closed'
    },
    label: 'Open comments',
    hint: 'Whether or not comments are open on the object.'
  },
  ping_status: {
    type: 'switch',
    options: {
      active: 'open',
      inactive: 'closed'
    },
    label: 'Ping status',
    hint: 'Whether or not comments are open on the object.'
  },
  date: {
    type: 'datetime',
    label: 'Publish date',
    hint: 'The date the object was published, in the site\'s timezone.'
  },
  date_gmt: {
    type: 'datetime',
    label: 'Publish date GMT',
    hint: 'The date the object was published, as GMT.'
  }
}
