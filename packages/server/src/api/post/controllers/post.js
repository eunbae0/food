"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post");

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async find(ctx) {
    // Calling the default core action
    const { data, meta } = await super.find(ctx);
    const query = strapi.db.query("plugin::users-permissions.user");
    await Promise.all(
      data.map(async (item, index) => {
        const foundItem = await query.findOne({
          where: {
            id: item.attributes.userId,
          },
          populate: ["profileImg"],
        });
        data[index].attributes.username = foundItem.username;
        data[index].attributes.profileImg = {
          formats: "thumbnail",
          url: foundItem.profileImg?.formats.thumbnail.url,
        };
        // data[index].attributes.createdBy = {
        //   id: foundItem.createdBy?.id,
        //   firstname: foundItem.createdBy?.firstname,
        //   lastname: foundItem.createdBy?.lastname,
        // };
        // data[index].attributes.updatedBy = {
        //   id: foundItem.updatedBy?.id,
        //   firstname: foundItem.updatedBy?.firstname,
        //   lastname: foundItem.updatedBy?.lastname,
        // };
      })
    );
    return { data, meta };
  },
}));
