export class Restaurant {
  public rating: number[];
  constructor(
    public name: string,
    public style: string,
    public address: string,
    public cost: number,
    public id: number
  ){}
}
