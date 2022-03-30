import test from 'japa'

test.group('example', () => {
    test('assert sum', (assert) => {
        assert.equal(2 + 2, 4)
    })
})