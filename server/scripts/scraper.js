
const axios = require('axios');
const cheerio = require("cheerio");
const db = require('../models/index')

const request = require("request");
// const express = require("express");
// const router = express.Router();

function scrape() {


console.log("\n******************************************\n" +
    "Amazing Links " +
    "\n******************************************\n");

var site = "https://www.nytimes.com/"

// Making a request for `nhl.com`'s homepage
return axios.get(site).then(function(res) {

    // Load the body of the HTML into cheerio
    var $ = cheerio.load(res.data);

    var results = [];

    // target a div that contains information needed for headlines and summaries
     $(".theme-summary").each(function (i, element) {

        // drill in to grab title, summary, and link using cheero
        let title = $(element).children('.story-heading').text().trim();
        let summary = $(element).children('.summary').text().trim();
        // let link = $(element).children().attr('href');

        // only use if all three are available
        if(title && summary){
        results.push({
            title: title,
            summary: summary,
            // link: link
        });
    }
        
        
    });
    return results;
});
}

module.exports = scrape;