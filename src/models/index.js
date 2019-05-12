import Posts from './posts'

export default (model) => {
  switch (model) {
    case 'posts':
      return Posts
  }
}
