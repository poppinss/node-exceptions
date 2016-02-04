'use strict'

/**
 * node-exception
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const NE = require('../index')
const chai = require('chai')
const util = require('util')
const expect = chai.expect

describe('Custom Error', function() {

	it('should be able to throw exceptions using NE', function () {

		function doSomethingBad() {
			throw new NE.LogicalException('Something bad happended', 503)
		}

		try {
			doSomethingBad()
			expect(true).to.equal(false)
		} catch (e) {
			expect(e.name).to.equal('LogicalException')
			expect(e.code).to.equal(503)
      expect(e.message).to.equal('Something bad happended')
			expect(e instanceof NE.LogicalException).to.equal(true)
			expect(e instanceof Error).to.equal(true)
			expect(util.isError(e)).to.equal(true)
			expect(e.stack).not.to.equal(undefined)
			expect(e.toString).to.be.a('function')
			expect(e.toString()).to.equal('LogicalException: Something bad happended')
			expect(e.stack.split('\n')[0]).to.equal('LogicalException: Something bad happended')
			expect(e.stack.split('\n')[1].indexOf('doSomethingBad')).to.be.at.least(0)
		}

	})

	it('should have a DomainException class', function () {
		try {
			throw new NE.DomainException('Not a valid image type')
			expect(true).to.equal(false)
		} catch (e) {
			expect(e.name).to.equal('DomainException')
		}
	})

	it('should have an InvalidArgumentException class', function () {
		try {
			throw new NE.InvalidArgumentException('Not a valid image type')
			expect(true).to.equal(false)
		} catch (e) {
			expect(e.name).to.equal('InvalidArgumentException')
		}
	})

	it('should have a RangeException class', function () {
		try {
			throw new NE.RangeException('Invalid range')
			expect(true).to.equal(false)
		} catch (e) {
			expect(e.name).to.equal('RangeException')
		}
	})

	it('should have a RuntimeException class', function () {
		try {
			throw new NE.RuntimeException('Something bad happended')
			expect(true).to.equal(false)
		} catch (e) {
			expect(e.name).to.equal('RuntimeException')
		}
	})

	it('should have a HttpException class', function () {
		try {
			throw new NE.HttpException('404 is returned')
			expect(true).to.equal(false)
		} catch (e) {
			expect(e.name).to.equal('HttpException')
		}
	})

	it('should be able to extend any exception and still have proper properties', function () {
		class CustomException extends NE.LogicalException {}
		try {
			throw new CustomException('Custom error')
			expect(true).to.equal(false)
		} catch (e) {
			expect(e.name).to.equal('CustomException')
			expect(e.code).to.equal(500)
      expect(e.message).to.equal('Custom error')
			expect(e instanceof NE.LogicalException).to.equal(true)
			expect(e instanceof Error).to.equal(true)
			expect(util.isError(e)).to.equal(true)
			expect(e.stack).not.to.equal(undefined)
			expect(e.toString).to.be.a('function')
			expect(e.toString()).to.equal('CustomException: Custom error')
			expect(e.stack.split('\n')[0]).to.equal('CustomException: Custom error')
		}
	})

})
