export class Logger {
    private static instance: Logger | null = null;
    private logs: string[] = [];

    private constructor() {}

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
            console.log("Logger instance created.");
        }
        return Logger.instance;
    }

    log(message: string): void {
        const timestamp = new Date().toISOString();
        const entry = `[${timestamp}] INFO: ${message}`;
        this.logs.push(entry);
        console.log(entry);
    }

    warn(message: string): void {
        const timestamp = new Date().toISOString();
        const entry = `[${timestamp}] WARN: ${message}`;
        this.logs.push(entry);
        console.log(entry);
    }

    error(message: string): void {
        const timestamp = new Date().toISOString();
        const entry = `[${timestamp}] ERROR: ${message}`;
        this.logs.push(entry);
        console.log(entry);
    }

    getLogs(): string[] {
        return [...this.logs];
    }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance(); // Returns the same instance

logger1.log("Application started");
logger1.warn("Low memory warning");
logger2.error("Something went wrong");

console.log(`\nSame instance? ${logger1 === logger2}`);
console.log(`\nAll logs (${logger1.getLogs().length} entries):`);
logger1.getLogs().forEach(l => console.log(" -", l));
