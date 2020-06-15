import {BodyParams, Controller, Get, PathParams, Post} from "@tsed/common";
import {Returns, ReturnsArray} from "@tsed/swagger";
import {MockUser} from "../../entities/MockUser";
import {MockUserRepository} from "../../repositories/MockUserRepository";

@Controller("/mock")
export class MockUsersCtrl {
  constructor(private mockUserRepository: MockUserRepository) {
  }

  @Get("/")
  @ReturnsArray(MockUser)
  async getList(): Promise<MockUser[]> {
    return this.mockUserRepository.find();
  }
}
