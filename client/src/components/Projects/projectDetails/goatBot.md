Author: **Simon Gohl**  
Repo Link: https://bitbucket.org/sgohl/goatbot

## Intro

"goatBot" is a Slackbot I made for the Computer Science Club Slack workspace. Get a straight yes or no via gif.

## A simple Slack slash command

_goatBot_ is a Slackbot I made for the Computer Science Club Slack workspace. It takes the slash command "/yesorno \[ask a yes or no question\]" and will randomly respond with a gif post to the channel with yes or no context.

goatBot's name derives from my school, St. Edward's University, goat mascot.

Technologies in this project include: Node.js, Express.js, Axios, and dotenv config. A GET request to a RESTful API endpoint (https://yesno.wtf/api) is made to retrieve the gif.

##### Example: **/yesorno will I install this slash command?**

<!-- ![Alt Text](https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif) -->
<img src="https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif" alt="yes-gif" width="75%"/>
<br>
<br>

## Sources

https://api.slack.com/slash-commands

https://github.com/girliemac/slack-httpstatuscats

https://www.youtube.com/watch?v=nyyXTIL3Hkw&t=854s
