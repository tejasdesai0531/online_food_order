import mongoose from 'mongoose';

interface RestaurantAttrs {
  name: string;
  cousines: [string];
  location: {
    latitude: number,
    longitude: number
  },
  userId: string;
}

interface RestaurantDoc extends mongoose.Document {
  title: string;
  price: number;
  userId: string;
  version: number;
  orderId?: string;
}

interface RestaurantModel extends mongoose.Model<RestaurantDoc> {
  build(attrs: RestaurantAttrs): RestaurantDoc;
}

const restaurantSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    orderId: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

restaurantSchema.statics.build = (attrs: RestaurantAttrs) => {
  return new Restaurant(attrs);
};

const Restaurant = mongoose.model<RestaurantDoc, RestaurantModel>('Restaurant', restaurantSchema);

export { Restaurant };
