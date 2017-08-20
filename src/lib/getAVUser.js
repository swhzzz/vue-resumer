import AV from './leancloud'

export default function (user) {
  // console.log(AV.User.current());
  var {id, attributes: {username}} = user || AV.User.current() || {attributes: {}};
  return {
    id: id || '',
    username: username || ''
  }
}
