import wrapAsync from './util/wrapAsync';
import express from 'express';
import { getMarkdown, patchMarkdown, postMarkdown } from './markdown';

const rootRouter = express();

rootRouter.get('/markdown/:title', wrapAsync(getMarkdown));
rootRouter.post('/markdown/:title', wrapAsync(postMarkdown));
rootRouter.patch('/markdown/:title', wrapAsync(patchMarkdown));

export default rootRouter;
