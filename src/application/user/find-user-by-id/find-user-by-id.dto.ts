export class FindUserByIdDto {
  public readonly id!: number;

  constructor(dto: FindUserByIdDto) {
    Object.assign(this, dto);
  }
}
