
const axios = require('axios');
const cheerio = require("cheerio");
const request = require("request");

const db = require('../models/index.js');

scrape = (req, res) => {
    console.log("\n******************************************\n" +
                                 "Amazing Links " +
                "\n******************************************\n");

    let site = "https://www.nytimes.com/"

    // Making an axios request
    return axios.get(site).then(function (res, req) {

        let $ = cheerio.load(res.data);
        let results = [];

        // target an outer div
        $(".theme-summary").each(function (i, element) {

            // drill in to grab title, summary, and link
            let title = $(element).children('.story-heading').text().trim();
            let summary = $(element).children('.summary').text().trim();
            let link = $(element).children().attr('href');
            let bool = false;

            // only use if all three are available
            if (title && summary && link) {
                results.push({
                    title: title,
                    summary: summary,
                    link: link,
                    favoriteList: bool,
                    hasComments: bool
                });
            }

        });
        return results;
    }).catch(function (err) {
        res.json(err);
    });
}

module.exports = scrape;