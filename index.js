'use strict'

/**
 * node-exceptions
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const LogicalException = require('./src/LogicalException')

module.exports = {
  LogicalException: LogicalException,
  DomainException: class DomainException extends LogicalException {},
  InvalidArgumentException: class InvalidArgumentException extends LogicalException {},
  RangeException: class RangeException extends LogicalException {},
  RuntimeException: class RuntimeException extends LogicalException {},
  HttpException: class HttpException extends LogicalException {}
}
