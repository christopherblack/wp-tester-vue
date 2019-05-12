export default {
  id: {
    required: true,
    onlyExisting: true,
    type: 'number',
    hint: 'Unique identifier for the object.'
  },
  title: {
    required: true,
    type: 'string',
    typeGet: Object
  },
  content: {
    required: true,
    type: 'stringMultiline'
  },
  excerpt: {
    type: 'stringMultiline',
  },
  format: {
    type: 'select',
    options: [
      'standard', 'aside', 'chat', 'gallery', 'link', 'image', 'quote', 'status', 'video', 'audio'
    ]
  },
  status: {
    type: 'select',
    options: [
      'publish', 'future', 'draft', 'pending', 'private'
    ],
    hint: 'A named status for the object.'
  },
  slug: {
    type: 'string',
    hint: 'An alphanumeric identifier for the object unique to its type.'
  },
  categories: {
    type: 'array'
  },
  tags: {
    type: 'array'
  },
  featured_media: {
    type: 'number',
    hint: 'The ID of the featured media for the object.'
  },
  meta: {
    type: 'object'
  },
  password: {
    type: 'password',
    hint: 'A password to protect access to the content and excerpt.'
  },
  sticky: {
    type: 'boolean'
  },
  author: {
    type: Number
  },
  template: {
    type: 'string',
  },
  comment_status: {
    type: 'switch',
    options: {
      active: 'open',
      inactive: 'closed'
    },
    hint: 'Whether or not comments are open on the object.'
  },
  ping_status: {
    type: 'switch',
    options: {
      active: 'open',
      inactive: 'closed'
    },
    hint: 'Whether or not comments are open on the object.'
  },
  date: {
    type: 'datetime',
    hint: 'Unique identifier for the object.'
  },
  date_gmt: {
    type: 'datetimeGmt',
    hint: 'The date the object was published, as GMT.'
  }
}
