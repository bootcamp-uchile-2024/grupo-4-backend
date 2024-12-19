import { createLogger, format, transports } from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

const env = process.env.AMBIENTE || 'Desarrollo';

// Formato común
const commonFormat = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.printf(({ level, message, timestamp }) => `[${timestamp}] ${level.toUpperCase()}: ${message}`)
);

const logger = createLogger({
  level: env === 'Desarrollo' ? 'verbose' : 'info',
  format: commonFormat,
  transports: [
    // Console transport
    new transports.Console({
      format: format.combine(format.colorize(), commonFormat),
    }),
    // File transport (only in production)
    ...(env === 'Produccion'
      ? [
          new DailyRotateFile({
            dirname: '/var/log/app', // Cambia este directorio al volumen de la VM
            filename: 'application-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
          }),
        ]
      : []),
  ],
});

export default logger;