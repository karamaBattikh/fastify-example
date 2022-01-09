import blogsData from '@mockData/blogs';

let blogs = blogsData;

export const getAllBlogs = async () => blogs;

export const getBlog = async (req) => {
  const { id } = req.params;
  return blogs.find((blog) => blog.id === Number(id));
};

export const addBlog = async (req) => {
  const { title } = req.body;
  const id = blogs.length + 1;

  const newBlog = {
    id,
    title,
  };

  blogs.push(newBlog);
  return newBlog;
};

export const updateBlog = async (req) => {
  const { id } = req.params;
  const { title } = req.body;

  blogs = blogs.map((blog) => {
    if (blog.id === Number(id)) {
      return {
        id,
        title,
      };
    }
    return { ...blogs };
  });

  return {
    id,
    title,
  };
};

export const deleteBlog = async (req) => {
  const { id } = req.params;

  blogs = blogs.filter((blog) => blog.id !== Number(id));
  return { msg: `Blog with ID ${id} is deleted` };
};
