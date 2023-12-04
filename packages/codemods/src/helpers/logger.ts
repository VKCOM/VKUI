class Logger {
  private quiet: boolean;

  constructor() {
    this.quiet = false;
  }

  setQuietMode() {
    this.quiet = true;
  }

  log(level: string, message: any) {
    if (this.quiet) {
      return;
    }
    console.log(`[${level}]: `, message, '\n');
  }

  debug(message: any) {
    this.log('debug', message);
  }
  info(message: any) {
    this.log('info', message);
  }
  warn(message: any) {
    this.log('warn', message);
  }
  error(message: any) {
    this.log('error', message);
  }
}

export default new Logger();
