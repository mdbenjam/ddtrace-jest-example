const trace = require('dd-trace')

test("Example test case", () => {
    expect(trace.scope().active()).not.toBeNull();
})