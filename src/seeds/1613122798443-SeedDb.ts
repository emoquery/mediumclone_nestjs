import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1613122798443 implements MigrationInterface {
  name = 'SeedDb1613122798443';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // tags
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('nodejs'), ('javascript'), ('nestjs') `,
    );

    // user
    await queryRunner.query(
      // pass is 123
      `INSERT INTO users (username, email, password) VALUES ('emoquery', 'emoquery@gmail.com', '$2b$10$axOlM9p/KLob9U8gPBBodOLrzZI0FWSQfJFblXpX9GuQjUr2PuXha')`,
    );

    // article
    await queryRunner.query(
      `INSERT INTO articles (slug,title,description,body, "tagList", "authorId") VALUES ('first-article', 'First article', 'First article description', 'First article body', 'nodejs,javascript', 1), 
      ('second-article', 'Second article', 'Second article description', 'Second article body', 'nodejs,nestjs', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
