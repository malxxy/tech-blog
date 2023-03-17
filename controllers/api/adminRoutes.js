const router = require('express').Router();
const { Admin } = require('../../models');

// POST a blog post
router.post('/', async (req, res) => {
  try {
    const newBlog = await Admin.create({
    //   ...req.body,
    //   
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});


// DELETE a blog post
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Admin.destroy({
      where: {
        id: req.params.id,
        // blog_id: req.session.user_id,
      },
    });

    if (!blog) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;