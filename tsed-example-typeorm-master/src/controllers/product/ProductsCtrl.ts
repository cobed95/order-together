import {BodyParams, Controller, Get, PathParams, Post} from "@tsed/common";
import {Returns, ReturnsArray} from "@tsed/swagger";
import {Product} from "../../entities/Product";
import {ProductRepository} from "../../repositories/ProductRepository";

@Controller("/products")
export class ProductsCtrl {
  constructor(private productRepository: ProductRepository) {
  }

  @Get("/")
  @ReturnsArray(Product)
  async getList(): Promise<Product[]> {
    return this.productRepository.find();
  }
}
