const fetchUrl = "https://kea-alt-del.dk/twitter/api/?hashtag=kiki";

function init() {
  fetch(fetchUrl)
    .then(result => result.json())
    .then(tweets => displayTweets(tweets));
}

function displayTweets(tweets) {
  console.log(tweets);
  const tweetContainer = document.querySelector("#tweet-container");
  const tweetTemplate = document.querySelector("#tweet-template").content;

  tweets.statuses.forEach(tweet => {
    let clone = tweetTemplate.cloneNode(true);
    clone.querySelector(".tweet-user").textContent = "@" + tweet.user.name;
    clone.querySelector(".tweet-text").textContent = tweet.text;

    tweetContainer.appendChild(clone);
  });
}

init();
