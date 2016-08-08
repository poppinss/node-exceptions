'use strict'

/**
 * node-exceptions
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

module.exports = function LogicalException (message, status, code) {
  Error.captureStackTrace(this, this.constructor)
  this.name = this.constructor.name
  this.message = code ? `${code}: ${message}` : message
  this.status = status || 500
  this.code = code
}

require('util').inherits(module.exports, Error)
