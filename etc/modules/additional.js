function getModuleName (path) {
  console.log(path)
  return path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
}

module.exports = {
  getModuleName,
}