import { Request, Response } from 'express';
import fs from 'fs';

export const getMarkdown = async (req: Request, res: Response) => {
  const { title } = req.params;
  const result = await fs.readFileSync(`src/pages/${title}/index.md`, 'utf-8');
  await res.status(200).json({ data: result });
};

export const postMarkdown = async (req: Request, res: Response) => {
  const { title } = req.params;
  const { data } = req.body;
  console.log(req.body);
  await fs.readdir(`src/pages/${title}`, async error => {
    if (error) {
      const buffer = Buffer.from(data);
      await fs.mkdirSync(`src/pages/${title}`, { recursive: true });
      await fs.writeFileSync(`src/pages/${title}/index.md`, buffer);
    }
  });
  await res.status(200).json({ data: 'success' });
};

export const patchMarkdown = async (req: Request, res: Response) => {
  const { title } = req.params;
  const { data } = req.body;
  const buffer = Buffer.from(data);
  await fs.writeFile(`src/pages/${title}/index.md`, buffer, 'utf-8', err => {
    if (err) {
      throw new Error('덮어쓰기 에러');
    }
  });
  await res.status(200).json({ data: 'success' });
};
