import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import {MockUser} from "../entities/MockUser";
import {Product} from "../entities/Product";

const user = {
    region: '봉천동'
};

const products = [
    {
        name: '삼다수 생수',
        volumeValue: 2,
        volumeUnit: 'L',
        demand: 23,
        priceAsUnit: 980,
        priceAsBatch: 16850,
        batchSize: 24,
        image: 'samdasoo',
    },
    {
        name: '엘라스틴 퍼퓸 퓨어브리즈 샴푸',
        volumeValue: 600,
        volumeUnit: 'ml',
        demand: 10,
        priceAsUnit: 5000,
        priceAsBatch: 49850,
        batchSize: 12,
        image: 'shampoo',
    },
    {
        name: '참그린 주방세제',
        volumeValue: 1,
        volumeUnit: 'kg',
        demand: 4,
        priceAsUnit: 6500,
        priceAsBatch: 34950,
        batchSize: 6,
        image: 'chamgreen',
    },
    {
        name: '2080 치약',
        volumeValue: 150,
        volumeUnit: 'g',
        demand: 35,
        priceAsUnit: 1500,
        priceAsBatch: 36000,
        batchSize: 60,
        image: 'toothpaste',
    },
];

export class MockSeed1592187228796 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const userRepo = getRepository(MockUser);
        const productRepo = getRepository(Product);

        await Promise.all([
            userRepo.insert(user),
            productRepo.insert(products)
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
