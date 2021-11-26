const createUtilityPlugin = require("../lib/createUtilityPlugin");

module.exports =  function (forMedia) {
  return createUtilityPlugin(
    "gap",
    {
      'gap': ["column-gap", "row-gap"],
      'gap-x' : "column-gap",
      'gap-y': "row-gap"
    },
    forMedia
  )
}
