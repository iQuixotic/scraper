var cheerio = require("cheerio");
var request = require("request");
const express = require("express");
// const router = express.Router();


let hold;
console.log("\n******************************************\n" +
    "Amazing Links " +
    "\n******************************************\n");

var site = "https://www.nytimes.com/"
// Making a request for `nhl.com`'s homepage
request(site, function (error, response, html) {

    // Load the body of the HTML into cheerio
    var $ = cheerio.load(html);

    var results = [];

    // target a div that contains information needed for headlines and summaries
    $(".theme-summary").each(function (i, element) {

        // drill in to grab title, summary, and link using cheero
        var title = $(element).children('.story-heading').text();
        var summary = $(element).children('.summary').text();
        // let link = $(element).children().attr('href');

        // only use if all three are available
        if(title && summary){
        results.push({
            title: title,
            summary: summary,
            // link: link
        });
    }
        
        hold=results;
    });
    console.log(results);
});

module.exports = {hold}