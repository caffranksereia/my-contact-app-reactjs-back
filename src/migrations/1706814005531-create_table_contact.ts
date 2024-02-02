import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableContact1706814005531 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE contact{
            user_id:number not null;
            name:string;
            age:string;
            primary key(user_id)
        }

        
    
    
    
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    DROP TABLE contact`);
  }
}
