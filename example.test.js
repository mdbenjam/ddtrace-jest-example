const trace = require('dd-trace')

test.concurrent("Example test case", () => {
    expect(trace.scope().active()).not.toBeNull();
})