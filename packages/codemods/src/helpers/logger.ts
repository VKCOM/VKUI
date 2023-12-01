class Logger {
  private quiet: boolean;
  queue: string[];
  constructor() {
    this.quiet = false;
    this.queue = [];
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

  addToQueue(message: any) {
    console.log('sddad', message);
    this.queue.push(message);
  }

  getQueue() {
    console.log('hereee', this.queue);
    this.queue.forEach((message) => {
      console.log(message);
      this.info(message);
    });
  }
}

export default new Logger();
