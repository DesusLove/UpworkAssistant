const DEBUG_MODE = process.env.NODE_ENV === 'development';
console.warn('[Upwork Assistant] Node Environment:', process.env.NODE_ENV,  DEBUG_MODE);

export class Logger {
  static log(...args: any[]): void {
    if (DEBUG_MODE) {
      console.log('[Upwork Assistant]', ...args);
    }
  }

  static info(...args: any[]): void {
    if (DEBUG_MODE) {
      console.info('[Upwork Assistant]', ...args);
    }
  }

  static warn(...args: any[]): void {
    if (DEBUG_MODE) {
      console.warn('[Upwork Assistant]', ...args);
    }
  }

  static error(...args: any[]): void {
    if (DEBUG_MODE) {
      console.error('[Upwork Assistant]', ...args);
    }
  }

  static debug(...args: any[]): void {
    if (DEBUG_MODE) {
      console.debug('[Upwork Assistant]', ...args);
    }
  }
}

export default Logger;
