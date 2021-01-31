import { page as _page } from '../database/models/page.js';
//import page from '../database/models/page.js';
import verifyToken from '../util/authJwt.js';
import sequelize, { Sequelize } from 'sequelize';

//const _page = require('../database/models/page.js')(sequelize, Sequelize.DataTypes);

const createPage = async (req, res) => {
  try {
    const page = await _page.create(req.body);
    return res.status(201).json({
      page
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const getAllPages = async (req, res) => {
  if (verifyToken) {
    //try {
      console.log("page", _page);
      const pages = await _page.findAll();
      return res.status(200).json({ pages });
    //} catch (error) {
      //return res.status(500).send(error.message);
      //for consistency
    //   return res.status(500).json({error: error.message})
    // }
  } else {
    console.log("It failed to verifyToken");
  }
}

export default {
  createPage,
  getAllPages
}