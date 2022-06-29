export class ExtendableEntity {
  public readonly id!: number;
  public readonly createdAt!: Date;
  public updatedAt?: Date;

  constructor(data: ExtendableEntity) {
    this.id = data.id;
    this.createdAt = data.createdAt;
    this.updatedAt = data?.updatedAt;
  }
}
