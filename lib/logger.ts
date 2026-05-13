const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  
  fg: {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  },
};

const getTimestamp = () => {
  return new Date().toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });
};

export const logger = {
  success: (message: string, ...args: any[]) => {
    console.log(`${colors.fg.green}[${getTimestamp()}] ✅ SUCCESS: ${message}${colors.reset}`, ...args);
  },
  error: (message: string, ...args: any[]) => {
    console.error(`${colors.fg.red}[${getTimestamp()}] ❌ ERROR: ${message}${colors.reset}`, ...args);
  },
  info: (message: string, ...args: any[]) => {
    console.log(`${colors.fg.cyan}[${getTimestamp()}] ℹ️ INFO: ${message}${colors.reset}`, ...args);
  },
  warn: (message: string, ...args: any[]) => {
    console.warn(`${colors.fg.yellow}[${getTimestamp()}] ⚠️ WARN: ${message}${colors.reset}`, ...args);
  },
  debug: (message: string, ...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`${colors.dim}[${getTimestamp()}] 🔍 DEBUG: ${message}${colors.reset}`, ...args);
    }
  },
  box: (title: string, message: string) => {
    const line = "═".repeat(60);
    console.log(`\n${colors.fg.magenta}╔${line}╗`);
    console.log(`║ ${colors.bright}${title.padEnd(58)}${colors.reset}${colors.fg.magenta} ║`);
    console.log(`╟${line}╢`);
    console.log(`║ ${message.padEnd(58)} ║`);
    console.log(`╚${line}╝${colors.reset}\n`);
  }
};
