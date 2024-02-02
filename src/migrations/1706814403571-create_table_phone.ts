import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePhone1706814403571 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE phone{
            id:number not null,
            user_id:number,
            number:string,
            primary key(id),
            foreign key (user_id) references contact(id)
        }

        
    
    
    
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    drop table public.address;
    `);
  }
}
