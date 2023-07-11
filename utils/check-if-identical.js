

const __ = require('lodash')

export default function areIdentical(obj1, obj2) {

    return __.isEqual(obj1, obj2)

}