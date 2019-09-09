import Service from './service'

export default class UserService extends Service {
  static endpoint (userId) {
    if (userId === undefined) {
      return 'users'
    }
    return 'users/' + userId
  }
  static profileEndpoint (courseId) {
    if (courseId === undefined) {
      return 'profile/courses'
    }
    return 'profile/courses/' + courseId + '/exercises'
  }

  constructor () {
    super()
    this.usernameCache = {}
  }

  /*static profileEndpointSolutions () {
    return 'profile/solutions'
  }*/

  getUser (userId, callback) {
    return this.getRequest(UserService.endpoint(userId), callback)
  }

  getAllUser (callback) {
    return this.getRequest(UserService.endpoint(), callback)
  }

  deleteUser (userId, callback) {
    return this.deleteRequest(UserService.endpoint(userId), callback)
  }

  /*updateUserRole (userId, object, callback) {
    return this.putRequest(UserService.endpoint(userId) + '/role', object, callback)
  }*/

  login (object, callback) {
    return this.postRequest('login', object, callback)
  }

  register (object, callback) {
    return this.postRequest(UserService.endpoint(), object, callback)
  }

  /*fetchUserCourses (callback) {
    this.getRequest(UserService.profileEndpoint(), callback)
  }*/


  getFavourites (courseId, callback) {
    this.getRequest('profile/favourite/' + courseId, callback)
  }
  setFavourite (object, callback) {
    this.postRequest('favourite/' + object.exerciseId, object, callback)
  }
  changePassword (object, callback) {
    this.putRequest(UserService.endpoint(object.userId) + '/password', object, callback)
  }

  async addNameToObject (objects, callback) {
    let promises = []
    let self = this

    let findOwnerIds = function (obj, funCallback) {
      let subFunction = function (subObject) {
        if (subObject) {
          if (subObject.hasOwnProperty('ownerId')) {
            funCallback(subObject)
          }
          for (let prop in subObject) {
            if (subObject.hasOwnProperty(prop)) {
              let field = subObject[prop]
              if ((typeof field === 'object' && field !== null) || Array.isArray(field)) {
                findOwnerIds(field, funCallback)
              }
            }
          }
        }
      }
      if (Array.isArray(obj)) {
        obj.forEach(subFunction)
      } else {
        subFunction(obj)
      }
    }

    findOwnerIds(objects, function (object) {
      if (object.ownerId === 'anonymous') {
        self.usernameCache[object.ownerId] = 'anonymous'
      } else if (!(object.ownerId in self.usernameCache)) {
        self.usernameCache[object.ownerId] = 'dummy'
        promises.push(
          self.getUser(object.ownerId, function (data) {
            self.usernameCache[object.ownerId] = data.username
          })
        )
      }
    })

    Service.allPromises(promises, function () {
      findOwnerIds(objects, function (object) {
        object.owner = self.usernameCache[object.ownerId]
      })
      callback(objects)
    })
  }

  /*fetchUserExercises (courseId, callback) {
    this.getRequest(UserService.profileEndpoint(courseId), function (exercises) {
      exercises.forEach(x => { x.id = x._id })
      callback(exercises)
    })
  }

  fetchUserSolutions (callback) {
    this.getRequest(UserService.profileEndpointSolutions(), function (solutions) {
      solutions.forEach(x => { x.id = x._id })
      callback(solutions)
    })
  }*/
}
