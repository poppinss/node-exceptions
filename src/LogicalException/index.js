'use strict'

/**
 * node-exceptions
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

/**
 * LogicalException is a netural class extend
 * the Error object.
 *
 * @class LogicalException
 */
class LogicalException extends Error {
  constructor (message, status, code, errShLink) {
    super(message)

    /**
     * When an err.sh link is provided, we append a new line to the error message
     */
    message = errShLink ? `${message}\n> More details: https://err.sh/${errShLink}/${code}` : message

    // extending Error is weird and does not propagate `message`
    Object.defineProperty(this, 'message', {
      configurable: true,
      enumerable: false,
      value: code ? `${code}: ${message}` : message,
      writable: true
    })

    Object.defineProperty(this, 'name', {
      configurable: true,
      enumerable: false,
      value: this.constructor.name,
      writable: true
    })

    Object.defineProperty(this, 'status', {
      configurable: true,
      enumerable: false,
      value: status || 500,
      writable: true
    })

    Object.defineProperty(this, 'code', {
      configurable: true,
      enumerable: false,
      value: code,
      writable: true
    })

    if (Error.hasOwnProperty('captureStackTrace')) {
      Error.captureStackTrace(this, this.constructor)
      return
    }

    Object.defineProperty(this, 'stack', {
      configurable: true,
      enumerable: false,
      value: (new Error(message)).stack,
      writable: true
    })
  }
}

module.exports = LogicalException
