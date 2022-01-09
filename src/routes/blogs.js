import * as blogController from '@controllers/blogs';

const getBlogValidation = {
  params: {
    id: { type: 'string' },
  },
  response: {
    200: {
      properties: {
        id: { type: 'integer' },
        title: { type: 'string' },
      },
      type: 'object',
    },
  },
};

const addBlogValidation = {
  body: {
    properties: {
      title: { type: 'string' },
    },
    required: ['title'],
    type: 'object',
  },
  response: {
    200: {
      properties: {
        id: { type: 'integer' },
        title: { type: 'string' },
      },
      type: 'object',
    },
  },
};

const routes = [
  {
    handler: blogController.getBlog,
    method: 'GET',
    schema: getBlogValidation,
    url: '/api/blogs/:id',
  },
  {
    handler: blogController.getAllBlogs,
    method: 'GET',
    url: '/api/blogs',
  },
  {
    handler: blogController.addBlog,
    method: 'POST',
    schema: addBlogValidation,
    url: '/api/blogs',
  },
  {
    handler: blogController.updateBlog,
    method: 'PUT',
    url: '/api/blogs/:id',
  },
  {
    handler: blogController.deleteBlog,
    method: 'DELETE',
    url: '/api/blogs/:id',
  },
];

export default routes;
