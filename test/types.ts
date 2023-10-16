import {assert} from 'chai'

import {Types} from '$lib'

suite('types', function () {
    suite('EasyTransfer', function () {
        test('can create', function () {
            assert.doesNotThrow(() => {
                Types.EasyTransfer.from({
                    from: 'foo',
                    to: 'bar',
                    quantity: '1.0000 TOKEN',
                    memo: 'test',
                })
            })
        })
        test('helper method', function () {
            assert.doesNotThrow(() => {
                Types.EasyTransfer.transfer('foo', 'bar', '1.0000 TOKEN', 'test')
            })
        })
        test('helper method memo optional', function () {
            assert.doesNotThrow(() => {
                Types.EasyTransfer.transfer('foo', 'bar', '1.0000 TOKEN')
            })
        })
    })
})
