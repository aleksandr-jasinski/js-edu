/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      if (knowsProgramming) {
        var hours = 800;
      } else {
        var hours = 800 + 500;
      }

      let priority = config[focus];

      let weeks = Math.ceil(hours / priority);
      return weeks;
  };  