// What does our MBTA class need to do?
// It needs to know:
// - each line's stops (red, orange, green)
// - an origin (starting line and stop)
// - a destination (ending line and stop)
// It also needs to:
// - calculate the distance between two stops on the same line
// - calculate the distance between any stop
//   and its matching park st stop
// - calculate the distance between any two stops


describe("MBTA", function() {

  var mbta = new MBTA;

  describe("calculates the distance between", function() {

    var origin, destination;

    it("two stops on the same line", function() {
      mbta.origin = {
        line: 'orange',
        stop: 'north station'
      }

      mbta.destination = {
        line: 'orange',
        stop: 'chinatown'
      }

      expect(mbta.tripDistance()).toEqual(5);

    });

    it("any stop and its matching park st stop", function() {

      mbta.origin = {
        line: 'red',
        stop: 'south station'
      }

      mbta.destination = {
        line: 'red',
        stop: 'park st'
      }

      expect(mbta.tripDistance()).toEqual(1);

    });

    it("any two stops", function() {

      mbta.origin = {
        line: 'red',
        stop: 'harvard'
      }

      mbta.destination = {
        line: 'green',
        stop: 'haymarket'
      }

      expect(mbta.tripDistance()).toEqual(5);

    });

  });

});