import { AddBikeMutationResponse, Bike } from './__generated__/resolvers-types';

export class BikesDataSource {
  bikes: { title?: string; author?: string }[] = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

  getBikes(): Bike[] {
    return this.bikes;
  }

  async addBike(bike: Bike): Promise<AddBikeMutationResponse> {
    this.bikes.push(bike);
    console.log(this.bikes);

    return {
      code: '200',
      success: true,
      message: 'New bike added!',
      bike: this.bikes[this.bikes.length - 1],
    };
  }
}
