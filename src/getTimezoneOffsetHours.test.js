const double = require("./getTimezoneOffsetHours");
test('getTimezoneOffsetHours return -9', () => {
  expect(getTimezoneOffsetHours()).toBe(-9);
});