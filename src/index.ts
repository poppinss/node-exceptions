/**
 * @module main
 */

/**
 * node-exceptions
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

import { BaseException } from './BaseException'

export class LogicalException extends BaseException {}
export class DomainException extends BaseException {}
export class InvalidArgumentException extends BaseException {}
export class RangeException extends BaseException {}
export class RuntimeException extends BaseException {}
export class HttpException extends BaseException {}
