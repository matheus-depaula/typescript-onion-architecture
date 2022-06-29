export interface IDatabaseConnection<C = unknown> {
  getConnection(): Promise<C>;
  closeConnection(): Promise<void>;
}
