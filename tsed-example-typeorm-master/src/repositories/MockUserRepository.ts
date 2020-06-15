import {EntityRepository, Repository} from "typeorm";
import {MockUser} from "../entities/MockUser";

@EntityRepository(MockUser)
export class MockUserRepository extends Repository<MockUser> {}
