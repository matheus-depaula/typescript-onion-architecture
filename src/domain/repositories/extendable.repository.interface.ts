export interface IExtendableRepository {
  exists(key: string, value: string): Promise<boolean>;
}
