const postService = require('./service');

module.exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await postService.find();
    return res.json(posts);
  } catch (err) {
    next(err);
  }
};

module.exports.getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id) {
      const post = await postService.findById(parseInt(id));
      return res.json(post);
    } else {
      next(new Error('ID query param is required'));
    }
  } catch (err) {
    next(err);
  }
};

module.exports.createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (title && content) {
      const post = await postService.create(title, content);
      return res.json(post);
    } else {
      next(
        new Error('Title and content are required fileds on the request body')
      );
    }
  } catch (err) {
    next(err);
  }
};

module.exports.updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id) {
      const { title, content } = req.body;
      if (title && content) {
        const post = await postService.update(parseInt(id), title, content);
        return res.json(post);
      } else {
        next(new Error('ID query param is required'));
      }
    } else {
      next(new Error('ID query param is required'));
    }
    const { title, content } = req.body;
  } catch (err) {
    next(err);
  }
};

module.exports.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id) {
      const post = await postService.delete(parseInt(id));
      return res.json(post);
    } else {
      next(new Error('ID query param is required'));
    }
    const { title, content } = req.body;
  } catch (err) {
    next(err);
  }
};
